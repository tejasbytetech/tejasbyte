"use client";
import Link from "next/link";
import { TEAM } from "@/lib/team-data";

const LINKEDIN_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function TeamPageClient() {
  const founders = TEAM.filter(m => m.isFounder);
  const core     = TEAM.filter(m => !m.isFounder && !m.isPlaceholder);
  const openings = TEAM.filter(m => m.isPlaceholder);

  return (
    <>
      {/* ── Hero ── */}
      <div style={{
        background: "linear-gradient(135deg, #0F1629 0%, #1A1035 100%)",
        position: "relative", overflow: "hidden",
        minHeight: 320,
        display: "flex", alignItems: "flex-end",
        padding: "120px 52px 56px",
      }}>
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.25) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.15) 0%, transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#A78BFA" }} />
            The People
          </span>
          <h1 style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-.03em", color: "#fff", marginBottom: 16 }}>
            Meet the team
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: 480, lineHeight: 1.75 }}>
            A senior-only engineering team incorporated in the United States, operating from Kathmandu, Nepal — building software that scales globally.
          </p>
        </div>
      </div>

      {/* ── Founders ── */}
      <section style={{ background: "#fff", padding: "72px 52px 56px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionTitle>Founders &amp; Leadership</SectionTitle>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }}>
            {founders.map((m, i) => (
              <div key={i}>
                {/* Photo box */}
                <div style={{
                  width: "100%", aspectRatio: "1", borderRadius: 16, marginBottom: 14,
                  background: `linear-gradient(145deg, ${m.accent}20 0%, ${m.accent}08 100%)`,
                  border: `1.5px solid ${m.accent}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  <Avatar initials={m.initials} accent={m.accent} size={72} fontSize="1.4rem" />
                  {m.isFounder && (
                    <div style={{ position: "absolute", top: 10, right: 10, background: `${m.accent}18`, border: `1px solid ${m.accent}30`, borderRadius: 100, padding: "2px 8px", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: m.accent }}>
                      Founder
                    </div>
                  )}
                </div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#1A1035", marginBottom: 3 }}>{m.name}</div>
                <div style={{ fontSize: ".78rem", fontWeight: 600, color: m.accent, marginBottom: 10 }}>{m.role}</div>
                <p style={{ fontSize: ".82rem", lineHeight: 1.7, color: "rgba(26,16,53,0.5)", marginBottom: 12 }}>{m.bio}</p>
                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
                  {m.tags.map(t => (
                    <span key={t} style={{ padding: "2px 8px", borderRadius: 100, background: `${m.accent}10`, border: `1px solid ${m.accent}20`, fontSize: ".6rem", fontWeight: 600, letterSpacing: ".05em", textTransform: "uppercase", color: m.accent }}>{t}</span>
                  ))}
                </div>
                {/* Socials */}
                <SocialRow linkedin={m.linkedin} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(91,48,232,0.12) 30%, rgba(91,48,232,0.12) 70%, transparent)", margin: "0 52px" }} />

      {/* ── Core Team ── */}
      <section style={{ background: "#F7F5FF", padding: "56px 52px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionTitle>Engineering &amp; Operations</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }} className="blog-grid">
            {core.map((m, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  width: "100%", aspectRatio: "1", borderRadius: 14, marginBottom: 12,
                  background: `linear-gradient(145deg, ${m.accent}15 0%, ${m.accent}05 100%)`,
                  border: `1.5px solid ${m.accent}18`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Avatar initials={m.initials} accent={m.accent} size={56} fontSize="1rem" />
                </div>
                <div style={{ fontSize: ".9rem", fontWeight: 800, color: "#1A1035", marginBottom: 3 }}>{m.name}</div>
                <div style={{ fontSize: ".72rem", fontWeight: 600, color: m.accent, marginBottom: 10 }}>{m.role}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", marginBottom: 10 }}>
                  {m.tags.slice(0, 2).map(t => (
                    <span key={t} style={{ padding: "2px 7px", borderRadius: 100, background: `${m.accent}10`, fontSize: ".58rem", fontWeight: 600, color: m.accent, letterSpacing: ".04em", textTransform: "uppercase" }}>{t}</span>
                  ))}
                </div>
                <SocialRow linkedin={m.linkedin} center />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(91,48,232,0.12) 30%, rgba(91,48,232,0.12) 70%, transparent)", margin: "0 52px" }} />

      {/* ── Open Positions ── */}
      <section style={{ background: "#fff", padding: "56px 52px 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionTitle>We&apos;re Hiring</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }} className="blog-grid">
            {openings.map((m, i) => (
              <div key={i} style={{
                background: "#F7F5FF",
                border: "1.5px dashed rgba(91,48,232,0.2)",
                borderRadius: 14, padding: "24px 16px",
                textAlign: "center",
                transition: "border-color .2s, background .2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#5B30E8"; (e.currentTarget as HTMLElement).style.background = "rgba(91,48,232,0.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.2)"; (e.currentTarget as HTMLElement).style.background = "#F7F5FF"; }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "rgba(91,48,232,0.06)",
                  border: "2px dashed rgba(91,48,232,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 12px",
                  fontSize: "1.3rem", color: "rgba(91,48,232,0.35)",
                }}>+</div>
                <div style={{ fontSize: ".78rem", fontWeight: 700, color: "rgba(26,16,53,0.35)", marginBottom: 4 }}>Open Role</div>
                <div style={{ fontSize: ".78rem", fontWeight: 700, color: "#5B30E8", marginBottom: 12, lineHeight: 1.4 }}>{m.role}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
                  {m.tags.map(t => (
                    <span key={t} style={{ padding: "2px 7px", borderRadius: 100, background: "rgba(91,48,232,0.08)", fontSize: ".58rem", fontWeight: 600, color: "#5B30E8", letterSpacing: ".04em", textTransform: "uppercase" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hiring CTA */}
          <div style={{
            marginTop: 48,
            background: "linear-gradient(135deg, #5B30E8 0%, #7C5CFC 100%)",
            borderRadius: 20, padding: "44px 52px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden",
          }} className="cta-strip">
            <div style={{ position: "absolute", top: "-40%", right: "-5%", width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontSize: "clamp(1.3rem,2.5vw,2rem)", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-.02em" }}>Interested in joining us?</h3>
              <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                We&apos;re always looking for senior engineers who care deeply about craft. Send us your work.
              </p>
            </div>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 32px", borderRadius: 10, background: "#fff", color: "#5B30E8",
              fontSize: ".875rem", fontWeight: 700, textDecoration: "none",
              position: "relative", zIndex: 1, flexShrink: 0,
              transition: "transform .2s, box-shadow .2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Shared sub-components ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
      <span style={{ width: 4, height: 24, borderRadius: 2, background: "linear-gradient(135deg,#5B30E8,#A78BFA)", display: "inline-block", flexShrink: 0 }} />
      <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.01em", margin: 0 }}>{children}</h2>
    </div>
  );
}

function Avatar({ initials, accent, size, fontSize }: { initials: string; accent: string; size: number; fontSize: string }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: `linear-gradient(135deg, ${accent} 0%, ${accent}88 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize, fontWeight: 800, color: "#fff",
      boxShadow: `0 8px 24px ${accent}40`,
      flexShrink: 0,
    }}>{initials}</div>
  );
}

function SocialRow({ linkedin, center }: { linkedin: string | null; center?: boolean }) {
  if (!linkedin) return null;
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: center ? "center" : "flex-start" }}>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
        style={{ width: 30, height: 30, borderRadius: 8, border: "1.5px solid #E2E4EA", display: "flex", alignItems: "center", justifyContent: "center", color: "#6B7280", textDecoration: "none", transition: "all .2s" }}
        onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = "#0077B5"; a.style.color = "#0077B5"; a.style.background = "rgba(0,119,181,0.06)"; }}
        onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = "#E2E4EA"; a.style.color = "#6B7280"; a.style.background = "transparent"; }}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  );
}
