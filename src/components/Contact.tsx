"use client";
import { useEffect, useRef, useState } from "react";
import { useContactForm } from "@/lib/useContactForm";

const BUDGETS = ["< $10k", "$10k – $30k", "$30k – $80k", "$80k+", "Let's discuss"];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [budget, setBudget]   = useState("");
  const [form, setForm]       = useState({ name: "", email: "", company: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const { loading, sent, error, submit, reset } = useContactForm();

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({ ...form, budget, subject: "Project Inquiry" });
  };

  const fieldWrap: React.CSSProperties = {
    display: "flex", flexDirection: "column", gap: 6,
  };
  const label: React.CSSProperties = {
    fontFamily: '"Inter",sans-serif',
    fontSize: ".72rem", fontWeight: 700,
    letterSpacing: ".08em", textTransform: "uppercase",
    color: "rgba(26,16,53,0.5)",
  };

  const input = (name: string): React.CSSProperties => ({
    width: "100%", padding: "12px 16px",
    background: focused === name ? "#fff" : "#F7F5FF",
    border: focused === name ? "1.5px solid rgba(91,48,232,0.5)" : "1.5px solid rgba(91,48,232,0.15)",
    borderRadius: 10,
    color: "#1A1035",
    fontFamily: '"Inter",sans-serif',
    fontSize: ".9rem",
    outline: "none",
    transition: "border-color .2s, background .2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(91,48,232,0.08)" : "none",
  });

  return (
    <section id="contact" ref={ref} style={{
      background: "#fff",
      padding: "120px 0 130px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Bg blob */}
      <div style={{
        position: "absolute", top: "20%", right: "-8%",
        width: 450, height: 450, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(91,48,232,0.06) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%",
        width: 350, height: 350, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 52px", position: "relative", zIndex: 1 }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "start" }}>

          {/* Left */}
          <div className="reveal">
            <span className="section-label" style={{ marginBottom: 24, display: "inline-flex" }}>Get In Touch</span>

            <h2 style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-.03em",
              color: "#1A1035",
              marginTop: 20, marginBottom: 20,
            }}>
              Have a project<br />
              <span className="gradient-text">worth building?</span>
            </h2>

            <p style={{
              fontFamily: '"Inter",sans-serif',
              fontSize: ".95rem", lineHeight: 1.8,
              color: "rgba(26,16,53,0.55)",
              maxWidth: 360, marginBottom: 48,
            }}>
              We work with a small number of clients at a time — so every project
              gets the full attention of senior engineers. Tell us what you&apos;re building.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { icon: "✉️", label: "Email",    val: "contact@tejasbyte.com",  href: "mailto:contact@tejasbyte.com" },
                { icon: "📍", label: "Location", val: "Kathmandu, Nepal",     href: null },
                { icon: "⏱️", label: "Response", val: "Within 24 hours",      href: null },
              ].map(({ icon, label: lbl, val, href }) => (
                <div key={lbl} style={{
                  display: "flex", gap: 16, alignItems: "center",
                  padding: "18px 0",
                  borderBottom: "1px solid rgba(91,48,232,0.08)",
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: "rgba(91,48,232,0.07)",
                    border: "1.5px solid rgba(91,48,232,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1rem",
                  }}>{icon}</div>
                  <div>
                    <div style={{
                      fontFamily: '"Inter",sans-serif',
                      fontSize: ".65rem", fontWeight: 700,
                      letterSpacing: ".1em", textTransform: "uppercase",
                      color: "rgba(91,48,232,0.5)", marginBottom: 2,
                    }}>{lbl}</div>
                    {href
                      ? <a href={href} style={{
                          fontFamily: '"Inter",sans-serif',
                          fontSize: ".9rem", fontWeight: 600,
                          color: "#1A1035", textDecoration: "none",
                          transition: "color .2s",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#5B30E8"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#1A1035"; }}
                        >{val}</a>
                      : <span style={{
                          fontFamily: '"Inter",sans-serif',
                          fontSize: ".9rem", fontWeight: 600,
                          color: "#1A1035",
                        }}>{val}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ transitionDelay: ".1s" }}>
            {sent ? (
              <div style={{
                background: "#fff",
                border: "1.5px solid rgba(91,48,232,0.15)",
                borderRadius: 24, padding: "56px 48px",
                textAlign: "center",
                boxShadow: "0 20px 60px rgba(91,48,232,0.08)",
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "linear-gradient(135deg,#5B30E8,#7C5CFC)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: "1.5rem",
                }}>✓</div>
                <h3 style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: "1.6rem", fontWeight: 800,
                  letterSpacing: "-.02em", color: "#1A1035", marginBottom: 12,
                }}>Message received!</h3>
                <p style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: ".9rem", lineHeight: 1.75,
                  color: "rgba(26,16,53,0.55)",
                  marginBottom: 28,
                }}>We&apos;ll review your brief and reply within 24 hours.</p>
                <button
                  onClick={() => { reset(); setForm({ name: "", email: "", company: "", message: "" }); setBudget(""); }}
                  className="btn-outline"
                  style={{ fontSize: ".82rem" }}
                >Send another message</button>
              </div>
            ) : (
              <div style={{
                background: "#fff",
                border: "1.5px solid rgba(91,48,232,0.12)",
                borderRadius: 24, padding: "48px 40px",
                boxShadow: "0 20px 60px rgba(91,48,232,0.06)",
              }}>
                <h3 style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: "1.2rem", fontWeight: 800,
                  color: "#1A1035", marginBottom: 32,
                  letterSpacing: "-.01em",
                }}>Tell us about your project</h3>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }} noValidate>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="contact-form-row">
                    {(["name", "email"] as const).map(field => (
                      <div key={field} style={fieldWrap}>
                        <label style={label}>
                          {field === "name" ? "Full Name *" : "Email *"}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field} required
                          value={form[field]} onChange={change}
                          placeholder={field === "name" ? "Jane Smith" : "jane@company.com"}
                          style={input(field)}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={fieldWrap}>
                    <label style={label}>Company</label>
                    <input
                      type="text" name="company"
                      value={form.company} onChange={change}
                      placeholder="Acme Inc."
                      style={input("company")}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <div style={fieldWrap}>
                    <label style={label}>Budget Range</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {BUDGETS.map(b => (
                        <button
                          key={b} type="button"
                          onClick={() => setBudget(b)}
                          style={{
                            padding: "7px 16px", borderRadius: 100,
                            background: budget === b ? "#5B30E8" : "transparent",
                            border: `1.5px solid ${budget === b ? "#5B30E8" : "rgba(91,48,232,0.2)"}`,
                            color: budget === b ? "#fff" : "rgba(26,16,53,0.6)",
                            fontFamily: '"Inter",sans-serif',
                            fontSize: ".75rem", fontWeight: 600,
                            cursor: "none",
                            transition: "all .2s",
                          }}
                        >{b}</button>
                      ))}
                    </div>
                  </div>

                  <div style={fieldWrap}>
                    <label style={label}>Project Details *</label>
                    <textarea
                      name="message" required rows={4}
                      value={form.message} onChange={change}
                      placeholder="What are you building? Timeline? Any constraints we should know about?"
                      style={{ ...input("message"), resize: "none" }}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p style={{ fontFamily: '"Inter",sans-serif', fontSize: ".82rem", color: "#EF4444", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, padding: "10px 14px", margin: 0 }}>
                      ⚠️ {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-purple"
                    style={{
                      alignSelf: "flex-start",
                      opacity: loading ? .7 : 1,
                      cursor: loading ? "not-allowed" : "none",
                    }}
                  >
                    {loading ? (
                      <>
                        <svg style={{ animation: "spin 1s linear infinite" }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        Sending…
                      </>
                    ) : "Send Message →"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
