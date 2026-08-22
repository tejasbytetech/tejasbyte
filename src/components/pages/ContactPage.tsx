"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import ContactInfoCards from "@/components/ContactInfoCards";
import ContactForm from "@/components/ContactForm";

const OFFICES = [
  {
    flag: "🇺🇸",
    label: "USA — Main Office",
    address: "2420 Rheem Ave, Richmond, CA 94804",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.7!2d-122.3478!3d37.9358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808579b6f3b3b3b3%3A0x0!2s2420+Rheem+Ave%2C+Richmond%2C+CA+94804!5e0!3m2!1sen!2sus!4v1722000000000",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=2420+Rheem+Ave,+Richmond,+CA+94804",
    mapsUrl: "https://www.google.com/maps/search/2420+Rheem+Ave,+Richmond,+CA+94804",
  },
  {
    flag: "🇳🇵",
    label: "Nepal — Engineering Office",
    address: "Kathmandu, Nepal",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d442!2d85.3121141!3d27.7646532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQ1JzUyLjgiTiA4NcKwMTgnNDMuNiJF!5e0!3m2!1sen!2snp!4v1722000000000!5m2!1sen!2snp",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.7646532,85.3121141",
    mapsUrl: "https://maps.app.goo.gl/fPyTpNH2zoiK927e8",
  },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState(0);
  const office = OFFICES[activeTab];

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
            <ContactInfoCards />
            <ContactForm rows={7} />
          </div>
        </div>
      </section>

      {/* ── Office locations — single map with tab switcher ── */}
      <section style={{ background: "#fff", padding: "0 52px 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ width: 4, height: 20, borderRadius: 2, background: "linear-gradient(135deg,#5B30E8,#A78BFA)", display: "inline-block" }} />
                <span style={{ fontSize: ".68rem", fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: "#5B30E8" }}>Our Offices</span>
              </div>
              <p style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.5)", margin: 0 }}>Two locations, one team.</p>
            </div>

            {/* Tab switcher */}
            <div style={{
              display: "inline-flex", borderRadius: 12,
              background: "#F7F5FF", border: "1.5px solid rgba(91,48,232,0.12)",
              padding: 4, gap: 4,
            }}>
              {OFFICES.map((o, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "8px 18px", borderRadius: 9, border: "none",
                    cursor: "pointer", fontSize: ".82rem", fontWeight: 700,
                    transition: "all .2s",
                    background: activeTab === i ? "#fff" : "transparent",
                    color: activeTab === i ? "#1A1035" : "rgba(26,16,53,0.45)",
                    boxShadow: activeTab === i ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>{o.flag}</span>
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* Map card */}
          <div style={{ borderRadius: 18, overflow: "hidden", border: "1.5px solid #E2E4EA", boxShadow: "0 8px 40px rgba(0,0,0,0.07)", position: "relative" }}>
            {/* Open in Maps button */}
            <a
              href={office.mapsUrl}
              target="_blank" rel="noopener noreferrer"
              style={{
                position: "absolute", top: 14, left: 14, zIndex: 10,
                background: "#fff", border: "1.5px solid #E2E4EA",
                borderRadius: 9, padding: "7px 15px",
                fontSize: ".78rem", fontWeight: 600, color: "#1A1035",
                textDecoration: "none", boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                display: "inline-flex", alignItems: "center", gap: 6,
                transition: "border-color .2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#5B30E8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E4EA"; }}
            >
              Open in Maps
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>

            <iframe
              key={activeTab}
              title={`Tejasbyte Technologies — ${office.label}`}
              width="100%" height="340"
              style={{ border: "none", display: "block" }}
              src={office.mapSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address + directions row */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <span style={{ fontSize: "1rem" }}>{office.flag}</span>
            <span style={{ fontSize: ".875rem", color: "#1A1035", fontWeight: 600 }}>{office.address}</span>
            <a
              href={office.directionsUrl}
              target="_blank" rel="noopener noreferrer"
              style={{
                marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: ".8rem", fontWeight: 700, color: "#5B30E8",
                textDecoration: "none", whiteSpace: "nowrap",
              }}
            >
              Get Directions →
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
