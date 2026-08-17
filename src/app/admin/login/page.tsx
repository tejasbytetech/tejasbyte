"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#0F1629",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "20px",
    }}>
      {/* Bg blob */}
      <div style={{ position: "fixed", top: "10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.2) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "10%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.15) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{
        width: "100%", maxWidth: 420,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20, padding: "48px 40px",
        backdropFilter: "blur(20px)",
        position: "relative", zIndex: 1,
      }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ width: 160, height: 48, position: "relative", margin: "0 auto 16px" }}>
            <Image src="/finallogos/transparent-logo.png" alt="Tejasbyte" fill style={{ objectFit: "contain" }} />
          </div>
          <p style={{ fontSize: ".78rem", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
            Admin Dashboard
          </p>
        </div>

        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 8, textAlign: "center", letterSpacing: "-.02em" }}>
          Sign in
        </h1>
        <p style={{ fontSize: ".85rem", color: "rgba(255,255,255,0.4)", textAlign: "center", marginBottom: 32 }}>
          Access the Tejasbyte admin panel
        </p>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label style={{ display: "block", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>
              Email
            </label>
            <input
              type="email" required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@tejasbyte.com"
              style={{
                width: "100%", padding: "12px 16px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10, color: "#fff",
                fontSize: ".9rem", outline: "none",
                transition: "border-color .2s",
              }}
              onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(91,48,232,0.6)"; }}
              onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>
              Password
            </label>
            <input
              type="password" required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: "100%", padding: "12px 16px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10, color: "#fff",
                fontSize: ".9rem", outline: "none",
                transition: "border-color .2s",
              }}
              onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(91,48,232,0.6)"; }}
              onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
            />
          </div>

          {error && (
            <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8, padding: "10px 14px", fontSize: ".82rem", color: "#FCA5A5" }}>
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%", padding: "13px",
              background: loading ? "rgba(91,48,232,0.6)" : "#5B30E8",
              color: "#fff", border: "none",
              borderRadius: 10, fontSize: ".9rem", fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background .2s, transform .15s",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
            onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#4020C0"; }}
            onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#5B30E8"; }}
          >
            {loading ? (
              <>
                <svg style={{ animation: "spin 1s linear infinite" }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                Signing in…
              </>
            ) : "Sign In →"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 24, fontSize: ".75rem", color: "rgba(255,255,255,0.2)" }}>
          Tejasbyte Technologies Admin Panel
        </p>
      </div>
    </div>
  );
}
