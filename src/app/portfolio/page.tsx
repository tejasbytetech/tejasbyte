import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioPage from "@/components/pages/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio — Tejasbyte Technologies",
  description: "Explore our selected work — real software projects we've built and stand behind.",
};

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <PortfolioPage />
      </main>
      <Footer />
    </>
  );
}
