"use client";
import Link from "next/link";
import { useState } from "react";

const AREAS = [
  {
    icon: "🤖",
    title: "Artificial Intelligence & ML",
    desc: "LLM integrations, RAG pipelines, autonomous agents, fine-tuned models, computer vision, NLP, and AI-powered feature development for production systems.",
    scope: ["LLM Integration", "RAG Pipelines", "Custom Agents", "Fine-tuning", "Computer Vision", "NLP", "AI APIs", "Vector Search"],
    color: "#5B30E8",
    gradient: "linear-gradient(135deg, rgba(91,48,232,0.08) 0%, rgba(124,92,252,0.04) 100%)",
  },
  {
    icon: "🌐",
    title: "Web Platform Engineering",
    desc: "Full-stack SaaS platforms, developer portals, admin dashboards, e-commerce engines, and consumer-grade web applications built for scale and maintainability.",
    scope: ["SaaS Platforms", "Admin Dashboards", "E-commerce", "Developer Tools", "CMS", "Landing Pages", "Web Portals", "PWAs"],
    color: "#7C5CFC",
    gradient: "linear-gradient(135deg, rgba(124,92,252,0.08) 0%, rgba(167,139,250,0.04) 100%)",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps with native performance, offline-first architecture, real-time sync, and seamless App Store / Play Store deployment.",
    scope: ["iOS Apps", "Android Apps", "Offline-first", "Push Notifications", "Deep Linking", "App Store Deploy", "OTA Updates", "BLE/IoT"],
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(91,48,232,0.04) 100%)",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps Infrastructure",
    desc: "Multi-cloud architecture, Kubernetes orchestration, CI/CD pipelines, infrastructure-as-code, monitoring, auto-scaling, and zero-downtime deployments.",
    scope: ["AWS / GCP / Azure", "Kubernetes", "Terraform", "Docker", "CI/CD", "Monitoring", "Auto-scaling", "Multi-region"],
    color: "#5B30E8",
    gradient: "linear-gradient(135deg, rgba(91,48,232,0.08) 0%, rgba(34,211,238,0.04) 100%)",
  },
  {
    icon: "🔗",
    title: "API Design & System Integration",
    desc: "RESTful and GraphQL APIs, microservices architecture, third-party integrations, event-driven systems with Kafka, and real-time WebSocket services.",
    scope: ["REST APIs", "GraphQL", "gRPC", "WebSockets", "Kafka / Redis", "Webhooks", "SDK Design", "OAuth / SSO"],
    color: "#7C5CFC",
    gradient: "linear-gradient(135deg, rgba(124,92,252,0.08) 0%, rgba(167,139,250,0.04) 100%)",
  },
  {
    icon: "🔒",
    title: "Security & Compliance",
    desc: "End-to-end security from architecture to deployment — SOC 2, HIPAA, GDPR compliance, penetration testing, zero-trust access control, and threat modeling.",
    scope: ["SOC 2", "HIPAA", "GDPR", "Pen Testing", "Zero Trust", "RBAC", "Encryption", "OWASP"],
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(91,48,232,0.04) 100%)",
  },
  {
    icon: "🗄️",
    title: "Database & Data Engineering",
    desc: "Database design, query optimization, data pipelines, analytics infrastructure, ETL workflows, and real-time data streaming for high-throughput systems.",
    scope: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "BigQuery", "ETL Pipelines", "Data Lakes", "ClickHouse"],
    color: "#5B30E8",
    gradient: "linear-gradient(135deg, rgba(91,48,232,0.08) 0%, rgba(124,92,252,0.04) 100%)",
  },
  {
    icon: "🎨",
    title: "UI/UX & Product Design",
    desc: "User research, wireframing, high-fidelity prototypes, design systems, accessibility audits, and pixel-perfect implementation that users actually love.",
    scope: ["Figma Design", "Design Systems", "Prototyping", "Accessibility", "User Research", "Usability Testing", "Motion Design", "Brand UI"],
    color: "#7C5CFC",
    gradient: "linear-gradient(135deg, rgba(124,92,252,0.08) 0%, rgba(167,139,250,0.04) 100%)",
  },
  {
    icon: "⚡",
    title: "Performance Engineering",
    desc: "Core Web Vitals optimization, database query tuning, CDN strategy, load testing, caching layers, and systematic bottleneck elimination at every stack layer.",
    scope: ["Core Web Vitals", "Query Optimization", "CDN Strategy", "Load Testing", "Caching", "Code Splitting", "Lazy Loading", "Bundle Analysis"],
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(91,48,232,0.04) 100%)",
  },
  {
    icon: "🏥",
    title: "Healthcare Tech (HealthTech)",
    desc: "HIPAA-compliant platforms, HL7 FHIR integrations, EHR connectivity, telemedicine infrastructure, patient data management, and clinical workflow automation.",
    scope: ["HIPAA Compliance", "HL7 FHIR", "EHR Integration", "Telemedicine", "Patient Portals", "Clinical Workflows", "Audit Logs", "Medical APIs"],
    color: "#5B30E8",
    gradient: "linear-gradient(135deg, rgba(91,48,232,0.08) 0%, rgba(124,92,252,0.04) 100%)",
  },
  {
    icon: "💳",
    title: "Fintech & Payment Systems",
    desc: "Payment processing, billing infrastructure, fraud detection, wallet systems, KYC/AML compliance, real-time transaction engines, and financial data APIs.",
    scope: ["Stripe / Braintree", "Payment APIs", "Billing Systems", "Fraud Detection", "KYC / AML", "Wallet Systems", "PCI-DSS", "Financial Reports"],
    color: "#7C5CFC",
    gradient: "linear-gradient(135deg, rgba(124,92,252,0.08) 0%, rgba(167,139,250,0.04) 100%)",
  },
  {
    icon: "🚚",
    title: "Logistics & Fleet Tech",
    desc: "Real-time GPS tracking, route optimization, dispatch automation, driver apps, warehouse management, and IoT-connected fleet intelligence platforms.",
    scope: ["Real-time GPS", "Route Optimization", "Dispatch Systems", "Driver Apps", "Warehouse Mgmt", "IoT Integration", "Fleet Analytics", "ELD Compliance"],
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(91,48,232,0.04) 100%)",
  },
];

export default function HomeAreasOfScope() {
  const [hov, setHov] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section style={{
      background: "#fff",
      padding: "100px 52px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Bg blobs */}
      <div style={{
        position: "absolute", top: "-5%", right: "-8%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.055) 0%, transparent 70%)",
        filter: "blur(70px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-5%", left: "-5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(167,139,250,0.06) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>
            Areas of Scope
          </span>
          <h2 style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            fontWeight: 800, lineHeight: 1.12,
            letterSpacing: "-.03em", color: "#1A1035",
            marginTop: 20, marginBottom: 16,
          }}>
            Everything we cover,{" "}
            <span className="gradient-text">end to end</span>
          </h2>
          <p style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: "1rem", lineHeight: 1.8,
            color: "rgba(26,16,53,0.5)",
            maxWidth: 540, margin: "0 auto",
          }}>
            From AI-native products to healthcare compliance — our scope covers
            the full software stack across every major industry vertical.
          </p>
        </div>

        {/* 4-col grid */}
        <div className="areas-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 18,
          marginBottom: 56,
        }}>
          {AREAS.map((area, i) => (
            <div
              key={area.title}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              onClick={() => setExpanded(expanded === i ? null : i)}
              style={{
                background: hov === i || expanded === i ? area.gradient : "#fff",
                border: `1.5px solid ${hov === i || expanded === i ? area.color + "35" : "rgba(91,48,232,0.1)"}`,
                borderRadius: 18,
                padding: "24px 22px",
                cursor: "pointer",
                transition: "all .3s cubic-bezier(.16,1,.3,1)",
                transform: hov === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hov === i ? `0 16px 40px ${area.color}15` : "none",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Icon */}
              <div style={{
                width: 46, height: 46, borderRadius: 13,
                background: `${area.color}12`,
                border: `1.5px solid ${area.color}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.25rem", marginBottom: 14,
                transition: "transform .3s",
                transform: hov === i ? "scale(1.1) rotate(-4deg)" : "scale(1)",
              }}>{area.icon}</div>

              {/* Title */}
              <h3 style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: ".9rem", fontWeight: 700,
                color: hov === i ? area.color : "#1A1035",
                marginBottom: 8, lineHeight: 1.35,
                transition: "color .25s",
              }}>{area.title}</h3>

              {/* Description — show on hover/expand */}
              <p style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: ".78rem", lineHeight: 1.7,
                color: "rgba(26,16,53,0.52)",
                marginBottom: expanded === i ? 14 : 0,
                maxHeight: hov === i || expanded === i ? 120 : 0,
                opacity: hov === i || expanded === i ? 1 : 0,
                overflow: "hidden",
                transition: "max-height .4s ease, opacity .3s ease, margin .3s",
              }}>{area.desc}</p>

              {/* Scope tags — show on expand */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: 5,
                maxHeight: expanded === i ? 200 : 0,
                opacity: expanded === i ? 1 : 0,
                overflow: "hidden",
                transition: "max-height .4s ease, opacity .3s ease",
              }}>
                {area.scope.map(tag => (
                  <span key={tag} style={{
                    padding: "2px 9px", borderRadius: 100,
                    background: `${area.color}10`,
                    border: `1px solid ${area.color}25`,
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".6rem", fontWeight: 600,
                    letterSpacing: ".05em", textTransform: "uppercase",
                    color: area.color,
                  }}>{tag}</span>
                ))}
              </div>

              {/* Expand hint */}
              <div style={{
                position: "absolute", top: 16, right: 16,
                width: 22, height: 22, borderRadius: "50%",
                background: `${area.color}12`,
                border: `1px solid ${area.color}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: '"Inter",sans-serif',
                fontSize: ".75rem", fontWeight: 700,
                color: area.color,
                transition: "transform .3s, background .2s",
                transform: expanded === i ? "rotate(45deg)" : "rotate(0)",
              }}>+</div>

              {/* Bottom accent line */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: 2, borderRadius: "0 0 18px 18px",
                background: `linear-gradient(90deg, ${area.color}, ${area.color}40)`,
                opacity: hov === i || expanded === i ? 1 : 0,
                transition: "opacity .3s",
              }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="areas-cta" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 24,
          background: "#F7F5FF",
          border: "1.5px solid rgba(91,48,232,0.12)",
          borderRadius: 20, padding: "32px 40px",
        }}>
          <div>
            <h3 style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: "1.1rem", fontWeight: 800,
              color: "#1A1035", marginBottom: 6, letterSpacing: "-.01em",
            }}>Don&apos;t see your use case listed?</h3>
            <p style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: ".875rem", color: "rgba(26,16,53,0.5)", lineHeight: 1.6,
            }}>
              We handle a wide range of custom software challenges. Tell us what you need.
            </p>
          </div>
          <div className="areas-cta-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/services" style={{
              textDecoration: "none", display: "inline-block",
            }}>
              <div className="btn-outline" style={{ padding: "11px 24px", fontSize: ".82rem" }}>
                View All Services
              </div>
            </Link>
            <Link href="/contact" style={{ textDecoration: "none", display: "inline-block" }}>
              <div className="btn-purple" style={{ padding: "11px 24px", fontSize: ".82rem" }}>
                Start a Conversation →
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
