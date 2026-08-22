import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteRoleBtn from "./DeleteRoleBtn";

export default async function AdminHiringPage() {
  const supabase = await createClient();
  const { data: roles } = await supabase
    .from("hiring")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div style={{ padding: "24px 20px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.02em", marginBottom: 3 }}>Open Roles</h1>
          <p style={{ fontSize: ".82rem", color: "rgba(26,16,53,0.5)" }}>
            {roles?.filter(r => r.is_active).length ?? 0} active · {roles?.length ?? 0} total
          </p>
        </div>
        <Link href="/admin/hiring/new" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "10px 20px", borderRadius: 10,
          background: "#5B30E8", color: "#fff",
          textDecoration: "none", fontSize: ".85rem", fontWeight: 700,
          boxShadow: "0 4px 16px rgba(91,48,232,0.35)",
          whiteSpace: "nowrap",
        }}>
          ➕ Post a Role
        </Link>
      </div>

      {/* Desktop table */}
      <div className="admin-table-wrap" style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)", borderRadius: 16, overflow: "hidden" }}>
        <div className="admin-table-head" style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr 1fr 1fr 160px", padding: "13px 20px", background: "#F7F5FF", borderBottom: "1px solid rgba(91,48,232,0.1)", gap: 12 }}>
          {["Title", "Department", "Type", "Experience", "Status", "Actions"].map(h => (
            <span key={h} style={{ fontSize: ".63rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(26,16,53,0.35)" }}>{h}</span>
          ))}
        </div>

        {(roles ?? []).map((r, i) => (
          <div key={r.id} className="admin-table-row" style={{
            display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr 1fr 1fr 160px",
            padding: "14px 20px", gap: 12, alignItems: "center",
            borderBottom: i < (roles?.length ?? 0) - 1 ? "1px solid rgba(91,48,232,0.06)" : "none",
          }}>
            <div>
              <div style={{ fontSize: ".88rem", fontWeight: 700, color: "#1A1035" }}>{r.title}</div>
              <div style={{ fontSize: ".7rem", color: "rgba(26,16,53,0.4)", marginTop: 2 }}>{r.location}</div>
            </div>
            <span style={{ fontSize: ".82rem", color: "rgba(26,16,53,0.65)" }}>{r.department}</span>
            <span style={{ fontSize: ".75rem", padding: "3px 10px", borderRadius: 100, background: "rgba(91,48,232,0.08)", color: "#5B30E8", fontWeight: 600, display: "inline-block", whiteSpace: "nowrap" }}>
              {r.type}
            </span>
            <span style={{ fontSize: ".82rem", color: "rgba(26,16,53,0.5)" }}>{r.experience}</span>

            {/* Status toggle */}
            <form action={async () => {
              "use server";
              const admin = createAdminClient();
              await admin.from("hiring").update({ is_active: !r.is_active }).eq("id", r.id);
              redirect("/admin/hiring");
            }}>
              <button type="submit" style={{
                padding: "4px 12px", borderRadius: 100, border: "none", cursor: "pointer",
                fontSize: ".7rem", fontWeight: 700, whiteSpace: "nowrap",
                background: r.is_active ? "rgba(34,197,94,0.1)" : "rgba(107,114,128,0.1)",
                color: r.is_active ? "#16A34A" : "#6B7280",
              }}>
                {r.is_active ? "● Active" : "○ Inactive"}
              </button>
            </form>

            <div style={{ display: "flex", gap: 7 }}>
              <Link href={`/admin/hiring/${r.id}`} style={{
                padding: "6px 12px", borderRadius: 8,
                background: "rgba(91,48,232,0.08)", border: "1px solid rgba(91,48,232,0.15)",
                color: "#5B30E8", textDecoration: "none",
                fontSize: ".75rem", fontWeight: 700, whiteSpace: "nowrap",
              }}>Edit</Link>
              <DeleteRoleBtn
                title={r.title}
                deleteAction={async () => {
                  "use server";
                  const admin = createAdminClient();
                  await admin.from("hiring").delete().eq("id", r.id);
                  redirect("/admin/hiring");
                }}
              />
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

      {/* Mobile cards — shown on small screens */}
      <div className="admin-cards-mobile" style={{ display: "none", flexDirection: "column", gap: 12 }}>
        {(roles ?? []).map(r => (
          <div key={r.id} style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)", borderRadius: 14, padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 10 }}>
              <div>
                <div style={{ fontSize: ".95rem", fontWeight: 800, color: "#1A1035", marginBottom: 3 }}>{r.title}</div>
                <div style={{ fontSize: ".72rem", color: "rgba(26,16,53,0.4)" }}>{r.location}</div>
              </div>
              <span style={{
                padding: "3px 10px", borderRadius: 100, fontSize: ".68rem", fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0,
                background: r.is_active ? "rgba(34,197,94,0.1)" : "rgba(107,114,128,0.1)",
                color: r.is_active ? "#16A34A" : "#6B7280",
              }}>
                {r.is_active ? "● Active" : "○ Inactive"}
              </span>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
              <span style={{ padding: "2px 8px", borderRadius: 100, background: "rgba(91,48,232,0.08)", color: "#5B30E8", fontSize: ".7rem", fontWeight: 600 }}>{r.department}</span>
              <span style={{ padding: "2px 8px", borderRadius: 100, background: "rgba(91,48,232,0.06)", color: "#5B30E8", fontSize: ".7rem", fontWeight: 600 }}>{r.type}</span>
              {r.experience && <span style={{ padding: "2px 8px", borderRadius: 100, background: "rgba(26,16,53,0.05)", color: "rgba(26,16,53,0.5)", fontSize: ".7rem" }}>{r.experience}</span>}
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <form style={{ flex: 1 }} action={async () => {
                "use server";
                const admin = createAdminClient();
                await admin.from("hiring").update({ is_active: !r.is_active }).eq("id", r.id);
                redirect("/admin/hiring");
              }}>
                <button type="submit" style={{ width: "100%", padding: "8px", borderRadius: 8, border: "1px solid rgba(91,48,232,0.2)", background: "transparent", color: "#5B30E8", fontSize: ".78rem", fontWeight: 700, cursor: "pointer" }}>
                  Toggle Status
                </button>
              </form>
              <Link href={`/admin/hiring/${r.id}`} style={{ padding: "8px 14px", borderRadius: 8, background: "rgba(91,48,232,0.08)", border: "1px solid rgba(91,48,232,0.15)", color: "#5B30E8", textDecoration: "none", fontSize: ".78rem", fontWeight: 700 }}>Edit</Link>
              <DeleteRoleBtn
                title={r.title}
                deleteAction={async () => {
                  "use server";
                  const admin = createAdminClient();
                  await admin.from("hiring").delete().eq("id", r.id);
                  redirect("/admin/hiring");
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .admin-table-wrap  { display: none !important; }
          .admin-cards-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
