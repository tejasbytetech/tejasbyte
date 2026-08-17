import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const memberId = formData.get("memberId") as string;

    if (!file || !memberId) {
      return NextResponse.json({ error: "File and memberId required" }, { status: 400 });
    }

    const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
    const fileName = `${memberId}.${ext}`;
    const buffer = await file.arrayBuffer();

    const admin = createAdminClient();

    // Remove old photo if exists
    await admin.storage.from("team-photos").remove([fileName]);

    // Upload new photo
    const { error: uploadError } = await admin.storage
      .from("team-photos")
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: true,
      });

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    // Get public URL
    const { data } = admin.storage.from("team-photos").getPublicUrl(fileName);
    const publicUrl = data.publicUrl;

    // Update the team member record
    await admin.from("teams").update({ photo_url: publicUrl }).eq("id", memberId);

    // Return URL with cache-buster for immediate preview
    return NextResponse.json({ url: `${publicUrl}?v=${Date.now()}` });
  } catch (err) {
    console.error("Photo upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { memberId } = await req.json();
    const admin = createAdminClient();

    // Remove all variants of the file
    const { data: files } = await admin.storage
      .from("team-photos")
      .list("", { search: memberId });

    if (files?.length) {
      await admin.storage.from("team-photos").remove(files.map((f: { name: string }) => f.name));
    }

    await admin.from("teams").update({ photo_url: null }).eq("id", memberId);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
