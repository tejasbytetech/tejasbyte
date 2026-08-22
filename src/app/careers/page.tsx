import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";
import type { HiringRow } from "@/lib/supabase/types";
import CareersClient from "@/components/pages/CareersClient";
import CareersHero from "@/components/pages/CareersHero";

export const metadata: Metadata = {
  title: "Careers — Tejasbyte Technologies",
  description: "Join the Tejasbyte engineering team. We're hiring senior engineers across AI, web, mobile, and cloud infrastructure.",
  alternates: { canonical: "https://www.tejasbyte.com/careers" },
};

export const revalidate = 300;

async function CareersContent() {
  const supabase = await createClient();
  const { data: roles } = await supabase
    .from("hiring")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  return <CareersClient roles={(roles ?? []) as HiringRow[]} />;
}

function CareersSkeleton() {
  return (
    <section style={{ background: "#F7F5FF", padding: "80px 52px", minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{
          width: 40, height: 40,
          border: "3px solid rgba(91,48,232,0.15)",
          borderTopColor: "#5B30E8",
          borderRadius: "50%",
          animation: "spin .7s linear infinite",
        }} />
        <p style={{ fontSize: ".82rem", color: "rgba(26,16,53,0.35)", letterSpacing: ".04em" }}>Loading roles…</p>
      </div>
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </section>
  );
}

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero renders instantly */}
        <CareersHero />
        {/* Roles stream in from DB */}
        <Suspense fallback={<CareersSkeleton />}>
          <CareersContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
