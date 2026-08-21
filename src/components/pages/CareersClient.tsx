"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { HiringRow } from "@/lib/supabase/types";
import ApplyModal from "@/components/ApplyModal";

interface Props {
  roles: HiringRow[];
}

export default function CareersClient({ roles }: Props) {
  const [applyRole, setApplyRole] = useState<string | null>(null);
  const departments = [...new Set(roles.map(r => r.department))];

  return (
    <>
      {/* ── Hero ── */}
      <div style={{
        background: "linear-gradient(135deg, #0F1629 0%, #1A1035 100%)",
        padding: "120px 52px 72px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-15%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.22) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 24 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px rgba(34,197,94,0.8)" }} />
            We&apos;re Hiring
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.03em", color: "#fff", marginBottom: 20 }}>
            Build the future<br />
            <span className="gradient-text">with us</span>
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.78, color: "rgba(255,255,255,0.55)", maxWidth: 520, marginBottom: 32 }}>
            We&apos;re a senior-only engineering team registered in Nepal with our main office in the United States. If you care deeply about craft, we want to hear from you.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { val: roles.length, label: "Open Roles" },
              { val: "100%", label: "Remote-friendly" },
              { val: "Senior", label: "Engineers Only" },
            ].map(s => (
              <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#A78BFA" }}>{s.val}</span>
                <span style={{ fontSize: ".75rem", color: "rgba(255,255,255,0.35)", letterSpacing: ".04em" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Roles ── */}
      <section style={{ background: "#F7F5FF", padding: "72px 52px 100px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>

          {(!roles || roles.length === 0) ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🔭</div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1A1035", marginBottom: 12 }}>No open roles right now</h2>
              <p style={{ fontSize: ".9rem", color: "rgba(26,16,53,0.5)", maxWidth: 400, margin: "0 auto 24px" }}>
                We don&apos;t have any listed openings at the moment, but we&apos;re always interested in hearing from talented engineers.
              </p>
              <button
                onClick={() => setApplyRole("General Application")}
                className="btn-purple"
                style={{ border: "none", cursor: "pointer" }}>
                Send us your CV →
              </button>
            </div>
          ) : (
            <>
              {departments.map(dept => {
                const deptRoles = roles.filter(r => r.department === dept);
                return (
                  <div key={dept} style={{ marginBottom: 52 }}>
                    <h2 style={{ fontSize: ".9rem", fontWeight: 800, color: "#1A1035", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 4, height: 20, borderRadius: 2, background: "linear-gradient(135deg,#5B30E8,#A78BFA)", display: "inline-block", flexShrink: 0 }} />
                      {dept}
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {deptRoles.map(role => (
                        <RoleCard key={role.id} role={role} onApply={() => setApplyRole(role.title)} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </section>

      {/* ── Bottom CTA — navy dark ── */}
      <section style={{ background: "#fff", padding: "64px 52px 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="cta-strip" style={{
            background: "#2D3A6E",
            borderRadius: 20, padding: "52px 64px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: "-40%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-.02em" }}>
                Have a project in mind?
              </h2>
              <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,0.65)" }}>
                Tell us about your project — we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={() => setApplyRole("General Application")}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 32px", borderRadius: 10,
                background: "#fff", color: "#2D3A6E",
                border: "none", cursor: "pointer",
                fontSize: ".875rem", fontWeight: 700,
                flexShrink: 0, position: "relative", zIndex: 1,
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              Contact Us →
            </button>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {applyRole && (
        <ApplyModal role={applyRole} onClose={() => setApplyRole(null)} />
      )}
    </>
  );
}

/* ── Role Card ── */
function RoleCard({ role, onApply }: { role: HiringRow; onApply: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState<number>(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const CLAMP_HEIGHT = 260;

  // Measure actual content height after mount
  useEffect(() => {
    if (bodyRef.current) {
      setFullHeight(bodyRef.current.scrollHeight);
    }
  }, []);

  const needsToggle = fullHeight > CLAMP_HEIGHT;
  const currentHeight = fullHeight === 0
    ? "auto"                                        // before measure — let it be natural
    : expanded ? fullHeight : CLAMP_HEIGHT;

  return (
    <div style={{
      background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)",
      borderRadius: 16, overflow: "hidden",
      transition: "border-color .25s, box-shadow .25s",
    }}
    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(91,48,232,0.25)"; el.style.boxShadow = "0 8px 32px rgba(91,48,232,0.06)"; }}
    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(91,48,232,0.1)"; el.style.boxShadow = "none"; }}
    >
      <div style={{ padding: "28px 32px" }}>

        {/* Top row — always visible */}
        <div className="careers-role-top" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 18 }}>
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1035", marginBottom: 10, letterSpacing: "-.01em" }}>
              {role.title}
            </h3>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[
                { icon: "📍", val: role.location },
                { icon: "⏱️", val: role.type },
                { icon: "🎯", val: role.experience },
                ...(role.salary_range ? [{ icon: "💰", val: role.salary_range }] : []),
              ].filter(i => i.val).map(item => (
                <span key={item.val} style={{ fontSize: ".78rem", color: "rgba(26,16,53,0.5)", display: "flex", alignItems: "center", gap: 4 }}>
                  {item.icon} {item.val}
                </span>
              ))}
            </div>
          </div>
          <button
            className="careers-apply-btn"
            onClick={onApply}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 24px", borderRadius: 10,
              background: "#2D3A6E", color: "#fff",
              border: "none", cursor: "pointer",
              fontSize: ".82rem", fontWeight: 700,
              boxShadow: "0 4px 16px rgba(45,58,110,0.4)",
              flexShrink: 0, transition: "background .2s, box-shadow .2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0F1629"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(45,58,110,0.5)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#2D3A6E"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(45,58,110,0.4)"; }}
          >
            Apply Now →
          </button>
        </div>

        {/* ── Animated accordion body ── */}
        <div
          style={{
            height: currentHeight,
            overflow: "hidden",
            // Only animate after first measure (avoid jump on initial render)
            transition: fullHeight > 0 ? "height .45s cubic-bezier(.16,1,.3,1)" : "none",
            position: "relative",
          }}
        >
          <div ref={bodyRef}>
            {role.description && (
              <div
                className="role-description"
                dangerouslySetInnerHTML={{ __html: role.description }}
                style={{ fontSize: ".875rem", lineHeight: 1.78, color: "rgba(26,16,53,0.6)", marginBottom: (role.requirements?.length || role.benefits?.length) ? 20 : 0 }}
              />
            )}

            {role.requirements?.length > 0 && (
              <div style={{ marginBottom: (role.benefits?.length || role.tags?.length) ? 20 : 0 }}>
                <p style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(26,16,53,0.3)", marginBottom: 10 }}>Requirements</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {role.requirements.map((req: string, i: number) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: ".875rem", color: "rgba(26,16,53,0.6)" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#5B30E8", flexShrink: 0, marginTop: 8 }} />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {role.benefits && role.benefits.length > 0 && (
              <div style={{ marginBottom: role.tags?.length ? 20 : 0 }}>
                <p style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(26,16,53,0.3)", marginBottom: 10 }}>Benefits</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {role.benefits.map((b: string, i: number) => (
                    <span key={i} style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "5px 12px", borderRadius: 100,
                      background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)",
                      fontSize: ".75rem", fontWeight: 600, color: "#15803D",
                    }}>
                      <svg width="10" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5l3.5 3.5L11 1" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {role.tags?.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {role.tags.map((t: string) => <span key={t} className="tag-pill">{t}</span>)}
              </div>
            )}
          </div>

          {/* Fade overlay — fades out when expanded */}
          {needsToggle && (
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: 72,
              background: "linear-gradient(to bottom, transparent 0%, #fff 100%)",
              pointerEvents: "none",
              opacity: expanded ? 0 : 1,
              transition: "opacity .3s ease",
            }} />
          )}
        </div>

        {/* Show more / less toggle — only when content overflows */}
        {needsToggle && (
          <button
            onClick={() => setExpanded(v => !v)}
            style={{
              marginTop: 10,
              display: "inline-flex", alignItems: "center", gap: 5,
              background: "none", border: "none", cursor: "pointer",
              fontSize: ".78rem", fontWeight: 700,
              color: "#5B30E8", padding: "4px 0",
              transition: "opacity .2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.65"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            <svg
              width="13" height="13" viewBox="0 0 12 12" fill="none"
              style={{
                transition: "transform .35s cubic-bezier(.16,1,.3,1)",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path d="M2 4l4 4 4-4" stroke="#5B30E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {expanded ? "Show less" : "Show more"}
          </button>
        )}

      </div>
    </div>
  );
}
