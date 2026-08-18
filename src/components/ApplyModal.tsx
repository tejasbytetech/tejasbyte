"use client";
import { useState, useEffect } from "react";

interface Props {
  role: string;
  onClose: () => void;
}

export default function ApplyModal({ role, onClose }: Props) {
  const [form, setForm]     = useState({ name: "", email: "", phone: "", experience: "", portfolio: "", cover: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent]     = useState(false);
  const [error, setError]   = useState("");

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");
      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const inp = (name: string): React.CSSProperties => ({
    width: "100%", padding: "11px 14px",
    background: focused === name ? "#fff" : "#F7F8FA",
    border: `1.5px solid ${focused === name ? "#5B30E8" : "#E2E4EA"}`,
    borderRadius: 9, color: "#1A1035",
    fontSize: ".875rem", outline: "none",
    transition: "border-color .2s, background .2s, box-shadow .2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(91,48,232,0.08)" : "none",
    boxSizing: "border-box" as const,
  });

  const lbl: React.CSSProperties = {
    display: "block", fontSize: ".68rem", fontWeight: 700,
    letterSpacing: ".08em", textTransform: "uppercase",
    color: "rgba(26,16,53,0.45)", marginBottom: 7,
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, background: "rgba(10,8,25,0.7)",
          backdropFilter: "blur(6px)", zIndex: 99990,
          animation: "fadeIn .2s ease",
        }}
      />

      {/* Modal */}
      <div className="apply-modal-inner" style={{
        position: "fixed", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100%", maxWidth: 560,
        maxHeight: "90vh", overflowY: "auto",
        background: "#fff", borderRadius: 20,
        boxShadow: "0 32px 80px rgba(0,0,0,0.3)",
        zIndex: 99991, padding: 0,
        animation: "slideUp .25s cubic-bezier(.16,1,.3,1)",
      }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #0F1629 0%, #2D3A6E 100%)",
          padding: "28px 32px 24px",
          borderRadius: "20px 20px 0 0",
          position: "relative",
        }}>
          <button onClick={onClose} style={{
            position: "absolute", top: 16, right: 16,
            width: 32, height: 32, borderRadius: "50%",
            background: "rgba(255,255,255,0.1)", border: "none",
            color: "rgba(255,255,255,0.7)", cursor: "pointer",
            fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background .2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
          >×</button>
          <p style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 6 }}>
            Applying for
          </p>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "-.02em" }}>
            {role}
          </h2>
          <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
            Tejasbyte Technologies
          </p>
        </div>

        <div style={{ padding: "28px 32px 32px" }}>
          {sent ? (
            /* Success state */
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "linear-gradient(135deg, #5B30E8, #7C5CFC)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px", fontSize: "1.6rem",
              }}>✓</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1A1035", marginBottom: 10 }}>
                Application Submitted!
              </h3>
              <p style={{ fontSize: ".9rem", lineHeight: 1.75, color: "rgba(26,16,53,0.55)", marginBottom: 8 }}>
                Thanks for applying for <strong>{role}</strong>.
              </p>
              <p style={{ fontSize: ".875rem", lineHeight: 1.75, color: "rgba(26,16,53,0.55)", marginBottom: 28 }}>
                Our team will evaluate your details and get back to you shortly. A confirmation has been sent to your email.
              </p>
              <button onClick={onClose} style={{
                padding: "11px 28px", borderRadius: 10,
                background: "#2D3A6E", color: "#fff", border: "none",
                fontSize: ".875rem", fontWeight: 700, cursor: "pointer",
              }}>Close</button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }} noValidate>
              {/* Name + Email */}
              <div className="apply-modal-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={lbl}>Full Name <span style={{ color: "#EF4444" }}>*</span></label>
                  <input type="text" name="name" required value={form.name} onChange={change}
                    placeholder="Jane Smith" style={inp("name")}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
                </div>
                <div>
                  <label style={lbl}>Email <span style={{ color: "#EF4444" }}>*</span></label>
                  <input type="email" name="email" required value={form.email} onChange={change}
                    placeholder="jane@example.com" style={inp("email")}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
                </div>
              </div>

              {/* Phone + Experience */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={lbl}>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={change}
                    placeholder="+977 9800000000" style={inp("phone")}
                    onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} />
                </div>
                <div>
                  <label style={lbl}>Years of Experience</label>
                  <select name="experience" value={form.experience} onChange={change}
                    style={{ ...inp("experience"), cursor: "pointer" }}
                    onFocus={() => setFocused("experience")} onBlur={() => setFocused(null)}>
                    <option value="">Select...</option>
                    <option>1–2 years</option>
                    <option>3–5 years</option>
                    <option>5–8 years</option>
                    <option>8+ years</option>
                  </select>
                </div>
              </div>

              {/* Portfolio */}
              <div>
                <label style={lbl}>Portfolio / GitHub / LinkedIn URL</label>
                <input type="url" name="portfolio" value={form.portfolio} onChange={change}
                  placeholder="https://github.com/yourhandle" style={inp("portfolio")}
                  onFocus={() => setFocused("portfolio")} onBlur={() => setFocused(null)} />
              </div>

              {/* Cover letter */}
              <div>
                <label style={lbl}>Cover Letter <span style={{ color: "#EF4444" }}>*</span></label>
                <textarea name="cover" required rows={5} value={form.cover} onChange={change}
                  placeholder="Tell us why you're a great fit for this role. What have you built that you're most proud of?"
                  style={{ ...inp("cover"), resize: "vertical" }}
                  onFocus={() => setFocused("cover")} onBlur={() => setFocused(null)} />
              </div>

              {error && (
                <p style={{ fontSize: ".82rem", color: "#EF4444", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, padding: "10px 14px", margin: 0 }}>
                  ⚠️ {error}
                </p>
              )}

              <div style={{ display: "flex", gap: 12, paddingTop: 4 }}>
                <button type="submit" disabled={loading} style={{
                  flex: 1, padding: "13px",
                  borderRadius: 10, border: "none",
                  background: loading ? "rgba(45,58,110,0.7)" : "#2D3A6E",
                  color: "#fff", fontSize: ".9rem", fontWeight: 700,
                  cursor: loading ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  boxShadow: "0 4px 16px rgba(45,58,110,0.4)",
                  transition: "background .2s",
                }}
                onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#0F1629"; }}
                onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#2D3A6E"; }}>
                  {loading ? (
                    <>
                      <svg style={{ animation: "spin 1s linear infinite" }} width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      Submitting…
                    </>
                  ) : "Submit →"}
                </button>
                <button type="button" onClick={onClose} style={{
                  padding: "13px 20px", borderRadius: 10,
                  border: "1.5px solid #E2E4EA", background: "transparent",
                  color: "rgba(26,16,53,0.5)", fontSize: ".875rem", fontWeight: 600,
                  cursor: "pointer",
                }}>Cancel</button>
              </div>

              <p style={{ fontSize: ".72rem", color: "rgba(26,16,53,0.35)", textAlign: "center", margin: 0 }}>
                We review every application and aim to respond within 5–7 business days.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translate(-50%,-46%)} to{opacity:1;transform:translate(-50%,-50%)} }
      `}</style>
    </>
  );
}
