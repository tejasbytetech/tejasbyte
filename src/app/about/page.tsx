import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/pages/AboutPage";
import PageHero from "@/components/PageHero";
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
    images: [{ url: "/finallogos/facebook-cover-image.png", width: 1200, height: 630 }],
  },
};

export const revalidate = 300; // revalidate every 5 min

// ── Data layer — fetched in background while shell renders ──
async function AboutContent() {
  const supabase = await createClient();
  const { data: founders } = await supabase
    .from("teams")
    .select("*")
    .eq("is_founder", true)
    .order("sort_order");

  return <AboutPage founders={founders ?? []} />;
}

// ── Skeleton shown while data loads ──
function AboutSkeleton() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{
          width: 40, height: 40,
          border: "3px solid rgba(91,48,232,0.15)",
          borderTopColor: "#5B30E8",
          borderRadius: "50%",
          animation: "spin .7s linear infinite",
        }} />
        <p style={{ fontSize: ".82rem", color: "rgba(26,16,53,0.35)", letterSpacing: ".04em" }}>Loading…</p>
      </div>
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        {/* Hero renders instantly — no DB dependency */}
        <PageHero
          label="Who We Are"
          title="Built by engineers."
          highlight="Obsessed with craft."
          description="Tejasbyte Technologies is registered in Nepal with its main office in the United States, delivering scalable, secure, and intelligent software for businesses worldwide."
        />
        {/* Data-dependent content streams in */}
        <Suspense fallback={<AboutSkeleton />}>
          <AboutContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
