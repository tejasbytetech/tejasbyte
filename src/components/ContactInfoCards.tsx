"use client";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tejasbyte",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/tejasbytetech",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/9849627282",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.534 5.848L.057 23.888a.75.75 0 00.956.956l6.04-1.477A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.938 9.938 0 01-5.07-1.385l-.361-.215-3.736.914.93-3.636-.236-.374A9.904 9.904 0 012.063 12C2.063 6.505 6.505 2.063 12 2.063c5.494 0 9.938 4.442 9.938 9.937 0 5.494-4.444 9.938-9.938 9.938z" />
      </svg>
    ),
  },
];

const cardStyle: React.CSSProperties = {
  background: "#fff",
  border: "1.5px solid #E2E4EA",
  borderRadius: 12,
  padding: "18px 20px",
  display: "flex",
  alignItems: "flex-start",
  gap: 14,
  transition: "border-color .2s",
};

const iconBox: React.CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: 10,
  flexShrink: 0,
  background: "#fff",
  border: "1.5px solid #E2E4EA",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const labelStyle: React.CSSProperties = {
  fontSize: ".62rem",
  fontWeight: 700,
  letterSpacing: ".1em",
  textTransform: "uppercase",
  color: "#9CA3AF",
  marginBottom: 4,
};

export default function ContactInfoCards() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

      {/* Our Offices */}
      <div style={cardStyle}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.35)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E4EA"; }}>
        <div style={{ ...iconBox, fontSize: "1.1rem" }}>📍</div>
        <div>
          <p style={labelStyle}>Our Offices</p>
          <p style={{ fontSize: ".875rem", fontWeight: 600, color: "#1A1035", lineHeight: 1.65 }}>
            🇺🇸 2420 Rheem Ave, Richmond, CA 94804<br />
            🇳🇵 Kathmandu, Nepal
          </p>
        </div>
      </div>

      {/* Mail Us */}
      <div style={cardStyle}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.35)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E4EA"; }}>
        <div style={{ ...iconBox, fontSize: "1.1rem" }}>✉️</div>
        <div>
          <p style={labelStyle}>Mail Us</p>
          <a
            href="mailto:contact@tejasbyte.com"
            style={{ fontSize: ".875rem", fontWeight: 600, color: "#1A1035", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#5B30E8"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#1A1035"; }}
          >
            contact@tejasbyte.com
          </a>
        </div>
      </div>

      {/* WhatsApp — gray outlined icon (matching Follow Us row) */}
      <div style={cardStyle}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.35)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E4EA"; }}>
        <div style={{ ...iconBox }}>
          <svg viewBox="0 0 24 24" fill="#6B7280" width="20" height="20">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.534 5.848L.057 23.888a.75.75 0 00.956.956l6.04-1.477A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.938 9.938 0 01-5.07-1.385l-.361-.215-3.736.914.93-3.636-.236-.374A9.904 9.904 0 012.063 12C2.063 6.505 6.505 2.063 12 2.063c5.494 0 9.938 4.442 9.938 9.937 0 5.494-4.444 9.938-9.938 9.938z" />
          </svg>
        </div>
        <div>
          <p style={labelStyle}>WhatsApp</p>
          <a
            href="https://wa.me/9849627282"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: ".875rem", fontWeight: 600, color: "#1A1035", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#5B30E8"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#1A1035"; }}
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>

      {/* Follow Us */}
      <div style={{ ...cardStyle, flexDirection: "column", gap: 0 }}>
        <p style={{ ...labelStyle, marginBottom: 14 }}>Follow Us</p>
        <div style={{ display: "flex", gap: 10 }}>
          {SOCIALS.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: 38, height: 38, borderRadius: 8,
                border: "1.5px solid #E2E4EA",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#6B7280", textDecoration: "none",
                transition: "all .2s",
              }}
              onMouseEnter={e => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.borderColor = "#5B30E8";
                a.style.color = "#5B30E8";
                a.style.background = "rgba(91,48,232,0.06)";
              }}
              onMouseLeave={e => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.borderColor = "#E2E4EA";
                a.style.color = "#6B7280";
                a.style.background = "transparent";
              }}
            >
              {s.svg}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
