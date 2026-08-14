"use client";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const VALUES = [
  { icon: "👥", title: "Senior-Only Engineering",      desc: "Every engineer has solid production experience. No juniors learning on your codebase." },
  { icon: "🎯", title: "Full-Stack Ownership",          desc: "One team owns front end, back end, infrastructure, and deployment — start to finish." },
  { icon: "💬", title: "Direct Communication",          desc: "You talk directly to the engineers building your product. No account managers, no middlemen." },
  { icon: "📦", title: "Code You Keep Forever",         desc: "Clean architecture and documentation your team can confidently own and extend." },
  { icon: "⚡", title: "Speed Without Compromise",      desc: "We move fast — but never at the cost of security, reliability, or code quality." },
  { icon: "🌏", title: "Global Standards, Competitive Rates", desc: "Incorporated in the US and engineered in Nepal — we deliver world-class software at rates that make long-term partnership sustainable." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Who We Are"
        title="Built by engineers."
        highlight="Obsessed with craft."
        description="Tejasbyte Technologies is incorporated in the United States, with a core engineering office in Kathmandu, Nepal. We build scalable, secure, and intelligent software for businesses worldwide."
      />

      {/* Stats */}
      <section style={{ background: "#F7F5FF", padding: "64px 52px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {[
              { val: "30+", label: "Projects Delivered", sub: "and growing"     },
              { val: "98%", label: "Client Satisfaction", sub: "average rating" },
              { val: "5+",  label: "Years Experience",    sub: "since 2021"     },
              { val: "24h", label: "Response Time",       sub: "guaranteed"     },
            ].map(s => (
              <div key={s.label} className="stat-card" style={{ textAlign: "center" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.3)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(91,48,232,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 800, color: "#5B30E8", lineHeight: 1, marginBottom: 8, letterSpacing: "-.04em" }}>{s.val}</div>
                <div style={{ fontSize: ".9rem", fontWeight: 700, color: "#1A1035", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: ".72rem", color: "rgba(26,16,53,0.4)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section style={{ background: "#fff", padding: "80px 52px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>How We Work</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-.03em", color: "#1A1035", marginTop: 16 }}>
              Our principles, not just our pitch
            </h2>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {VALUES.map(v => (
              <div key={v.title} className="service-card"
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(91,48,232,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(91,48,232,0.08)", border: "1.5px solid rgba(91,48,232,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontSize: ".95rem", fontWeight: 700, color: "#1A1035", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: ".875rem", lineHeight: 1.75, color: "rgba(26,16,53,0.55)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ background: "#F7F5FF", padding: "80px 52px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>Why Tejasbyte</span>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.03em", color: "#1A1035", marginTop: 16, marginBottom: 20 }}>
                A focused team that ships<br />
                <span className="gradient-text">like a seasoned studio</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "You talk directly to the engineers — no account managers",
                  "Flat, transparent pricing — no surprise invoices",
                  "Modern stack: Next.js, Supabase, React Native, cloud-native",
                  "Incorporated in the United States with an engineering office in Kathmandu, Nepal — competitive rates, zero compromise on quality",
                  "Full ownership handoff — clean code + docs when we're done",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(91,48,232,0.1)", border: "1.5px solid rgba(91,48,232,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="10" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5l3.5 3.5L11 1" stroke="#5B30E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: ".9rem", lineHeight: 1.65, color: "rgba(26,16,53,0.65)" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact nudge */}
            <div style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.12)", borderRadius: 24, padding: "40px 36px", boxShadow: "0 20px 60px rgba(91,48,232,0.06)" }}>
              <div style={{ fontSize: "2rem", marginBottom: 16 }}>👋</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1A1035", marginBottom: 10, letterSpacing: "-.02em" }}>Let&apos;s talk about your project</h3>
              <p style={{ fontSize: ".9rem", lineHeight: 1.75, color: "rgba(26,16,53,0.55)", marginBottom: 28 }}>
                We&apos;re a small team taking on select projects. If you have something to build, we&apos;d love to hear about it.
              </p>
              {[
                { icon: "✉️", label: "Email", val: "contact@tejasbyte.com", href: "mailto:contact@tejasbyte.com" },
                { icon: "📍", label: "Location", val: "2420 Rheem Ave, Richmond, CA 94804\nKathmandu, Nepal" },
                { icon: "⏱️", label: "Response", val: "Within 24 hours" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(91,48,232,0.07)" }}>
                  <span style={{ fontSize: "1rem", width: 28, textAlign: "center" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: ".6rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(91,48,232,0.5)", marginBottom: 1 }}>{item.label}</div>
                    {"href" in item && item.href
                      ? <a href={item.href} style={{ fontSize: ".875rem", fontWeight: 600, color: "#1A1035", textDecoration: "none", transition: "color .2s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#5B30E8"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#1A1035"; }}>{item.val}</a>
                      : <span style={{ fontSize: ".875rem", fontWeight: 600, color: "#1A1035", whiteSpace: "pre-line", lineHeight: 1.7 }}>{item.val}</span>
                    }
                  </div>
                </div>
              ))}
              <Link href="/contact" className="btn-purple" style={{ textDecoration: "none", display: "inline-flex", marginTop: 28, width: "100%", justifyContent: "center" }}>
                Start a Project →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
