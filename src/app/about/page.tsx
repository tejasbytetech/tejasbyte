import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/pages/AboutPage";
import { createClient } from "@/lib/supabase/server";

const BASE_URL = "https://www.tejasbyte.com";

export const metadata: Metadata = {
  title: "About Tejasbyte Technologies — US-Based Senior Software Engineering Team",
  description:
    "Tejasbyte Technologies is a US-based senior-only software engineering company with offices in Richmond, California and Kathmandu, Nepal. 5+ years experience, 30+ projects delivered, 98% client satisfaction.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    url: `${BASE_URL}/about`,
    title: "About Tejasbyte Technologies — Senior Software Engineering Team",
    description: "US-based senior software engineering company with offices in California and Nepal. 30+ projects. 98% satisfaction. Full-stack ownership.",
    images: [{ url: "/logos/social-media-cover-image.png", width: 1200, height: 630 }],
  },
};

export const revalidate = 60;

export default async function About() {
  const supabase = await createClient();
  const { data: founders } = await supabase
    .from("teams")
    .select("*")
    .eq("is_founder", true)
    .order("sort_order");

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <AboutPage founders={founders ?? []} />
      </main>
      <Footer />
    </>
  );
}
