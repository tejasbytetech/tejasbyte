import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPage from "@/components/pages/ServicesPage";

const BASE_URL = "https://www.tejasbyte.com";

export const metadata: Metadata = {
  title: "Software Development Services — AI, Web, Mobile & Cloud | Tejasbyte",
  description:
    "Tejasbyte offers AI & ML development, full-stack web platforms, React Native mobile apps, cloud infrastructure, API design, and security engineering. Senior engineers, one team, full ownership.",
  keywords: [
    "AI development services", "machine learning services", "web platform development",
    "SaaS development company", "React Native mobile development",
    "cloud infrastructure services", "Kubernetes AWS GCP",
    "API design services", "security compliance SOC2 HIPAA",
    "software engineering services Nepal", "custom software services",
    "Next.js development services", "Node.js development",
    "full stack development services", "software outsourcing Nepal",
  ],
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    url: `${BASE_URL}/services`,
    title: "Software Development Services — AI, Web, Mobile & Cloud | Tejasbyte",
    description: "AI/ML, web platforms, mobile apps, cloud, APIs, and security — all under one senior engineering team.",
    images: [{ url: "/logos/social-media-cover-image.png", width: 1200, height: 630 }],
  },
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Tejasbyte Software Engineering Services",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "AI & Machine Learning Development", url: `${BASE_URL}/services` },
                { "@type": "ListItem", position: 2, name: "Web Platform Engineering", url: `${BASE_URL}/services` },
                { "@type": "ListItem", position: 3, name: "Mobile App Development", url: `${BASE_URL}/services` },
                { "@type": "ListItem", position: 4, name: "Cloud & Infrastructure", url: `${BASE_URL}/services` },
                { "@type": "ListItem", position: 5, name: "API Design & Integrations", url: `${BASE_URL}/services` },
                { "@type": "ListItem", position: 6, name: "Security & Compliance", url: `${BASE_URL}/services` },
              ],
            }),
          }}
        />
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}

