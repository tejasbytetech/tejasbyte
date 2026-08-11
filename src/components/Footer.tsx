"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const QUICK_LINKS = [
  { label: "Home",      href: "/"          },
  { label: "Services",  href: "/services"  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us",  href: "/about"     },
  { label: "Contact",   href: "/contact"   },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: "#13102A",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "64px 0 0",
    }}>
      <div className="footer-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 52px" }}>

        {/* 4-col grid → collapses on mobile */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1.5fr 1.5fr",
          gap: 48,
          paddingBottom: 52,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>

          {/* Col 1 — Brand */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="footer-logo-wrap" style={{ marginBottom: 16, width: 240, height: 80, position: "relative", overflow: "hidden", marginLeft: -36 }}>
              <Image
                src="/finallogos/transparent-logo.png"
                alt="Tejasbyte Technologies"
                fill
                sizes="240px"
                style={{
                  objectFit: "contain",
                  objectPosition: "left center",
                  transform: "scale(1.4)",
                  transformOrigin: "left center",
                }}
              />
            </div>
            <p style={{
              fontSize: ".875rem", lineHeight: 1.75,
              color: "rgba(255,255,255,0.42)",
              maxWidth: 260,
            }}>
              A software engineering company from Kathmandu — building AI platforms,
              web apps, and cloud systems for global clients.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 style={{
              fontSize: ".65rem", fontWeight: 800,
              letterSpacing: ".18em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: 20,
            }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {QUICK_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{
                    fontSize: ".875rem",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color .2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#A78BFA"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Stay Updated */}
          <div>
            <h4 style={{
              fontSize: ".65rem", fontWeight: 800,
              letterSpacing: ".18em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: 12,
            }}>Stay Updated</h4>
            <p style={{
              fontSize: ".82rem", lineHeight: 1.65,
              color: "rgba(255,255,255,0.38)",
              marginBottom: 16,
            }}>
              AI insights, dev tips, and company news — no spam.
            </p>
            {subbed ? (
              <p style={{ fontSize: ".82rem", color: "#A78BFA", fontWeight: 600 }}>✓ You&apos;re subscribed!</p>
            ) : (
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  style={{
                    flex: 1, padding: "9px 14px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff", fontSize: ".82rem",
                    outline: "none",
                  }}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = "rgba(91,48,232,0.5)"; }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
                <button
                  onClick={() => { if (email) setSubbed(true); }}
                  style={{
                    padding: "9px 16px", borderRadius: 8,
                    background: "transparent",
                    color: "#fff",
                    border: "1.5px solid rgba(255,255,255,0.3)",
                    cursor: "none",
                    fontSize: ".8rem", fontWeight: 700,
                    whiteSpace: "nowrap",
                    transition: "border-color .2s, background .2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#A78BFA"; (e.currentTarget as HTMLElement).style.background = "rgba(167,139,250,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >Subscribe</button>
              </div>
            )}
          </div>

          {/* Col 4 — Get in Touch */}
          <div>
            <h4 style={{
              fontSize: ".65rem", fontWeight: 800,
              letterSpacing: ".18em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: 20,
            }}>Get in Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
              {[
                { icon: "📍", val: "Tarakeshwore-07, Phutung\nKathmandu, Nepal" },
                { icon: "✉️", val: "contact@tejasbyte.com", href: "mailto:contact@tejasbyte.com" },
              ].map(item => (
                <div key={item.val} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: ".9rem", flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                  {"href" in item && item.href ? (
                    <a href={item.href} target={item.href.startsWith("https://wa.me") ? "_blank" : undefined} rel={item.href.startsWith("https://wa.me") ? "noopener noreferrer" : undefined} style={{
                      fontSize: ".82rem", color: "rgba(255,255,255,0.45)",
                      textDecoration: "none", lineHeight: 1.55,
                      transition: "color .2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#A78BFA"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}>
                      {item.val}
                    </a>
                  ) : (
                    <span style={{ fontSize: ".82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.55, whiteSpace: "pre-line" }}>{item.val}</span>
                  )}
                </div>
              ))}
            </div>
            {/* Socials */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/tejasbyte",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { label: "GitHub", href: "https://github.com/tejasbytetech",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
                { label: "WhatsApp", href: "https://wa.me/9849627282",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.534 5.848L.057 23.888a.75.75 0 00.956.956l6.04-1.477A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.938 9.938 0 01-5.07-1.385l-.361-.215-3.736.914.93-3.636-.236-.374A9.904 9.904 0 012.063 12C2.063 6.505 6.505 2.063 12 2.063c5.494 0 9.938 4.442 9.938 9.937 0 5.494-4.444 9.938-9.938 9.938z"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.38)", textDecoration: "none",
                    transition: "all .2s",
                  }}
                  onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = "rgba(91,48,232,0.5)"; a.style.background = "rgba(91,48,232,0.15)"; a.style.color = "#A78BFA"; }}
                  onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = "rgba(255,255,255,0.1)"; a.style.background = "transparent"; a.style.color = "rgba(255,255,255,0.38)"; }}
                >{s.svg}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: 12,
          padding: "20px 0",
        }}>
          <p style={{ fontSize: ".75rem", color: "rgba(255,255,255,0.22)" }}>
            © {year} Tejasbyte Technologies Pvt. Ltd. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms",   href: "/terms"   },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                fontSize: ".75rem", color: "rgba(255,255,255,0.22)",
                textDecoration: "none", transition: "color .2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.22)"; }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

