import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Tejasbyte Technologies",
  description: "Privacy Policy for Tejasbyte Technologies. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.tejasbyte.com/privacy" },
};

const LAST_UPDATED = "August 11, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{
        fontSize: "1.25rem", fontWeight: 800,
        color: "#1A1035", letterSpacing: "-.02em",
        marginBottom: 16, paddingBottom: 12,
        borderBottom: "1.5px solid rgba(91,48,232,0.1)",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <span style={{
          width: 4, height: 20, borderRadius: 2,
          background: "linear-gradient(135deg,#5B30E8,#A78BFA)",
          display: "inline-block", flexShrink: 0,
        }} />
        {title}
      </h2>
      <div style={{ fontSize: ".95rem", lineHeight: 1.85, color: "rgba(26,16,53,0.65)" }}>
        {children}
      </div>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: 14 }}>{children}</p>;
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5B30E8", flexShrink: 0, marginTop: 8 }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Legal"
          title="Privacy"
          highlight="Policy"
          description="How we collect, use, and protect your information when you use our services."
        />

        <section style={{ background: "#fff", padding: "72px 52px 100px" }}>
          <div className="section-inner" style={{ maxWidth: 820, margin: "0 auto" }}>

            {/* Last updated badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(91,48,232,0.06)",
              border: "1px solid rgba(91,48,232,0.15)",
              borderRadius: 100, padding: "6px 16px",
              fontSize: ".75rem", fontWeight: 600, color: "#5B30E8",
              marginBottom: 48,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#5B30E8" }} />
              Last updated: {LAST_UPDATED}
            </div>

            <Section title="Introduction">
              <P>
                Tejasbyte Technologies Pvt. Ltd. (&quot;Tejasbyte&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed
                to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website at{" "}
                <a href="https://www.tejasbyte.com" style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>
                  www.tejasbyte.com
                </a>{" "}
                or engage our software engineering services.
              </P>
              <P>
                Please read this policy carefully. If you disagree with its terms, please discontinue
                use of our website.
              </P>
            </Section>

            <Section title="Information We Collect">
              <P>We may collect the following types of information:</P>
              <P><strong style={{ color: "#1A1035" }}>Information you provide directly:</strong></P>
              <Ul items={[
                "Name, email address, and phone number submitted via our contact forms",
                "Company name, project details, and budget range from inquiry submissions",
                "Email address provided when subscribing to our newsletter",
                "Communications you send us via email or messaging platforms",
              ]} />
              <P><strong style={{ color: "#1A1035" }}>Information collected automatically:</strong></P>
              <Ul items={[
                "IP address and browser type when you visit our website",
                "Pages visited, time spent, and navigation patterns (via analytics)",
                "Device type, operating system, and screen resolution",
                "Referring URLs and search terms used to find our site",
              ]} />
            </Section>

            <Section title="How We Use Your Information">
              <P>We use the information we collect to:</P>
              <Ul items={[
                "Respond to your inquiries and provide software development services",
                "Send newsletters and updates you have subscribed to",
                "Improve our website, content, and service offerings",
                "Analyse website traffic and user behaviour to enhance user experience",
                "Comply with legal obligations and enforce our agreements",
                "Prevent fraud and maintain the security of our systems",
              ]} />
            </Section>

            <Section title="How We Share Your Information">
              <P>
                We do not sell, trade, or rent your personal information to third parties.
                We may share your information only in the following circumstances:
              </P>
              <Ul items={[
                "With service providers (e.g. email platforms, analytics tools) who assist in our operations under strict confidentiality agreements",
                "With professional advisors such as lawyers or accountants when legally required",
                "In connection with a merger, acquisition, or sale of business assets",
                "When required by law, regulation, or valid legal process",
                "To protect the rights, property, or safety of Tejasbyte, our clients, or the public",
              ]} />
            </Section>

            <Section title="Cookies and Tracking">
              <P>
                Our website may use cookies and similar tracking technologies to enhance your
                browsing experience. Cookies are small files stored on your device that help us
                remember preferences and understand how you interact with our site.
              </P>
              <P>You can control cookie settings through your browser preferences. Disabling cookies
              may affect certain features of our website.</P>
            </Section>

            <Section title="Data Retention">
              <P>
                We retain your personal information only for as long as necessary to fulfil the
                purposes described in this policy, unless a longer retention period is required or
                permitted by law. Contact form submissions are retained for up to 2 years.
                Newsletter subscriptions are retained until you unsubscribe.
              </P>
            </Section>

            <Section title="Data Security">
              <P>
                We implement appropriate technical and organisational measures to protect your
                personal information against unauthorised access, disclosure, alteration, or
                destruction. Our website is served over HTTPS and we use industry-standard
                encryption for data in transit.
              </P>
              <P>
                However, no method of transmission over the internet is 100% secure.
                We cannot guarantee absolute security of your data.
              </P>
            </Section>

            <Section title="Third-Party Services">
              <P>Our website and services may use the following third-party providers:</P>
              <Ul items={[
                "Vercel — website hosting and deployment",
                "Resend — transactional email delivery",
                "Google Analytics — website traffic analysis (anonymised)",
                "Cloudflare — DNS management and security",
              ]} />
              <P>
                Each third-party provider has their own privacy policy governing their use of data.
                We encourage you to review those policies.
              </P>
            </Section>

            <Section title="Your Rights">
              <P>You have the right to:</P>
              <Ul items={[
                "Access the personal information we hold about you",
                "Request correction of inaccurate or incomplete information",
                "Request deletion of your personal information",
                "Withdraw consent for marketing communications at any time",
                "Lodge a complaint with a data protection authority if applicable",
              ]} />
              <P>
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:contact@tejasbyte.com" style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>
                  contact@tejasbyte.com
                </a>.
              </P>
            </Section>

            <Section title="Children's Privacy">
              <P>
                Our website and services are not directed to individuals under the age of 16.
                We do not knowingly collect personal information from children. If you believe
                we have inadvertently collected such information, please contact us immediately.
              </P>
            </Section>

            <Section title="Changes to This Policy">
              <P>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by updating the &quot;Last updated&quot; date at the top of this page.
                Your continued use of our website after changes are posted constitutes your
                acceptance of the updated policy.
              </P>
            </Section>

            <Section title="Contact Us">
              <P>If you have questions about this Privacy Policy, please contact us:</P>
              <div style={{
                background: "#F7F5FF",
                border: "1.5px solid rgba(91,48,232,0.12)",
                borderRadius: 16, padding: "28px 32px",
                display: "flex", flexDirection: "column", gap: 12,
              }}>
                {[
                  { icon: "🏢", label: "Tejasbyte Technologies Pvt. Ltd." },
                  { icon: "📍", label: "Tarakeshwore-07, Phutung, Kathmandu, Nepal" },
                  { icon: "✉️", label: "contact@tejasbyte.com", href: "mailto:contact@tejasbyte.com" },
                  { icon: "🌐", label: "www.tejasbyte.com", href: "https://www.tejasbyte.com" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: ".9rem", fontWeight: 600, color: "#5B30E8", textDecoration: "none" }}>
                        {item.label}
                      </a>
                    ) : (
                      <span style={{ fontSize: ".9rem", color: "#1A1035", fontWeight: 600 }}>{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </Section>

            {/* Nav to Terms */}
            <div style={{
              marginTop: 16, paddingTop: 32,
              borderTop: "1px solid rgba(91,48,232,0.08)",
              display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
            }}>
              <span style={{ fontSize: ".85rem", color: "rgba(26,16,53,0.45)" }}>
                Also read our{" "}
                <Link href="/terms" style={{ color: "#5B30E8", fontWeight: 600, textDecoration: "none" }}>
                  Terms of Service →
                </Link>
              </span>
              <Link href="/" style={{ fontSize: ".85rem", color: "#5B30E8", fontWeight: 600, textDecoration: "none" }}>
                ← Back to Home
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
