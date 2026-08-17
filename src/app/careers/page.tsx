import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";
import type { HiringRow } from "@/lib/supabase/types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — Tejasbyte Technologies",
  description: "Join the Tejasbyte engineering team. We're hiring senior engineers across AI, web, mobile, and cloud infrastructure.",
  alternates: { canonical: "https://www.tejasbyte.com/careers" },
};

export const revalidate = 60; // revalidate every minute

export default async function CareersPage() {
  const supabase = await createClient();
  const { data: roles } = await supabase
    .from("hiring")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  const departments = [...new Set((roles ?? []).map(r => r.department))];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div style={{
          background: "linear-gradient(135deg, #0F1629 0%, #1A1035 100%)",
          padding: "120px 52px 72px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-15%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.22) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
          <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 24 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px rgba(34,197,94,0.8)" }} />
              We&apos;re Hiring
            </span>
            <h1 style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.03em", color: "#fff", marginBottom: 20 }}>
              Build the future<br />
              <span className="gradient-text">with us</span>
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.78, color: "rgba(255,255,255,0.55)", maxWidth: 520 }}>
              We&apos;re a senior-only engineering team incorporated in the United States, operating from Kathmandu, Nepal. If you care deeply about craft, we want to hear from you.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
              {[
                { val: roles?.length ?? 0, label: "Open Roles" },
                { val: "100%", label: "Remote-friendly" },
                { val: "Senior", label: "Engineers Only" },
              ].map(s => (
                <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#A78BFA" }}>{s.val}</span>
                  <span style={{ fontSize: ".75rem", color: "rgba(255,255,255,0.35)", letterSpacing: ".04em" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roles */}
        <section style={{ background: "#F7F5FF", padding: "72px 52px 100px" }}>
          <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>

            {(!roles || roles.length === 0) ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>🔭</div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1A1035", marginBottom: 12 }}>No open roles right now</h2>
                <p style={{ fontSize: ".9rem", color: "rgba(26,16,53,0.5)", maxWidth: 400, margin: "0 auto 24px" }}>
                  We don&apos;t have any listed openings at the moment, but we&apos;re always interested in hearing from talented engineers.
                </p>
                <Link href="/contact" className="btn-purple" style={{ textDecoration: "none" }}>Send us your CV →</Link>
              </div>
            ) : (
              <>
                {departments.map(dept => {
                  const deptRoles = (roles ?? []).filter((r: HiringRow) => r.department === dept);
                  return (
                    <div key={dept} style={{ marginBottom: 52 }}>
                      <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A1035", letterSpacing: ".02em", textTransform: "uppercase", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ width: 4, height: 20, borderRadius: 2, background: "linear-gradient(135deg,#5B30E8,#A78BFA)", display: "inline-block" }} />
                        {dept}
                      </h2>
                      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {deptRoles.map((role: HiringRow) => (
                          <RoleCard key={role.id} role={role} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ background: "#fff", padding: "64px 52px 80px" }}>
          <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{
              background: "linear-gradient(135deg, #0F1629 0%, #1A1035 100%)",
              borderRadius: 20, padding: "52px 56px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden",
            }} className="cta-strip">
              <div style={{ position: "absolute", top: "-30%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-.02em" }}>
                  Don&apos;t see the right role?
                </h2>
                <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.55)" }}>
                  Send us your CV and tell us what you&apos;re great at. We review every application.
                </p>
              </div>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 32px", borderRadius: 10, background: "#5B30E8", color: "#fff",
                fontSize: ".875rem", fontWeight: 700, textDecoration: "none",
                position: "relative", zIndex: 1, flexShrink: 0,
                boxShadow: "0 4px 20px rgba(91,48,232,0.5)",
              }}>
                Get in Touch →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function RoleCard({ role }: { role: HiringRow }) {
  return (
    <div style={{
      background: "#fff", border: "1.5px solid rgba(91,48,232,0.1)",
      borderRadius: 16, padding: "28px 32px",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 16 }}>
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1035", marginBottom: 6, letterSpacing: "-.01em" }}>{role.title}</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { icon: "📍", val: role.location },
              { icon: "⏱️", val: role.type },
              { icon: "🎯", val: role.experience },
            ].map(item => (
              <span key={item.val} style={{ fontSize: ".78rem", color: "rgba(26,16,53,0.5)", display: "flex", alignItems: "center", gap: 4 }}>
                {item.icon} {item.val}
              </span>
            ))}
          </div>
        </div>
        <Link href="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "10px 22px", borderRadius: 10,
          background: "#5B30E8", color: "#fff",
          fontSize: ".8rem", fontWeight: 700, textDecoration: "none",
          boxShadow: "0 4px 16px rgba(91,48,232,0.35)", flexShrink: 0,
        }}>
          Apply Now →
        </Link>
      </div>

      <p style={{ fontSize: ".875rem", lineHeight: 1.78, color: "rgba(26,16,53,0.6)", marginBottom: 20 }}>
        {role.description}
      </p>

      {role.requirements?.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(26,16,53,0.35)", marginBottom: 10 }}>Requirements</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            {role.requirements.map((req: string, i: number) => (
              <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: ".875rem", color: "rgba(26,16,53,0.6)" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#5B30E8", flexShrink: 0, marginTop: 8 }} />
                {req}
              </li>
            ))}
          </ul>
        </div>
      )}

      {role.tags?.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {role.tags.map((t: string) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}
