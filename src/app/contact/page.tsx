import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Tejasbyte Technologies",
  description: "Get in touch with Tejasbyte Technologies. Tell us about your project and let's build something great.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
