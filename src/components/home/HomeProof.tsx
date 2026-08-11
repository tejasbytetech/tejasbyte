"use client";
import Link from "next/link";
import { useState } from "react";

const PROJECTS = [
  {
    title: "Subha Sanskar Decor",
    client: "Subha Sanskar · Sydney, Australia",
    url: "subhasanskardecor.com",
    href: "https://www.subhasanskardecor.com",
    desc: "Brand website with dynamic gallery, lead capture, and a Supabase-powered admin panel. Client manages all content without touching code.",
    tags: ["Next.js", "Supabase", "TypeScript", "Admin Panel"],
    accent: "#5B30E8",
  },
  {
    title: "Vision Sign Advertising",
    client: "Vision Sign · Kathmandu, Nepal",
    url: "visionsignadvertising.com.np",
    href: "https://www.visionsignadvertising.com.np",
    desc: "Full agency portfolio with service pages, case studies, and an admin dashboard — zero developer dependency for updates.",
    tags: ["Next.js", "Supabase", "Admin CMS"],
    accent: "#7C5CFC",
  },
  {
    title: "Tarangini Foundation",
    client: "Tarangini · Kathmandu, Nepal",
    url: "tarangini.org.np",
    href: "https://tarangini.org.np",
    desc: "Rebuilt from WordPress to Next.js with a custom Supabase admin panel for team, blog, resources, and media sections.",
    tags: ["Next.js", "Supabase", "PostgreSQL"],
    accent: "#A78BFA",
  },
];

export default function HomeProof() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section className="section-pad-x" style={{ background: "#F7F5FF", padding: "88px 52px" }}>
      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#5B30E8", marginBottom: 12 }}>OUR WORK</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }} className="section-header-row">
            <h2 style={{ fontSize: "clamp(1.6rem,3.2vw,2.4rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-.03em", color: "#1A1035" }}>
              Featured Projects
            </h2>
            <Link href="/portfolio" style={{
              fontSize: ".85rem", fontWeight: 600, color: "#5B30E8",
              textDecoration: "none", borderBottom: "1px solid rgba(91,48,232,0.3)", paddingBottom: 2,
            }}>View all projects →</Link>
          </div>
          <p style={{ fontSize: ".95rem", lineHeight: 1.75, color: "rgba(26,16,53,0.55)", maxWidth: 480, marginTop: 12 }}>
            Real platforms we&apos;ve built and continue to support.
          </p>
        </div>

        <div style={{ height: 1, background: "rgba(26,16,53,0.08)", margin: "32px 0" }} />

        {/* Project cards */}
        <div className="proof-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  background: "#fff",
                  border: `1.5px solid ${hov === i ? p.accent + "45" : "rgba(26,16,53,0.08)"}`,
                  borderRadius: 16, padding: "28px",
                  height: "100%",
                  transition: "all .25s", cursor: "default",
                  transform: hov === i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: hov === i ? `0 12px 40px ${p.accent}14` : "none",
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Live dot */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px rgba(34,197,94,0.6)" }} />
                  <span style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".08em", color: "rgba(26,16,53,0.4)", textTransform: "uppercase" }}>{p.client}</span>
                </div>

                <h3 style={{
                  fontSize: "1.05rem", fontWeight: 800,
                  color: hov === i ? p.accent : "#1A1035",
                  marginBottom: 10, letterSpacing: "-.02em",
                  transition: "color .2s",
                }}>{p.title}</h3>

                <p style={{ fontSize: ".875rem", lineHeight: 1.75, color: "rgba(26,16,53,0.55)", marginBottom: 18 }}>{p.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      padding: "3px 10px", borderRadius: 100,
                      background: `${p.accent}0D`, border: `1px solid ${p.accent}30`,
                      fontSize: ".62rem", fontWeight: 600,
                      letterSpacing: ".06em", textTransform: "uppercase",
                      color: p.accent,
                    }}>{t}</span>
                  ))}
                </div>

                <span style={{
                  fontSize: ".78rem", fontWeight: 700, color: p.accent,
                  borderBottom: `1px solid ${p.accent}50`, paddingBottom: 1,
                }}>Visit {p.url} →</span>

                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
                  borderRadius: "0 0 16px 16px",
                  background: `linear-gradient(90deg,${p.accent},${p.accent}40)`,
                  opacity: hov === i ? 1 : 0, transition: "opacity .3s",
                }} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
