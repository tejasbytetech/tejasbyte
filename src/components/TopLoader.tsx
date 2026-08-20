"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [width, setWidth]     = useState(0);

  useEffect(() => {
    // Start bar
    setLoading(true);
    setWidth(20);
    const t1 = setTimeout(() => setWidth(60),  80);
    const t2 = setTimeout(() => setWidth(85),  300);
    const t3 = setTimeout(() => setWidth(100), 500);
    const t4 = setTimeout(() => { setLoading(false); setWidth(0); }, 700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [pathname]);

  if (!loading && width === 0) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 99999,
      height: 3, pointerEvents: "none",
    }}>
      <div style={{
        height: "100%",
        width: `${width}%`,
        background: "linear-gradient(90deg, #5B30E8, #A78BFA)",
        boxShadow: "0 0 8px rgba(91,48,232,0.6)",
        borderRadius: "0 2px 2px 0",
        transition: width === 100
          ? "width .15s ease-out, opacity .2s .15s ease"
          : "width .4s cubic-bezier(.16,1,.3,1)",
        opacity: width === 100 ? 0 : 1,
      }} />
    </div>
  );
}
