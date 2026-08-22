"use client";
import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  if (pathname === "/admin/login") return null;

  const navLinks = (
    <>
      <nav style={{ padding: "12px 12px", flex: 1 }}>
        {NAV.map(item => {
          const isActive = !item.external && pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "11px 12px", borderRadius: 10, marginBottom: 4,
                background: isActive ? "rgba(91,48,232,0.2)" : "transparent",
                border: isActive ? "1px solid rgba(91,48,232,0.35)" : "1px solid transparent",
                color: isActive ? "#A78BFA" : "rgba(255,255,255,0.5)",
                textDecoration: "none", fontSize: ".9rem", fontWeight: isActive ? 700 : 500,
                transition: "all .2s",
              }}
              onMouseEnter={e => { if (!isActive) { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "rgba(255,255,255,0.8)"; } }}
              onMouseLeave={e => { if (!isActive) { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "rgba(255,255,255,0.5)"; } }}
            >
              <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
              {item.label}
              {item.external && <span style={{ fontSize: ".65rem", marginLeft: "auto", opacity: .5 }}>↗</span>}
            </Link>
          );
        })}
      </nav>

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
    </>
  );

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="admin-sidebar-desktop" style={{
        width: 220, flexShrink: 0,
        background: "#0F1629",
        borderRight: "1px solid rgba(255,255,255,0.07)",
        display: "flex", flexDirection: "column",
        minHeight: "100vh", position: "sticky", top: 0, height: "100vh",
      }}>
        <div style={{ padding: "20px 16px 14px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ width: 130, height: 36, position: "relative" }}>
            <Image src="/finallogos/transparent-logo.png" alt="Tejasbyte" fill style={{ objectFit: "contain", objectPosition: "left" }} />
          </div>
          <p style={{ fontSize: ".6rem", color: "rgba(255,255,255,0.25)", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", marginTop: 8 }}>
            Admin Panel
          </p>
        </div>
        {navLinks}
      </aside>

      {/* ── Mobile top bar ── */}
      <div className="admin-topbar-mobile" style={{
        display: "none",
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "#0F1629",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "12px 16px",
        alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ width: 110, height: 30, position: "relative" }}>
          <Image src="/finallogos/transparent-logo.png" alt="Tejasbyte" fill style={{ objectFit: "contain", objectPosition: "left" }} />
        </div>
        <button
          onClick={() => setMobileOpen(v => !v)}
          style={{
            width: 38, height: 38, borderRadius: 9,
            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
            color: "#fff", cursor: "pointer", fontSize: "1.2rem",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMobileOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1001 }}
          />
          {/* Drawer */}
          <div style={{
            position: "fixed", top: 0, left: 0, bottom: 0, width: 240, zIndex: 1002,
            background: "#0F1629",
            borderRight: "1px solid rgba(255,255,255,0.07)",
            display: "flex", flexDirection: "column",
            animation: "slideInLeft .22s cubic-bezier(.16,1,.3,1)",
          }}>
            <div style={{ padding: "18px 16px 14px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ width: 110, height: 30, position: "relative" }}>
                <Image src="/finallogos/transparent-logo.png" alt="Tejasbyte" fill style={{ objectFit: "contain", objectPosition: "left" }} />
              </div>
              <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: "1.2rem", cursor: "pointer" }}>✕</button>
            </div>
            {navLinks}
          </div>
        </>
      )}

      <style>{`
        @media (max-width: 767px) {
          .admin-sidebar-desktop { display: none !important; }
          .admin-topbar-mobile   { display: flex !important; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>
    </>
  );
}
