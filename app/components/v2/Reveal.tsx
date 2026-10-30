"use client";
import { useEffect, useRef, type ReactNode } from "react";

// Fades children up when they scroll into view. Hidden state only applies once
// JS has run (html.v2-js), so content is never stuck invisible without it.
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    document.documentElement.classList.add("v2-js");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.dataset.in = "";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`v2-reveal ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export function SectionHead({ kicker, title, sub }: { kicker: string; title: ReactNode; sub?: ReactNode }) {
  return (
    <Reveal className="max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#C1FF72]/80">{kicker}</p>
      <h2
        className="mt-4 text-[clamp(2rem,4.2vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {sub && <p className="mt-5 max-w-xl text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed text-white/55">{sub}</p>}
    </Reveal>
  );
}
