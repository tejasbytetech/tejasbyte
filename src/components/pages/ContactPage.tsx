"use client";
import PageHero from "@/components/PageHero";
import ContactInfoCards from "@/components/ContactInfoCards";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {

  return (
    <>
      <PageHero
        label="Contact"
        title="Ready to Build?"
        highlight="Let's Talk."
        description="Tell us about your project — we'll get back to you within 24 hours."
      />

      {/* ── Main contact section ── */}
      <section style={{ background: "#F7F8FA", padding: "72px 52px 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.9fr", gap: 32, alignItems: "start" }}>

            {/* Left — shared info cards */}
            <ContactInfoCards />

            {/* Right — shared form */}
            <ContactForm rows={7} />

          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section style={{ background: "#fff", padding: "0 52px 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Two maps — USA + Nepal */}
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

            {/* USA map */}
            <div>
              <div style={{ borderRadius: 16, overflow: "hidden", border: "1.5px solid #E2E4EA", boxShadow: "0 8px 32px rgba(0,0,0,0.06)", position: "relative" }}>
                <a
                  href="https://www.google.com/maps/search/2420+Rheem+Ave,+Richmond,+CA+94804"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    position: "absolute", top: 12, left: 12, zIndex: 10,
                    background: "#fff", border: "1.5px solid #E2E4EA",
                    borderRadius: 8, padding: "6px 14px",
                    fontSize: ".78rem", fontWeight: 600, color: "#1A1035",
                    textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    display: "inline-flex", alignItems: "center", gap: 6,
                    transition: "border-color .2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#5B30E8"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E4EA"; }}
                >
                  Open in Maps
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
                <iframe
                  title="Tejasbyte Technologies — USA Office"
                  width="100%" height="240"
                  style={{ border: "none", display: "block" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.7!2d-122.3478!3d37.9358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808579b6f3b3b3b3%3A0x0!2s2420+Rheem+Ave%2C+Richmond%2C+CA+94804!5e0!3m2!1sen!2sus!4v1722000000000"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                <span style={{ fontSize: ".8rem" }}>🇺🇸</span>
                <span style={{ fontSize: ".8rem", color: "#6B7280", fontWeight: 500 }}>2420 Rheem Ave, Richmond, CA 94804</span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=2420+Rheem+Ave,+Richmond,+CA+94804"
                  target="_blank" rel="noopener noreferrer"
                  style={{ marginLeft: "auto", fontSize: ".78rem", fontWeight: 600, color: "#5B30E8", textDecoration: "none", whiteSpace: "nowrap" }}>
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Nepal map */}
            <div>
              <div style={{ borderRadius: 16, overflow: "hidden", border: "1.5px solid #E2E4EA", boxShadow: "0 8px 32px rgba(0,0,0,0.06)", position: "relative" }}>
                <a
                  href="https://maps.app.goo.gl/fPyTpNH2zoiK927e8"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    position: "absolute", top: 12, left: 12, zIndex: 10,
                    background: "#fff", border: "1.5px solid #E2E4EA",
                    borderRadius: 8, padding: "6px 14px",
                    fontSize: ".78rem", fontWeight: 600, color: "#1A1035",
                    textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    display: "inline-flex", alignItems: "center", gap: 6,
                    transition: "border-color .2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#5B30E8"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E4EA"; }}
                >
                  Open in Maps
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
                <iframe
                  title="Tejasbyte Technologies — Nepal Office"
                  width="100%" height="240"
                  style={{ border: "none", display: "block" }}
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d442!2d85.3121141!3d27.7646532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQ1JzUyLjgiTiA4NcKwMTgnNDMuNiJF!5e0!3m2!1sen!2snp!4v1722000000000!5m2!1sen!2snp"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                <span style={{ fontSize: ".8rem" }}>🇳🇵</span>
                <span style={{ fontSize: ".8rem", color: "#6B7280", fontWeight: 500 }}>Kathmandu, Nepal</span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=27.7646532,85.3121141"
                  target="_blank" rel="noopener noreferrer"
                  style={{ marginLeft: "auto", fontSize: ".78rem", fontWeight: 600, color: "#5B30E8", textDecoration: "none", whiteSpace: "nowrap" }}>
                  Get Directions →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
