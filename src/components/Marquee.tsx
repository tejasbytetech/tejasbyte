const TECH = [
  "Next.js", "React", "TypeScript", "Node.js", "Python",
  "AWS", "GCP", "Azure", "Kubernetes", "Docker",
  "React Native", "PostgreSQL", "Redis", "OpenAI", "GraphQL",
  "Terraform", "MongoDB", "Supabase", "Stripe", "Tailwind CSS",
];

const DOMAINS = [
  "Fintech Platforms", "Healthcare Systems", "E-commerce",
  "AI & Automation", "Logistics & Fleet", "Enterprise Software",
  "Mobile Applications", "Cloud Infrastructure", "Legal Tech", "EdTech",
];

function Row({ items, dir, light }: { items: string[]; dir: "ltr" | "rtl"; light?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div
        className={dir === "ltr" ? "mq-ltr" : "mq-rtl"}
        style={{ display: "flex", whiteSpace: "nowrap", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "0 24px",
            fontSize: ".7rem", fontWeight: 600,
            letterSpacing: ".12em", textTransform: "uppercase",
            color: light
              ? i % 4 === 0 ? "#A78BFA" : "rgba(255,255,255,0.3)"
              : i % 3 === 0 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
          }}>
            <span style={{
              width: 3, height: 3, borderRadius: "50%",
              background: light ? "rgba(167,139,250,0.6)" : "rgba(255,255,255,0.2)",
              flexShrink: 0, display: "inline-block",
            }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section style={{
      background: "#0F1629",
      padding: "52px 0",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Top separator */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
      }} />
      {/* Bottom separator */}
      <div style={{
        position: "absolute", bottom: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
      }} />

      {/* Label */}
      <p style={{
        textAlign: "center",
        fontSize: ".65rem", fontWeight: 700,
        letterSpacing: ".2em", textTransform: "uppercase",
        color: "rgba(255,255,255,0.25)",
        marginBottom: 28,
      }}>TECHNOLOGY EXPERTISE</p>

      {/* Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative" }}>
        {/* Edge fades */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none",
          background: "linear-gradient(90deg,#0F1629 0%,transparent 8%,transparent 92%,#0F1629 100%)",
        }} />
        <Row items={TECH}    dir="ltr" light />
        <Row items={DOMAINS} dir="rtl" />
      </div>
    </section>
  );
}
