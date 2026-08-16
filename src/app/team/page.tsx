import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamPageClient from "@/components/pages/TeamPage";

export const metadata: Metadata = {
  title: "Our Team — Tejasbyte Technologies",
  description:
    "Meet the engineers, co-founders, and advisors behind Tejasbyte Technologies. A senior-only team building AI, web, mobile, and cloud systems for global clients.",
  alternates: { canonical: "https://www.tejasbyte.com/team" },
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <TeamPageClient />
      </main>
      <Footer />
    </>
  );
}
