"use client";
import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { POSTS } from "@/lib/blog-posts";

const CATEGORIES = ["All", "Engineering", "AI/ML", "Cloud", "Mobile"];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hov, setHov] = useState<string | null>(null);

  const filtered = activeFilter === "All"
    ? POSTS
    : POSTS.filter(p => p.cat === activeFilter);

  return (
    <>
      <PageHero
        label="Engineering Insights"
        title="The"
        highlight="Tejasbyte Blog"
        description="Practical insights from engineers who ship production software — AI, cloud infra, mobile, and the patterns that actually work at scale."
      />

      <section style={{ background: "#F7F5FF", padding: "64px 52px 100px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setActiveFilter(c)} style={{
                padding: "8px 20px", borderRadius: 100,
                background: activeFilter === c ? "#2D3A6E" : "transparent",
                border: `1.5px solid ${activeFilter === c ? "#2D3A6E" : "rgba(91,48,232,0.2)"}`,
                color: activeFilter === c ? "#fff" : "rgba(26,16,53,0.6)",
                fontSize: ".8rem", fontWeight: 600, cursor: "none", transition: "all .2s",
              }}>{c}</button>
            ))}
          </div>

          {/* Grid */}
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {filtered.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article
                  className="service-card"
                  onMouseEnter={() => setHov(post.slug)}
                  onMouseLeave={() => setHov(null)}
                  style={{ position: "relative", overflow: "hidden", height: "100%", borderColor: hov === post.slug ? `${post.accent}45` : undefined, cursor: "default" }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{ padding: "3px 12px", borderRadius: 100, background: `${post.accent}12`, border: `1px solid ${post.accent}25`, fontSize: ".62rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: post.accent }}>{post.cat}</span>
                    <span style={{ fontSize: ".68rem", color: "rgba(26,16,53,0.35)" }}>{post.readTime} read</span>
                  </div>

                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1A1035", lineHeight: 1.45, marginBottom: 12, transition: "color .2s", ...(hov === post.slug ? { color: post.accent } : {}) }}>{post.title}</h3>

                  <p style={{ fontSize: ".875rem", lineHeight: 1.75, color: "rgba(26,16,53,0.55)", marginBottom: 20 }}>{post.excerpt}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {post.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid rgba(91,48,232,0.08)" }}>
                    <span style={{ fontSize: ".72rem", color: "rgba(26,16,53,0.35)" }}>{post.date}</span>
                    <span style={{ fontSize: ".78rem", fontWeight: 700, color: post.accent, opacity: hov === post.slug ? 1 : 0, transition: "opacity .2s" }}>Read more →</span>
                  </div>

                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, borderRadius: "0 0 20px 20px", background: `linear-gradient(90deg, ${post.accent}, ${post.accent}50)`, opacity: hov === post.slug ? 1 : 0, transition: "opacity .3s" }} />
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", padding: "64px 52px 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="cta-strip" style={{ background: "#2D3A6E", borderRadius: 20, padding: "52px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-40%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-.02em" }}>Have a project in mind?</h2>
              <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,0.65)" }}>Tell us about your project — we&apos;ll get back to you within 24 hours.</p>
            </div>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 32px", borderRadius: 10, background: "#fff", color: "#2D3A6E", fontSize: ".875rem", fontWeight: 700, textDecoration: "none", flexShrink: 0, position: "relative", zIndex: 1, transition: "transform .2s, box-shadow .2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
