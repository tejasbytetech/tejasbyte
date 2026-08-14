import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Tejasbyte Technologies",
  description: "Terms of Service for Tejasbyte Technologies. Read the terms governing our software development services and website use.",
  alternates: { canonical: "https://www.tejasbyte.com/terms" },
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

export default function Terms() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Legal"
          title="Terms of"
          highlight="Service"
          description="The terms and conditions governing your use of our website and software engineering services."
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

            <Section title="Agreement to Terms">
              <P>
                By accessing the website at{" "}
                <a href="https://www.tejasbyte.com" style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>
                  www.tejasbyte.com
                </a>{" "}
                or engaging the services of Tejasbyte Technologies Pvt. Ltd. (&quot;Tejasbyte&quot;,
                &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our website or services.
              </P>
            </Section>

            <Section title="Services">
              <P>
                Tejasbyte Technologies provides software engineering services including but not
                limited to:
              </P>
              <Ul items={[
                "AI and machine learning development",
                "Full-stack web application development",
                "Mobile application development (iOS and Android)",
                "Cloud infrastructure and DevOps engineering",
                "API design and third-party integrations",
                "Security engineering and compliance consulting",
              ]} />
              <P>
                The specific scope, deliverables, timeline, and payment terms for each engagement
                are defined in a separate Statement of Work (SOW) or service agreement signed
                by both parties.
              </P>
            </Section>

            <Section title="Intellectual Property">
              <P>
                <strong style={{ color: "#1A1035" }}>Client work:</strong> Upon full payment of all
                invoices, intellectual property rights for custom software developed exclusively for
                a client are transferred to that client, as specified in the applicable service agreement.
              </P>
              <P>
                <strong style={{ color: "#1A1035" }}>Tejasbyte IP:</strong> Any pre-existing tools,
                frameworks, libraries, methodologies, or know-how developed by Tejasbyte prior to
                or independently of a client engagement remain the exclusive property of Tejasbyte.
              </P>
              <P>
                <strong style={{ color: "#1A1035" }}>Website content:</strong> All content on this
                website — including text, graphics, logos, and code — is owned by or licensed to
                Tejasbyte and protected by applicable copyright and trademark laws.
              </P>
            </Section>

            <Section title="Payment Terms">
              <Ul items={[
                "Payment schedules are defined in the individual service agreement for each project",
                "Invoices are due within 14 days of issue unless otherwise agreed in writing",
                "Late payments may incur interest at a rate of 1.5% per month",
                "Tejasbyte reserves the right to suspend services for accounts overdue by more than 30 days",
                "All fees are exclusive of applicable taxes unless stated otherwise",
              ]} />
            </Section>

            <Section title="Confidentiality">
              <P>
                Both parties agree to keep confidential any proprietary or sensitive information
                shared during the course of an engagement. This obligation survives the termination
                of any service agreement. Where required, a separate Non-Disclosure Agreement (NDA)
                will be executed prior to sharing sensitive project details.
              </P>
            </Section>

            <Section title="Limitation of Liability">
              <P>
                To the maximum extent permitted by applicable law, Tejasbyte Technologies shall
                not be liable for any indirect, incidental, special, consequential, or punitive
                damages — including loss of profits, data, or goodwill — arising out of or related
                to our services or this agreement.
              </P>
              <P>
                Our total liability for any claim arising from a service engagement shall not
                exceed the total fees paid by the client for the specific service giving rise
                to the claim in the 3 months preceding the claim.
              </P>
            </Section>

            <Section title="Warranties and Disclaimers">
              <P>
                Tejasbyte warrants that services will be performed in a professional and workmanlike
                manner consistent with industry standards. We will use reasonable efforts to deliver
                agreed deliverables on time.
              </P>
              <P>
                Except as explicitly stated, our services and website are provided &quot;as is&quot; without
                warranties of any kind — express or implied — including merchantability, fitness
                for a particular purpose, or non-infringement.
              </P>
            </Section>

            <Section title="Termination">
              <P>
                Either party may terminate a service agreement with 30 days written notice.
                Upon termination:
              </P>
              <Ul items={[
                "The client is liable for payment of all work completed up to the termination date",
                "Tejasbyte will deliver all completed work product within 14 days",
                "Confidentiality obligations continue after termination",
                "Provisions relating to IP, liability, and disputes survive termination",
              ]} />
            </Section>

            <Section title="Governing Law">
              <P>
                These Terms of Service are governed by and construed in accordance with the laws
                of Nepal. Any disputes arising from these terms or our services shall be subject
                to the exclusive jurisdiction of the courts located in Kathmandu, Nepal.
              </P>
            </Section>

            <Section title="Changes to Terms">
              <P>
                We reserve the right to update these Terms of Service at any time. We will indicate
                the date of the most recent revision at the top of this page. Continued use of our
                website or services after changes are posted constitutes acceptance of the updated terms.
              </P>
            </Section>

            <Section title="Contact Us">
              <P>For questions about these Terms of Service, please contact us:</P>
              <div style={{
                background: "#F7F5FF",
                border: "1.5px solid rgba(91,48,232,0.12)",
                borderRadius: 16, padding: "28px 32px",
                display: "flex", flexDirection: "column", gap: 12,
              }}>
                {[
                  { icon: "🏢", label: "Tejasbyte Technologies Pvt. Ltd." },
                  { icon: "📍", label: "Kathmandu, Nepal" },
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

            {/* Nav to Privacy */}
            <div style={{
              marginTop: 16, paddingTop: 32,
              borderTop: "1px solid rgba(91,48,232,0.08)",
              display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
            }}>
              <span style={{ fontSize: ".85rem", color: "rgba(26,16,53,0.45)" }}>
                Also read our{" "}
                <Link href="/privacy" style={{ color: "#5B30E8", fontWeight: 600, textDecoration: "none" }}>
                  Privacy Policy →
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
