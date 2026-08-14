"use client";
import Link from "next/link";
import Image from "next/image";

const STATS = [
  { val: "30+",  label: "Projects Delivered" },
  { val: "98%",  label: "Client Satisfaction" },
  { val: "5+",   label: "Years Experience"    },
  { val: "15+",  label: "Senior Engineers"    },
];

const POINTS = [
  { icon: "👥", title: "Senior-Only Team",         desc: "5+ years production experience per engineer — no juniors on your codebase." },
  { icon: "🎯", title: "Full-Stack Ownership",      desc: "One team owns everything from front end to cloud infrastructure." },
  { icon: "💬", title: "Radical Transparency",      desc: "Daily updates, shared dashboards, real answers — always." },
  { icon: "📦", title: "Code You Keep Forever",     desc: "Clean architecture and docs your team can own after we're done." },
];

export default function HomeAboutGlance() {
  return (
    <section style={{
      background: "#fff", padding: "100px 52px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "10%", right: "-5%", width: 400, height: 400,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.06) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Left */}
          <div>
            <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>About Us</span>
            <h2 style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 800, lineHeight: 1.12,
              letterSpacing: "-.03em", color: "#1A1035",
              marginTop: 16, marginBottom: 20,
            }}>
              Built by engineers.<br />
              <span className="gradient-text">Obsessed with craft.</span>
            </h2>
            <p style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: "1rem", lineHeight: 1.82,
              color: "rgba(26,16,53,0.55)",
              marginBottom: 36,
            }}>
              Tejasbyte Technologies is incorporated in the United States with an engineering office in Kathmandu, Nepal. We build scalable, secure, and intelligent software
              that drives growth — from startups to enterprise.
            </p>

            {/* Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {POINTS.map(p => (
                <div key={p.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: "rgba(91,48,232,0.08)",
                    border: "1.5px solid rgba(91,48,232,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.1rem",
                  }}>{p.icon}</div>
                  <div>
                    <h4 style={{
                      fontFamily: '"Inter",sans-serif',
                      fontSize: ".9rem", fontWeight: 700, color: "#1A1035", marginBottom: 3,
                    }}>{p.title}</h4>
                    <p style={{
                      fontFamily: '"Inter",sans-serif',
                      fontSize: ".82rem", lineHeight: 1.7, color: "rgba(26,16,53,0.5)",
                    }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-purple" style={{ textDecoration: "none" }}>
              Meet the Team →
            </Link>
          </div>

          {/* Right */}
          <div>
            {/* Logo circle */}
            <div style={{
              width: 220, height: 220, borderRadius: "50%",
              background: "linear-gradient(145deg, #EEE9FF 0%, #F7F5FF 60%, #fff 100%)",
              border: "2px solid rgba(91,48,232,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 20px 80px rgba(91,48,232,0.12)",
              margin: "0 auto 40px",
              animation: "float2 5s ease-in-out infinite",
            }}>
              <Image
                src="/logos/full-color-primary.png"
                alt="Tejasbyte Technologies"
                width={140} height={140}
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {STATS.map(s => (
                <div key={s.label} className="stat-card" style={{ textAlign: "center", padding: "28px 20px" }}>
                  <div style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: "2rem", fontWeight: 800,
                    color: "#5B30E8", lineHeight: 1, marginBottom: 6,
                    letterSpacing: "-.04em",
                  }}>{s.val}</div>
                  <div style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".78rem", fontWeight: 600, color: "#1A1035",
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
