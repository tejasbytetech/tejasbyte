// Static careers hero — no client/DB dependency, renders immediately
export default function CareersHero() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #0F1629 0%, #1A1035 100%)",
      padding: "140px 52px 72px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "-15%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.22) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.75)", marginBottom: 24 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px rgba(34,197,94,0.8)" }} />
          We&apos;re Hiring
        </span>
        <h1 style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.03em", color: "#fff", marginBottom: 20 }}>
          Build the future<br />
          <span style={{ background: "linear-gradient(135deg, #5B30E8 0%, #7C5CFC 50%, #9B6FFF 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            with us
          </span>
        </h1>
        <p style={{ fontSize: "1rem", lineHeight: 1.78, color: "rgba(255,255,255,0.55)", maxWidth: 520, marginBottom: 32 }}>
          We&apos;re a senior-only engineering team registered in Nepal with our main office in the United States. If you care deeply about craft, we want to hear from you.
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[
            { val: "100%", label: "Remote-friendly" },
            { val: "Senior", label: "Engineers Only" },
            { val: "5+", label: "Years of Excellence" },
          ].map(s => (
            <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#A78BFA" }}>{s.val}</span>
              <span style={{ fontSize: ".75rem", color: "rgba(255,255,255,0.35)", letterSpacing: ".04em" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
