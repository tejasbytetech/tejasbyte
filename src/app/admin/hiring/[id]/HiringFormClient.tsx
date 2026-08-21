"use client";
import { useTransition, useRef, useState } from "react";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";

interface Role {
  id?: string;
  title?: string;
  department?: string;
  location?: string;
  type?: string;
  experience?: string;
  description?: string;
  requirements?: string[];
  tags?: string[];
  salary_range?: string | null;
  benefits?: string[] | null;
  is_active?: boolean;
}

interface Props {
  role: Role | null;
  isNew: boolean;
  saveAction: (formData: FormData) => Promise<void>;
}

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
  transition: "border-color .2s, box-shadow .2s",
  boxSizing: "border-box",
};

function Field({ label, name, defaultValue, required, placeholder, textarea, type = "text", rows = 4, hint }: {
  label: string; name: string; defaultValue?: string; required?: boolean;
  placeholder?: string; textarea?: boolean; type?: string; rows?: number; hint?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      {label && <label style={lbl}>{label}{required && <span style={{ color: "#EF4444", marginLeft: 3 }}>*</span>}</label>}
      {textarea ? (
        <textarea name={name} defaultValue={defaultValue} required={required} placeholder={placeholder} rows={rows}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...inputBase, resize: "vertical", borderColor: focused ? "#5B30E8" : "rgba(91,48,232,0.15)", boxShadow: focused ? "0 0 0 3px rgba(91,48,232,0.08)" : "none" }} />
      ) : (
        <input type={type} name={name} defaultValue={defaultValue} required={required} placeholder={placeholder}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...inputBase, borderColor: focused ? "#5B30E8" : "rgba(91,48,232,0.15)", boxShadow: focused ? "0 0 0 3px rgba(91,48,232,0.08)" : "none" }} />
      )}
      {hint && <p style={{ fontSize: ".72rem", color: "rgba(26,16,53,0.35)", marginTop: 5 }}>{hint}</p>}
    </div>
  );
}

function Select({ label, name, defaultValue, options }: { label: string; name: string; defaultValue?: string; options: string[] }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={lbl}>{label}</label>
      <select name={name} defaultValue={defaultValue}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ ...inputBase, cursor: "pointer", borderColor: focused ? "#5B30E8" : "rgba(91,48,232,0.15)", boxShadow: focused ? "0 0 0 3px rgba(91,48,232,0.08)" : "none" }}>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function HiringFormClient({ role: r, isNew, saveAction }: Props) {
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors([]);
    const fd = new FormData(formRef.current!);

    // Client-side validation
    const errs: string[] = [];
    if (!(fd.get("title") as string)?.trim()) errs.push("Job title is required");
    if (!(fd.get("description") as string)?.trim() || (fd.get("description") as string) === "<p></p>") errs.push("Job description is required");
    if (errs.length) { setErrors(errs); return; }

    startTransition(async () => {
      try {
        await saveAction(fd);
        setSaved(true);
      } catch (err: unknown) {
        setErrors([(err as Error).message ?? "Failed to save. Please try again."]);
      }
    });
  }

  return (
    <div style={{ padding: "40px 48px", maxWidth: 800 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
        <Link href="/admin/hiring" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          color: "#5B30E8", textDecoration: "none", fontSize: ".85rem", fontWeight: 600,
          padding: "6px 12px", borderRadius: 8, background: "rgba(91,48,232,0.06)",
          transition: "background .2s",
        }}>← Back</Link>
        <h1 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.02em" }}>
          {isNew ? "Post a New Role" : `Edit: ${r?.title}`}
        </h1>
        {!isNew && (
          <span style={{
            marginLeft: "auto", padding: "4px 12px", borderRadius: 100,
            background: r?.is_active ? "rgba(34,197,94,0.1)" : "rgba(107,114,128,0.1)",
            color: r?.is_active ? "#16A34A" : "#6B7280",
            fontSize: ".72rem", fontWeight: 700,
          }}>
            {r?.is_active ? "● Active" : "○ Inactive"}
          </span>
        )}
      </div>

      {/* Error banner */}
      {errors.length > 0 && (
        <div style={{ background: "rgba(239,68,68,0.07)", border: "1.5px solid rgba(239,68,68,0.25)", borderRadius: 10, padding: "14px 18px", marginBottom: 24 }}>
          {errors.map((e, i) => (
            <p key={i} style={{ fontSize: ".875rem", color: "#DC2626", margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
              <span>⚠️</span> {e}
            </p>
          ))}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>

        {/* Section: Basic Info */}
        <SectionCard title="Basic Information" icon="📋">
          <Field label="Job Title" name="title" required defaultValue={r?.title} placeholder="e.g. Senior Frontend Engineer" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <Select label="Department" name="department" defaultValue={r?.department ?? "Engineering"}
              options={["Engineering", "Design", "Product", "Operations", "Marketing", "Legal"]} />
            <Select label="Employment Type" name="type" defaultValue={r?.type ?? "Full-time"}
              options={["Full-time", "Part-time", "Contract", "Internship", "Freelance"]} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <Field label="Location" name="location" defaultValue={r?.location ?? "Remote / Kathmandu, Nepal"} placeholder="Remote / Kathmandu, Nepal" />
            <Field label="Experience Required" name="experience" defaultValue={r?.experience} placeholder="e.g. 3–5 years" />
          </div>

          <Field label="Salary Range" name="salary_range" defaultValue={r?.salary_range ?? ""} placeholder="e.g. $60k–$90k · Negotiable · Competitive" hint="Optional — leave blank to show 'Competitive'" />
        </SectionCard>

        {/* Section: Description */}
        <SectionCard title="Job Description" icon="📝">
          <div>
            <label style={lbl}>Description <span style={{ color: "#EF4444" }}>*</span></label>
            <RichTextEditor name="description" defaultValue={r?.description ?? ""} placeholder="Describe the role, responsibilities, and what success looks like…" minHeight={220} />
          </div>
        </SectionCard>

        {/* Section: Requirements & Benefits */}
        <SectionCard title="Requirements & Benefits" icon="✅">
          <Field label="Requirements" name="requirements" textarea rows={6}
            defaultValue={r?.requirements?.join("\n")}
            placeholder={"3+ years React experience\nStrong TypeScript skills\nExperience with REST APIs\n…"}
            hint="One requirement per line — displayed as bullet points on /careers" />

          <Field label="Benefits" name="benefits" textarea rows={5}
            defaultValue={r?.benefits?.join("\n")}
            placeholder={"Competitive salary\nRemote-first culture\nFlexible working hours\nAnnual learning budget\n…"}
            hint="One benefit per line — optional, shown as a green tick list on /careers" />
        </SectionCard>

        {/* Section: Tags & Visibility */}
        <SectionCard title="Tags & Visibility" icon="🏷️">
          <Field label="Tags" name="tags" defaultValue={r?.tags?.join(", ")} placeholder="React, TypeScript, Node.js, AWS" hint="Comma-separated — shown as skill pills on the listing" />

          <label style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "14px 16px", background: r?.is_active !== false ? "rgba(34,197,94,0.06)" : "rgba(107,114,128,0.06)", borderRadius: 10, border: `1.5px solid ${r?.is_active !== false ? "rgba(34,197,94,0.2)" : "rgba(107,114,128,0.15)"}` }}>
            <input type="checkbox" name="is_active" defaultChecked={r?.is_active ?? true}
              style={{ width: 18, height: 18, accentColor: "#22C55E", cursor: "pointer", flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: ".875rem", fontWeight: 700, color: "#1A1035" }}>Publish immediately</div>
              <div style={{ fontSize: ".78rem", color: "rgba(26,16,53,0.45)", marginTop: 2 }}>Visible on /careers when checked</div>
            </div>
          </label>
        </SectionCard>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 12, paddingTop: 4 }}>
          <button
            type="submit"
            disabled={isPending}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "13px 32px", borderRadius: 10,
              background: isPending ? "rgba(91,48,232,0.6)" : "#5B30E8",
              color: "#fff", border: "none", cursor: isPending ? "not-allowed" : "pointer",
              fontSize: ".875rem", fontWeight: 700,
              boxShadow: isPending ? "none" : "0 4px 16px rgba(91,48,232,0.35)",
              transition: "all .2s",
            }}
          >
            {isPending ? (
              <>
                <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin .6s linear infinite" }} />
                Saving…
              </>
            ) : saved ? (
              <>✓ Saved!</>
            ) : (
              isNew ? "Post Role →" : "Save Changes →"
            )}
          </button>

          <Link href="/admin/hiring" style={{
            display: "inline-flex", alignItems: "center",
            padding: "13px 24px", borderRadius: 10,
            border: "1.5px solid rgba(91,48,232,0.2)", color: "#5B30E8",
            textDecoration: "none", fontSize: ".875rem", fontWeight: 600,
            transition: "background .2s, border-color .2s",
          }}>Cancel</Link>
        </div>
      </form>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

function SectionCard({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)",
      borderRadius: 16, overflow: "hidden",
    }}>
      <div style={{
        padding: "14px 20px", background: "#F7F5FF",
        borderBottom: "1px solid rgba(91,48,232,0.08)",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <span style={{ fontSize: "1rem" }}>{icon}</span>
        <span style={{ fontSize: ".78rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(26,16,53,0.5)" }}>{title}</span>
      </div>
      <div style={{ padding: "22px 20px", display: "flex", flexDirection: "column", gap: 18 }}>
        {children}
      </div>
    </div>
  );
}
