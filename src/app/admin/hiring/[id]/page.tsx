import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import HiringFormClient from "./HiringFormClient";

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
    const payload: Record<string, unknown> = {
      title:       formData.get("title") as string,
      department:  formData.get("department") as string,
      location:    formData.get("location") as string,
      type:        formData.get("type") as string,
      experience:  (formData.get("experience") as string) || null,
      description: formData.get("description") as string,
      requirements:(formData.get("requirements") as string).split("\n").map(r => r.trim()).filter(Boolean),
      tags:        (formData.get("tags") as string).split(",").map(t => t.trim()).filter(Boolean),
      is_active:   formData.get("is_active") === "on",
    };

    // Optional new fields
    const salaryRaw = (formData.get("salary_range") as string)?.trim();
    if (salaryRaw) payload.salary_range = salaryRaw;

    const benefitsRaw = (formData.get("benefits") as string)?.trim();
    payload.benefits = benefitsRaw
      ? benefitsRaw.split("\n").map(b => b.trim()).filter(Boolean)
      : null;

    if (isNew) {
      const { error } = await admin.from("hiring").insert(payload);
      if (error) { console.error("Hiring insert error:", error.message); throw new Error(error.message); }
    } else {
      const { error } = await admin.from("hiring").update(payload).eq("id", id);
      if (error) { console.error("Hiring update error:", error.message); throw new Error(error.message); }
    }
    redirect("/admin/hiring");
  }

  return <HiringFormClient role={role} isNew={isNew} saveAction={save} />;
}
