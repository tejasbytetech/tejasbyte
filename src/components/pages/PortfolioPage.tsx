"use client";
import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";

/* ── Real Tejasbyte client projects ── */
const CLIENT_PROJECTS = [
  {
    num: "01", year: "2026", cat: "Web",
    title: "Subha Sanskar Decor",
    url: "subhasanskardecor.com",
    href: "https://www.subhasanskardecor.com",
    sub: "Interior Design · Sydney, Australia · Next.js · Supabase",
    desc: "Full brand website with a dynamic gallery, lead capture forms, and a Supabase-powered admin panel — the client manages all content without touching code.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    accent: "#5B30E8",
  },
  {
    num: "02", year: "2025", cat: "Web",
    title: "Vision Sign Advertising",
    url: "visionsignadvertising.com.np",
    href: "https://www.visionsignadvertising.com.np",
    sub: "Advertising Agency · Next.js · Supabase",
    desc: "Agency portfolio site with service showcase, case study pages, and a full admin dashboard — fully managed by the client team without developer dependency.",
    tags: ["Next.js", "Supabase", "TypeScript", "Admin CMS"],
    accent: "#7C5CFC",
  },
  {
    num: "03", year: "2026", cat: "Web",
    title: "Tarangini Foundation",
    url: "tarangini.org.np",
    href: "https://tarangini.org.np",
    sub: "NGO · Next.js · Supabase",
    desc: "Rebuilt from WordPress to Next.js with a custom Supabase admin panel for team, blog, resources, and media — all content dynamically managed from the backend.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "TypeScript"],
    accent: "#A78BFA",
  },
];

/* ── Projects contributed to as a developer ── */
const CONTRIBUTION_PROJECTS = [
  {
    num: "04", year: "2024–Present", cat: "Healthcare",
    title: "SearchMed",
    url: "searchmed.com",
    href: "https://searchmed.com",
    sub: "Full Stack Developer · Blazor · .NET MAUI · ASP.NET Core 9",
    role: "Built and maintained Blazor WebAssembly and Blazor Server apps with ASP.NET Core 9 backends. Developed doctor search, appointment scheduling, vaccination reminders, and cross-platform support via .NET MAUI (web, desktop, iOS, Android).",
    tags: ["Blazor WebAssembly", "ASP.NET Core 9", ".NET MAUI", "Tailwind CSS"],
    accent: "#5B30E8",
  },
  {
    num: "05", year: "2024", cat: "E-commerce",
    title: "CustomerFiller",
    url: "customfiller.com",
    href: "https://www.customfiller.com",
    sub: "Full Stack Developer · Next.js · Stripe · Supabase",
    role: "Built the e-commerce platform for aerosol filling solutions — Stripe payment integration, product management, and Supabase backend for storage and APIs.",
    tags: ["Next.js", "Stripe", "Supabase", "TypeScript"],
    accent: "#7C5CFC",
  },
  {
    num: "06", year: "2023–2024", cat: "LegalTech",
    title: "LeanLaw",
    url: "leanlaw.co",
    href: "https://www.leanlaw.co",
    sub: "Frontend Developer · Vue.js · Pinia · Cypress",
    role: "Migrated frontend from AngularJS to Vue.js with Pinia state management. Shipped billing features, QuickBooks integration, Luzmo reporting, and Cypress E2E test coverage.",
    tags: ["Vue.js", "Pinia", "Cypress", "TypeScript", "Vuetify"],
    accent: "#A78BFA",
  },
  {
    num: "07", year: "2022–2023", cat: "Logistics",
    title: "Swivt",
    url: "swivt.io",
    href: "https://swivt.io",
    sub: "Frontend Developer · Angular · Stomp Client",
    role: "Developed user access roles, bonus calculations, and live charts using Angular. Built WMS frontend for 3PL-Total Technology (HK) with real-time dashboard charts via Stomp Client.",
    tags: ["Angular", "Stomp Client", "TypeScript", "Chart.js", "JHipster"],
    accent: "#5B30E8",
  },
  {
    num: "08", year: "2020–2022", cat: "Mobile · Web",
    title: "Jhigu Bazar",
    url: "jhigubazar.com",
    href: "https://www.jhigubazar.com",
    sub: "Full Stack Developer · Ionic Angular · Node.js",
    role: "Built cross-platform marketplace with Ionic Angular web app, Node.js/Express backend, and Capacitor for Android/iOS. Implemented push notifications, image recognition, and location services.",
    tags: ["Ionic Angular", "Node.js", "Capacitor", "MongoDB", "AWS"],
    accent: "#7C5CFC",
  },
];

function ProjectCard({ p, hov, setHov, showRole }: {
  p: typeof CLIENT_PROJECTS[0] & { role?: string };
  hov: string | null;
  setHov: (v: string | null) => void;
  showRole?: boolean;
}) {
  return (
    <div className="service-card"
      onMouseEnter={() => setHov(p.num)}
      onMouseLeave={() => setHov(null)}
      style={{ position: "relative", overflow: "hidden", height: "100%", borderColor: hov === p.num ? `${p.accent}45` : undefined }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
        <div>
          <span style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: p.accent }}>{p.cat} · {p.year}</span>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1035", marginTop: 4, letterSpacing: "-.02em", transition: "color .2s", ...(hov === p.num ? { color: p.accent } : {}) }}>{p.title}</h3>
          <p style={{ fontSize: ".72rem", color: "rgba(26,16,53,0.4)", marginTop: 3 }}>{p.sub}</p>
        </div>
        <span style={{ fontSize: ".6rem", fontWeight: 700, color: "rgba(91,48,232,0.2)", letterSpacing: ".1em", flexShrink: 0 }}>{p.num}</span>
      </div>

      <p style={{ fontSize: ".875rem", lineHeight: 1.78, color: "rgba(26,16,53,0.55)", marginBottom: 16 }}>
        {showRole && p.role ? p.role : (p as typeof CLIENT_PROJECTS[0]).desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
      </div>

      <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: ".78rem", fontWeight: 700, color: p.accent, textDecoration: "none",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px rgba(34,197,94,0.6)", flexShrink: 0 }} />
        {p.url} →
      </a>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, borderRadius: "0 0 20px 20px", background: `linear-gradient(90deg,${p.accent},${p.accent}50)`, opacity: hov === p.num ? 1 : 0, transition: "opacity .3s" }} />
    </div>
  );
}

export default function PortfolioPage() {
  const [hov, setHov] = useState<string | null>(null);

  return (
    <>
      <PageHero
        label="Our Work"
        title="Software we've shipped"
        highlight="and stand behind"
        description="Real client projects built by Tejasbyte, plus production contributions from our lead engineer across global teams."
      />

      {/* ── Section 1: Tejasbyte Client Projects ── */}
      <section style={{ background: "#fff", padding: "72px 52px 0" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <div>
              <p style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#5B30E8", marginBottom: 6 }}>
                Tejasbyte Client Projects
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1A1035", letterSpacing: "-.03em" }}>
                Built &amp; delivered for clients
              </h2>
              <p style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.5)", marginTop: 6 }}>
                Full ownership — designed, built, and deployed by the Tejasbyte team.
              </p>
            </div>
          </div>
          <div className="proof-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {CLIENT_PROJECTS.map(p => (
              <ProjectCard key={p.num} p={p as any} hov={hov} setHov={setHov} showRole={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ maxWidth: 1280, margin: "60px auto 0", padding: "0 52px" }}>
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(91,48,232,0.15) 30%, rgba(91,48,232,0.15) 70%, transparent)" }} />
      </div>

      {/* ── Section 2: Open Source & Contributions ── */}
      <section style={{ background: "#fff", padding: "60px 52px 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#7C5CFC", marginBottom: 6 }}>
              Professional Contributions
            </p>
            <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1A1035", letterSpacing: "-.03em" }}>
              Production features shipped at scale
            </h2>
            <p style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.5)", marginTop: 6, maxWidth: 520 }}>
              Projects where our lead engineer contributed production-ready features as part of global engineering teams.
            </p>
          </div>
          <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {CONTRIBUTION_PROJECTS.map(p => (
              <ProjectCard key={p.num} p={p as any} hov={hov} setHov={setHov} showRole={true} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F7F5FF", padding: "0 52px 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="cta-strip" style={{ background: "#2D3A6E", borderRadius: 20, padding: "52px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-40%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-.02em" }}>Want us to build yours next?</h2>
              <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,0.65)" }}>Tell us about your project — we respond within 24 hours.</p>
            </div>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 32px", borderRadius: 10, background: "#fff", color: "#2D3A6E", fontSize: ".875rem", fontWeight: 700, textDecoration: "none", position: "relative", zIndex: 1, transition: "transform .2s, box-shadow .2s" }}
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
