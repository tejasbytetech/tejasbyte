"use client";
import { useState, useEffect, useCallback } from "react";

const TESTIMONIALS = [
  {
    init: "SC", name: "Sarah Chen",       role: "CTO",                  co: "Fintech startup, Series B",
    quote: "Most vendors write code. Tejasbyte engineers systems. They found three latency bottlenecks we hadn't noticed and shipped a solution that's run flawlessly for 18 months.",
    stars: 5,
  },
  {
    init: "AK", name: "Arjun Kapoor",     role: "Co-founder & CEO",     co: "AI SaaS, Series A",
    quote: "We needed a team that could move fast without accumulating debt. Tejasbyte built our entire AI infrastructure in the time our previous agency spent writing specs.",
    stars: 5,
  },
  {
    init: "MW", name: "Marcus Williams",  role: "VP of Engineering",    co: "Logistics platform, $50M ARR",
    quote: "Real-time systems at scale are hard. Our fleet tracking went from polling every 30 seconds to genuine sub-second updates. That's not a tweak — that's a different product.",
    stars: 5,
  },
  {
    init: "LF", name: "Lucia Fernandez",  role: "Director of E-commerce", co: "Consumer retail, $40M GMV",
    quote: "Lighthouse: 48 to 97. Conversion up 31% in the first month. I've worked with a lot of engineering teams — none of them have shown me those numbers.",
    stars: 5,
  },
];

export default function HomeTestimonialsGlance() {
  const [cur, setCur]       = useState(0);
  const [fading, setFading] = useState(false);

  const go = useCallback((next: number) => {
    setFading(true);
    setTimeout(() => { setCur(next); setFading(false); }, 260);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go((cur + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, [cur, go]);

  const t = TESTIMONIALS[cur];

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
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>Client Reviews</span>
          <h2 style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            fontWeight: 800, lineHeight: 1.12,
            letterSpacing: "-.03em", color: "#1A1035",
            marginTop: 16,
          }}>
            Trusted by teams{" "}
            <span className="gradient-text">worldwide</span>
          </h2>
        </div>

        {/* Active quote */}
        <div style={{ maxWidth: 760, margin: "0 auto 40px" }}>
          <div style={{
            background: "#fff",
            border: "1.5px solid rgba(91,48,232,0.12)",
            borderRadius: 24, padding: "44px 48px",
            boxShadow: "0 20px 60px rgba(91,48,232,0.07)",
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(8px)" : "translateY(0)",
            transition: "opacity .26s, transform .26s",
          }} className="testimonial-card">
            {/* Stars */}
            <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} style={{ color: "#F59E0B", fontSize: "1rem" }}>★</span>
              ))}
            </div>
            <div style={{
              fontFamily: '"Inter",sans-serif', fontSize: 56,
              lineHeight: .8, color: "rgba(91,48,232,0.12)",
              marginBottom: 12, fontWeight: 800, userSelect: "none",
            }}>"</div>
            <p style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              fontWeight: 500, lineHeight: 1.72,
              color: "#1A1035", marginBottom: 28,
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
                <div style={{ fontFamily: '"Inter",sans-serif', fontSize: ".9rem", fontWeight: 700, color: "#1A1035" }}>{t.name}</div>
                <div style={{ fontFamily: '"Inter",sans-serif', fontSize: ".75rem", color: "rgba(26,16,53,0.5)" }}>{t.role} · {t.co}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots + avatar row */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          {/* Avatar row */}
          <div style={{ display: "flex", gap: 12 }}>
            {TESTIMONIALS.map((item, i) => (
              <button key={i} onClick={() => go(i)} style={{
                width: i === cur ? 48 : 40,
                height: i === cur ? 48 : 40,
                borderRadius: "50%",
                background: i === cur
                  ? "linear-gradient(135deg, #5B30E8, #7C5CFC)"
                  : "rgba(91,48,232,0.1)",
                border: i === cur ? "2px solid #5B30E8" : "2px solid transparent",
                boxShadow: i === cur ? "0 4px 16px rgba(91,48,232,0.3)" : "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: '"Inter",sans-serif',
                fontSize: i === cur ? ".65rem" : ".6rem",
                fontWeight: 800,
                color: i === cur ? "#fff" : "#5B30E8",
                cursor: "none",
                transition: "all .3s",
              }}>{item.init}</button>
            ))}
          </div>
          {/* Dot pagination */}
          <div style={{ display: "flex", gap: 8 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => go(i)} style={{
                width: i === cur ? 24 : 8, height: 8, borderRadius: 100,
                background: i === cur ? "#5B30E8" : "rgba(91,48,232,0.2)",
                border: "none", cursor: "none",
                transition: "width .3s, background .3s",
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
