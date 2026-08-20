"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const BADGES = [
  { icon: "🤖", label: "AI & ML",           top: "2%",    right: "0%",   delay: 0   },
  { icon: "🌐", label: "Web Apps",           top: "18%",   right: "-4%",  delay: 0.4 },
  { icon: "☁️", label: "Cloud Infra",        bottom: "8%", right: "0%",   delay: 0.8 },
  { icon: "🔗", label: "API & Integrations", bottom: "22%",right: "-2%",  delay: 1.2 },
  { icon: "📱", label: "Mobile Apps",        top: "12%",   left: "-4%",   delay: 0.2 },
  { icon: "🔒", label: "Security",           top: "38%",   left: "-6%",   delay: 0.6 },
  { icon: "🗄️", label: "Databases",          bottom: "18%",left: "-4%",   delay: 1.0 },
  { icon: "🧠", label: "ML Pipelines",       bottom: "2%", left: "8%",    delay: 1.4 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef    = useRef<HTMLDivElement>(null);
  const blob2Ref   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rx = e.clientX / window.innerWidth  - 0.5;
      const ry = e.clientY / window.innerHeight - 0.5;
      if (blobRef.current)
        blobRef.current.style.transform = `translate(${rx * -30}px, ${ry * -20}px)`;
      if (blob2Ref.current)
        blob2Ref.current.style.transform = `translate(${rx * 20}px, ${ry * 14}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>("[data-hero]");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity .85s ease ${i * .13 + .15}s, transform .85s cubic-bezier(.16,1,.3,1) ${i * .13 + .15}s`;
      requestAnimationFrame(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; });
    });
  }, []);

  return (
    <section ref={sectionRef} className="hero-section" style={{
      position: "relative",
      height: "100vh",
      minHeight: 600,
      maxHeight: 900,
      background: "#0F1629",
      overflow: "hidden",
      display: "flex", alignItems: "center",
    }}>

      {/* Blobs */}
      <div ref={blobRef} style={{
        position: "absolute", top: "5%", right: "-12%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.22) 0%, rgba(124,92,252,0.08) 50%, transparent 75%)",
        filter: "blur(80px)", pointerEvents: "none", transition: "transform .15s linear",
      }} />
      <div ref={blob2Ref} style={{
        position: "absolute", bottom: "-10%", left: "-8%",
        width: 550, height: 550, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.18) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none", transition: "transform .15s linear",
      }} />
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      <div className="hero-grid" style={{
        position: "relative", zIndex: 2,
        width: "100%", maxWidth: 1280, margin: "0 auto",
        padding: "0 52px",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 60, alignItems: "center",
        height: "100%",
      }}>

        {/* Left */}
        <div className="hero-left">
          <div data-hero style={{ marginBottom: 28 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 16px", borderRadius: 100,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.07)",
              fontSize: ".68rem", fontWeight: 700,
              letterSpacing: ".14em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#A78BFA", display: "block", boxShadow: "0 0 6px rgba(167,139,250,0.8)" }} />
              Innovate · Build · Elevate
            </span>
          </div>

          <h1 data-hero style={{
            fontSize: "clamp(2rem,4vw,3.8rem)",
            fontWeight: 800, lineHeight: 1.12,
            letterSpacing: "-.03em", color: "#fff",
            marginBottom: 16,
          }}>
            Building Innovative<br />
            Solutions for a{" "}
            <span className="gradient-text">Smarter Tomorrow</span>
          </h1>

          <p data-hero style={{
            fontSize: ".95rem", lineHeight: 1.75,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 420, marginBottom: 28,
          }}>
            Tejasbyte Technologies delivers scalable, secure and intelligent
            software solutions that drive growth and transform businesses.
          </p>

          <div data-hero style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 32px", borderRadius: 10,
                background: "#fff", color: "#5B30E8",
                border: "none",
                fontSize: ".875rem", fontWeight: 700,
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                textDecoration: "none",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)"; }}
            >Get Started</Link>
            <Link
              href="/portfolio"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 30px", borderRadius: 10,
                background: "transparent", color: "rgba(255,255,255,0.85)",
                border: "1.5px solid rgba(255,255,255,0.22)",
                fontSize: ".875rem", fontWeight: 600,
                textDecoration: "none",
                transition: "all .25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.55)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >See Our Work</Link>
          </div>

          {/* Stats — small inline row */}
          <div data-hero className="hero-stats" style={{
            display: "flex", gap: 32, marginTop: 36,
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            flexWrap: "wrap",
          }}>
            {[
              { val: "30+", label: "Projects" },
              { val: "98%", label: "Satisfaction" },
              { val: "5+",  label: "Years"        },
            ].map(s => (
              <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#A78BFA", lineHeight: 1 }}>{s.val}</span>
                <span style={{ fontSize: ".72rem", color: "rgba(255,255,255,0.4)", letterSpacing: ".04em" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — orbital visual */}
        <div className="hero-visual" style={{
          position: "relative", display: "flex",
          alignItems: "center", justifyContent: "center", minHeight: 480,
        }}>
          {/* ── Desktop: full orbital (hidden on mobile via CSS) ── */}
          <div className="hero-visual-desktop">
            {/* Rings */}
            <div style={{ position: "absolute", width: 440, height: 440, borderRadius: "50%", border: "1px solid rgba(124,92,252,0.15)", animation: "pulse-ring 3.5s ease-out infinite", pointerEvents: "none" }} />
            <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(124,92,252,0.2)", animation: "pulse-ring 3.5s ease-out .9s infinite", pointerEvents: "none" }} />

            {/* Centre logo */}
            <div style={{
              width: 230, height: 230, borderRadius: "50%",
              background: "linear-gradient(145deg, rgba(91,48,232,0.35) 0%, rgba(15,22,41,0.95) 60%)",
              border: "2px solid rgba(124,92,252,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 60px rgba(91,48,232,0.45), 0 20px 80px rgba(0,0,0,0.5)",
              position: "relative", zIndex: 2,
            }}>
              <Image
                src="/finallogos/transparent-logo.png"
                alt="Tejasbyte Technologies"
                width={180} height={100}
                style={{ objectFit: "contain", animation: "float2 5s ease-in-out infinite", width: "78%", height: "auto" }}
                priority
              />
            </div>

            {/* Orbiting dots */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <div key={i} style={{
                position: "absolute", width: 0, height: 0,
                animation: `spin-slow ${20 + i * 2}s linear infinite`,
                animationDirection: i % 2 === 0 ? "normal" : "reverse",
              }}>
                <div style={{
                  position: "absolute",
                  width: i % 2 === 0 ? 10 : 7, height: i % 2 === 0 ? 10 : 7,
                  borderRadius: "50%",
                  background: i % 3 === 0 ? "#7C5CFC" : i % 3 === 1 ? "#A78BFA" : "rgba(255,255,255,0.25)",
                  border: `2px solid ${i % 3 === 0 ? "rgba(124,92,252,0.7)" : "rgba(167,139,250,0.5)"}`,
                  transform: `rotate(${deg}deg) translateX(152px)`,
                  boxShadow: i % 3 === 0 ? "0 0 14px rgba(124,92,252,0.9)" : "none",
                }} />
              </div>
            ))}

            {/* Floating badges */}
            {BADGES.map((b, i) => (
              <div key={i} style={{
                position: "absolute",
                ...(b.top    ? { top:    b.top    } : {}),
                ...(b.bottom ? { bottom: b.bottom } : {}),
                ...(b.left   ? { left:   b.left   } : {}),
                ...(b.right  ? { right:  b.right  } : {}),
                background: "rgba(255,255,255,0.09)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 100,
                padding: "9px 16px",
                display: "flex", alignItems: "center", gap: 8,
                boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                animation: `float${i % 2 === 0 ? "" : "2"} ${4 + i * .5}s ease-in-out infinite`,
                animationDelay: `${b.delay}s`,
                zIndex: 3, whiteSpace: "nowrap",
              }}>
                <span style={{ fontSize: ".95rem" }}>{b.icon}</span>
                <span style={{ fontSize: ".72rem", fontWeight: 600, color: "rgba(255,255,255,0.88)" }}>{b.label}</span>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#A78BFA", flexShrink: 0, boxShadow: "0 0 6px rgba(167,139,250,0.9)" }} />
              </div>
            ))}
          </div>

          {/* ── Mobile: clean compact visual ── */}
          <div className="hero-visual-mobile">
            {/* Orbital circle with logo centre + 6 badges at 60° each */}
            <div style={{
              position: "relative",
              width: 260,
              height: 260,
              flexShrink: 0,
              left: 0,
              right: 0,
            }}>
              {/* Outer ring */}
              <div style={{
                position: "absolute", inset: 0,
                borderRadius: "50%",
                border: "1px solid rgba(124,92,252,0.25)",
                animation: "pulse-ring 4s ease-out infinite",
              }} />
              {/* Inner ring */}
              <div style={{
                position: "absolute",
                top: "14%", left: "14%", right: "14%", bottom: "14%",
                borderRadius: "50%",
                border: "1px solid rgba(124,92,252,0.18)",
                animation: "pulse-ring 4s ease-out 1.2s infinite",
              }} />

              {/* Centre logo */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 80, height: 80,
                borderRadius: "50%",
                background: "linear-gradient(145deg, rgba(91,48,232,0.4) 0%, rgba(15,22,41,0.95) 60%)",
                border: "2px solid rgba(124,92,252,0.6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 28px rgba(91,48,232,0.55)",
                animation: "float2 5s ease-in-out infinite",
                zIndex: 2,
              }}>
                <Image
                  src="/finallogos/transparent-logo.png"
                  alt="Tejasbyte Technologies"
                  width={60} height={34}
                  style={{ objectFit: "contain", width: "76%", height: "auto" }}
                />
              </div>

              {/* 6 badges at 60° intervals — radius 100px from centre */}
              {BADGES.slice(0, 6).map((b, i) => {
                const angleDeg = i * 60 - 90; // start from top
                const rad = (angleDeg * Math.PI) / 180;
                const r = 100; // reduced radius to keep badges inside container
                const cx = 130 + r * Math.cos(rad); // centre is 130,130
                const cy = 130 + r * Math.sin(rad);
                return (
                  <div key={i} style={{
                    position: "absolute",
                    left: cx,
                    top: cy,
                    transform: "translate(-50%, -50%)",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 100,
                    padding: "7px 11px",
                    display: "flex", alignItems: "center", gap: 6,
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                    animation: `float${i % 2 === 0 ? "" : "2"} ${3.5 + i * 0.35}s ease-in-out infinite`,
                    animationDelay: `${i * 0.25}s`,
                    zIndex: 3,
                  }}>
                    <span style={{ fontSize: ".8rem" }}>{b.icon}</span>
                    <span style={{ fontSize: ".6rem", fontWeight: 700, color: "rgba(255,255,255,0.88)", letterSpacing: ".02em" }}>{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        zIndex: 5, pointerEvents: "none",
      }}>
        <span style={{ fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Scroll</span>
        <div style={{ width: 1.5, height: 40, background: "linear-gradient(to bottom, rgba(167,139,250,0.8), transparent)", animation: "scroll-line 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}
