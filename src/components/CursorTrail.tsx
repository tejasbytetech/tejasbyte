"use client";
import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mouse   = useRef({ x: 0, y: 0 });
  const rafId   = useRef(0);
  const visible = useRef(false);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const show = () => {
      if (!visible.current) {
        visible.current = true;
        if (dotRef.current)  dotRef.current.style.opacity  = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
    };

    const onMove = (e: MouseEvent) => {
      show();
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top  = ringPos.current.y + "px";
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onIn = () => {
      if (dotRef.current) {
        dotRef.current.style.width      = "10px";
        dotRef.current.style.height     = "10px";
        dotRef.current.style.background = "#7C5CFC";
        dotRef.current.style.boxShadow  = "0 0 12px rgba(124,92,252,0.7)";
      }
      if (ringRef.current) {
        ringRef.current.style.width       = "52px";
        ringRef.current.style.height      = "52px";
        ringRef.current.style.borderColor = "rgba(91,48,232,0.45)";
      }
    };

    const onOut = () => {
      if (dotRef.current) {
        dotRef.current.style.width      = "6px";
        dotRef.current.style.height     = "6px";
        dotRef.current.style.background = "#5B30E8";
        dotRef.current.style.boxShadow  = "0 0 8px rgba(91,48,232,0.5)";
      }
      if (ringRef.current) {
        ringRef.current.style.width       = "32px";
        ringRef.current.style.height      = "32px";
        ringRef.current.style.borderColor = "rgba(91,48,232,0.3)";
      }
    };

    const hook = () => {
      document.querySelectorAll("a,button,[data-cursor]").forEach(el => {
        el.addEventListener("mouseenter", onIn);
        el.addEventListener("mouseleave", onOut);
      });
    };
    hook();
    const mo = new MutationObserver(hook);
    mo.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot — hidden until first mouse move */}
      <div ref={dotRef} style={{
        position: "fixed", top: 0, left: 0,
        width: 6, height: 6,
        background: "#2D3A6E",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 99999,
        transform: "translate(-50%,-50%)",
        boxShadow: "0 0 8px rgba(91,48,232,0.5)",
        transition: "width .18s, height .18s, background .2s, box-shadow .2s, opacity .3s",
        opacity: 0,
      }} />
      {/* Ring — hidden until first mouse move */}
      <div ref={ringRef} style={{
        position: "fixed", top: 0, left: 0,
        width: 32, height: 32,
        border: "1.5px solid rgba(91,48,232,0.3)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 99998,
        transform: "translate(-50%,-50%)",
        transition: "width .4s cubic-bezier(.16,1,.3,1), height .4s cubic-bezier(.16,1,.3,1), border-color .3s, opacity .3s",
        opacity: 0,
      }} />
    </>
  );
}
