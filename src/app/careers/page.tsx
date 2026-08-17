import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";
import type { HiringRow } from "@/lib/supabase/types";
import CareersClient from "@/components/pages/CareersClient";

export const metadata: Metadata = {
  title: "Careers — Tejasbyte Technologies",
  description: "Join the Tejasbyte engineering team. We're hiring senior engineers across AI, web, mobile, and cloud infrastructure.",
  alternates: { canonical: "https://www.tejasbyte.com/careers" },
};

export const revalidate = 60;

export default async function CareersPage() {
  const supabase = await createClient();
  const { data: roles } = await supabase
    .from("hiring")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  return (
    <>
      <Navbar />
      <main>
        <CareersClient roles={(roles ?? []) as HiringRow[]} />
      </main>
      <Footer />
    </>
  );
}
