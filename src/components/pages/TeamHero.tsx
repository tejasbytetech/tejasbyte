// Static team hero — no client/DB dependency, renders instantly on navigation
export default function TeamHero() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #0F1629 0%, #1A1035 100%)",
      position: "relative", overflow: "hidden",
      padding: "140px 0 80px",
    }}>
      <div style={{ position: "absolute", top: "-15%", right: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.22) 0%, transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "-5%", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.14) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 100, border: "1px solid rgba(167,139,250,0.3)", background: "rgba(167,139,250,0.08)", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#A78BFA" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A78BFA", boxShadow: "0 0 8px rgba(167,139,250,0.8)" }} />
            The People Behind Tejasbyte
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem,5vw,4.4rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-.04em", color: "#fff", marginBottom: 24, maxWidth: 700 }}>
          Built by engineers.<br />
          <span style={{ background: "linear-gradient(135deg, #7C5CFC 0%, #A78BFA 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Driven by craft.
          </span>
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", maxWidth: 520, lineHeight: 1.78, marginBottom: 40 }}>
          A senior-only team registered in Nepal with our main office in the United States — shipping software that scales globally.
        </p>

        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
          {[
            { val: "15+", label: "Team Members" },
            { val: "30+", label: "Projects Shipped" },
            { val: "98%", label: "Client Satisfaction" },
            { val: "5+",  label: "Years of Excellence" },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#A78BFA", lineHeight: 1, letterSpacing: "-.04em" }}>{s.val}</div>
              <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,0.35)", marginTop: 4, letterSpacing: ".04em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
