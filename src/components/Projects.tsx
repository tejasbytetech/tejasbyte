"use client";
import { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    num: "01", year: "2025",
    title: "Payment Infrastructure Platform",
    cat: "Fintech · Platform Engineering",
    desc: "Real-time payment engine processing $2M+ in daily volume. Event-driven Node.js core, idempotent API design, and a checkout flow benchmarking at <80ms p99 globally.",
    tags: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Redis", "AWS"],
    result: "$2M+ daily · 99.99% uptime · <80ms p99",
    accent: "#5B30E8",
  },
  {
    num: "02", year: "2025",
    title: "AI Productivity Suite",
    cat: "SaaS · AI Engineering",
    desc: "Full product from scratch — RAG pipeline, multi-tenant data isolation, LLM orchestration routing between GPT-4o and Claude based on task type. Zero to 40k users.",
    tags: ["React", "Python", "OpenAI", "Anthropic", "Pinecone", "AWS"],
    result: "0 → 40k users · 11 months · Series A",
    accent: "#7C5CFC",
  },
  {
    num: "03", year: "2024",
    title: "Fleet Intelligence System",
    cat: "Mobile · Real-time Systems",
    desc: "Cross-platform fleet management across 5 countries. Sub-second GPS over WebSockets, constraint-based dispatch, and offline-first mobile apps for drivers.",
    tags: ["React Native", "WebSockets", "Node.js", "Redis", "Expo"],
    result: "500+ fleets · 5 countries · <1s location",
    accent: "#A78BFA",
  },
  {
    num: "04", year: "2024",
    title: "Clinical Data Dashboard",
    cat: "Healthcare · Compliance Engineering",
    desc: "HIPAA-compliant patient management with live HL7 FHIR integrations across 3 hospital chains. Audit logging, RBAC, and an alert engine with no alert fatigue.",
    tags: ["React", "Node.js", "MongoDB", "HL7 FHIR", "AWS"],
    result: "HIPAA certified · 3 hospitals · zero breaches",
    accent: "#5B30E8",
  },
  {
    num: "05", year: "2024",
    title: "Headless Commerce Engine",
    cat: "E-commerce · Performance Engineering",
    desc: "Migrated a $40M/year Magento store to headless Next.js. Lighthouse: 48 → 97. Subscription billing, real-time inventory sync, custom checkout. +31% conversion.",
    tags: ["Next.js", "Shopify API", "Stripe", "Edge CDN", "TypeScript"],
    result: "+31% conversion · 97 Lighthouse · $40M GMV",
    accent: "#7C5CFC",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [hov, setHov] = useState<number | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="work" ref={ref} style={{
      background: "#fff",
      padding: "120px 0 130px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Bg blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "-8%",
        width: 450, height: 450, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.05) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 52px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>Selected Work</span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginTop: 20 }}>
            <h2 style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-.03em",
              color: "#1A1035",
            }}>
              Software we&apos;ve shipped<br />
              <span className="gradient-text">and stand behind</span>
            </h2>
            <p style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: ".9rem", lineHeight: 1.75,
              color: "rgba(26,16,53,0.5)",
              maxWidth: 360,
            }}>
              Real projects. Real results. Every number here is from an actual production deployment.
            </p>
          </div>
        </div>

        {/* Project list */}
        <div style={{ borderTop: "1px solid rgba(91,48,232,0.1)" }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.num}
              className={`reveal d${Math.min(i + 1, 5)}`}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr auto",
                gap: "0 40px",
                padding: "36px 0",
                borderBottom: "1px solid rgba(91,48,232,0.08)",
                alignItems: "start",
                position: "relative", overflow: "hidden",
                background: hov === i ? "rgba(91,48,232,0.025)" : "transparent",
                transition: "background .25s",
                cursor: "default",
              }}
            >
              {/* Left accent bar on hover */}
              <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0,
                width: hov === i ? 3 : 0,
                background: p.accent,
                borderRadius: "0 2px 2px 0",
                transition: "width .3s",
              }} />

              <span style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: ".65rem", fontWeight: 700,
                color: "rgba(91,48,232,0.3)",
                letterSpacing: ".08em", paddingTop: 4,
              }}>{p.num}</span>

              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap", marginBottom: 8 }}>
                  <h3 style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)",
                    fontWeight: 700, letterSpacing: "-.02em",
                    color: "#1A1035", lineHeight: 1.1,
                  }}>{p.title}</h3>
                  <span style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".72rem", fontWeight: 600,
                    color: "rgba(91,48,232,0.5)",
                    letterSpacing: ".04em",
                  }}>{p.cat}</span>
                </div>

                {/* Expandable on hover */}
                <div style={{
                  maxHeight: hov === i ? 120 : 0,
                  opacity: hov === i ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height .4s ease, opacity .3s ease",
                }}>
                  <p style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".875rem", lineHeight: 1.78,
                    color: "rgba(26,16,53,0.55)",
                    maxWidth: 560, marginBottom: 14,
                  }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.tags.map(t => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "right", paddingTop: 2, minWidth: 160 }}>
                <div style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: ".65rem", color: "rgba(26,16,53,0.3)",
                  marginBottom: 8, letterSpacing: ".06em",
                }}>{p.year}</div>
                <div style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: ".75rem", fontWeight: 700,
                  color: p.accent,
                  lineHeight: 1.5,
                  opacity: hov === i ? 1 : 0,
                  transition: "opacity .3s ease .05s",
                }}>{p.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
