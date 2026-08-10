import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPage from "@/components/pages/BlogPage";

export const metadata: Metadata = {
  title: "Blog — Tejasbyte Technologies",
  description: "Insights on software engineering, AI, cloud infrastructure, and building great products.",
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <BlogPage />
      </main>
      <Footer />
    </>
  );
}
