"use client";
import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const SERVICES = [
  {
    icon: "🤖", num: "01",
    title: "AI & Machine Learning",
    short: "Production AI systems built for scale.",
    desc: "We ship production AI — LLM-powered features, RAG pipelines, autonomous agents, and fine-tuned models that run reliably at scale. Not demos. Real systems in production that your business depends on.",
    tags: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python", "FastAPI"],
    deliverables: ["LLM Integration", "RAG Pipelines", "Custom Agents", "Model Fine-tuning", "AI APIs"],
    color: "#5B30E8",
  },
  {
    icon: "🌐", num: "02",
    title: "Web Platform Engineering",
    short: "Full-stack SaaS platforms built to last.",
    desc: "Full-stack SaaS platforms, developer tools, and consumer products built with Next.js, React, and TypeScript. Fast, accessible, and maintainable for years — not just for launch day.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    deliverables: ["SaaS Platforms", "Admin Dashboards", "Developer Tools", "E-commerce", "CMS"],
    color: "#7C5CFC",
  },
  {
    icon: "📱", num: "03",
    title: "Mobile Engineering",
    short: "Native-quality iOS & Android from one codebase.",
    desc: "Native-quality iOS and Android apps from a single React Native codebase. We handle architecture, offline support, push notifications, and App Store deployment — end to end.",
    tags: ["React Native", "Expo", "iOS", "Android", "SQLite", "Firebase"],
    deliverables: ["iOS Apps", "Android Apps", "Offline-first", "Push Notifications", "App Store Deploy"],
    color: "#A78BFA",
  },
  {
    icon: "☁️", num: "04",
    title: "Cloud & Infrastructure",
    short: "Scalable infra that grows with your business.",
    desc: "Kubernetes clusters, event-driven microservices, multi-region deployments, and infrastructure-as-code that scales linearly with your growth. Zero guesswork. Every service monitored and documented.",
    tags: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "Docker"],
    deliverables: ["Cloud Migration", "K8s Clusters", "CI/CD Pipelines", "Multi-region", "Monitoring"],
    color: "#5B30E8",
  },
  {
    icon: "🔗", num: "05",
    title: "API Design & Integrations",
    short: "Clean APIs that teams love to work with.",
    desc: "Clean, versioned APIs that other teams love to integrate with. GraphQL, REST, and gRPC — backed by resilient Node.js and Python services, with Kafka and Redis where throughput demands it.",
    tags: ["GraphQL", "REST", "gRPC", "Kafka", "Redis", "Webhooks"],
    deliverables: ["REST APIs", "GraphQL APIs", "Third-party Integrations", "Webhooks", "SDK Design"],
    color: "#7C5CFC",
  },
  {
    icon: "🔒", num: "06",
    title: "Security & Compliance",
    short: "SOC 2, HIPAA, GDPR — baked in, not bolted on.",
    desc: "SOC 2, HIPAA, and GDPR baked into architecture from day one — not bolted on at the end. Penetration testing, zero-trust access, and compliance automation that doesn't slow your team down.",
    tags: ["SOC 2", "HIPAA", "GDPR", "Zero Trust", "Pen Testing", "OWASP"],
    deliverables: ["Security Audits", "Pen Testing", "Compliance Reports", "RBAC", "Encryption"],
    color: "#A78BFA",
  },
];

export default function ServicesPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <PageHero
        label="What We Build"
        title="Our"
        highlight="Services"
        description="Modern software companies need a partner that covers the full stack — from the model layer to the mobile app. Tejasbyte owns the whole picture so nothing falls through the gaps."
      />

      {/* ── Services grid ── */}
      <section className="section-pad-x" style={{ background: "#F7F5FF", padding: "80px 52px 100px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {SERVICES.map((s, i) => (
              <div
                key={s.num}
                className="service-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative", overflow: "hidden",
                  borderColor: hovered === i ? `${s.color}45` : undefined,
                }}
              >
                <span style={{
                  position: "absolute", top: 20, right: 20,
                  fontFamily: '"Inter",sans-serif', fontSize: ".62rem",
                  fontWeight: 700, letterSpacing: ".1em",
                  color: "rgba(91,48,232,0.18)",
                }}>{s.num}</span>

                <div style={{
                  width: 54, height: 54, borderRadius: 14,
                  background: `${s.color}12`,
                  border: `1.5px solid ${s.color}28`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem", marginBottom: 20,
                  transition: "transform .3s",
                  transform: hovered === i ? "scale(1.1)" : "scale(1)",
                }}>{s.icon}</div>

                <h3 style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: "1.1rem", fontWeight: 700,
                  color: "#1A1035", marginBottom: 8,
                }}>{s.title}</h3>

                <p style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: ".82rem", fontWeight: 600,
                  color: s.color, marginBottom: 14,
                }}>{s.short}</p>

                <p style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: ".875rem", lineHeight: 1.78,
                  color: "rgba(26,16,53,0.55)",
                  marginBottom: 20,
                }}>{s.desc}</p>

                {/* Deliverables */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".65rem", fontWeight: 700,
                    letterSpacing: ".1em", textTransform: "uppercase",
                    color: "rgba(26,16,53,0.35)", marginBottom: 8,
                  }}>Deliverables</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {s.deliverables.map(d => (
                      <span key={d} style={{
                        padding: "3px 10px", borderRadius: 100,
                        background: `${s.color}10`,
                        border: `1px solid ${s.color}25`,
                        fontFamily: '"Inter",sans-serif',
                        fontSize: ".62rem", fontWeight: 600,
                        color: s.color,
                      }}>{d}</span>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map(t => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>

                {/* Bottom accent */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: 3, borderRadius: "0 0 20px 20px",
                  background: `linear-gradient(90deg, ${s.color}, ${s.color}50)`,
                  opacity: hovered === i ? 1 : 0,
                  transition: "opacity .3s",
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#fff", padding: "64px 52px 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="cta-strip" style={{
            background: "#2D3A6E",
            borderRadius: 20, padding: "52px 64px",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", flexWrap: "wrap", gap: 24,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: "-40%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontFamily: '"Inter",sans-serif', fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-.02em" }}>Ready to start your project?</h2>
              <p style={{ fontFamily: '"Inter",sans-serif', fontSize: ".95rem", color: "rgba(255,255,255,0.65)" }}>Tell us what you&apos;re building — we&apos;ll get back to you within 24 hours.</p>
            </div>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 32px", borderRadius: 10,
              background: "#fff", color: "#2D3A6E",
              fontFamily: '"Inter",sans-serif', fontSize: ".875rem", fontWeight: 700,
              textDecoration: "none", flexShrink: 0, position: "relative", zIndex: 1,
              transition: "transform .2s, box-shadow .2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
