import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/components/pages/ContactPage";

const BASE_URL = "https://www.tejasbyte.com";

export const metadata: Metadata = {
  title: "Contact Tejasbyte Technologies — Start Your Software Project",
  description:
    "Get in touch with Tejasbyte Technologies. Tell us about your AI, web app, mobile, or cloud project. We respond within 24 hours. Based in Kathmandu, Nepal — serving clients worldwide.",
  keywords: [
    "contact Tejasbyte", "hire software developers Nepal",
    "software development inquiry", "web development quote Nepal",
    "AI development contact", "outsource software development Nepal",
    "software agency contact", "hire React developer Nepal",
    "hire Next.js developer", "software project estimate",
    "tech company contact Nepal", "Kathmandu software developers",
  ],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    url: `${BASE_URL}/contact`,
    title: "Contact Tejasbyte Technologies — Start Your Software Project",
    description: "Tell us about your project. We respond within 24 hours.",
    images: [{ url: "/logos/social-media-cover-image.png", width: 1200, height: 630 }],
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Tejasbyte Technologies",
              url: `${BASE_URL}/contact`,
              description: "Contact us to discuss your software project.",
              mainEntity: {
                "@type": "Organization",
                name: "Tejasbyte Technologies",
                telephone: "+1-510-000-0000",
                email: "contact@tejasbyte.com",
                address: [
                  {
                    "@type": "PostalAddress",
                    streetAddress: "2420 Rheem Ave",
                    addressLocality: "Richmond",
                    addressRegion: "CA",
                    postalCode: "94804",
                    addressCountry: "US",
                  },
                  {
                    "@type": "PostalAddress",
                    addressLocality: "Kathmandu",
                    addressCountry: "NP",
                  },
                ],
              },
            }),
          }}
        />
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}

