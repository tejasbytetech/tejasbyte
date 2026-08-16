import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Policy — Tejasbyte Technologies",
  description: "Data Policy for Tejasbyte Technologies. Understand how we handle, process, protect, and govern client and user data.",
  alternates: { canonical: "https://www.tejasbyte.com/data-policy" },
};

const LAST_UPDATED = "August 11, 2026";
const COMPANY = "Tejasbyte Technologies Pvt. Ltd.";
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
          Data Policy
        </h1>
        <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", maxWidth: 560, marginBottom: 28 }}>
          This policy governs how {COMPANY} collects, processes, stores, protects, and manages data — including client data entrusted to us during software development engagements.
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
    "Definitions", "Scope of This Policy", "Data We Process",
    "Lawful Basis for Processing", "Data Subject Rights",
    "Data Processor Obligations", "Data Security Standards",
    "Incident Response & Breach Notification", "Data Retention & Deletion",
    "Sub-processors", "Cross-Border Data Transfers",
    "Client Data Responsibilities", "Policy Governance", "Contact",
  ];
  return (
    <div style={{ background: "#F7F5FF", border: "1.5px solid rgba(91,48,232,0.12)", borderRadius: 16, padding: "28px 32px", marginBottom: 48 }}>
      <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "#5B30E8", marginBottom: 16 }}>Table of Contents</p>
      <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: ".875rem", color: "rgba(26,16,53,0.65)" }}>
            <a href={`#dp-section-${i + 1}`} style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 500 }}>
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

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "rgba(91,48,232,0.05)", border: "1.5px solid rgba(91,48,232,0.15)", borderLeft: "4px solid #5B30E8", borderRadius: "0 10px 10px 0", padding: "16px 20px", marginBottom: 20, fontSize: ".9rem", color: "rgba(26,16,53,0.75)", lineHeight: 1.7 }}>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(91,48,232,0.15) 30%, rgba(91,48,232,0.15) 70%, transparent)", margin: "8px 0 48px" }} />;
}

export default function DataPolicy() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section style={{ background: "#fff", padding: "64px 52px 100px" }}>
          <div className="section-inner" style={{ maxWidth: 820, margin: "0 auto" }}>
            <TOC />

            <S id="dp-section-1" num="01" title="Definitions">
              <P>For the purposes of this Data Policy, the following terms have the meanings set out below:</P>
              <DefBox term="Personal Data" def="Any information relating to an identified or identifiable natural person ('data subject'), including name, email address, IP address, or any combination of data that could identify an individual." />
              <DefBox term="Client Data" def="All data, including personal data, that a client provides to Tejasbyte or that Tejasbyte processes on behalf of a client in the course of delivering services." />
              <DefBox term="Data Controller" def="The entity that determines the purposes and means of processing personal data. Clients are typically the data controller for their end-user data." />
              <DefBox term="Data Processor" def="The entity that processes personal data on behalf of the data controller. Tejasbyte acts as a data processor when handling client data." />
              <DefBox term="Processing" def="Any operation or set of operations performed on personal data, whether by automated means or otherwise — including collection, storage, use, transmission, and deletion." />
              <DefBox term="Sub-processor" def="A third-party service provider engaged by Tejasbyte to assist in the processing of personal data on behalf of a client." />
            </S>
            <Divider />

            <S id="dp-section-2" num="02" title="Scope of This Policy">
              <P>This Data Policy applies to:</P>
              <Ul items={[
                "All personal data and client data processed by Tejasbyte Technologies in the course of delivering software engineering, AI development, cloud infrastructure, and related services",
                "Data collected through our website at www.tejasbyte.com",
                "Data shared with us by clients, partners, and prospective clients during pre-sales, onboarding, and active engagements",
                "All employees, contractors, and service providers of Tejasbyte who have access to personal or client data",
              ]} />
              <Highlight>This policy is read alongside our <Link href="/privacy" style={{ color: "#5B30E8", fontWeight: 600, textDecoration: "none" }}>Privacy Policy</Link>, which governs personal data collected directly from website visitors.</Highlight>
            </S>
            <Divider />

            <S id="dp-section-3" num="03" title="Data We Process">
              <P><strong style={{ color: "#1A1035" }}>Website visitor data:</strong></P>
              <Ul items={[
                "Contact and enquiry information submitted via forms (name, email, company, project details)",
                "Technical and usage data collected through cookies and analytics tools",
                "Newsletter subscription data",
              ]} />
              <P><strong style={{ color: "#1A1035" }}>Client engagement data:</strong></P>
              <Ul items={[
                "Business contact information for client stakeholders and team members",
                "Project specifications, source code, database schemas, and technical documentation",
                "End-user data that clients entrust to Tejasbyte for development, testing, or infrastructure purposes",
                "Access credentials and environment configuration (handled under strict security protocols)",
              ]} />
              <P><strong style={{ color: "#1A1035" }}>Operational data:</strong></P>
              <Ul items={[
                "Financial records including invoices and payment information",
                "Contract and legal correspondence",
                "Internal communications and project management records",
              ]} />
            </S>
            <Divider />

            <S id="dp-section-4" num="04" title="Lawful Basis for Processing">
              <P>Tejasbyte processes data under the following lawful bases as applicable:</P>
              <DefBox term="Contractual performance" def="Processing necessary to deliver services under a signed agreement or statement of work." />
              <DefBox term="Legitimate interests" def="Processing necessary to operate our business, improve our services, and maintain client relationships, where these interests are not overridden by data subject rights." />
              <DefBox term="Legal obligation" def="Processing required to comply with applicable laws and regulations in the jurisdictions where we operate, including the United States and Nepal." />
              <DefBox term="Consent" def="Processing of website visitor data for analytics and marketing where we have obtained clear, specific consent." />
            </S>
            <Divider />

            <S id="dp-section-5" num="05" title="Data Subject Rights">
              <P>Tejasbyte respects the rights of individuals whose data we process. Where we act as data processor, we will assist our clients (as data controllers) in fulfilling these rights. Applicable rights may include:</P>
              <Ul items={[
                "The right to be informed about how personal data is used",
                "The right to access personal data held about an individual",
                "The right to rectification of inaccurate data",
                "The right to erasure ('right to be forgotten') where applicable",
                "The right to restriction of processing",
                "The right to data portability in a structured, machine-readable format",
                "The right to object to processing based on legitimate interests or for direct marketing",
                "Rights related to automated decision-making and profiling",
              ]} />
              <P>To exercise any right or to make a data subject request, contact us at <a href={`mailto:${EMAIL}`} style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>{EMAIL}</a>.</P>
            </S>
            <Divider />

            <S id="dp-section-6" num="06" title="Data Processor Obligations">
              <P>When Tejasbyte processes personal data on behalf of a client, we commit to the following obligations:</P>
              <Ul items={[
                "Process personal data only on documented instructions from the client",
                "Ensure that all personnel with access to personal data are bound by confidentiality obligations",
                "Implement appropriate technical and organisational security measures",
                "Assist the client in responding to data subject rights requests",
                "Delete or return all personal data to the client upon termination of services",
                "Provide all information necessary to demonstrate compliance with data protection obligations",
                "Notify the client without undue delay upon becoming aware of a personal data breach",
                "Not engage sub-processors without prior written authorisation from the client",
              ]} />
            </S>
            <Divider />

            <S id="dp-section-7" num="07" title="Data Security Standards">
              <P>Tejasbyte implements security measures commensurate with the sensitivity of the data and the risks involved. Our security practices include:</P>
              <Ul items={[
                "Encryption in transit using TLS 1.2 or higher for all data communications",
                "Encryption at rest for sensitive data stored in our systems",
                "Role-based access control (RBAC) limiting data access to authorised personnel only",
                "Multi-factor authentication (MFA) for access to production systems and client environments",
                "Regular security reviews and penetration testing of systems handling client data",
                "Secure code development practices including OWASP guidelines",
                "Vendor security assessments for all sub-processors handling personal data",
                "Incident response procedures and documented escalation paths",
              ]} />
            </S>
            <Divider />

            <S id="dp-section-8" num="08" title="Incident Response & Breach Notification">
              <P>In the event of a confirmed personal data breach, Tejasbyte will:</P>
              <Ul items={[
                "Contain and assess the breach as promptly as possible",
                "Notify affected clients without undue delay and no later than 72 hours after becoming aware of a breach involving their data",
                "Provide clients with sufficient information to fulfil their own notification obligations to regulatory authorities and affected individuals",
                "Document the breach, its effects, and all remedial actions taken",
                "Conduct a post-incident review to prevent recurrence",
              ]} />
              <Highlight>Clients must provide an emergency contact and notification procedure in their service agreement. Breach notifications will be directed to the designated contact.</Highlight>
            </S>
            <Divider />

            <S id="dp-section-9" num="09" title="Data Retention & Deletion">
              <P>Tejasbyte retains data only as long as required to fulfil the purposes for which it was collected or to comply with legal obligations.</P>
              <Ul items={[
                "Client project data: retained for the duration of the engagement plus up to 12 months unless instructed otherwise",
                "Source code and deliverables: returned or deleted upon project completion or client request",
                "Financial and contractual records: retained for 7 years in accordance with legal requirements",
                "Website enquiry data: retained for up to 3 years",
                "Employee and contractor data: retained as required by employment law",
              ]} />
              <P>Upon termination of a service agreement, Tejasbyte will securely delete or return all client data within 30 days of the termination date, unless instructed otherwise in writing.</P>
            </S>
            <Divider />

            <S id="dp-section-10" num="10" title="Sub-processors">
              <P>Tejasbyte engages the following categories of sub-processors who may have access to personal or client data in the course of delivering services:</P>
              <Ul items={[
                "Cloud infrastructure providers (e.g. AWS, Google Cloud, Azure) for hosting and compute",
                "Version control and project management tools (e.g. GitHub, Linear, Notion) for development workflows",
                "Communication platforms used in client engagements (e.g. Slack, Google Workspace)",
                "Transactional email providers (Resend) for service communications",
                "Analytics providers (e.g. Google Analytics) for website usage data",
              ]} />
              <P>We will inform clients of any intended changes to sub-processors and provide the opportunity to object. Sub-processors are selected based on security standards and are bound by data processing agreements.</P>
            </S>
            <Divider />

            <S id="dp-section-11" num="11" title="Cross-Border Data Transfers">
              <P>Tejasbyte's operations span the United States and Nepal. Data may be transferred between these jurisdictions in the course of delivering services. We ensure that such transfers are governed by appropriate safeguards including:</P>
              <Ul items={[
                "Standard contractual clauses where required by applicable data protection law",
                "Transfers to providers participating in recognised data protection frameworks",
                "Contractual protections between Tejasbyte entities and personnel",
              ]} />
            </S>
            <Divider />

            <S id="dp-section-12" num="12" title="Client Data Responsibilities">
              <P>Where clients share personal data with Tejasbyte for development, testing, or other purposes, clients acknowledge that:</P>
              <Ul items={[
                "They are the data controller and are responsible for ensuring they have a lawful basis to share that data with Tejasbyte",
                "Production personal data should not be used for development or testing purposes without appropriate anonymisation or pseudonymisation",
                "Clients must inform Tejasbyte of any specific data handling requirements, applicable regulations (e.g. HIPAA, GDPR), or restrictions before engagement",
                "Clients are responsible for obtaining any consents required from their end users",
              ]} />
              <Highlight>We strongly recommend that clients use anonymised or synthetic data for development and testing environments wherever possible.</Highlight>
            </S>
            <Divider />

            <S id="dp-section-13" num="13" title="Policy Governance">
              <P>This Data Policy is reviewed at least annually and updated to reflect changes in our operations, legal obligations, or industry best practices. The most recent version is always available at <a href="https://www.tejasbyte.com/data-policy" style={{ color: "#5B30E8", textDecoration: "none", fontWeight: 600 }}>www.tejasbyte.com/data-policy</a>.</P>
              <P>All Tejasbyte personnel and contractors are required to adhere to this policy as a condition of their engagement.</P>
            </S>
            <Divider />

            <S id="dp-section-14" num="14" title="Contact">
              <P>For questions or concerns about this Data Policy, data processing practices, or to submit a data subject request:</P>
              <div style={{ background: "#F7F5FF", border: "1.5px solid rgba(91,48,232,0.12)", borderRadius: 16, padding: "28px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "🏢", label: "Company", val: COMPANY },
                  { icon: "🇺🇸", label: "US Office", val: "2420 Rheem Ave, Richmond, California, CA 94804" },
                  { icon: "🇳🇵", label: "Nepal Office", val: "Kathmandu, Nepal" },
                  { icon: "✉️", label: "Data enquiries", val: EMAIL, href: `mailto:${EMAIL}` },
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
