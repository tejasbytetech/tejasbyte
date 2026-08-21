import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Tejasbyte Technologies",
  description: "Privacy Policy for Tejasbyte Technologies. Learn how we collect, use, store, and protect your personal information.",
  alternates: { canonical: "https://www.tejasbyte.com/privacy" },
};

const LAST_UPDATED = "August 11, 2026";
const COMPANY = "Tejasbyte Technologies Pvt. Ltd.";
const SITE = "www.tejasbyte.com";
const EMAIL = "contact@tejasbyte.com";

function Hero() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #0F1629 0%, #1A1035 100%)",
      padding: "120px 52px 64px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,48,232,0.22) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 24 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#A78BFA" }} />
          Legal
        </span>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.03em", color: "#fff", marginBottom: 16 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", maxWidth: 560, marginBottom: 28 }}>
          This policy explains how {COMPANY} collects, uses, discloses, and safeguards your personal information when you visit our website or engage our services.
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "8px 16px", fontSize: ".78rem", color: "rgba(255,255,255,0.5)" }}>
          Last updated: <strong style={{ color: "rgba(255,255,255,0.8)", marginLeft: 4 }}>{LAST_UPDATED}</strong>
        </div>
      </div>
    </div>
  );
}

function TOC() {
  const items = [
    "Who We Are", "Information We Collect", "How We Use Your Information",
    "Legal Basis for Processing", "Sharing Your Information",
    "International Data Transfers", "Data Retention", "Your Rights",
    "Cookies and Tracking", "Data Security", "Children's Privacy",
    "Links to Third-Party Sites", "Changes to This Policy", "Contact Us",
  ];
  return (
    <div style={{ background: "#F7F5FF", border: "1.5px solid rgba(91,48,232,0.12)", borderRadius: 16, padding: "28px 32px", marginBottom: 48 }}>
      <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "#5B30E8", marginBottom: 16 }}>Table of Contents</p>
      <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.65)" }}>
            <a href={`#section-${i + 1}`} style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 500 }}>
              {item}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function S({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} style={{ marginBottom: 52, scrollMarginTop: 100 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <span style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#5B30E8,#A78BFA)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".72rem", fontWeight: 800, color: "#fff", flexShrink: 0 }}>{num}</span>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1A1035", letterSpacing: "-.02em", margin: 0 }}>{title}</h2>
      </div>
      <div style={{ paddingLeft: 50, fontSize: ".95rem", lineHeight: 1.85, color: "rgba(26,16,53,0.65)" }}>
        {children}
      </div>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: 14 }}>{children}</p>;
}

function Ul({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5B30E8", flexShrink: 0, marginTop: 9 }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DefBox({ term, def }: { term: string; def: string }) {
  return (
    <div style={{ background: "#F7F5FF", border: "1px solid rgba(91,48,232,0.1)", borderRadius: 10, padding: "14px 18px", marginBottom: 10 }}>
      <strong style={{ fontSize: ".85rem", color: "#1A1035" }}>{term}:</strong>{" "}
      <span style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.65)" }}>{def}</span>
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(91,48,232,0.15) 30%, rgba(91,48,232,0.15) 70%, transparent)", margin: "8px 0 48px" }} />;
}

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section style={{ background: "#fff", padding: "64px 52px 100px" }}>
          <div className="section-inner" style={{ maxWidth: 820, margin: "0 auto" }}>
            <TOC />

            <S id="section-1" num="01" title="Who We Are">
              <P>{COMPANY} ("Tejasbyte", "we", "us", or "our") is a software engineering company registered in Nepal with its main office in the United States. We operate the website at <a href={`https://${SITE}`} style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>{SITE}</a> and provide software development, AI engineering, cloud infrastructure, and related technology services.</P>
              <P>For the purposes of applicable data protection law, Tejasbyte Technologies acts as the data controller with respect to personal information collected through this website.</P>
            </S>
            <Divider />

            <S id="section-2" num="02" title="Information We Collect">
              <P><strong style={{ color: "#1A1035" }}>Information you provide directly:</strong></P>
              <Ul items={[
                "Contact details such as name, email address, and company name submitted via our contact or enquiry forms",
                "Project details, budget range, and descriptions of work submitted through service enquiries",
                "Email address when subscribing to our newsletter or updates",
                "Communications including emails, messages, and any other correspondence you send us",
              ]} />
              <P><strong style={{ color: "#1A1035" }}>Information collected automatically:</strong></P>
              <Ul items={[
                "Technical data including IP address, browser type and version, operating system, and device information",
                "Usage data including pages visited, time on site, links clicked, referring URLs, and navigation paths",
                "Cookie identifiers and similar tracking technologies (see Section 9)",
              ]} />
              <P><strong style={{ color: "#1A1035" }}>Information from third parties:</strong></P>
              <Ul items={[
                "Analytics data from providers such as Google Analytics",
                "Business contact information from professional networking platforms when you contact us via those channels",
              ]} />
            </S>
            <Divider />

            <S id="section-3" num="03" title="How We Use Your Information">
              <P>We use your personal information for the following purposes:</P>
              <Ul items={[
                "To respond to your enquiries, provide quotes, and deliver our software engineering services",
                "To communicate project updates, status reports, and relevant service information to existing clients",
                "To send newsletters, technical insights, and company updates where you have subscribed",
                "To improve our website content, user experience, and service offerings based on usage patterns",
                "To process and manage business relationships including contracts and invoicing",
                "To comply with legal, regulatory, and contractual obligations",
                "To detect, prevent, and address fraud, security incidents, and technical issues",
                "To protect the rights, property, and safety of Tejasbyte, our clients, and others",
              ]} />
            </S>
            <Divider />

            <S id="section-4" num="04" title="Legal Basis for Processing">
              <P>Where data protection law requires a legal basis for processing personal information, we rely on the following:</P>
              <DefBox term="Contractual necessity" def="Processing required to perform a contract with you or to take steps at your request before entering into a contract, such as responding to a project enquiry." />
              <DefBox term="Legitimate interests" def="Processing necessary for our legitimate interests in operating and improving our business, provided these interests are not overridden by your data protection rights." />
              <DefBox term="Consent" def="Where you have given clear, specific, and informed consent — for example, subscribing to our newsletter. You may withdraw consent at any time." />
              <DefBox term="Legal obligation" def="Processing required to comply with applicable law or regulation." />
            </S>
            <Divider />

            <S id="section-5" num="05" title="Sharing Your Information">
              <P>We do not sell, rent, or trade your personal information. We may share it only in the following circumstances:</P>
              <Ul items={[
                <>Service providers: We engage third-party vendors who process data on our behalf under strict data processing agreements. These include Vercel (hosting), Resend (email delivery), Cloudflare (DNS and security), and analytics providers.</>,
                "Professional advisors: Legal counsel, accountants, and auditors as required in the ordinary course of business.",
                "Business transfers: In connection with a merger, acquisition, reorganisation, or sale of assets, with appropriate confidentiality obligations.",
                "Legal requirements: When required by applicable law, court order, regulatory authority, or to protect the rights and safety of Tejasbyte or others.",
              ]} />
            </S>
            <Divider />

            <S id="section-6" num="06" title="International Data Transfers">
              <P>Tejasbyte operates with team members and service providers across the United States and Nepal. As a result, your personal information may be transferred to and processed in countries outside your country of residence.</P>
              <P>Where such transfers occur, we ensure appropriate safeguards are in place — including standard contractual clauses approved by relevant data protection authorities, or reliance on providers who participate in recognised data transfer frameworks.</P>
            </S>
            <Divider />

            <S id="section-7" num="07" title="Data Retention">
              <P>We retain personal information only as long as necessary for the purposes described in this policy, unless a longer period is required or permitted by law:</P>
              <Ul items={[
                "Contact form submissions and enquiry records: up to 3 years",
                "Client project records and communications: up to 7 years (for contractual and legal compliance purposes)",
                "Newsletter subscriptions: until you unsubscribe",
                "Website analytics data: as configured by the analytics provider (typically 26 months)",
                "Legal and financial records: as required by applicable law",
              ]} />
              <P>When personal information is no longer needed, we securely delete or anonymise it.</P>
            </S>
            <Divider />

            <S id="section-8" num="08" title="Your Rights">
              <P>Depending on your location and applicable law, you may have the following rights regarding your personal information:</P>
              <Ul items={[
                "Right of access: to obtain a copy of the personal information we hold about you",
                "Right to rectification: to have inaccurate or incomplete information corrected",
                "Right to erasure: to request deletion of your personal information in certain circumstances",
                "Right to restriction: to request that we limit how we process your information",
                "Right to data portability: to receive your information in a structured, machine-readable format",
                "Right to object: to object to processing based on legitimate interests or for direct marketing",
                "Right to withdraw consent: where processing is based on consent, to withdraw it at any time",
                "Right to lodge a complaint: with a supervisory authority if you believe we have breached applicable law",
              ]} />
              <P>To exercise any of these rights, please contact us at <a href={`mailto:${EMAIL}`} style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>{EMAIL}</a>. We will respond within 30 days.</P>
            </S>
            <Divider />

            <S id="section-9" num="09" title="Cookies and Tracking">
              <P>Our website uses cookies and similar technologies to improve functionality and understand usage patterns. Types of cookies we may use:</P>
              <Ul items={[
                <>Essential cookies: Required for the website to function correctly. These cannot be disabled.</>,
                <>Analytics cookies: Help us understand how visitors interact with our site (e.g. Google Analytics). These are only placed with your consent where required by law.</>,
                <>Preference cookies: Remember your settings and choices to improve your experience.</>,
              ]} />
              <P>You can manage cookie preferences through your browser settings or any cookie consent tool present on our website. Disabling certain cookies may affect the functionality of the site.</P>
            </S>
            <Divider />

            <S id="section-10" num="10" title="Data Security">
              <P>We implement technical and organisational measures proportionate to the risk to protect your personal information against unauthorised access, loss, destruction, alteration, or disclosure. These measures include:</P>
              <Ul items={[
                "HTTPS encryption for all data in transit",
                "Access controls limiting data access to authorised personnel only",
                "Regular review of our security practices and vendor security standards",
                "Use of reputable, security-certified hosting and infrastructure providers",
              ]} />
              <P>No method of transmission over the internet is 100% secure. While we take reasonable precautions, we cannot guarantee absolute security.</P>
            </S>
            <Divider />

            <S id="section-11" num="11" title="Children's Privacy">
              <P>Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us at <a href={`mailto:${EMAIL}`} style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>{EMAIL}</a> and we will promptly delete it.</P>
            </S>
            <Divider />

            <S id="section-12" num="12" title="Links to Third-Party Sites">
              <P>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party site you visit.</P>
            </S>
            <Divider />

            <S id="section-13" num="13" title="Changes to This Policy">
              <P>We may update this Privacy Policy periodically to reflect changes in our practices, services, or applicable law. We will indicate the date of the most recent revision at the top of this page. For significant changes, we may also provide more prominent notice.</P>
              <P>Your continued use of our website after any changes constitutes your acceptance of the updated policy.</P>
            </S>
            <Divider />

            <S id="section-14" num="14" title="Contact Us">
              <P>If you have questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact us:</P>
              <div style={{ background: "#F7F5FF", border: "1.5px solid rgba(91,48,232,0.12)", borderRadius: 16, padding: "28px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "🏢", label: "Company", val: COMPANY },
                  { icon: "🇺🇸", label: "US Office", val: "2420 Rheem Ave, Richmond, California, CA 94804" },
                  { icon: "🇳🇵", label: "Nepal Office", val: "Kathmandu, Nepal" },
                  { icon: "✉️", label: "Email", val: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: "🌐", label: "Website", val: SITE, href: `https://${SITE}` },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(91,48,232,0.5)", marginBottom: 2 }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: ".9rem", fontWeight: 600, color: "#5B30E8", textDecoration: "none" }}>{item.val}</a>
                      ) : (
                        <span style={{ fontSize: ".9rem", fontWeight: 600, color: "#1A1035" }}>{item.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </S>

            {/* Bottom nav */}
            <div style={{ marginTop: 16, paddingTop: 32, borderTop: "1px solid rgba(91,48,232,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <span style={{ fontSize: ".85rem", color: "rgba(26,16,53,0.45)" }}>
                Also read our{" "}
                <Link href="/data-policy" style={{ color: "#5B30E8", fontWeight: 600, textDecoration: "none" }}>
                  Data Policy →
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
