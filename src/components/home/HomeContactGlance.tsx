"use client";
import ContactInfoCards from "@/components/ContactInfoCards";
import ContactForm from "@/components/ContactForm";

export default function HomeContactGlance() {
  return (
    <section style={{ background: "#fff", padding: "100px 52px" }}>
      <div className="section-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>
            Get In Touch
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800, lineHeight: 1.12,
            letterSpacing: "-.03em", color: "#1A1035",
            marginTop: 16, marginBottom: 12,
          }}>
            Ready to Build?{" "}
            <span className="gradient-text">Let&apos;s Talk.</span>
          </h2>
          <p style={{ fontSize: ".95rem", color: "rgba(26,16,53,0.5)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto" }}>
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
          <ContactInfoCards />
          <ContactForm rows={6} />
        </div>
      </div>
    </section>
  );
}
