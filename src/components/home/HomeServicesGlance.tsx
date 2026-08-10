"use client";
import Link from "next/link";
import { useState } from "react";

const SERVICES = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    desc: "LLM-powered features, RAG pipelines, custom agents, and fine-tuned models built for production — not demos.",
    link: "Explore AI Services →",
    color: "#5B30E8",
  },
  {
    icon: "🌐",
    title: "Custom Software Development",
    desc: "Full-stack web platforms, SaaS products, admin systems, and e-commerce built with Next.js, React, and Supabase.",
    link: "Explore Web Services →",
    color: "#7C5CFC",
  },
  {
    icon: "📱",
    title: "Mobile & Cloud Engineering",
    desc: "Cross-platform iOS and Android apps, cloud infrastructure, APIs, and DevOps — end to end ownership.",
    link: "Explore Mobile & Cloud →",
    color: "#A78BFA",
  },
];

export default function HomeServicesGlance() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section style={{ background: "#fff", padding: "88px 52px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Section header — inline like ojastech */}
        <div style={{ marginBottom: 16 }}>
          <p style={{
            fontSize: ".72rem", fontWeight: 700,
            letterSpacing: ".18em", textTransform: "uppercase",
            color: "#5B30E8", marginBottom: 12,
          }}>WHAT WE DO</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <h2 style={{
              fontSize: "clamp(1.6rem,3.2vw,2.4rem)",
              fontWeight: 800, lineHeight: 1.15,
              letterSpacing: "-.03em", color: "#1A1035",
            }}>
              How We Deliver Value
            </h2>
            <Link href="/services" style={{
              fontSize: ".85rem", fontWeight: 600, color: "#5B30E8",
              textDecoration: "none", borderBottom: "1px solid rgba(91,48,232,0.3)",
              paddingBottom: 2, transition: "border-color .2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#5B30E8"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.3)"; }}>
              All Services →
            </Link>
          </div>
          <p style={{
            fontSize: ".95rem", lineHeight: 1.75,
            color: "rgba(26,16,53,0.55)",
            maxWidth: 540, marginTop: 12,
          }}>
            Software engineering delivered from Kathmandu — web, mobile, AI, and cloud for global clients.
          </p>
        </div>

        <div style={{ height: 1, background: "rgba(26,16,53,0.08)", margin: "32px 0" }} />

        {/* 3 service cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {SERVICES.map((s, i) => (
            <Link key={s.title} href="/services" style={{ textDecoration: "none" }}>
              <div
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  background: hov === i ? "#F7F5FF" : "#fff",
                  border: `1.5px solid ${hov === i ? s.color + "40" : "rgba(26,16,53,0.08)"}`,
                  borderRadius: 16, padding: "32px 28px",
                  transition: "all .25s", cursor: "default",
                  transform: hov === i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: hov === i ? `0 12px 40px ${s.color}14` : "none",
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `${s.color}10`, border: `1.5px solid ${s.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.3rem", marginBottom: 20,
                }}>{s.icon}</div>

                <h3 style={{
                  fontSize: "1rem", fontWeight: 700,
                  color: "#1A1035", marginBottom: 10, lineHeight: 1.3,
                }}>{s.title}</h3>

                <p style={{
                  fontSize: ".875rem", lineHeight: 1.75,
                  color: "rgba(26,16,53,0.55)", marginBottom: 20,
                }}>{s.desc}</p>

                <span style={{
                  fontSize: ".8rem", fontWeight: 700,
                  color: s.color,
                  borderBottom: `1px solid ${s.color}50`,
                  paddingBottom: 1,
                }}>{s.link}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
