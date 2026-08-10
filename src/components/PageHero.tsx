interface PageHeroProps {
  label: string;
  title: string;
  highlight?: string;       // highlighted word(s) at the end of title
  description: string;
}

export default function PageHero({ label, title, highlight, description }: PageHeroProps) {
  return (
    <section style={{
      background: "#0F1629",
      padding: "144px 52px 72px",   /* 144 = 72px navbar + 72px breathing room */
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Purple glow blob */}
      <div style={{
        position: "absolute", top: "-20%", right: "-5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.28) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-20%", left: "-5%",
        width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.15) 0%, transparent 70%)",
        filter: "blur(70px)", pointerEvents: "none",
      }} />
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      <div style={{
        maxWidth: 1280, margin: "0 auto",
        position: "relative", zIndex: 1,
        textAlign: "center",
      }}>
        {/* Label pill */}
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          padding: "5px 16px", borderRadius: 100,
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.07)",
          fontSize: ".68rem", fontWeight: 700,
          letterSpacing: ".14em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.75)",
          marginBottom: 24,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#A78BFA", display: "block" }} />
          {label}
        </span>

        {/* Title */}
        <h1 style={{
          fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: "-.03em", color: "#fff",
          marginBottom: 20,
        }}>
          {highlight ? (
            <>
              {title}{" "}
              <span style={{
                background: "linear-gradient(135deg, #7C5CFC 0%, #A78BFA 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>{highlight}</span>
            </>
          ) : title}
        </h1>

        {/* Description */}
        <p style={{
          fontSize: "1rem", lineHeight: 1.78,
          color: "rgba(255,255,255,0.55)",
          maxWidth: 560, margin: "0 auto",
        }}>{description}</p>
      </div>
    </section>
  );
}
