import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeServicesGlance from "@/components/home/HomeServicesGlance";
import HomeProof from "@/components/home/HomeProof";
import Marquee from "@/components/Marquee";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeContactGlance from "@/components/home/HomeContactGlance";

const BASE_URL = "https://www.tejasbyte.com";

export const metadata: Metadata = {
  title: "Tejasbyte Technologies — AI, Web & Software Development Company Nepal",
  description:
    "Tejasbyte Technologies builds AI-powered software, scalable web apps, React Native mobile apps, and cloud infrastructure. Senior-only engineering team. Based in Kathmandu, Nepal — serving clients worldwide.",
  keywords: [
    "AI software development company", "web app development company Nepal",
    "software development Kathmandu", "Next.js development agency",
    "React development company", "mobile app development Nepal",
    "cloud infrastructure company", "AI integration services",
    "custom software Nepal", "full stack development company",
    "best software company Nepal", "tech startup Nepal",
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    url: BASE_URL,
    title: "Tejasbyte Technologies — AI, Web & Software Development Company",
    description:
      "We build AI-powered software, scalable web apps, and mobile applications. Senior engineers, full-stack ownership, global clients.",
    images: [{ url: "/logos/social-media-cover-image.png", width: 1200, height: 630, alt: "Tejasbyte Technologies" }],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* JSON-LD — LocalBusiness for homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Tejasbyte Technologies",
              url: BASE_URL,
              telephone: "+977-9849627282",
              email: "contact@tejasbyte.com",
              image: `${BASE_URL}/logos/social-media-cover-image.png`,
              priceRange: "$$",
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
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.9358,
                longitude: -122.3478,
              },
              openingHours: "Mo-Fr 09:00-18:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "30",
                bestRating: "5",
              },
              serviceArea: { "@type": "AdministrativeArea", name: "Worldwide" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Engineering Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Machine Learning Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Infrastructure" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "API Design & Integration" } },
                ],
              },
            }),
          }}
        />
        <Hero />
        <HomeServicesGlance />
        <HomeProof />
        <Marquee />
        <HomeTestimonials />
        <HomeContactGlance />
      </main>
      <Footer />
    </>
  );
}
