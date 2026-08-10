import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPage from "@/components/pages/BlogPage";

const BASE_URL = "https://www.tejasbyte.com";

export const metadata: Metadata = {
  title: "Engineering Blog — AI, Cloud & Software Insights | Tejasbyte",
  description:
    "Technical articles by the Tejasbyte engineering team. Production RAG pipelines, Kubernetes cost optimization, React Native offline-first apps, TypeScript patterns, and Next.js + Supabase guides.",
  keywords: [
    "software engineering blog", "AI development blog", "machine learning blog",
    "Next.js blog", "React Native blog", "Kubernetes blog",
    "cloud engineering blog", "TypeScript blog", "Supabase tutorial",
    "RAG pipeline tutorial", "LLM production guide",
    "software development Nepal blog", "tech blog Nepal",
    "full stack development blog", "Node.js PostgreSQL blog",
  ],
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    url: `${BASE_URL}/blog`,
    title: "Engineering Blog — AI, Cloud & Software Insights | Tejasbyte",
    description: "Production-grade insights on AI, cloud infrastructure, React Native, and TypeScript from the Tejasbyte team.",
    images: [{ url: "/logos/social-media-cover-image.png", width: 1200, height: 630 }],
  },
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Tejasbyte Engineering Blog",
              url: `${BASE_URL}/blog`,
              description: "Technical insights from the Tejasbyte engineering team on AI, cloud, mobile, and web development.",
              publisher: {
                "@type": "Organization",
                name: "Tejasbyte Technologies",
                logo: { "@type": "ImageObject", url: `${BASE_URL}/logos/full-color-primary.png` },
              },
            }),
          }}
        />
        <BlogPage />
      </main>
      <Footer />
    </>
  );
}

