"use client";
import Link from "next/link";
import { SocialLinks } from "@/lib/social-url";
import SoloFounderFeature from "@/components/SoloFounderFeature";

interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  tags: string[];
  linkedin: string | null;
  social_urls?: string[];
  photo_url?: string | null;
  is_founder: boolean;
  is_placeholder: boolean;
  sort_order: number;
}

interface Props { members: Member[] }

function allSocials(m: Member) {
  return [
    ...(m.linkedin ? [m.linkedin] : []),
    ...(m.social_urls ?? []),
  ].filter(Boolean);
}

export default function TeamPageClient({ members }: Props) {
  const founders = members.filter(m => m.is_founder);
  const core     = members.filter(m => !m.is_founder && !m.is_placeholder);
  const openings = members.filter(m => m.is_placeholder);

  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <div style={{
        background: "linear-gradient(135deg, #0F1629 0%, #1A1035 100%)",
        position: "relative", overflow: "hidden",
        padding: "140px 0 80px",
      }}>
        {/* blobs */}
        <div style={{ position: "absolute", top: "-15%", right: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.22) 0%, transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-5%", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.14) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* pill */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 100, border: "1px solid rgba(167,139,250,0.3)", background: "rgba(167,139,250,0.08)", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#A78BFA" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A78BFA", boxShadow: "0 0 8px rgba(167,139,250,0.8)" }} />
              The People Behind Tejasbyte
            </span>
          </div>

          {/* headline */}
          <h1 style={{ fontSize: "clamp(2.4rem,5vw,4.4rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-.04em", color: "#fff", marginBottom: 24, maxWidth: 700 }}>
            Built by engineers.<br />
            <span style={{ background: "linear-gradient(135deg, #7C5CFC 0%, #A78BFA 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Driven by craft.
            </span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", maxWidth: 520, lineHeight: 1.78, marginBottom: 40 }}>
            A senior-only team incorporated in the United States, engineering from Kathmandu, Nepal — shipping software that scales globally.
          </p>

          {/* stats row */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { val: "15+", label: "Team Members" },
              { val: "30+", label: "Projects Shipped" },
              { val: "98%", label: "Client Satisfaction" },
              { val: "5+",  label: "Years of Excellence" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#A78BFA", lineHeight: 1, letterSpacing: "-.04em" }}>{s.val}</div>
                <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,0.35)", marginTop: 4, letterSpacing: ".04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════ FOUNDERS ════════════════ */}
      <section style={{ background: "#fff", padding: "80px 0 72px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* section header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 4, height: 28, borderRadius: 2, background: "linear-gradient(135deg,#5B30E8,#A78BFA)", display: "inline-block" }} />
                <span style={{ fontSize: ".7rem", fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase", color: "#5B30E8" }}>Leadership</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#1A1035", letterSpacing: "-.03em", lineHeight: 1.1 }}>
                Founders &amp; Leadership
              </h2>
            </div>
          </div>

          {founders.length === 1 ? (
            <SoloFounderFeature member={{
              ...founders[0],
              linkedin: founders[0].linkedin,
              social_urls: founders[0].social_urls,
            }} showQuote={false} />
          ) : (
            <div className="team-founders-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
              {founders.map((m, i) => (
                <FounderCard key={i} m={m} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ════════════════ CORE TEAM ════════════════ */}
      {core.length > 0 && (
        <section style={{ background: "#F7F5FF", padding: "72px 0 64px" }}>
          <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ width: 4, height: 28, borderRadius: 2, background: "linear-gradient(135deg,#5B30E8,#A78BFA)", display: "inline-block" }} />
              <span style={{ fontSize: ".7rem", fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase", color: "#5B30E8" }}>Engineering &amp; Operations</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1A1035", letterSpacing: "-.03em", marginBottom: 40 }}>
              The builders
            </h2>
            <div className="team-core-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
              {core.map((m, i) => (
                <CoreCard key={i} m={m} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════ OPEN ROLES ════════════════ */}
      {openings.length > 0 && (
        <section style={{ background: "#fff", padding: "72px 0 80px" }}>
          <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px rgba(34,197,94,0.7)", display: "inline-block" }} />
                  <span style={{ fontSize: ".7rem", fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase", color: "#22C55E" }}>We&apos;re Hiring</span>
                </div>
                <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1A1035", letterSpacing: "-.03em" }}>
                  Open positions
                </h2>
              </div>
              <Link href="/careers" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 22px", borderRadius: 10,
                border: "1.5px solid rgba(91,48,232,0.25)", color: "#5B30E8",
                fontSize: ".85rem", fontWeight: 700, textDecoration: "none",
                transition: "all .2s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(91,48,232,0.06)"; el.style.borderColor = "#5B30E8"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.borderColor = "rgba(91,48,232,0.25)"; }}>
                View all on Careers →
              </Link>
            </div>

            <div className="team-core-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
              {openings.map((m, i) => (
                <Link key={i} href="/careers" style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "linear-gradient(145deg, #F7F5FF 0%, #fff 100%)",
                    border: "1.5px dashed rgba(91,48,232,0.2)",
                    borderRadius: 16, padding: "28px 20px",
                    textAlign: "center", height: "100%",
                    transition: "all .25s cubic-bezier(.16,1,.3,1)",
                    cursor: "pointer", position: "relative", overflow: "hidden",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#5B30E8"; el.style.background = "linear-gradient(145deg,rgba(91,48,232,0.06),rgba(91,48,232,0.02))"; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 16px 40px rgba(91,48,232,0.1)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(91,48,232,0.2)"; el.style.background = "linear-gradient(145deg,#F7F5FF,#fff)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(91,48,232,0.08)", border: "1.5px dashed rgba(91,48,232,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "1.3rem", color: "#5B30E8" }}>+</div>
                    <div style={{ fontSize: ".6rem", fontWeight: 800, color: "rgba(26,16,53,0.3)", marginBottom: 6, letterSpacing: ".1em", textTransform: "uppercase" }}>Open Role</div>
                    <div style={{ fontSize: ".82rem", fontWeight: 800, color: "#5B30E8", marginBottom: 14, lineHeight: 1.4 }}>{m.role}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", marginBottom: 14 }}>
                      {m.tags.map(t => (
                        <span key={t} style={{ padding: "2px 8px", borderRadius: 100, background: "rgba(91,48,232,0.08)", fontSize: ".58rem", fontWeight: 700, color: "#5B30E8", letterSpacing: ".04em", textTransform: "uppercase" }}>{t}</span>
                      ))}
                    </div>
                    <span style={{ fontSize: ".72rem", color: "rgba(91,48,232,0.6)", fontWeight: 700 }}>Apply Now →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════ CTA ════════════════ */}
      <section style={{ background: "#F7F5FF", padding: "64px 0 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="cta-strip" style={{
            background: "#2D3A6E",
            borderRadius: 20, padding: "52px 64px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: "-40%", right: "-5%", width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-.02em" }}>
                Interested in joining us?
              </h3>
              <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>
                We&apos;re always looking for senior engineers who care deeply about craft.
              </p>
            </div>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 32px", borderRadius: 10,
              background: "#fff", color: "#2D3A6E",
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

/* ─── Founder Card — large photo + overlay name on hover ─── */
function FounderCard({ m }: { m: Member }) {
  const socials = [
    ...(m.linkedin ? [m.linkedin] : []),
    ...(m.social_urls ?? []),
  ].filter(Boolean);

  return (
    <div style={{
      background: "#fff",
      border: "1.5px solid rgba(91,48,232,0.08)",
      borderRadius: 20, overflow: "hidden",
      transition: "border-color .3s, box-shadow .3s, transform .3s",
      position: "relative",
    }}
    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${m.accent}35`; el.style.boxShadow = `0 20px 60px ${m.accent}14`; el.style.transform = "translateY(-6px)"; }}
    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(91,48,232,0.08)"; el.style.boxShadow = "none"; el.style.transform = "translateY(0)"; }}>

      {/* Photo — 4:3 rectangle */}
      <div style={{ width: "100%", aspectRatio: "4/3", position: "relative", overflow: "hidden", background: `linear-gradient(145deg,${m.accent}18,${m.accent}06)` }}>
        {m.photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={m.photo_url} alt={m.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg,${m.accent} 0%,${m.accent}88 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", fontWeight: 800, color: "#fff", boxShadow: `0 12px 32px ${m.accent}45` }}>{m.initials}</div>
          </div>
        )}
        {/* Founder badge — use actual role label */}
        {m.is_founder && (
          <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", border: `1px solid ${m.accent}30`, borderRadius: 100, padding: "3px 12px", fontSize: ".6rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: m.accent }}>
            {m.role.toLowerCase().includes("co-founder") ? "Co-Founder" : "Founder"}
          </div>
        )}
        {/* Accent bottom bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${m.accent},${m.accent}50)` }} />
      </div>

      {/* Content */}
      <div style={{ padding: "24px 24px 20px" }}>
        <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#1A1035", marginBottom: 3, letterSpacing: "-.01em" }}>{m.name}</div>
        <div style={{ fontSize: ".75rem", fontWeight: 700, color: m.accent, marginBottom: 12, letterSpacing: ".02em" }}>{m.role}</div>
        <p style={{ fontSize: ".82rem", lineHeight: 1.72, color: "rgba(26,16,53,0.52)", marginBottom: 16 }}>{m.bio}</p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: socials.length ? 16 : 0 }}>
          {m.tags.map(t => (
            <span key={t} style={{ padding: "3px 9px", borderRadius: 100, background: `${m.accent}10`, border: `1px solid ${m.accent}20`, fontSize: ".58rem", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: m.accent }}>{t}</span>
          ))}
        </div>

        {/* Socials */}
        {socials.length > 0 && <SocialLinks urls={socials} size={32} />}
      </div>
    </div>
  );
}

/* ─── Core Team Card — compact square photo ─── */
function CoreCard({ m }: { m: Member }) {
  const socials = [
    ...(m.linkedin ? [m.linkedin] : []),
    ...(m.social_urls ?? []),
  ].filter(Boolean);

  return (
    <div style={{
      background: "#fff",
      border: "1.5px solid rgba(91,48,232,0.08)",
      borderRadius: 16, overflow: "hidden",
      transition: "border-color .25s, box-shadow .25s, transform .25s",
    }}
    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${m.accent}30`; el.style.boxShadow = `0 12px 32px ${m.accent}12`; el.style.transform = "translateY(-4px)"; }}
    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(91,48,232,0.08)"; el.style.boxShadow = "none"; el.style.transform = "translateY(0)"; }}>

      {/* Square photo */}
      <div style={{ width: "100%", aspectRatio: "1", position: "relative", overflow: "hidden", background: `linear-gradient(145deg,${m.accent}14,${m.accent}04)` }}>
        {m.photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={m.photo_url} alt={m.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg,${m.accent} 0%,${m.accent}88 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 800, color: "#fff", boxShadow: `0 8px 24px ${m.accent}40` }}>{m.initials}</div>
          </div>
        )}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${m.accent},${m.accent}40)` }} />
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px 16px" }}>
        <div style={{ fontSize: ".88rem", fontWeight: 800, color: "#1A1035", marginBottom: 2 }}>{m.name}</div>
        <div style={{ fontSize: ".7rem", fontWeight: 600, color: m.accent, marginBottom: 10 }}>{m.role}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: socials.length ? 10 : 0 }}>
          {m.tags.slice(0, 2).map(t => (
            <span key={t} style={{ padding: "2px 7px", borderRadius: 100, background: `${m.accent}10`, fontSize: ".56rem", fontWeight: 700, color: m.accent, letterSpacing: ".04em", textTransform: "uppercase" }}>{t}</span>
          ))}
        </div>
        {socials.length > 0 && <SocialLinks urls={socials} size={26} />}
      </div>
    </div>
  );
}
