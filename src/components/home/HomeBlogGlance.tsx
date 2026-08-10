"use client";
import Link from "next/link";
import { useState } from "react";

const POSTS = [
  {
    cat: "AI/ML", date: "July 28, 2026", readTime: "8 min",
    title: "Building Production RAG Pipelines: Lessons from 10+ Deployments",
    excerpt: "We've built RAG pipelines for healthcare, legal tech, and SaaS. Here's what actually breaks in production and how to fix it before it costs you users.",
    accent: "#5B30E8",
  },
  {
    cat: "Engineering", date: "July 14, 2026", readTime: "6 min",
    title: "Why We Stopped Using ORMs for High-Traffic PostgreSQL Queries",
    excerpt: "At 50k requests/minute, the abstraction cost of ORMs becomes measurable. Here's the query pattern we switched to and the performance delta we saw.",
    accent: "#7C5CFC",
  },
  {
    cat: "Cloud", date: "June 30, 2026", readTime: "10 min",
    title: "Kubernetes Cost Optimization: From $12k/month to $4k Without Sacrificing Uptime",
    excerpt: "A practical guide to right-sizing your K8s cluster, using spot instances safely, and setting up VPA/HPA so you only pay for what you need.",
    accent: "#A78BFA",
  },
];

export default function HomeBlogGlance() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section style={{
      background: "#F7F5FF", padding: "100px 52px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "-10%", left: "-5%", width: 400, height: 400,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.06) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
          <div>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>Engineering Insights</span>
            <h2 style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 800, lineHeight: 1.12,
              letterSpacing: "-.03em", color: "#1A1035",
              marginTop: 16,
            }}>
              From the{" "}
              <span className="gradient-text">Tejasbyte Blog</span>
            </h2>
          </div>
          <Link href="/blog" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: '"Inter",sans-serif', fontSize: ".85rem", fontWeight: 700,
            color: "#5B30E8", textDecoration: "none",
            border: "1.5px solid rgba(91,48,232,0.25)", borderRadius: 10,
            padding: "10px 22px", transition: "background .2s, border-color .2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(91,48,232,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "#5B30E8"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.25)"; }}
          >Read All Posts →</Link>
        </div>

        {/* 3-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {POSTS.map((post, i) => (
            <Link key={i} href="/blog" style={{ textDecoration: "none" }}>
              <article
                className="service-card"
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  position: "relative", overflow: "hidden",
                  borderColor: hov === i ? `${post.accent}45` : undefined,
                  height: "100%", cursor: "default",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <span style={{
                    padding: "3px 12px", borderRadius: 100,
                    background: `${post.accent}12`,
                    border: `1px solid ${post.accent}25`,
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".62rem", fontWeight: 700,
                    letterSpacing: ".08em", textTransform: "uppercase",
                    color: post.accent,
                  }}>{post.cat}</span>
                  <span style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".68rem", color: "rgba(26,16,53,0.35)",
                  }}>{post.readTime} read</span>
                </div>

                <h3 style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: "1rem", fontWeight: 700,
                  color: "#1A1035", lineHeight: 1.45, marginBottom: 12,
                  transition: "color .2s",
                  ...(hov === i ? { color: "#5B30E8" } : {}),
                }}>{post.title}</h3>

                <p style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: ".875rem", lineHeight: 1.75,
                  color: "rgba(26,16,53,0.55)", marginBottom: 20,
                }}>{post.excerpt}</p>

                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  paddingTop: 16, borderTop: "1px solid rgba(91,48,232,0.08)",
                }}>
                  <span style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".72rem", color: "rgba(26,16,53,0.35)",
                  }}>{post.date}</span>
                  <span style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: ".78rem", fontWeight: 700, color: post.accent,
                    opacity: hov === i ? 1 : 0, transition: "opacity .2s",
                  }}>Read more →</span>
                </div>

                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
                  borderRadius: "0 0 20px 20px",
                  background: `linear-gradient(90deg, ${post.accent}, ${post.accent}50)`,
                  opacity: hov === i ? 1 : 0, transition: "opacity .3s",
                }} />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
