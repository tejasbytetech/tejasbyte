import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteMemberBtn from "./DeleteMemberBtn";

export default async function AdminTeamPage() {
  const supabase = await createClient();
  const { data: members, error } = await supabase
    .from("teams")
    .select("*")
    .order("sort_order");

  const accent = (m: { accent?: string | null }) => m.accent || "#5B30E8";

  return (
    <div style={{ padding: "24px 20px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.02em", marginBottom: 3 }}>Team Members</h1>
          <p style={{ fontSize: ".82rem", color: "rgba(26,16,53,0.5)" }}>{members?.length ?? 0} members total</p>
        </div>
        <Link href="/admin/team/new" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "10px 20px", borderRadius: 10,
          background: "#5B30E8", color: "#fff",
          textDecoration: "none", fontSize: ".85rem", fontWeight: 700,
          boxShadow: "0 4px 16px rgba(91,48,232,0.35)",
          whiteSpace: "nowrap",
        }}>
          ➕ Add Member
        </Link>
      </div>

      {error && (
        <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px", color: "#DC2626", marginBottom: 16, fontSize: ".875rem" }}>
          Error loading team: {error.message}
        </div>
      )}

      {/* ── Desktop table ── */}
      <div className="admin-table-wrap" style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)", borderRadius: 16, overflow: "hidden" }}>
        <div className="admin-table-head" style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr 130px", padding: "13px 20px", background: "#F7F5FF", borderBottom: "1px solid rgba(91,48,232,0.1)", gap: 12 }}>
          {["Name", "Role", "Founder", "Order", "Actions"].map(h => (
            <span key={h} style={{ fontSize: ".63rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(26,16,53,0.35)" }}>{h}</span>
          ))}
        </div>

        {(members ?? []).map((m, i) => (
          <div key={m.id} style={{
            display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr 130px",
            padding: "14px 20px", gap: 12, alignItems: "center",
            borderBottom: i < (members?.length ?? 0) - 1 ? "1px solid rgba(91,48,232,0.06)" : "none",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
                background: `linear-gradient(135deg, ${accent(m)} 0%, ${accent(m)}88 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: ".62rem", fontWeight: 800, color: "#fff", overflow: "hidden",
              }}>
                {(m as any).photo_url
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img src={(m as any).photo_url} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : m.initials}
              </div>
              <div>
                <div style={{ fontSize: ".88rem", fontWeight: 700, color: "#1A1035" }}>{m.name}</div>
                {m.linkedin && <div style={{ fontSize: ".68rem", color: "#5B30E8" }}>Has LinkedIn</div>}
              </div>
            </div>

            <span style={{ fontSize: ".85rem", color: "rgba(26,16,53,0.65)" }}>{m.role}</span>

            <span style={{
              display: "inline-block", padding: "2px 10px", borderRadius: 100,
              background: m.is_founder ? "rgba(91,48,232,0.1)" : "rgba(26,16,53,0.04)",
              color: m.is_founder ? "#5B30E8" : "rgba(26,16,53,0.3)",
              fontSize: ".68rem", fontWeight: 700,
            }}>
              {m.is_founder ? "Yes" : "No"}
            </span>

            <span style={{ fontSize: ".85rem", color: "rgba(26,16,53,0.4)", fontWeight: 600 }}>{m.sort_order}</span>

            <div style={{ display: "flex", gap: 7 }}>
              <Link href={`/admin/team/${m.id}`} style={{
                padding: "6px 12px", borderRadius: 8,
                background: "rgba(91,48,232,0.08)", border: "1px solid rgba(91,48,232,0.15)",
                color: "#5B30E8", textDecoration: "none", fontSize: ".75rem", fontWeight: 700,
              }}>Edit</Link>
              <DeleteMemberBtn
                name={m.name}
                deleteAction={async () => {
                  "use server";
                  const admin = createAdminClient();
                  await admin.from("teams").delete().eq("id", m.id);
                  redirect("/admin/team");
                }}
              />
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

      {/* ── Mobile cards ── */}
      <div className="admin-cards-mobile" style={{ display: "none", flexDirection: "column", gap: 12 }}>
        {(members ?? []).map(m => (
          <div key={m.id} style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)", borderRadius: 14, padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
                background: `linear-gradient(135deg, ${accent(m)} 0%, ${accent(m)}88 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: ".75rem", fontWeight: 800, color: "#fff", overflow: "hidden",
              }}>
                {(m as any).photo_url
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img src={(m as any).photo_url} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : m.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: ".95rem", fontWeight: 800, color: "#1A1035" }}>{m.name}</div>
                <div style={{ fontSize: ".78rem", color: "rgba(26,16,53,0.5)" }}>{m.role}</div>
              </div>
              {m.is_founder && (
                <span style={{ padding: "2px 8px", borderRadius: 100, background: "rgba(91,48,232,0.1)", color: "#5B30E8", fontSize: ".65rem", fontWeight: 700, flexShrink: 0 }}>Founder</span>
              )}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <Link href={`/admin/team/${m.id}`} style={{
                flex: 1, textAlign: "center",
                padding: "9px 0", borderRadius: 9,
                background: "rgba(91,48,232,0.08)", border: "1px solid rgba(91,48,232,0.15)",
                color: "#5B30E8", textDecoration: "none", fontSize: ".82rem", fontWeight: 700,
              }}>Edit</Link>
              <DeleteMemberBtn
                name={m.name}
                deleteAction={async () => {
                  "use server";
                  const admin = createAdminClient();
                  await admin.from("teams").delete().eq("id", m.id);
                  redirect("/admin/team");
                }}
              />
            </div>
          </div>
        ))}
        {(!members || members.length === 0) && (
          <div style={{ textAlign: "center", padding: "40px 0", color: "rgba(26,16,53,0.35)", fontSize: ".875rem" }}>
            No team members yet.{" "}
            <Link href="/admin/team/new" style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>Add the first one →</Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .admin-table-wrap   { display: none !important; }
          .admin-cards-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
