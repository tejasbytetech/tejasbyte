import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services — Tejasbyte Technologies",
  description: "Explore our full range of software services: AI/ML, Web, Mobile, Cloud, API, and Security engineering.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
