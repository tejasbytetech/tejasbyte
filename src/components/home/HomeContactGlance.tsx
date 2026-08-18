"use client";
import ContactInfoCards from "@/components/ContactInfoCards";
import ContactForm from "@/components/ContactForm";

export default function HomeContactGlance() {
  return (
    <section style={{ background: "#F7F8FA", padding: "88px 52px" }}>
      <div className="section-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Centered header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{
            display: "inline-block",
            padding: "4px 16px", borderRadius: 100,
            background: "rgba(91,48,232,0.08)",
            border: "1px solid rgba(91,48,232,0.2)",
            fontSize: ".7rem", fontWeight: 700,
            letterSpacing: ".14em", textTransform: "uppercase",
            color: "#5B30E8", marginBottom: 16,
          }}>GET IN TOUCH</span>
          <h2 style={{
            fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
            fontWeight: 800, lineHeight: 1.15,
            letterSpacing: "-.03em", color: "#1A1035",
            marginBottom: 12,
          }}>
            Ready to Build? Let&apos;s Talk.
          </h2>
          <p style={{ fontSize: ".95rem", color: "#6B7280", lineHeight: 1.65 }}>
            Tell us about your project — we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Two-col layout */}
        <div className="contact-glance-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.8fr",
          gap: 32,
          alignItems: "start",
        }}>
          {/* Left — contact info cards */}
          <ContactInfoCards />

          {/* Right — shared form */}
          <ContactForm rows={6} />
        </div>
      </div>
    </section>
  );
}
