import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About — Tejasbyte Technologies",
  description: "Learn about Tejasbyte Technologies — our story, team, values, and how we build software.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
