"use client";
import Link from "next/link";
import PageHero from "@/components/PageHero";

function SoloFounderFeature({ member }: { member: Member }) {
  const HIGHLIGHTS = [
    { icon: "🚀", label: "Vision", value: "World-class software from the ground up" },
    { icon: "🤝", label: "Approach", value: "Direct communication, zero middlemen" },
    { icon: "⚡", label: "Philosophy", value: "Senior-only team, full-stack ownership" },
  ];

  return (
    <div style={{ marginBottom: 56 }}>
      {/* Main card — horizontal split */}
      <div className="solo-founder-card" style={{
        background: "#fff",
        border: "1.5px solid rgba(91,48,232,0.1)",
        borderRadius: 24,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "340px 1fr",
        boxShadow: "0 24px 80px rgba(91,48,232,0.08)",
        position: "relative",
      }}>
        {/* Left — photo column */}
        <div style={{
          position: "relative",
          background: `linear-gradient(160deg, ${member.accent}18 0%, ${member.accent}06 100%)`,
          overflow: "hidden",
          minHeight: 420,
        }}>
          {/* decorative circles */}
          <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: `radial-gradient(circle, ${member.accent}18 0%, transparent 70%)`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -40, left: -40, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle, ${member.accent}12 0%, transparent 70%)`, pointerEvents: "none" }} />

          {member.photo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={member.photo_url}
              alt={member.name}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
            />
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", background: `linear-gradient(135deg, ${member.accent} 0%, ${member.accent}88 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: 800, color: "#fff", boxShadow: `0 16px 40px ${member.accent}40` }}>{member.initials}</div>
            </div>
          )}

          {/* Founder badge */}
          <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", border: `1px solid ${member.accent}30`, borderRadius: 100, padding: "4px 14px", fontSize: ".6rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: member.accent, zIndex: 2 }}>
            {member.role.toLowerCase().includes("co-founder") ? "Co-Founder" : "Founder"}
          </div>

          {/* Bottom gradient overlay */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: `linear-gradient(to top, ${member.accent}28 0%, transparent 100%)`, pointerEvents: "none" }} />
          {/* Accent bar */}
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: `linear-gradient(180deg, ${member.accent}, ${member.accent}40)` }} />
        </div>

        {/* Right — content column */}
        <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Name + role */}
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 800, color: "#1A1035", letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 8 }}>
              {member.name}
            </h3>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 100, background: `${member.accent}10`, border: `1px solid ${member.accent}25` }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: member.accent, boxShadow: `0 0 6px ${member.accent}` }} />
              <span style={{ fontSize: ".72rem", fontWeight: 700, color: member.accent, letterSpacing: ".06em", textTransform: "uppercase" }}>{member.role}</span>
            </div>
          </div>

          {/* Bio */}
          <p style={{ fontSize: ".95rem", lineHeight: 1.8, color: "rgba(26,16,53,0.58)", marginBottom: 28, maxWidth: 480 }}>
            {member.bio}
          </p>

          {/* Highlight mini-grid */}
          <div className="solo-founder-highlights" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 28 }}>
            {HIGHLIGHTS.map(h => (
              <div key={h.label} style={{ background: "#F7F5FF", borderRadius: 14, padding: "14px 16px", border: "1px solid rgba(91,48,232,0.07)" }}>
                <div style={{ fontSize: "1.1rem", marginBottom: 6 }}>{h.icon}</div>
                <div style={{ fontSize: ".58rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(91,48,232,0.45)", marginBottom: 3 }}>{h.label}</div>
                <div style={{ fontSize: ".72rem", fontWeight: 600, color: "#1A1035", lineHeight: 1.5 }}>{h.value}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
            {member.tags.map(t => (
              <span key={t} style={{ padding: "4px 12px", borderRadius: 100, background: `${member.accent}10`, border: `1px solid ${member.accent}22`, fontSize: ".6rem", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: member.accent }}>{t}</span>
            ))}
          </div>

          {/* LinkedIn */}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 20px", borderRadius: 10, border: `1.5px solid ${member.accent}30`, background: `${member.accent}08`, fontSize: ".78rem", fontWeight: 700, color: member.accent, textDecoration: "none", width: "fit-content", transition: "all .2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = `${member.accent}18`; el.style.borderColor = member.accent; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = `${member.accent}08`; el.style.borderColor = `${member.accent}30`; }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              Connect on LinkedIn
            </a>
          )}
        </div>
      </div>

      {/* Quote strip below the card */}
      <div style={{ marginTop: 20, background: `linear-gradient(135deg, ${member.accent}0D 0%, rgba(91,48,232,0.04) 100%)`, border: `1px solid ${member.accent}18`, borderRadius: 16, padding: "20px 28px", display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ fontSize: "2rem", lineHeight: 1, color: member.accent, opacity: 0.4, fontFamily: "Georgia, serif", flexShrink: 0 }}>&ldquo;</div>
        <p style={{ fontSize: ".9rem", lineHeight: 1.75, color: "rgba(26,16,53,0.6)", fontStyle: "italic", margin: 0 }}>
          Building Tejasbyte with a singular focus — deliver world-class software engineering that makes a real difference for our clients&apos; businesses.
        </p>
        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: member.accent, opacity: 0.25, flexShrink: 0, letterSpacing: "-.02em" }}>{member.name.split(" ")[0]}</div>
      </div>
    </div>
  );
}

/* ─── Multi-founder card (used when founders.length > 1) ─── */
function FounderCard({ member }: { member: Member }) {
  return (
    <div style={{
      background: "#fff",
      border: "1.5px solid rgba(91,48,232,0.1)",
      borderRadius: 20,
      position: "relative", overflow: "hidden",
      transition: "border-color .3s, transform .3s, box-shadow .3s",
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.borderColor = `${member.accent}45`;
      el.style.transform = "translateY(-6px)";
      el.style.boxShadow = `0 20px 60px ${member.accent}14`;
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.borderColor = "rgba(91,48,232,0.1)";
      el.style.transform = "translateY(0)";
      el.style.boxShadow = "none";
    }}>
      <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: "14px 14px 0 0", background: `linear-gradient(145deg, ${member.accent}20 0%, ${member.accent}08 100%)`, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {member.photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={member.photo_url} alt={member.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
        ) : (
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, ${member.accent} 0%, ${member.accent}88 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", fontWeight: 800, color: "#fff", boxShadow: `0 8px 24px ${member.accent}40` }}>{member.initials}</div>
        )}
        <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)", border: `1px solid ${member.accent}30`, borderRadius: 100, padding: "2px 10px", fontSize: ".58rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: member.accent }}>
          {member.role.toLowerCase().includes("co-founder") ? "Co-Founder" : "Founder"}
        </div>
      </div>
      <div style={{ padding: "16px 20px 20px" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, color: "#1A1035", marginBottom: 3 }}>{member.name}</div>
        <div style={{ fontSize: ".75rem", fontWeight: 600, color: member.accent, marginBottom: 12 }}>{member.role}</div>
        <p style={{ fontSize: ".82rem", lineHeight: 1.7, color: "rgba(26,16,53,0.5)", marginBottom: 14 }}>{member.bio}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: member.linkedin ? 14 : 0 }}>
          {member.tags.map(t => (
            <span key={t} style={{ padding: "3px 9px", borderRadius: 100, background: `${member.accent}10`, border: `1px solid ${member.accent}25`, fontSize: ".58rem", fontWeight: 600, letterSpacing: ".05em", textTransform: "uppercase", color: member.accent }}>{t}</span>
          ))}
        </div>
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".72rem", fontWeight: 700, color: member.accent, textDecoration: "none" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        )}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, borderRadius: "0 0 20px 20px", background: `linear-gradient(90deg, ${member.accent}, ${member.accent}50)` }} />
      </div>
    </div>
  );
}

interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  tags: string[];
  linkedin: string | null;
  photo_url?: string | null;
  is_founder: boolean;
}

interface Props {
  founders: Member[];
}

const VALUES = [
  { icon: "👥", title: "Senior-Only Engineering",      desc: "Every engineer has solid production experience. No juniors learning on your codebase." },
  { icon: "🎯", title: "Full-Stack Ownership",          desc: "One team owns front end, back end, infrastructure, and deployment — start to finish." },
  { icon: "💬", title: "Direct Communication",          desc: "You talk directly to the engineers building your product. No account managers, no middlemen." },
  { icon: "📦", title: "Code You Keep Forever",         desc: "Clean architecture and documentation your team can confidently own and extend." },
  { icon: "⚡", title: "Speed Without Compromise",      desc: "We move fast — but never at the cost of security, reliability, or code quality." },
  { icon: "🌏", title: "Global Standards, Competitive Rates", desc: "Incorporated in the US and engineered in Nepal — we deliver world-class software at rates that make long-term partnership sustainable." },
];

export default function AboutPage({ founders }: Props) {
  return (
    <>
      <PageHero
        label="Who We Are"
        title="Built by engineers."
        highlight="Obsessed with craft."
        description="Tejasbyte Technologies is registered in Nepal with its main office in the United States, delivering scalable, secure, and intelligent software for businesses worldwide."
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

      {/* ── Leadership — founders from Supabase ── */}
      <section style={{ background: "#F7F5FF", padding: "80px 52px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
            <div>
              <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>Leadership</span>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-.03em", color: "#1A1035", marginTop: 16 }}>
                The founders behind{" "}
                <span className="gradient-text">Tejasbyte</span>
              </h2>
            </div>
            <Link href="/team" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: ".85rem", fontWeight: 700, color: "#5B30E8",
              textDecoration: "none", border: "1.5px solid rgba(91,48,232,0.25)",
              borderRadius: 10, padding: "10px 22px", transition: "background .2s, border-color .2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(91,48,232,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "#5B30E8"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.25)"; }}
            >
              Meet the full team →
            </Link>
          </div>

          {/* founder cards — solo featured layout vs multi-column grid */}
          {founders.length === 1 ? (
            <SoloFounderFeature member={founders[0]} />
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 24, marginBottom: 56,
            }}>
              {founders.map((member, i) => (
                <FounderCard key={i} member={member} />
              ))}
            </div>
          )}

          {/* ── Culture strip — fills space beautifully ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="stats-grid">
            {[
              { icon: "🌍", title: "Main Office in USA", desc: "Headquartered in the United States, registered in Nepal — global reach with local roots." },
              { icon: "⚡", title: "Senior Only", desc: "Every engineer brings 5+ years of production experience." },
              { icon: "🤝", title: "Full Ownership", desc: "Clean code, documentation, and complete handoff — always." },
              { icon: "📈", title: "Outcome Focused", desc: "We measure success by your business results, not just deliverables." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid rgba(91,48,232,0.08)", borderRadius: 16, padding: "24px 22px", transition: "border-color .25s, transform .25s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(91,48,232,0.25)"; el.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(91,48,232,0.08)"; el.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: ".9rem", fontWeight: 800, color: "#1A1035", marginBottom: 6 }}>{item.title}</div>
                <p style={{ fontSize: ".8rem", lineHeight: 1.7, color: "rgba(26,16,53,0.5)", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ background: "#fff", padding: "80px 52px" }}>
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
                  "Registered in Nepal with our main office in the United States — competitive rates, zero compromise on quality",
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
            <div style={{ background: "#F7F5FF", border: "1.5px solid rgba(91,48,232,0.12)", borderRadius: 24, padding: "40px 36px", boxShadow: "0 20px 60px rgba(91,48,232,0.06)" }}>
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
