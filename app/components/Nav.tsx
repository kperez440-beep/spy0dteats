"use client";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "Platform", href: "#platform"      },
  { label: "Results",  href: "#research"      },
  { label: "Pricing",  href: "#pricing-plans" },
  { label: "Access",   href: "#founding"      },
];

const sectionIds = ["platform", "research", "pricing-plans", "founding"];

export function Nav() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1422]/92 backdrop-blur-xl border border-[#1E2D3D] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-[#0B1422]/50 backdrop-blur-md border border-[#1E2D3D]/50"
        }`}
      >
        <Logo size="lg" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const sectionId = l.href.replace("#", "");
            const isActive  = activeSection === sectionId;
            return (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[13px] font-medium transition-colors duration-150"
                style={{ color: isActive ? "#F0B429" : undefined }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = ""; }}
              >
                <span className={isActive ? "" : "text-slate-400"}>{l.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, #F0B429, transparent)" }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#founding"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#F0B429] hover:bg-[#FFD060] text-[#050810] font-bold text-[13px] px-4 py-2 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(240,180,41,0.45)] hover:-translate-y-px cursor-pointer"
          >
            Request Founding Access
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg border border-[#1E2D3D] bg-[#0D1520] cursor-pointer"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-4 h-[1.5px] bg-slate-300 transition-all duration-200 origin-center"
              style={menuOpen ? { transform: "rotate(45deg) translate(4px, 4px)" } : {}}
            />
            <span
              className="block w-4 h-[1.5px] bg-slate-300 transition-all duration-200"
              style={menuOpen ? { opacity: 0, transform: "scaleX(0)" } : {}}
            />
            <span
              className="block w-4 h-[1.5px] bg-slate-300 transition-all duration-200 origin-center"
              style={menuOpen ? { transform: "rotate(-45deg) translate(4px, -4px)" } : {}}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className="md:hidden fixed inset-0 z-40 transition-all duration-300"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#050810]/80 backdrop-blur-md" />

        <div
          className="absolute top-0 right-0 h-full w-72 bg-[#0B1422] border-l border-[#1E2D3D] flex flex-col pt-24 px-8 gap-6 transition-transform duration-300"
          style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
          onClick={e => e.stopPropagation()}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-slate-300 hover:text-white transition-colors duration-150 border-b border-[#1E2D3D] pb-4"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#founding"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 bg-[#F0B429] hover:bg-[#FFD060] text-[#050810] font-bold text-[14px] px-5 py-3 rounded-xl transition-all duration-200 cursor-pointer"
          >
            Request Founding Access
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <div className="mt-auto pb-8">
            <p className="text-[11px] font-mono text-slate-600 text-center">by Fortitud Capital</p>
          </div>
        </div>
      </div>
    </>
  );
}
