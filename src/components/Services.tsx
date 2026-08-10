"use client";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    icon: "🤖",
    num: "01",
    title: "AI & Machine Learning",
    desc: "Production AI systems — LLM-powered features, RAG pipelines, autonomous agents, and fine-tuned models that run reliably at scale.",
    tags: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python"],
    color: "#5B30E8",
  },
  {
    icon: "🌐",
    num: "02",
    title: "Web Platform Engineering",
    desc: "Full-stack SaaS platforms and consumer products built with Next.js, React, and TypeScript. Fast, accessible, and maintainable.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Node.js", "PostgreSQL"],
    color: "#7C5CFC",
  },
  {
    icon: "📱",
    num: "03",
    title: "Mobile Engineering",
    desc: "Native-quality iOS and Android apps from a single React Native codebase. Architecture, offline support, and App Store deployment.",
    tags: ["React Native", "Expo", "iOS", "Android", "SQLite"],
    color: "#A78BFA",
  },
  {
    icon: "☁️",
    num: "04",
    title: "Cloud & Infrastructure",
    desc: "Kubernetes clusters, event-driven microservices, multi-region deployments, and infrastructure-as-code that scales with your growth.",
    tags: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "Docker"],
    color: "#5B30E8",
  },
  {
    icon: "🔗",
    num: "05",
    title: "API Design & Integrations",
    desc: "Clean, versioned APIs that teams love. GraphQL, REST, and gRPC — backed by resilient services with Kafka and Redis.",
    tags: ["GraphQL", "REST", "gRPC", "Kafka", "Redis"],
    color: "#7C5CFC",
  },
  {
    icon: "🔒",
    num: "06",
    title: "Security & Compliance",
    desc: "SOC 2, HIPAA, and GDPR baked into architecture from day one — not bolted on at the end. Zero-trust access and compliance automation.",
    tags: ["SOC 2", "HIPAA", "GDPR", "Zero Trust", "Pen Testing"],
    color: "#A78BFA",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} style={{
      background: "#fff",
      padding: "120px 0 130px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle bg blobs */}
      <div style={{
        position: "absolute", top: "-5%", right: "-8%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.06) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-5%", left: "-5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 52px", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>What We Build</span>
          <h2 style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800, lineHeight: 1.12,
            letterSpacing: "-.03em",
            color: "#1A1035",
            marginTop: 20, marginBottom: 18,
          }}>
            Six Capabilities.{" "}
            <span className="gradient-text">One Team.</span>
          </h2>
          <p style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: ".95rem", lineHeight: 1.8,
            color: "rgba(26,16,53,0.55)",
            maxWidth: 500, margin: "0 auto",
          }}>
            Modern software companies need a partner that covers the full stack — from the model
            layer to the mobile app. Tejasbyte owns the whole picture.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`reveal service-card d${i + 1}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative", overflow: "hidden",
                borderColor: hovered === i ? `${s.color}40` : undefined,
              }}
            >
              {/* Number */}
              <span style={{
                position: "absolute", top: 24, right: 24,
                fontFamily: '"Inter",sans-serif',
                fontSize: ".65rem", fontWeight: 700,
                letterSpacing: ".1em",
                color: "rgba(91,48,232,0.2)",
              }}>{s.num}</span>

              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `${s.color}10`,
                border: `1.5px solid ${s.color}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem", marginBottom: 20,
                transition: "transform .3s, box-shadow .3s",
                transform: hovered === i ? "scale(1.08)" : "scale(1)",
                boxShadow: hovered === i ? `0 8px 24px ${s.color}20` : "none",
              }}>
                {s.icon}
              </div>

              <h3 style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: "1.05rem", fontWeight: 700,
                color: "#1A1035", marginBottom: 10,
                letterSpacing: "-.01em",
              }}>{s.title}</h3>

              <p style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: ".875rem", lineHeight: 1.78,
                color: "rgba(26,16,53,0.55)",
                marginBottom: 20,
              }}>{s.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tags.map(t => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>

              {/* Hover accent bottom line */}
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
  );
}
