"use client";
import { useEffect, useState } from "react";
import { SPYPivotMark } from "../Logo";
import { LINKS, NAV_ITEMS } from "./links";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-white/[0.06] bg-[#040503]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="SPY Pivot Pro home">
          <SPYPivotMark size={26} color="#F7F6F1" badge={false} />
          <span className="text-[19px] font-bold tracking-tight text-[#F7F6F1]" style={{ fontFamily: "var(--font-display)" }}>
            SPY Pivot Pro
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-white/55 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.whop}
            className="hidden rounded-full bg-[#C1FF72] px-5 py-2 text-[13px] font-semibold text-[#081c0e] shadow-[0_0_24px_rgba(193,255,114,0.25)] transition hover:-translate-y-px hover:bg-[#D9FFA0] hover:shadow-[0_0_36px_rgba(193,255,114,0.45)] sm:inline-block"
          >
            Join on Whop
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-white/10 md:hidden"
          >
            <span className={`h-px w-4 bg-white/70 transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-white/70 transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-[max-height] duration-500 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav aria-label="Mobile" className="flex flex-col px-5 pb-6">
          {NAV_ITEMS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-white/[0.06] py-4 text-white/70">
              {l.label}
            </a>
          ))}
          <a
            href={LINKS.whop}
            onClick={() => setOpen(false)}
            className="mt-5 rounded-full bg-[#C1FF72] py-3 text-center text-sm font-semibold text-[#081c0e]"
          >
            Join on Whop
          </a>
        </nav>
      </div>
    </header>
  );
}
