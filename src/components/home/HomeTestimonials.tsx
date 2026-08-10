"use client";
import { useState, useEffect, useCallback } from "react";

const TESTIMONIALS = [
  {
    quote: "Tejasbyte rebuilt our entire website from WordPress to Next.js. The new site is faster, easier to manage, and the admin panel means we never need to call a developer just to update content. Incredible work.",
    name: "Tarangini Foundation",
    role: "NGO · Kathmandu, Nepal",
    init: "TF",
    url: "tarangini.org.np",
    color: "#5B30E8",
  },
  {
    quote: "Our website needed to showcase our interior design work beautifully. Tejasbyte delivered a stunning gallery site with an admin panel so our team can update everything ourselves. Exactly what we needed.",
    name: "Subha Sanskar Decor",
    role: "Interior Design · Kathmandu, Nepal",
    init: "SS",
    url: "subhasanskardecor.com",
    color: "#7C5CFC",
  },
  {
    quote: "The team built us a professional agency website and a full admin dashboard. Our team now manages all content, portfolios, and client work without any technical knowledge. Fast, clean, and reliable.",
    name: "Vision Sign Advertising",
    role: "Advertising Agency · Kathmandu, Nepal",
    init: "VS",
    url: "visionsignadvertising.com.np",
    color: "#A78BFA",
  },
];

export default function HomeTestimonials() {
  const [cur, setCur]       = useState(0);
  const [fading, setFading] = useState(false);

  const go = useCallback((n: number) => {
    setFading(true);
    setTimeout(() => { setCur(n); setFading(false); }, 260);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go((cur + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, [cur, go]);

  const t = TESTIMONIALS[cur];

  return (
    <section style={{
      background: "#F7F8FA",
      padding: "88px 52px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle bg blob */}
      <div style={{
        position: "absolute", top: "0%", right: "-5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.06) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{
            fontSize: ".72rem", fontWeight: 700,
            letterSpacing: ".18em", textTransform: "uppercase",
            color: "#5B30E8", marginBottom: 12,
          }}>CLIENT TESTIMONIALS</p>
          <h2 style={{
            fontSize: "clamp(1.6rem,3.2vw,2.4rem)",
            fontWeight: 800, lineHeight: 1.15,
            letterSpacing: "-.03em", color: "#1A1035",
          }}>
            Trusted by clients worldwide
          </h2>
        </div>

        {/* Quote card */}
        <div style={{
          background: "#fff",
          border: "1.5px solid #E2E4EA",
          borderRadius: 20,
          padding: "44px 48px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(8px)" : "translateY(0)",
          transition: "opacity .26s, transform .26s",
          marginBottom: 32,
        }}>
          {/* Stars */}
          <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>

          {/* Quote mark */}
          <div style={{
            fontSize: 64, lineHeight: .8, fontWeight: 900,
            color: `${t.color}20`,
            marginBottom: 12, userSelect: "none",
            fontFamily: "Georgia, serif",
          }}>"</div>

          <p style={{
            fontSize: "clamp(1rem,1.8vw,1.15rem)",
            fontWeight: 500, lineHeight: 1.75,
            color: "#1A1035", marginBottom: 32,
            letterSpacing: "-.01em",
          }}>
            {t.quote}
          </p>

          {/* Author */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: ".7rem", fontWeight: 900, color: "#fff",
              flexShrink: 0,
            }}>{t.init}</div>
            <div>
              <div style={{ fontSize: ".95rem", fontWeight: 700, color: "#1A1035" }}>{t.name}</div>
              <div style={{ fontSize: ".75rem", color: "#6B7280", marginTop: 2 }}>{t.role}</div>
              <a
                href={`https://${t.url}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  fontSize: ".72rem", color: t.color,
                  textDecoration: "none", fontWeight: 600,
                  display: "inline-flex", alignItems: "center", gap: 4, marginTop: 3,
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 5px rgba(34,197,94,0.6)" }} />
                {t.url}
              </a>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, alignItems: "center" }}>
          {TESTIMONIALS.map((item, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: i === cur ? 28 : 9,
                height: 9,
                borderRadius: 100,
                background: i === cur ? t.color : "#D1D5DB",
                border: "none", cursor: "none",
                transition: "width .3s, background .3s",
                boxShadow: i === cur ? `0 0 8px ${t.color}60` : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
