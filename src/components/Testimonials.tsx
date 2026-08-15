"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const T = [
  {
    init: "SC", name: "Sarah Chen",       role: "CTO",                   co: "Fintech startup, Series B",
    quote: "Most vendors write code. Tejasbyte engineers systems. They found three latency bottlenecks we hadn't noticed and shipped a solution that's run flawlessly for 18 months.",
    stars: 5,
  },
  {
    init: "AK", name: "Arjun Kapoor",     role: "Co-founder & CEO",      co: "AI SaaS, Series A",
    quote: "We needed a team that could move fast without accumulating debt. Tejasbyte built our entire AI infrastructure in the time our previous agency spent writing specs. Incredible.",
    stars: 5,
  },
  {
    init: "MW", name: "Marcus Williams",  role: "VP of Engineering",     co: "Logistics platform, $50M ARR",
    quote: "Real-time systems at scale are hard. Our fleet tracking went from polling every 30 seconds to genuine sub-second updates. That's not a tweak — that's a different product.",
    stars: 5,
  },
  {
    init: "JO", name: "Dr. James Okafor", role: "Chief Digital Officer",  co: "Regional hospital network",
    quote: "HIPAA compliance plus a product clinicians actually want to use. Tejasbyte delivered both, on time, with documentation our internal team could run with from day one.",
    stars: 5,
  },
  {
    init: "LF", name: "Lucia Fernandez",  role: "Director of E-commerce", co: "Consumer retail, $40M GMV",
    quote: "Lighthouse: 48 to 97. Conversion up 31% in the first month. I've worked with a lot of engineering teams — none of them have shown me those numbers.",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [cur, setCur] = useState(0);
  const [fading, setFading] = useState(false);

  const go = useCallback((next: number) => {
    setFading(true);
    setTimeout(() => { setCur(next); setFading(false); }, 260);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go((cur + 1) % T.length), 6000);
    return () => clearInterval(id);
  }, [cur, go]);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const t = T[cur];

  return (
    <section id="testimonials" ref={ref} style={{
      background: "#F7F5FF",
      padding: "120px 0 130px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Bg blob */}
      <div style={{
        position: "absolute", top: "10%", right: "-8%",
        width: 450, height: 450, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.07) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 52px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>Client Reviews</span>
          <h2 style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800, lineHeight: 1.12,
            letterSpacing: "-.03em",
            color: "#1A1035",
            marginTop: 20, marginBottom: 18,
          }}>
            Trusted by teams{" "}
            <span className="gradient-text">worldwide</span>
          </h2>
        </div>

        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 72, alignItems: "start" }}>

          {/* Left — selector list */}
          <div className="reveal">
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {T.map((item, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "16px 20px", borderRadius: 14,
                    background: i === cur ? "#fff" : "transparent",
                    border: i === cur ? "1.5px solid rgba(91,48,232,0.2)" : "1.5px solid transparent",
                    boxShadow: i === cur ? "0 8px 32px rgba(91,48,232,0.1)" : "none",
                    cursor: "pointer",
                    textAlign: "left",
                    opacity: i === cur ? 1 : 0.45,
                    transition: "all .3s",
                  }}
                  onMouseEnter={e => { if (i !== cur) (e.currentTarget as HTMLElement).style.opacity = ".7"; }}
                  onMouseLeave={e => { if (i !== cur) (e.currentTarget as HTMLElement).style.opacity = ".45"; }}
                >
                  {/* Avatar */}
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                    background: i === cur
                      ? "linear-gradient(135deg, #5B30E8 0%, #7C5CFC 100%)"
                      : "rgba(91,48,232,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".62rem", fontWeight: 800,
                    color: i === cur ? "#fff" : "#5B30E8",
                    transition: "all .3s",
                  }}>{item.init}</div>

                  <div>
                    <div style={{
                      fontFamily: '"Inter",sans-serif',
                      fontSize: ".9rem", fontWeight: 700,
                      color: "#1A1035", lineHeight: 1.25,
                    }}>{item.name}</div>
                    <div style={{
                      fontFamily: '"Inter",sans-serif',
                      fontSize: ".72rem", color: "rgba(26,16,53,0.5)",
                    }}>{item.role} · {item.co}</div>
                  </div>

                  {i === cur && (
                    <div style={{
                      marginLeft: "auto",
                      width: 24, height: 2,
                      background: "linear-gradient(90deg,#5B30E8,#A78BFA)",
                      borderRadius: 1, flexShrink: 0,
                    }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right — active quote */}
          <div className="reveal" style={{ transitionDelay: ".1s", position: "sticky", top: 100 }}>
            <div style={{
              background: "#fff",
              border: "1.5px solid rgba(91,48,232,0.12)",
              borderRadius: 24,
              padding: "44px 40px",
              boxShadow: "0 20px 60px rgba(91,48,232,0.08)",              opacity: fading ? 0 : 1,
              transform: fading ? "translateY(8px)" : "translateY(0)",
              transition: "opacity .26s, transform .26s",
            }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: "#F59E0B", fontSize: "1rem" }}>★</span>
                ))}
              </div>

              {/* Quote mark */}
              <div style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: 64, lineHeight: .8,
                color: "rgba(91,48,232,0.15)",
                marginBottom: 16,
                userSelect: "none",
                fontWeight: 800,
              }}>"</div>

              <p style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                fontWeight: 500,
                lineHeight: 1.7,
                letterSpacing: "-.01em",
                color: "#1A1035",
                marginBottom: 32,
              }}>{t.quote}</p>

              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg, #5B30E8 0%, #7C5CFC 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: '"Inter",sans-serif',
                  fontSize: ".65rem", fontWeight: 800, color: "#fff",
                }}>{t.init}</div>
                <div>
                  <div style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".9rem", fontWeight: 700, color: "#1A1035",
                  }}>{t.name}</div>
                  <div style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".75rem", color: "rgba(26,16,53,0.5)",
                  }}>{t.role} · {t.co}</div>
                </div>
              </div>
            </div>

            {/* Dot pagination */}
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 24 }}>
              {T.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  style={{
                    width: i === cur ? 24 : 8,
                    height: 8, borderRadius: 100,
                    background: i === cur ? "#5B30E8" : "rgba(91,48,232,0.2)",
                    border: "none", cursor: "pointer",
                    transition: "width .3s, background .3s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
