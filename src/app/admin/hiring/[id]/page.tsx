import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

interface Props { params: Promise<{ id: string }> }

export default async function HiringFormPage({ params }: Props) {
  const { id } = await params;
  const isNew = id === "new";
  const supabase = await createClient();

  let role = null;
  if (!isNew) {
    const { data } = await supabase.from("hiring").select("*").eq("id", id).single();
    role = data;
    if (!role) redirect("/admin/hiring");
  }

  async function save(formData: FormData) {
    "use server";
    const admin = createAdminClient();
    const payload = {
      title:        formData.get("title") as string,
      department:   formData.get("department") as string,
      location:     formData.get("location") as string,
      type:         formData.get("type") as string,
      experience:   formData.get("experience") as string,
      description:  formData.get("description") as string,
      requirements: (formData.get("requirements") as string).split("\n").map(r => r.trim()).filter(Boolean),
      tags:         (formData.get("tags") as string).split(",").map(t => t.trim()).filter(Boolean),
      is_active:    formData.get("is_active") === "on",
    };

    if (isNew) {
      await admin.from("hiring").insert(payload);
    } else {
      await admin.from("hiring").update(payload).eq("id", id);
    }
    redirect("/admin/hiring");
  }

  const r = role;

  const lbl: React.CSSProperties = {
    display: "block", fontSize: ".72rem", fontWeight: 700,
    letterSpacing: ".08em", textTransform: "uppercase",
    color: "rgba(26,16,53,0.4)", marginBottom: 8,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px",
    background: "#F7F5FF", border: "1.5px solid rgba(91,48,232,0.15)",
    borderRadius: 10, color: "#1A1035",
    fontSize: ".875rem", outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div style={{ padding: "40px 48px", maxWidth: 760 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
        <Link href="/admin/hiring" style={{ color: "#5B30E8", textDecoration: "none", fontSize: ".85rem", fontWeight: 600 }}>← Back</Link>
        <h1 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.02em" }}>
          {isNew ? "Post a Role" : `Edit: ${r?.title}`}
        </h1>
      </div>

      <form action={save} style={{ display: "flex", flexDirection: "column", gap: 22 }}>

        {/* Row 1 */}
        <div>
          <label style={lbl}>Job Title *</label>
          <input name="title" required defaultValue={r?.title} placeholder="e.g. Senior Frontend Engineer" style={inputStyle} />
        </div>

        {/* Row 2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={lbl}>Department</label>
            <select name="department" defaultValue={r?.department ?? "Engineering"} style={inputStyle}>
              <option>Engineering</option>
              <option>Design</option>
              <option>Product</option>
              <option>Operations</option>
              <option>Legal</option>
            </select>
          </div>
          <div>
            <label style={lbl}>Employment Type</label>
            <select name="type" defaultValue={r?.type ?? "Full-time"} style={inputStyle}>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={lbl}>Location</label>
            <input name="location" defaultValue={r?.location ?? "Remote / Kathmandu, Nepal"} style={inputStyle} />
          </div>
          <div>
            <label style={lbl}>Experience Required</label>
            <input name="experience" defaultValue={r?.experience} placeholder="e.g. 3–5 years" style={inputStyle} />
          </div>
        </div>

        {/* Description */}
        <div>
          <label style={lbl}>Job Description *</label>
          <textarea name="description" required rows={5} defaultValue={r?.description}
            placeholder="Describe the role, responsibilities, and what success looks like..."
            style={{ ...inputStyle, resize: "vertical" }} />
        </div>

        {/* Requirements */}
        <div>
          <label style={lbl}>Requirements (one per line)</label>
          <textarea name="requirements" rows={5} defaultValue={r?.requirements?.join("\n")}
            placeholder={"3+ years React experience\nStrong TypeScript skills\n..."}
            style={{ ...inputStyle, resize: "vertical" }} />
        </div>

        {/* Tags */}
        <div>
          <label style={lbl}>Tags (comma-separated)</label>
          <input name="tags" defaultValue={r?.tags?.join(", ")} placeholder="React, TypeScript, Next.js" style={inputStyle} />
        </div>

        {/* Active toggle */}
        <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: ".875rem", fontWeight: 600, color: "#1A1035" }}>
          <input type="checkbox" name="is_active" defaultChecked={r?.is_active ?? true}
            style={{ width: 18, height: 18, accentColor: "#5B30E8", cursor: "pointer" }} />
          Publish immediately (visible on /careers)
        </label>

        <div style={{ display: "flex", gap: 12, paddingTop: 8 }}>
          <button type="submit" style={{
            padding: "12px 32px", borderRadius: 10,
            background: "#5B30E8", color: "#fff", border: "none",
            fontSize: ".875rem", fontWeight: 700, cursor: "pointer",
            boxShadow: "0 4px 16px rgba(91,48,232,0.35)",
          }}>
            {isNew ? "Post Role" : "Save Changes"}
          </button>
          <Link href="/admin/hiring" style={{
            padding: "12px 24px", borderRadius: 10,
            border: "1.5px solid rgba(91,48,232,0.2)", color: "#5B30E8",
            textDecoration: "none", fontSize: ".875rem", fontWeight: 600,
          }}>Cancel</Link>
        </div>
      </form>
    </div>
  );
}
