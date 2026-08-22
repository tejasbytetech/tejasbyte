import { createClient } from "@/lib/supabase/server";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F7F8FA" }}>
      <AdminSidebar />
      <main style={{ flex: 1, overflow: "auto", minWidth: 0 }}>
        {/* Spacer for mobile fixed topbar */}
        <div className="admin-mobile-topbar-spacer" style={{ display: "none", height: 58 }} />
        {children}
      </main>
      <style>{`
        @media (max-width: 767px) {
          .admin-mobile-topbar-spacer { display: block !important; }
        }
      `}</style>
    </div>
  );
}
