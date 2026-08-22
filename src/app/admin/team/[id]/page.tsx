import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import PhotoUpload from "@/components/admin/PhotoUpload";
import TeamFormSubmitBtn from "./TeamFormSubmitBtn";
import AccentPicker from "./AccentPicker";

interface Props { params: Promise<{ id: string }> }

export default async function TeamFormPage({ params }: Props) {
  const { id } = await params;
  const isNew = id === "new";
  const supabase = await createClient();

  let member = null;
  if (!isNew) {
    const { data } = await supabase.from("teams").select("*").eq("id", id).single();
    member = data;
    if (!member) redirect("/admin/team");
  }

  async function save(formData: FormData) {
    "use server";
    // Debug: verify service role key is loading
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set in environment");
    }
    const admin = createAdminClient();

    // Accent comes from the AccentPicker hidden input
    const accent = (formData.get("accent") as string)?.trim() || "#5B30E8";

    const socialRaw = formData.get("social_urls") as string;
    const payload = {
      name:           formData.get("name") as string,
      role:           formData.get("role") as string,
      bio:            formData.get("bio") as string,
      initials:       (formData.get("initials") as string)?.trim(),
      accent:         accent || "#5B30E8",
      tags:           (formData.get("tags") as string || "").split(",").map(t => t.trim()).filter(Boolean),
      linkedin:       (formData.get("linkedin") as string) || null,
      social_urls:    socialRaw ? socialRaw.split(",").map(u => u.trim()).filter(u => u.startsWith("http")) : [],
      is_founder:     formData.get("is_founder") === "on",
      is_placeholder: formData.get("is_placeholder") === "on",
      sort_order:     parseInt(formData.get("sort_order") as string) || 0,
    };

    if (isNew) {
      const { error } = await admin.from("teams").insert(payload);
      if (error) {
        console.error("Insert error:", error.message, error.details);
        throw new Error(error.message);
      }
    } else {
      const { error } = await admin.from("teams").update(payload).eq("id", id);
      if (error) {
        console.error("Update error:", error.message, error.details);
        throw new Error(error.message);
      }
    }
    redirect("/admin/team");
  }

  const m = member;

  return (
    <div className="admin-form-page" style={{ padding: "24px 20px", maxWidth: 720 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        <Link href="/admin/team" style={{ color: "#5B30E8", textDecoration: "none", fontSize: ".85rem", fontWeight: 600 }}>← Back</Link>
        <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.02em" }}>
          {isNew ? "Add Team Member" : `Edit: ${m?.name}`}
        </h1>
      </div>

      <form action={save} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="admin-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <Field label="Full Name *" name="name" defaultValue={m?.name} required placeholder="e.g. Keshab Gautam" />
          <Field label="Role / Title *" name="role" defaultValue={m?.role} required placeholder="e.g. CEO & Founder" />
        </div>

        <Field label="Bio *" name="bio" defaultValue={m?.bio} required textarea placeholder="Short professional bio..." />

        <div className="admin-3col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }}>
          <Field label="Initials *" name="initials" defaultValue={m?.initials} required placeholder="KG" maxLength={4} />
          <AccentPicker defaultValue={m?.accent ?? "#5B30E8"} />
          <Field label="Sort Order" name="sort_order" defaultValue={m?.sort_order?.toString() ?? "0"} type="number" placeholder="0" />
        </div>

        <Field label="Tags (comma-separated)" name="tags" defaultValue={m?.tags?.join(", ")} placeholder="React, Node.js, TypeScript" />
        <Field label="LinkedIn URL" name="linkedin" defaultValue={m?.linkedin ?? ""} placeholder="https://linkedin.com/in/..." type="url" />

        {/* Photo upload — only shown when editing existing member */}
        {!isNew && m && (
          <PhotoUpload
            memberId={m.id}
            currentUrl={(m as any).photo_url ?? null}
            name={m.name}
            initials={m.initials}
            accent={m.accent ?? "#5B30E8"}
          />
        )}
        {isNew && (
          <div style={{ background: "#F7F5FF", border: "1px solid rgba(91,48,232,0.15)", borderRadius: 10, padding: "14px 18px", fontSize: ".82rem", color: "rgba(26,16,53,0.45)" }}>
            💡 Save the member first, then come back to upload a photo.
          </div>
        )}

        <div>
          <label style={lbl}>Other Social / Profile URLs <span style={{ fontSize: ".68rem", color: "rgba(26,16,53,0.35)", textTransform: "none", letterSpacing: 0 }}>(comma-separated — auto-detects platform)</span></label>
          <Field label="" name="social_urls" defaultValue={(m as any)?.social_urls?.join(", ") ?? ""}
            placeholder="https://github.com/username, https://twitter.com/handle, https://yoursite.com" />
          <p style={{ fontSize: ".72rem", color: "rgba(26,16,53,0.35)", marginTop: 6 }}>
            Supports: GitHub, Twitter/X, Instagram, Facebook, YouTube, Dribbble, Behance, WhatsApp, or any URL
          </p>
        </div>

        <div style={{ display: "flex", gap: 32 }}>
          <Checkbox label="Co-founder / Founder" name="is_founder" defaultChecked={m?.is_founder} />
          <Checkbox label="Placeholder (open role)" name="is_placeholder" defaultChecked={m?.is_placeholder} />
        </div>

        <div style={{ display: "flex", gap: 12, paddingTop: 8 }}>
          <TeamFormSubmitBtn isNew={isNew} />
          <Link href="/admin/team" style={{
            display: "inline-flex", alignItems: "center",
            padding: "12px 24px", borderRadius: 10,
            border: "1.5px solid rgba(91,48,232,0.2)", color: "#5B30E8",
            textDecoration: "none", fontSize: ".875rem", fontWeight: 600,
          }}>Cancel</Link>
        </div>
      </form>

      <style>{`
        @media (max-width: 600px) {
          .admin-form-page { padding: 16px 14px !important; }
          .admin-2col { grid-template-columns: 1fr !important; gap: 12px !important; }
          .admin-3col { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  );
}

// Shared field component
const lbl: React.CSSProperties = {
  display: "block", fontSize: ".72rem", fontWeight: 700,
  letterSpacing: ".08em", textTransform: "uppercase",
  color: "rgba(26,16,53,0.4)", marginBottom: 8,
};

const inputBase: React.CSSProperties = {
  width: "100%", padding: "11px 14px",
  background: "#F7F5FF", border: "1.5px solid rgba(91,48,232,0.15)",
  borderRadius: 10, color: "#1A1035",
  fontSize: ".875rem", outline: "none",
  transition: "border-color .2s",
  boxSizing: "border-box",
};

function Field({ label, name, defaultValue, required, placeholder, textarea, type = "text", maxLength, style }: {
  label: string; name: string; defaultValue?: string; required?: boolean;
  placeholder?: string; textarea?: boolean; type?: string; maxLength?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ ...style }}>
      {label && <label style={lbl}>{label}</label>}
      {textarea ? (
        <textarea name={name} defaultValue={defaultValue} required={required} placeholder={placeholder} rows={4}
          style={{ ...inputBase, resize: "vertical" }} />
      ) : (
        <input type={type} name={name} defaultValue={defaultValue} required={required}
          placeholder={placeholder} maxLength={maxLength}
          style={inputBase} />
      )}
    </div>
  );
}

function Checkbox({ label, name, defaultChecked }: { label: string; name: string; defaultChecked?: boolean }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: ".875rem", fontWeight: 600, color: "#1A1035" }}>
      <input type="checkbox" name={name} defaultChecked={defaultChecked}
        style={{ width: 18, height: 18, accentColor: "#5B30E8", cursor: "pointer" }} />
      {label}
    </label>
  );
}
