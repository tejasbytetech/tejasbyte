import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamPageClient from "@/components/pages/TeamPage";
import TeamHero from "@/components/pages/TeamHero";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Our Team — Tejasbyte Technologies",
  description:
    "Meet the engineers, co-founders, and advisors behind Tejasbyte Technologies. A senior-only team building AI, web, mobile, and cloud systems for global clients.",
  alternates: { canonical: "https://www.tejasbyte.com/team" },
};

export const revalidate = 300;

async function TeamContent() {
  const supabase = await createClient();
  const { data: members } = await supabase
    .from("teams")
    .select("*")
    .order("sort_order");

  return <TeamPageClient members={members ?? []} />;
}

function TeamSkeleton() {
  return (
    <section style={{ background: "#fff", padding: "80px 52px", minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{
          width: 40, height: 40,
          border: "3px solid rgba(91,48,232,0.15)",
          borderTopColor: "#5B30E8",
          borderRadius: "50%",
          animation: "spin .7s linear infinite",
        }} />
        <p style={{ fontSize: ".82rem", color: "rgba(26,16,53,0.35)", letterSpacing: ".04em" }}>Loading team…</p>
      </div>
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </section>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero renders instantly — no DB */}
        <TeamHero />
        {/* Team data streams in */}
        <Suspense fallback={<TeamSkeleton />}>
          <TeamContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
