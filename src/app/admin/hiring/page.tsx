import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminHiringPage() {
  const supabase = await createClient();
  const { data: roles } = await supabase
    .from("hiring")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div style={{ padding: "40px 48px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.02em", marginBottom: 4 }}>Open Roles</h1>
          <p style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.5)" }}>
            {roles?.filter(r => r.is_active).length ?? 0} active · {roles?.length ?? 0} total
          </p>
        </div>
        <Link href="/admin/hiring/new" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "11px 24px", borderRadius: 10,
          background: "#5B30E8", color: "#fff",
          textDecoration: "none", fontSize: ".875rem", fontWeight: 700,
          boxShadow: "0 4px 16px rgba(91,48,232,0.35)",
        }}>
          ➕ Post a Role
        </Link>
      </div>

      <div style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)", borderRadius: 16, overflow: "hidden" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr 150px", padding: "14px 24px", background: "#F7F5FF", borderBottom: "1px solid rgba(91,48,232,0.1)", gap: 16 }}>
          {["Title", "Department", "Type", "Experience", "Status", "Actions"].map(h => (
            <span key={h} style={{ fontSize: ".68rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(26,16,53,0.35)" }}>{h}</span>
          ))}
        </div>

        {(roles ?? []).map((r, i) => (
          <div key={r.id} style={{
            display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr 150px",
            padding: "16px 24px", gap: 16, alignItems: "center",
            borderBottom: i < (roles?.length ?? 0) - 1 ? "1px solid rgba(91,48,232,0.06)" : "none",
          }}>
            <div>
              <div style={{ fontSize: ".9rem", fontWeight: 700, color: "#1A1035" }}>{r.title}</div>
              <div style={{ fontSize: ".72rem", color: "rgba(26,16,53,0.4)", marginTop: 2 }}>{r.location}</div>
            </div>

            <span style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.65)" }}>{r.department}</span>

            <span style={{ fontSize: ".78rem", padding: "3px 10px", borderRadius: 100, background: "rgba(91,48,232,0.08)", color: "#5B30E8", fontWeight: 600, display: "inline-block" }}>
              {r.type}
            </span>

            <span style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.5)" }}>{r.experience}</span>

            {/* Status toggle */}
            <form action={async () => {
              "use server";
              const admin = createAdminClient();
              await admin.from("hiring").update({ is_active: !r.is_active }).eq("id", r.id);
              redirect("/admin/hiring");
            }}>
              <button type="submit" style={{
                padding: "4px 12px", borderRadius: 100, border: "none", cursor: "pointer",
                fontSize: ".72rem", fontWeight: 700,
                background: r.is_active ? "rgba(34,197,94,0.1)" : "rgba(107,114,128,0.1)",
                color: r.is_active ? "#16A34A" : "#6B7280",
              }}>
                {r.is_active ? "● Active" : "○ Inactive"}
              </button>
            </form>

            <div style={{ display: "flex", gap: 8 }}>
              <Link href={`/admin/hiring/${r.id}`} style={{
                padding: "6px 14px", borderRadius: 8,
                background: "rgba(91,48,232,0.08)", border: "1px solid rgba(91,48,232,0.15)",
                color: "#5B30E8", textDecoration: "none",
                fontSize: ".75rem", fontWeight: 700,
              }}>Edit</Link>
              <form action={async () => {
                "use server";
                const admin = createAdminClient();
                await admin.from("hiring").delete().eq("id", r.id);
                redirect("/admin/hiring");
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

        {(!roles || roles.length === 0) && (
          <div style={{ padding: "48px", textAlign: "center", color: "rgba(26,16,53,0.35)", fontSize: ".875rem" }}>
            No open roles yet.{" "}
            <Link href="/admin/hiring/new" style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>Post the first one →</Link>
          </div>
        )}
      </div>
    </div>
  );
}
