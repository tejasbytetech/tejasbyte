"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { val: 30,   suf: "+",   label: "Projects Delivered",      sub: "and growing"                },
  { val: 98,   suf: "%",   label: "Client Satisfaction",     sub: "average rating"             },
  { val: 5,    suf: "+",   label: "Years Experience",        sub: "in the industry"            },
  { val: 99,   suf: ".9%", label: "Uptime SLA",              sub: "across all platforms"       },
];

const WHY_US = [
  {
    icon: "👥",
    title: "Senior-Only Engineering",
    desc: "Every engineer has 5+ years of production experience. No juniors learning on your codebase.",
  },
  {
    icon: "🎯",
    title: "Full-Stack Ownership",
    desc: "One team owns front end, back end, infrastructure, and deployment — from kickoff to launch.",
  },
  {
    icon: "💬",
    title: "Transparent Communication",
    desc: "Daily written updates, shared dashboards, and a dedicated channel where you get real answers.",
  },
  {
    icon: "📦",
    title: "Code You Keep Forever",
    desc: "Clean architecture, comprehensive tests, and documentation your team can actually work with.",
  },
];

function Counter({ to, suf, run }: { to: number; suf: string; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let v = 0;
    const step = to / (1200 / 16);
    const id = setInterval(() => {
      v += step;
      if (v >= to) { setN(to); clearInterval(id); }
      else setN(Math.floor(v));
    }, 16);
    return () => clearInterval(id);
  }, [run, to]);
  return <>{n}{suf}</>;
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          setRun(true);
          e.target.classList.add("visible");
        }
      }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => io.observe(el));
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{
      background: "#F7F5FF",
      padding: "120px 0 130px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Bg blob */}
      <div style={{
        position: "absolute", top: "20%", right: "-5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.07) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 52px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>About Us</span>
          <h2 style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800, lineHeight: 1.12,
            letterSpacing: "-.03em",
            color: "#1A1035",
            marginTop: 20, marginBottom: 18,
          }}>
            Built by Engineers.{" "}
            <span className="gradient-text">Obsessed with Craft.</span>
          </h2>
          <p style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: ".95rem", lineHeight: 1.8,
            color: "rgba(26,16,53,0.55)",
            maxWidth: 480, margin: "0 auto",
          }}>
            We take on a limited number of projects so every client gets the full
            attention of senior engineers, not a rotating cast of juniors.
          </p>
        </div>

        {/* Stats row */}
        <div className="reveal" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          marginBottom: 72,
        }}>
          {STATS.map(({ val, suf, label, sub }, i) => (
            <div key={label} className={`stat-card d${i + 1}`}>
              <div style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                fontWeight: 800,
                color: "#5B30E8",
                lineHeight: 1,
                marginBottom: 8,
                letterSpacing: "-.04em",
              }}>
                <Counter to={val} suf={suf} run={run} />
              </div>
              <div style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: ".9rem", fontWeight: 700,
                color: "#1A1035", marginBottom: 4,
              }}>{label}</div>
              <div style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: ".75rem", color: "rgba(26,16,53,0.4)",
                letterSpacing: ".02em",
              }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Why us grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {WHY_US.map((p, i) => (
            <div
              key={p.title}
              className={`reveal d${i + 1}`}
              style={{
                background: "#fff",
                border: "1.5px solid rgba(91,48,232,0.1)",
                borderRadius: 20,
                padding: "32px 28px",
                display: "flex", gap: 20,
                transition: "border-color .3s, box-shadow .3s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.3)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(91,48,232,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                background: "rgba(91,48,232,0.08)",
                border: "1.5px solid rgba(91,48,232,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem",
              }}>
                {p.icon}
              </div>
              <div>
                <h4 style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: "1rem", fontWeight: 700,
                  color: "#1A1035", marginBottom: 8,
                }}>{p.title}</h4>
                <p style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: ".875rem", lineHeight: 1.75,
                  color: "rgba(26,16,53,0.55)",
                }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="reveal" style={{
          marginTop: 72,
          background: "linear-gradient(135deg, #5B30E8 0%, #7C5CFC 100%)",
          borderRadius: 24,
          padding: "52px 56px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 24,
          position: "relative", overflow: "hidden",
        }}>
          {/* Decorative blobs inside CTA */}
          <div style={{
            position: "absolute", top: "-50%", right: "-10%",
            width: 300, height: 300, borderRadius: "50%",
            background: "rgba(255,255,255,0.06)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "-40%", left: "30%",
            width: 200, height: 200, borderRadius: "50%",
            background: "rgba(255,255,255,0.04)", pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800, letterSpacing: "-.02em",
              color: "#fff", lineHeight: 1.15, marginBottom: 10,
            }}>
              Ready to build something great?
            </h3>
            <p style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: ".9rem", color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
            }}>
              We take on a limited number of projects — you get our full attention.
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "14px 36px", borderRadius: 10,
              background: "#fff", color: "#5B30E8",
              border: "none", cursor: "none",
              fontFamily: '"Inter",sans-serif',
              fontSize: ".85rem", fontWeight: 700,
              letterSpacing: ".02em",
              transition: "transform .2s, box-shadow .2s",
              flexShrink: 0, position: "relative", zIndex: 1,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >Get in Touch →</button>
        </div>
      </div>
    </section>
  );
}
