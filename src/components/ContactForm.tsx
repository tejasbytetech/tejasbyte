"use client";
import { useState } from "react";
import { useContactForm } from "@/lib/useContactForm";

interface Props {
  rows?: number; // textarea rows, default 6
}

export default function ContactForm({ rows = 6 }: Props) {
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
    boxSizing: "border-box" as const,
  });

  const lbl: React.CSSProperties = {
    fontSize: ".72rem", fontWeight: 600,
    color: "#6B7280", display: "block", marginBottom: 6,
  };

  if (sent) {
    return (
      <div style={{
        background: "#fff", border: "1.5px solid #E2E4EA",
        borderRadius: 16, padding: "48px 40px",
        textAlign: "center",
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          background: "linear-gradient(135deg,#5B30E8,#7C5CFC)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 20px", fontSize: "1.6rem", color: "#fff",
        }}>✓</div>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1A1035", marginBottom: 10 }}>
          Message Sent!
        </h3>
        <p style={{ fontSize: ".9rem", color: "#6B7280", marginBottom: 24, lineHeight: 1.7 }}>
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => { reset(); setForm({ name: "", email: "", subject: "", message: "" }); }}
          style={{
            fontSize: ".875rem", color: "#5B30E8", background: "none",
            border: "1.5px solid rgba(91,48,232,0.3)", borderRadius: 8,
            padding: "9px 22px", cursor: "pointer", transition: "background .2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(91,48,232,0.06)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div style={{
      background: "#fff", border: "1.5px solid #E2E4EA",
      borderRadius: 16, padding: "36px 36px",
    }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }} noValidate>

        {/* Name + Email */}
        <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={lbl}>Full Name <span style={{ color: "#EF4444" }}>*</span></label>
            <input type="text" name="name" required value={form.name} onChange={change}
              placeholder="John Doe" style={inp("name")}
              onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
          </div>
          <div>
            <label style={lbl}>Email <span style={{ color: "#EF4444" }}>*</span></label>
            <input type="email" name="email" required value={form.email} onChange={change}
              placeholder="john@example.com" style={inp("email")}
              onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label style={lbl}>Subject</label>
          <input type="text" name="subject" value={form.subject} onChange={change}
            placeholder="Project Inquiry" style={inp("subject")}
            onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} />
        </div>

        {/* Message */}
        <div>
          <label style={lbl}>Message <span style={{ color: "#EF4444" }}>*</span></label>
          <textarea name="message" required rows={rows} value={form.message} onChange={change}
            placeholder="Tell us about your project..."
            style={{ ...inp("message"), resize: "none" }}
            onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
        </div>

        {/* Error */}
        {error && (
          <p style={{
            fontSize: ".82rem", color: "#EF4444",
            background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: 8, padding: "10px 14px", margin: 0,
          }}>
            ⚠️ {error}
          </p>
        )}

        {/* Submit */}
        <button type="submit" disabled={loading} style={{
          width: "100%", padding: "14px", borderRadius: 8,
          background: loading ? "rgba(45,58,110,0.7)" : "#2D3A6E",
          color: "#fff", border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: ".9rem", fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          boxShadow: "0 4px 16px rgba(45,58,110,0.35)",
          transition: "background .2s, box-shadow .2s",
        }}
        onMouseEnter={e => { if (!loading) { (e.currentTarget as HTMLElement).style.background = "#0F1629"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(45,58,110,0.5)"; } }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = loading ? "rgba(45,58,110,0.7)" : "#2D3A6E"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(45,58,110,0.35)"; }}>
          {loading ? (
            <>
              <svg style={{ animation: "spin 1s linear infinite" }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              Sending…
            </>
          ) : "Send Message"}
        </button>

      </form>
    </div>
  );
}
