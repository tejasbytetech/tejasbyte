"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home",      href: "/"          },
  { label: "Services",  href: "/services"  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog",      href: "/blog"      },
  { label: "About",     href: "/about"     },
  { label: "Contact",   href: "/contact"   },
];

export default function Navbar() {
  const pathname = usePathname();
  // All pages have dark hero at top — start dark, useEffect corrects if reloaded mid-scroll
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Run synchronously — no setTimeout, no requestAnimationFrame delay
    const update = () => setScrolled(window.scrollY > 40);
    if (window.scrollY > 40) setScrolled(true); // instant correction before paint
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 9990,
        height: 72,
        display: "flex", alignItems: "center",
        background: scrolled
          ? "rgba(255,255,255,0.95)"
          : "#0F1629",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(91,48,232,0.12)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(91,48,232,0.07)" : "none",
        transition: "box-shadow .4s, border-color .4s, background .4s",
      }}>

        {/* Logo */}
        <Link href="/" style={{
          display: "flex", alignItems: "center",
          textDecoration: "none", flexShrink: 0,
          paddingLeft: 28,
        }}>
          <Image
            src={scrolled ? "/finallogos/transparent-gray-logo.png" : "/finallogos/transparent-logo.png"}
            alt="Tejasbyte Technologies"
            width={1536}
            height={1024}
            style={{
              height: 120,
              width: "auto",
              display: "block",
            }}
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hide-sm" style={{
          flex: 1,
          display: "flex", alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}>
          {NAV.map(l => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "6px 16px", borderRadius: 8,
                  fontSize: ".875rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive
                    ? scrolled ? "#5B30E8" : "#fff"
                    : scrolled ? "rgba(26,16,53,0.6)" : "rgba(255,255,255,0.72)",
                  background: isActive
                    ? scrolled ? "rgba(91,48,232,0.08)" : "rgba(255,255,255,0.12)"
                    : "transparent",
                  border: isActive
                    ? scrolled ? "1.5px solid rgba(91,48,232,0.22)" : "1.5px solid rgba(255,255,255,0.2)"
                    : "1.5px solid transparent",
                  textDecoration: "none",
                  transition: "all .2s",
                  position: "relative", whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = scrolled ? "#5B30E8" : "#fff";
                    el.style.background = scrolled ? "rgba(91,48,232,0.05)" : "rgba(255,255,255,0.1)";
                    el.style.borderColor = scrolled ? "rgba(91,48,232,0.12)" : "rgba(255,255,255,0.18)";
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = scrolled ? "rgba(26,16,53,0.6)" : "rgba(255,255,255,0.72)";
                    el.style.background = "transparent";
                    el.style.borderColor = "transparent";
                  }
                }}
              >
                {l.label}
                {isActive && (
                  <span style={{
                    position: "absolute", bottom: 2, left: "50%",
                    transform: "translateX(-50%)",
                    width: 4, height: 4, borderRadius: "50%",
                    background: "#2D3A6E",
                    boxShadow: "0 0 6px rgba(91,48,232,0.7)",
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA — outlined on dark, purple filled on white */}
        <div className="hide-sm" style={{ paddingRight: 32, flexShrink: 0 }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 26px", borderRadius: 10,
              background: scrolled ? "#2D3A6E" : "transparent",
              color: scrolled ? "#fff" : "#fff",
              border: scrolled
                ? "1.5px solid #5B30E8"
                : "1.5px solid rgba(255,255,255,0.55)",
              fontSize: ".875rem", fontWeight: 700,
              textDecoration: "none",
              boxShadow: scrolled ? "0 4px 20px rgba(91,48,232,0.35)" : "none",
              transition: "all .3s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              if (scrolled) {
                el.style.background = "#2D3A6E";
                el.style.boxShadow = "0 8px 28px rgba(91,48,232,0.5)";
              } else {
                el.style.background = "rgba(255,255,255,0.12)";
                el.style.borderColor = "rgba(255,255,255,0.9)";
              }
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = scrolled ? "#5B30E8" : "transparent";
              el.style.borderColor = scrolled ? "#5B30E8" : "rgba(255,255,255,0.55)";
              el.style.boxShadow = scrolled ? "0 4px 20px rgba(91,48,232,0.35)" : "none";
              el.style.transform = "translateY(0)";
            }}
          >
            Start Project
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-sm"
          onClick={() => setMobileOpen(v => !v)}
          style={{
            marginLeft: "auto", marginRight: 24,
            background: "none", border: "none", cursor: "none",
            display: "flex", flexDirection: "column", gap: 5, padding: 8,
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2.5,
              background: scrolled ? "#5B30E8" : "#fff",
              borderRadius: 2,
              transition: "transform .3s, opacity .3s",
              opacity: mobileOpen && i === 1 ? 0 : 1,
              transform: mobileOpen
                ? i === 0 ? "translateY(7.5px) rotate(45deg)"
                : i === 2 ? "translateY(-7.5px) rotate(-45deg)"
                : "none"
                : "none",
            }} />
          ))}
        </button>
      </header>

      {/* Mobile menu */}
      <div className="show-sm mobile-menu-nav" style={{
        position: "fixed", inset: 0, zIndex: 9980,
        background: "rgba(255,255,255,0.98)", backdropFilter: "blur(24px)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 4,
        paddingTop: 88,
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? "auto" : "none",
        transition: "opacity .3s",
      }}>
        {NAV.map(l => (
          <Link key={l.href} href={l.href} style={{
            fontSize: "1.5rem", fontWeight: 700,
            color: pathname === l.href ? "#5B30E8" : "rgba(26,16,53,0.7)",
            padding: "10px 0", textDecoration: "none",
          }}>{l.label}</Link>
        ))}
        <Link href="/contact" style={{
          marginTop: 28, display: "inline-block",
          padding: "13px 36px", borderRadius: 10,
          background: "#5B30E8", color: "#fff",
          fontSize: ".95rem", fontWeight: 700,
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(91,48,232,0.35)",
        }}>Start Project</Link>
      </div>
    </>
  );
}
