import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminTeamPage() {
  const supabase = await createClient();
  const { data: members, error } = await supabase
    .from("teams")
    .select("*")
    .order("sort_order");

  return (
    <div style={{ padding: "40px 48px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.02em", marginBottom: 4 }}>Team Members</h1>
          <p style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.5)" }}>{members?.length ?? 0} members total</p>
        </div>
        <Link href="/admin/team/new" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "11px 24px", borderRadius: 10,
          background: "#5B30E8", color: "#fff",
          textDecoration: "none", fontSize: ".875rem", fontWeight: 700,
          boxShadow: "0 4px 16px rgba(91,48,232,0.35)",
        }}>
          ➕ Add Member
        </Link>
      </div>

      {error && (
        <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px", color: "#DC2626", marginBottom: 20, fontSize: ".875rem" }}>
          Error loading team: {error.message}
        </div>
      )}

      <div style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)", borderRadius: 16, overflow: "hidden" }}>
        {/* Table header */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr 120px", padding: "14px 24px", background: "#F7F5FF", borderBottom: "1px solid rgba(91,48,232,0.1)", gap: 16 }}>
          {["Name", "Role", "Founder", "Order", "Actions"].map(h => (
            <span key={h} style={{ fontSize: ".68rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(26,16,53,0.35)" }}>{h}</span>
          ))}
        </div>

        {/* Rows */}
        {(members ?? []).map((m, i) => (
          <div key={m.id} style={{
            display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr 120px",
            padding: "16px 24px", gap: 16, alignItems: "center",
            borderBottom: i < (members?.length ?? 0) - 1 ? "1px solid rgba(91,48,232,0.06)" : "none",
          }}>
            {/* Name */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                background: `linear-gradient(135deg, ${m.accent} 0%, ${m.accent}88 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: ".65rem", fontWeight: 800, color: "#fff",
              }}>{m.initials}</div>
              <div>
                <div style={{ fontSize: ".9rem", fontWeight: 700, color: "#1A1035" }}>{m.name}</div>
                {m.linkedin && <div style={{ fontSize: ".7rem", color: "#5B30E8" }}>Has LinkedIn</div>}
              </div>
            </div>

            <span style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.65)" }}>{m.role}</span>

            <span style={{
              display: "inline-block", padding: "2px 10px", borderRadius: 100,
              background: m.is_founder ? "rgba(91,48,232,0.1)" : "rgba(26,16,53,0.04)",
              color: m.is_founder ? "#5B30E8" : "rgba(26,16,53,0.3)",
              fontSize: ".68rem", fontWeight: 700,
            }}>
              {m.is_founder ? "Yes" : "No"}
            </span>

            <span style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.4)", fontWeight: 600 }}>{m.sort_order}</span>

            <div style={{ display: "flex", gap: 8 }}>
              <Link href={`/admin/team/${m.id}`} style={{
                padding: "6px 14px", borderRadius: 8,
                background: "rgba(91,48,232,0.08)", border: "1px solid rgba(91,48,232,0.15)",
                color: "#5B30E8", textDecoration: "none",
                fontSize: ".75rem", fontWeight: 700,
              }}>Edit</Link>
              <form action={async () => {
                "use server";
                const admin = createAdminClient();
                await admin.from("teams").delete().eq("id", m.id);
                redirect("/admin/team");
              }}>
                <button type="submit" style={{
                  padding: "6px 14px", borderRadius: 8,
                  background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)",
                  color: "#DC2626", cursor: "pointer",
                  fontSize: ".75rem", fontWeight: 700,
                }}>Delete</button>
              </form>
            </div>
          </div>
        ))}

        {(!members || members.length === 0) && (
          <div style={{ padding: "48px", textAlign: "center", color: "rgba(26,16,53,0.35)", fontSize: ".875rem" }}>
            No team members yet.{" "}
            <Link href="/admin/team/new" style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>Add the first one →</Link>
          </div>
        )}
      </div>
    </div>
  );
}
