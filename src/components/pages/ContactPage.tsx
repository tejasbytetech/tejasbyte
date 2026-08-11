"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { useContactForm } from "@/lib/useContactForm";

export default function ContactPage() {
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const { loading, sent, error, submit, reset } = useContactForm();

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(form);
  };

  const inp = (name: string): React.CSSProperties => ({
    width: "100%", padding: "12px 14px",
    background: focused === name ? "#fff" : "#F7F8FA",
    border: `1.5px solid ${focused === name ? "#5B30E8" : "#E2E4EA"}`,
    borderRadius: 8, color: "#1A1035",
    fontSize: ".875rem", outline: "none",
    transition: "border-color .2s, background .2s, box-shadow .2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(91,48,232,0.08)" : "none",
  });

  const lbl: React.CSSProperties = {
    fontSize: ".72rem", fontWeight: 600,
    color: "#6B7280", display: "block", marginBottom: 6,
  };

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

            {/* Left — info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

              {/* Location */}
              <div style={{ background: "#fff", border: "1.5px solid #E2E4EA", borderRadius: 12, padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: 14, transition: "border-color .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.35)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E4EA"; }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, flexShrink: 0, background: "#2D3A6E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>📍</div>
                <div>
                  <p style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 4 }}>Our Office Location</p>
                  <p style={{ fontSize: ".875rem", fontWeight: 600, color: "#1A1035", lineHeight: 1.55 }}>Tarakeshwore-07, Phutung<br />Kathmandu, Nepal</p>
                </div>
              </div>

              {/* Email */}
              <div style={{ background: "#fff", border: "1.5px solid #E2E4EA", borderRadius: 12, padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: 14, transition: "border-color .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.35)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E4EA"; }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, flexShrink: 0, background: "#2D3A6E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>✉️</div>
                <div>
                  <p style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 4 }}>Mail Us</p>
                  <a href="mailto:contact@tejasbyte.com" style={{ fontSize: ".875rem", fontWeight: 600, color: "#1A1035", textDecoration: "none", transition: "color .2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#5B30E8"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#1A1035"; }}>
                    contact@tejasbyte.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ background: "#fff", border: "1.5px solid #E2E4EA", borderRadius: 12, padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: 14, transition: "border-color .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.35)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E4EA"; }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, flexShrink: 0, background: "#2D3A6E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>📞</div>
                <div>
                  <p style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 4 }}>Call Us</p>
                  <a href="tel:+9779849627282" style={{ fontSize: ".875rem", fontWeight: 600, color: "#1A1035", textDecoration: "none", transition: "color .2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#5B30E8"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#1A1035"; }}>
                    +977 9849627282
                  </a>
                </div>
              </div>

              {/* Follow us */}
              <div style={{ background: "#fff", border: "1.5px solid #E2E4EA", borderRadius: 12, padding: "18px 20px" }}>
                <p style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 14 }}>Follow Us</p>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    { label: "LinkedIn", href: "https://www.linkedin.com/company/tejasbyte",
                      svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                    { label: "GitHub", href: "https://github.com/tejasbytetech",
                      svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
                    { label: "WhatsApp", href: "https://wa.me/9849627282",
                      svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.534 5.848L.057 23.888a.75.75 0 00.956.956l6.04-1.477A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.938 9.938 0 01-5.07-1.385l-.361-.215-3.736.914.93-3.636-.236-.374A9.904 9.904 0 012.063 12C2.063 6.505 6.505 2.063 12 2.063c5.494 0 9.938 4.442 9.938 9.937 0 5.494-4.444 9.938-9.938 9.938z"/></svg> },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      style={{ width: 38, height: 38, borderRadius: 8, border: "1.5px solid #E2E4EA", display: "flex", alignItems: "center", justifyContent: "center", color: "#6B7280", textDecoration: "none", transition: "all .2s" }}
                      onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = "#5B30E8"; a.style.color = "#5B30E8"; a.style.background = "rgba(91,48,232,0.06)"; }}
                      onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = "#E2E4EA"; a.style.color = "#6B7280"; a.style.background = "transparent"; }}>
                      {s.svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div style={{ background: "#fff", border: "1.5px solid #E2E4EA", borderRadius: 16, padding: "36px 36px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg,#5B30E8,#7C5CFC)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "1.6rem", color: "#fff" }}>✓</div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1A1035", marginBottom: 10 }}>Message Sent!</h3>
                  <p style={{ fontSize: ".9rem", color: "#6B7280", marginBottom: 24 }}>We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={reset} style={{ fontSize: ".85rem", color: "#5B30E8", background: "none", border: "1.5px solid rgba(91,48,232,0.3)", borderRadius: 8, padding: "8px 20px", cursor: "none" }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }} noValidate>
                  {/* Name + Email */}
                  <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={lbl}>Full Name <span style={{ color: "#EF4444" }}>*</span></label>
                      <input type="text" name="name" required value={form.name} onChange={change} placeholder="John Doe"
                        style={inp("name")} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
                    </div>
                    <div>
                      <label style={lbl}>Email <span style={{ color: "#EF4444" }}>*</span></label>
                      <input type="email" name="email" required value={form.email} onChange={change} placeholder="john@example.com"
                        style={inp("email")} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={lbl}>Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={change} placeholder="Project Inquiry"
                      style={inp("subject")} onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={lbl}>Message <span style={{ color: "#EF4444" }}>*</span></label>
                    <textarea name="message" required rows={7} value={form.message} onChange={change}
                      placeholder="Tell us about your project..."
                      style={{ ...inp("message"), resize: "none" }}
                      onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p style={{ fontSize: ".82rem", color: "#EF4444", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, padding: "10px 14px", margin: 0 }}>
                      ⚠️ {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button type="submit" disabled={loading} style={{
                    width: "100%", padding: "14px",
                    borderRadius: 8,
                    background: loading ? "rgba(91,48,232,0.7)" : "#2D3A6E",
                    color: "#fff", border: "none",
                    cursor: loading ? "not-allowed" : "none",
                    fontSize: ".9rem", fontWeight: 700,
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    boxShadow: "0 4px 16px rgba(91,48,232,0.35)",
                    transition: "background .2s, box-shadow .2s",
                  }}
                  onMouseEnter={e => { if (!loading) { (e.currentTarget as HTMLElement).style.background = "#0F1629"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(91,48,232,0.5)"; } }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = loading ? "rgba(91,48,232,0.7)" : "#2D3A6E"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(91,48,232,0.35)"; }}>
                    {loading ? (
                      <><svg style={{ animation: "spin 1s linear infinite" }} width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg> Sending…</>
                    ) : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section style={{ background: "#fff", padding: "0 52px 80px" }}>
        <div className="section-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1.5px solid #E2E4EA", boxShadow: "0 8px 32px rgba(0,0,0,0.06)", position: "relative" }}>
            {/* "Open in Maps" — top left like ojastech */}
            <a
              href="https://maps.app.goo.gl/fPyTpNH2zoiK927e8"
              target="_blank" rel="noopener noreferrer"
              style={{
                position: "absolute", top: 12, left: 12, zIndex: 10,
                background: "#fff",
                border: "1.5px solid #E2E4EA",
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
              title="Tejasbyte Technologies Office Location"
              width="100%" height="280"
              style={{ border: "none", display: "block" }}
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d442!2d85.3121141!3d27.7646532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQ1JzUyLjgiTiA4NcKwMTgnNDMuNiJF!5e0!3m2!1sen!2snp!4v1722000000000!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Address strip */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
            <span style={{ fontSize: ".8rem", color: "#9CA3AF" }}>📍</span>
            <span style={{ fontSize: ".8rem", color: "#6B7280" }}>Tarakeshwore-07, Phutung, Kathmandu, Nepal</span>
            <a href="https://www.google.com/maps/dir/?api=1&destination=27.7646532,85.3121141"
              target="_blank" rel="noopener noreferrer"
              style={{ marginLeft: "auto", fontSize: ".78rem", fontWeight: 600, color: "#5B30E8", textDecoration: "none" }}>
              Get Directions →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
