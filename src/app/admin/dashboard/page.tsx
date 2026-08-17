import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import AdminDashboardClient from "@/components/admin/AdminDashboardClient";

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { count: teamCount }   = await supabase.from("teams").select("*", { count: "exact", head: true });
  const { count: hiringCount } = await supabase.from("hiring").select("*", { count: "exact", head: true }).eq("is_active", true);
  const { data: { user } }     = await supabase.auth.getUser();

  return (
    <AdminDashboardClient
      teamCount={teamCount ?? 0}
      hiringCount={hiringCount ?? 0}
      userEmail={user?.email ?? ""}
    />
  );
}
