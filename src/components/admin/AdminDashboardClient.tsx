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
    <div style={{ padding: "40px 48px" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.02em", marginBottom: 6 }}>
          Dashboard
        </h1>
        <p style={{ fontSize: ".9rem", color: "rgba(26,16,53,0.5)" }}>
          Welcome back, <strong style={{ color: "#1A1035" }}>{userEmail}</strong>
        </p>
      </div>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 40 }}>
        {stats.map(s => (
          <Link key={s.label} href={s.href} style={{ textDecoration: "none" }}>
            <div
              style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)", borderRadius: 16, padding: "28px 24px", transition: "border-color .2s, box-shadow .2s, transform .2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${s.color}45`; el.style.boxShadow = `0 12px 40px ${s.color}12`; el.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(91,48,232,0.1)"; el.style.boxShadow = "none"; el.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: s.color, lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: ".85rem", fontWeight: 600, color: "#1A1035" }}>{s.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)", borderRadius: 16, padding: "28px 32px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A1035", marginBottom: 20 }}>Quick Actions</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {actions.map(a => (
            <Link key={a.label} href={a.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 10, background: "rgba(91,48,232,0.06)", border: "1.5px solid rgba(91,48,232,0.15)", color: "#5B30E8", textDecoration: "none", fontSize: ".85rem", fontWeight: 700, transition: "all .2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(91,48,232,0.12)"; el.style.borderColor = "#5B30E8"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(91,48,232,0.06)"; el.style.borderColor = "rgba(91,48,232,0.15)"; }}
            >
              <span>{a.icon}</span> {a.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
