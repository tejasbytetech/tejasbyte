import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostPage from "@/components/pages/BlogPostPage";
import { POSTS, getPostBySlug } from "@/lib/blog-posts";

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
    title: `${post.title} — Tejasbyte Blog`,
    description: post.excerpt,
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
        <BlogPostPage slug={slug} />
      </main>
      <Footer />
    </>
  );
}
