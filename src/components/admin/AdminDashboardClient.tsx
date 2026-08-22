"use client";
import Link from "next/link";

interface Props {
  teamCount: number;
  hiringCount: number;
  userEmail: string;
}

export default function AdminDashboardClient({ teamCount, hiringCount, userEmail }: Props) {
  const stats = [
    { label: "Team Members", value: teamCount,  icon: "👥", href: "/admin/team",   color: "#5B30E8" },
    { label: "Open Roles",   value: hiringCount, icon: "💼", href: "/admin/hiring", color: "#7C5CFC" },
    { label: "Live Pages",   value: 8,           icon: "🌐", href: "/",             color: "#A78BFA" },
  ];

  const actions = [
    { label: "Add Team Member", href: "/admin/team/new",   icon: "➕" },
    { label: "Post a Job",      href: "/admin/hiring/new", icon: "📝" },
    { label: "View Team Page",  href: "/team",             icon: "👁️" },
    { label: "View Careers",    href: "/careers",          icon: "💼" },
  ];

  return (
    <div style={{ padding: "24px 20px" }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.02em", marginBottom: 5 }}>
          Dashboard
        </h1>
        <p style={{ fontSize: ".88rem", color: "rgba(26,16,53,0.5)" }}>
          Welcome back, <strong style={{ color: "#1A1035" }}>{userEmail}</strong>
        </p>
      </div>

      {/* Stat cards */}
      <div className="admin-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 28 }}>
        {stats.map(s => (
          <Link key={s.label} href={s.href} style={{ textDecoration: "none" }}>
            <div
              style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)", borderRadius: 14, padding: "22px 20px", transition: "border-color .2s, box-shadow .2s, transform .2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${s.color}45`; el.style.boxShadow = `0 10px 32px ${s.color}12`; el.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(91,48,232,0.1)"; el.style.boxShadow = "none"; el.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "1.4rem", marginBottom: 10 }}>{s.icon}</div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: s.color, lineHeight: 1, marginBottom: 5 }}>{s.value}</div>
              <div style={{ fontSize: ".82rem", fontWeight: 600, color: "#1A1035" }}>{s.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)", borderRadius: 14, padding: "22px 20px" }}>
        <h2 style={{ fontSize: ".95rem", fontWeight: 800, color: "#1A1035", marginBottom: 16 }}>Quick Actions</h2>
        <div className="admin-actions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
          {actions.map(a => (
            <Link key={a.label} href={a.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 16px", borderRadius: 10, background: "rgba(91,48,232,0.06)", border: "1.5px solid rgba(91,48,232,0.15)", color: "#5B30E8", textDecoration: "none", fontSize: ".85rem", fontWeight: 700, transition: "all .2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(91,48,232,0.12)"; el.style.borderColor = "#5B30E8"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(91,48,232,0.06)"; el.style.borderColor = "rgba(91,48,232,0.15)"; }}
            >
              <span>{a.icon}</span> {a.label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .admin-stats-grid   { grid-template-columns: repeat(2,1fr) !important; }
          .admin-actions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
