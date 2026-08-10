import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioPage from "@/components/pages/PortfolioPage";

const BASE_URL = "https://www.tejasbyte.com";

export const metadata: Metadata = {
  title: "Portfolio — Real Software Projects by Tejasbyte Technologies",
  description:
    "Explore Tejasbyte's portfolio: Next.js web apps, Supabase-powered admin panels, healthcare platforms, fintech systems, and mobile apps shipped for clients worldwide.",
  keywords: [
    "software portfolio Nepal", "web development portfolio",
    "Next.js portfolio", "Supabase development", "React Native portfolio",
    "software projects Nepal", "web app case studies",
    "software agency portfolio", "tech company portfolio Nepal",
    "Subha Sanskar Decor", "Vision Sign Advertising", "Tarangini Foundation",
    "SearchMed", "LeanLaw", "Swivt", "software case studies",
  ],
  alternates: { canonical: `${BASE_URL}/portfolio` },
  openGraph: {
    url: `${BASE_URL}/portfolio`,
    title: "Portfolio — Real Software Projects by Tejasbyte Technologies",
    description: "Next.js web apps, admin panels, healthcare platforms, and mobile apps built for real clients.",
    images: [{ url: "/logos/social-media-cover-image.png", width: 1200, height: 630 }],
  },
};

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Tejasbyte Technologies Portfolio",
              url: `${BASE_URL}/portfolio`,
              description: "Software projects built and delivered by Tejasbyte Technologies.",
              hasPart: [
                { "@type": "CreativeWork", name: "Subha Sanskar Decor Website", url: "https://www.subhasanskardecor.com" },
                { "@type": "CreativeWork", name: "Vision Sign Advertising Website", url: "https://www.visionsignadvertising.com.np" },
                { "@type": "CreativeWork", name: "Tarangini Foundation Website", url: "https://tarangini.org.np" },
              ],
            }),
          }}
        />
        <PortfolioPage />
      </main>
      <Footer />
    </>
  );
}

