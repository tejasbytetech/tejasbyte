"use client";
import Link from "next/link";
import { useState } from "react";

const PROJECTS = [
  {
    title: "Payment Infrastructure Platform",
    cat: "Fintech · 2025", accent: "#5B30E8",
    metrics: ["$2M+ daily volume", "99.99% uptime", "<80ms p99"],
    tags: ["Next.js", "Node.js", "Stripe", "AWS"],
  },
  {
    title: "AI Productivity Suite",
    cat: "SaaS · AI · 2025", accent: "#7C5CFC",
    metrics: ["0 → 40k users", "11 months", "Series A"],
    tags: ["React", "Python", "OpenAI", "Pinecone"],
  },
  {
    title: "Fleet Intelligence System",
    cat: "Mobile · 2024", accent: "#A78BFA",
    metrics: ["500+ fleets", "5 countries", "<1s location"],
    tags: ["React Native", "WebSockets", "Redis"],
  },
  {
    title: "Headless Commerce Engine",
    cat: "E-commerce · 2024", accent: "#5B30E8",
    metrics: ["+31% conversion", "97 Lighthouse", "$40M GMV"],
    tags: ["Next.js", "Shopify API", "Stripe"],
  },
];

export default function HomePortfolioGlance() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section style={{
      background: "#F7F5FF", padding: "100px 52px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: "-10%", left: "-5%", width: 450, height: 450,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.06) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
          <div>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>Selected Work</span>
            <h2 style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 800, lineHeight: 1.12,
              letterSpacing: "-.03em", color: "#1A1035",
              marginTop: 16,
            }}>
              Software we&apos;ve shipped{" "}
              <span className="gradient-text">and stand behind</span>
            </h2>
          </div>
          <Link href="/portfolio" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: '"Inter",sans-serif', fontSize: ".85rem", fontWeight: 700,
            color: "#5B30E8", textDecoration: "none",
            border: "1.5px solid rgba(91,48,232,0.25)", borderRadius: 10,
            padding: "10px 22px", transition: "background .2s, border-color .2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(91,48,232,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "#5B30E8"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.25)"; }}
          >View Full Portfolio →</Link>
        </div>

        {/* 2-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <Link key={p.title} href="/portfolio" style={{ textDecoration: "none" }}>
              <div
                className="service-card"
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  position: "relative", overflow: "hidden",
                  borderColor: hov === i ? `${p.accent}45` : undefined,
                  height: "100%",
                }}
              >
                <div style={{ marginBottom: 16 }}>
                  <span style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".65rem", fontWeight: 700,
                    letterSpacing: ".1em", textTransform: "uppercase",
                    color: p.accent,
                  }}>{p.cat}</span>
                  <h3 style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: "1.1rem", fontWeight: 800,
                    color: "#1A1035", marginTop: 6, letterSpacing: "-.02em",
                    transition: "color .2s",
                    ...(hov === i ? { color: p.accent } : {}),
                  }}>{p.title}</h3>
                </div>

                {/* Metrics */}
                <div style={{
                  display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16,
                }}>
                  {p.metrics.map(m => (
                    <span key={m} style={{
                      padding: "4px 12px", borderRadius: 100,
                      background: `${p.accent}10`,
                      border: `1px solid ${p.accent}25`,
                      fontFamily: '"Inter",sans-serif',
                      fontSize: ".72rem", fontWeight: 700,
                      color: p.accent,
                    }}>{m}</span>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                </div>

                <div style={{
                  marginTop: 16,
                  fontFamily: '"Inter",sans-serif',
                  fontSize: ".78rem", fontWeight: 700,
                  color: p.accent, opacity: hov === i ? 1 : 0, transition: "opacity .25s",
                }}>View case study →</div>

                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
                  borderRadius: "0 0 20px 20px",
                  background: `linear-gradient(90deg, ${p.accent}, ${p.accent}50)`,
                  opacity: hov === i ? 1 : 0, transition: "opacity .3s",
                }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
