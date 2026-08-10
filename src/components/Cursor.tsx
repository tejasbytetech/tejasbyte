"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos  = useRef({ x: 0, y: 0 });
  const curr = useRef({ x: 0, y: 0 });
  const raf  = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top  = e.clientY + "px";
      }
    };

    const loop = () => {
      curr.current.x += (pos.current.x - curr.current.x) * 0.12;
      curr.current.y += (pos.current.y - curr.current.y) * 0.12;
      if (ring.current) {
        ring.current.style.left = curr.current.x + "px";
        ring.current.style.top  = curr.current.y + "px";
      }
      raf.current = requestAnimationFrame(loop);
    };

    const onEnter = () => {
      if (dot.current)  dot.current.style.opacity  = "1";
      if (ring.current) ring.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (dot.current)  dot.current.style.opacity  = "0";
      if (ring.current) ring.current.style.opacity = "0";
    };

    // Expand on interactive elements
    const onLink = () => {
      if (dot.current)  { dot.current.style.width = "12px"; dot.current.style.height = "12px"; dot.current.style.background = "#a78bfa"; }
      if (ring.current) { ring.current.style.width = "64px"; ring.current.style.height = "64px"; ring.current.style.borderColor = "rgba(167,139,250,0.7)"; }
    };
    const offLink = () => {
      if (dot.current)  { dot.current.style.width = "8px"; dot.current.style.height = "8px"; dot.current.style.background = "#fff"; }
      if (ring.current) { ring.current.style.width = "40px"; ring.current.style.height = "40px"; ring.current.style.borderColor = "rgba(255,255,255,0.5)"; }
    };

    document.addEventListener("mousemove",  move);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    const attachHovers = () => {
      document.querySelectorAll("a,button,[data-cursor]").forEach(el => {
        el.addEventListener("mouseenter", onLink);
        el.addEventListener("mouseleave", offLink);
      });
    };
    attachHovers();
    const mo = new MutationObserver(attachHovers);
    mo.observe(document.body, { childList: true, subtree: true });

    raf.current = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener("mousemove",  move);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor-dot"  ref={dot}  style={{ opacity: 0 }} />
      <div id="cursor-ring" ref={ring} style={{ opacity: 0 }} />
    </>
  );
}
