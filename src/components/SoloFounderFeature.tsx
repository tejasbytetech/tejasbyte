"use client";
import { SocialLinks } from "@/lib/social-url";

interface Member {
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  tags: string[];
  linkedin: string | null;
  social_urls?: string[];
  photo_url?: string | null;
}

const HIGHLIGHTS = [
  { icon: "🚀", label: "Vision",      value: "World-class software from the ground up" },
  { icon: "🤝", label: "Approach",    value: "Direct communication, zero middlemen" },
  { icon: "⚡", label: "Philosophy",  value: "Senior-only team, full-stack ownership" },
];

export default function SoloFounderFeature({ member, showQuote = true }: { member: Member; showQuote?: boolean }) {
  const badgeLabel = member.role.toLowerCase().includes("co-founder") ? "Co-Founder" : "Founder";

  const allSocials = [
    ...(member.linkedin ? [member.linkedin] : []),
    ...(member.social_urls ?? []),
  ].filter(Boolean);

  return (
    <div style={{ marginBottom: 56 }}>
      {/* Main card — horizontal split on desktop, stacked on mobile */}
      <div className="solo-founder-card" style={{
        background: "#fff",
        border: "1.5px solid rgba(91,48,232,0.1)",
        borderRadius: 24, overflow: "hidden",
        display: "grid", gridTemplateColumns: "340px 1fr",
        boxShadow: "0 24px 80px rgba(91,48,232,0.08)",
        position: "relative",
      }}>
        {/* Left — photo */}
        <div style={{ position: "relative", background: `linear-gradient(160deg, ${member.accent}18 0%, ${member.accent}06 100%)`, overflow: "hidden", minHeight: 420 }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: `radial-gradient(circle, ${member.accent}18 0%, transparent 70%)`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -40, left: -40, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle, ${member.accent}12 0%, transparent 70%)`, pointerEvents: "none" }} />

          {member.photo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={member.photo_url} alt={member.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", background: `linear-gradient(135deg, ${member.accent} 0%, ${member.accent}88 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: 800, color: "#fff", boxShadow: `0 16px 40px ${member.accent}40` }}>{member.initials}</div>
            </div>
          )}

          {/* Badge */}
          <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", border: `1px solid ${member.accent}30`, borderRadius: 100, padding: "4px 14px", fontSize: ".6rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: member.accent, zIndex: 2 }}>
            {badgeLabel}
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: `linear-gradient(to top, ${member.accent}28 0%, transparent 100%)`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: `linear-gradient(180deg, ${member.accent}, ${member.accent}40)` }} />
        </div>

        {/* Right — content */}
        <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 800, color: "#1A1035", letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 10 }}>
              {member.name}
            </h3>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 100, background: `${member.accent}10`, border: `1px solid ${member.accent}25` }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: member.accent, boxShadow: `0 0 6px ${member.accent}` }} />
              <span style={{ fontSize: ".72rem", fontWeight: 700, color: member.accent, letterSpacing: ".06em", textTransform: "uppercase" }}>{member.role}</span>
            </div>
          </div>

          <p style={{ fontSize: ".95rem", lineHeight: 1.8, color: "rgba(26,16,53,0.58)", marginBottom: 28, maxWidth: 480 }}>
            {member.bio}
          </p>

          {/* Highlights */}
          <div className="solo-founder-highlights" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 28 }}>
            {HIGHLIGHTS.map(h => (
              <div key={h.label} style={{ background: "#F7F5FF", borderRadius: 14, padding: "14px 16px", border: "1px solid rgba(91,48,232,0.07)" }}>
                <div style={{ fontSize: "1.1rem", marginBottom: 6 }}>{h.icon}</div>
                <div style={{ fontSize: ".56rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(91,48,232,0.45)", marginBottom: 3 }}>{h.label}</div>
                <div style={{ fontSize: ".72rem", fontWeight: 600, color: "#1A1035", lineHeight: 1.5 }}>{h.value}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
            {member.tags.map(t => (
              <span key={t} style={{ padding: "4px 12px", borderRadius: 100, background: `${member.accent}10`, border: `1px solid ${member.accent}22`, fontSize: ".6rem", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: member.accent }}>{t}</span>
            ))}
          </div>

          {/* Social links */}
          {allSocials.length > 0 && <SocialLinks urls={allSocials} size={32} />}
        </div>
      </div>

      {/* Quote strip */}
      {showQuote && (
      <div style={{ marginTop: 20, background: `linear-gradient(135deg, ${member.accent}0D 0%, rgba(91,48,232,0.04) 100%)`, border: `1px solid ${member.accent}18`, borderRadius: 16, padding: "20px 28px", display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ fontSize: "2rem", lineHeight: 1, color: member.accent, opacity: 0.4, fontFamily: "Georgia, serif", flexShrink: 0 }}>&ldquo;</div>
        <p style={{ fontSize: ".9rem", lineHeight: 1.75, color: "rgba(26,16,53,0.6)", fontStyle: "italic", margin: 0 }}>
          Building Tejasbyte with a singular focus — deliver world-class software engineering that makes a real difference for our clients&apos; businesses.
        </p>
        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: member.accent, opacity: 0.25, flexShrink: 0 }}>{member.name.split(" ")[0]}</div>
      </div>
      )}
    </div>
  );
}
