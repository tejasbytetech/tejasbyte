import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostPage from "@/components/pages/BlogPostPage";
import { POSTS, getPostBySlug } from "@/lib/blog-posts";

const BASE_URL = "https://www.tejasbyte.com";

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Tejasbyte Engineering Blog`,
    description: post.excerpt,
    keywords: [...post.tags, "software engineering", "Tejasbyte blog", post.cat.toLowerCase()],
    authors: [{ name: "Tejasbyte Technologies", url: BASE_URL }],
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/blog/${slug}`,
      title: post.title,
      description: post.excerpt,
      images: [{ url: "/logos/social-media-cover-image.png", width: 1200, height: 630 }],
      publishedTime: post.date,
      authors: ["Tejasbyte Technologies"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/logos/social-media-cover-image.png"],
    },
  };
}

export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              dateModified: post.date,
              author: {
                "@type": "Organization",
                name: "Tejasbyte Technologies",
                url: BASE_URL,
              },
              publisher: {
                "@type": "Organization",
                name: "Tejasbyte Technologies",
                logo: { "@type": "ImageObject", url: `${BASE_URL}/logos/full-color-primary.png` },
              },
              mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${slug}` },
              image: `${BASE_URL}/logos/social-media-cover-image.png`,
              keywords: post.tags.join(", "),
              articleSection: post.cat,
              url: `${BASE_URL}/blog/${slug}`,
            }),
          }}
        />
        <BlogPostPage slug={slug} />
      </main>
      <Footer />
    </>
  );
}

