import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/pages/AboutPage";

const BASE_URL = "https://www.tejasbyte.com";

export const metadata: Metadata = {
  title: "About Tejasbyte Technologies — US-Based Senior Software Engineering Team",
  description:
    "Tejasbyte Technologies is a US-based senior-only software engineering company with offices in Richmond, California and Kathmandu, Nepal. 5+ years experience, 30+ projects delivered, 98% client satisfaction.",
  keywords: [
    "about Tejasbyte Technologies", "software company Nepal",
    "software engineering team Nepal", "IT company Kathmandu",
    "senior software engineers Nepal", "software development team Nepal",
    "tech company Nepal", "Nepal software outsourcing",
    "best IT company Nepal", "Kathmandu software company",
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    url: `${BASE_URL}/about`,
    title: "About Tejasbyte Technologies — Senior Software Engineering Team",
    description: "US-based senior software engineering company with offices in California and Nepal. 30+ projects. 98% satisfaction. Full-stack ownership.",
    images: [{ url: "/logos/social-media-cover-image.png", width: 1200, height: 630 }],
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About Tejasbyte Technologies",
              url: `${BASE_URL}/about`,
              description: "US-based software engineering company with offices in Richmond, California and Kathmandu, Nepal. We build AI-powered applications, scalable web platforms, mobile apps, and cloud infrastructure for global clients.",
              mainEntity: {
                "@type": "Organization",
                name: "Tejasbyte Technologies",
                foundingDate: "2020",
                numberOfEmployees: { "@type": "QuantitativeValue", value: "15" },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Kathmandu",
                  addressCountry: "NP",
                },
              },
            }),
          }}
        />
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}

