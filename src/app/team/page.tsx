import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamPageClient from "@/components/pages/TeamPage";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Our Team — Tejasbyte Technologies",
  description:
    "Meet the engineers, co-founders, and advisors behind Tejasbyte Technologies. A senior-only team building AI, web, mobile, and cloud systems for global clients.",
  alternates: { canonical: "https://www.tejasbyte.com/team" },
};

export const revalidate = 60;

export default async function TeamPage() {
  const supabase = await createClient();
  const { data: members } = await supabase
    .from("teams")
    .select("*")
    .order("sort_order");

  return (
    <>
      <Navbar />
      <main>
        <TeamPageClient members={members ?? []} />
      </main>
      <Footer />
    </>
  );
}
