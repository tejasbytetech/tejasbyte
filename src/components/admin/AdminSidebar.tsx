"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const NAV = [
  { label: "Dashboard",    href: "/admin/dashboard", icon: "📊" },
  { label: "Team Members", href: "/admin/team",       icon: "👥" },
  { label: "Hiring",       href: "/admin/hiring",     icon: "💼" },
  { label: "View Site",    href: "/",                 icon: "🌐", external: true },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router   = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  // Don't render sidebar on login page
  if (pathname === "/admin/login") return null;

  return (
    <aside style={{
      width: 240, flexShrink: 0,
      background: "#0F1629",
      borderRight: "1px solid rgba(255,255,255,0.07)",
      display: "flex", flexDirection: "column",
      minHeight: "100vh", position: "sticky", top: 0, height: "100vh",
    }}>
      {/* Logo */}
      <div style={{ padding: "24px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ width: 140, height: 40, position: "relative" }}>
          <Image src="/finallogos/transparent-logo.png" alt="Tejasbyte" fill style={{ objectFit: "contain", objectPosition: "left" }} />
        </div>
        <p style={{ fontSize: ".62rem", color: "rgba(255,255,255,0.25)", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", marginTop: 8 }}>
          Admin Panel
        </p>
      </div>

      {/* Nav */}
      <nav style={{ padding: "16px 12px", flex: 1 }}>
        {NAV.map(item => {
          const isActive = !item.external && pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 12px", borderRadius: 10, marginBottom: 4,
                background: isActive ? "rgba(91,48,232,0.2)" : "transparent",
                border: isActive ? "1px solid rgba(91,48,232,0.35)" : "1px solid transparent",
                color: isActive ? "#A78BFA" : "rgba(255,255,255,0.45)",
                textDecoration: "none", fontSize: ".875rem", fontWeight: isActive ? 700 : 500,
                transition: "all .2s",
              }}
              onMouseEnter={e => { if (!isActive) { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "rgba(255,255,255,0.75)"; } }}
              onMouseLeave={e => { if (!isActive) { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "rgba(255,255,255,0.45)"; } }}
            >
              <span style={{ fontSize: "1rem" }}>{item.icon}</span>
              {item.label}
              {item.external && <span style={{ fontSize: ".65rem", marginLeft: "auto", opacity: .5 }}>↗</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div style={{ padding: "12px 12px 20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <button
          onClick={logout}
          style={{
            width: "100%", padding: "10px 12px",
            display: "flex", alignItems: "center", gap: 10,
            background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10, color: "rgba(255,255,255,0.4)",
            fontSize: ".875rem", fontWeight: 500, cursor: "pointer",
            transition: "all .2s", textAlign: "left",
          }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(239,68,68,0.1)"; el.style.borderColor = "rgba(239,68,68,0.3)"; el.style.color = "#FCA5A5"; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.borderColor = "rgba(255,255,255,0.1)"; el.style.color = "rgba(255,255,255,0.4)"; }}
        >
          <span>🚪</span> Sign Out
        </button>
      </div>
    </aside>
  );
}
