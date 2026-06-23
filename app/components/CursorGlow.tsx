"use client";
import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let tx = -600, ty = -600; // start offscreen
    let cx = tx, cy = ty;

    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", move, { passive: true });

    const tick = () => {
      // Lerp toward target for smooth trailing effect
      cx += (tx - cx) * 0.085;
      cy += (ty - cy) * 0.085;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${cx - 300}px, ${cy - 300}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-[1]"
      style={{
        width:  "600px",
        height: "600px",
        background: "radial-gradient(circle at center, rgba(6,182,212,0.055) 0%, rgba(6,182,212,0.02) 40%, transparent 70%)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
