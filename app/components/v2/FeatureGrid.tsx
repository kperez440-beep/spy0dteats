"use client";
import { useEffect, useRef, useState } from "react";
import { Activity, Ban, CalendarClock, Gauge, GitMerge, Layers, Library, Newspaper, ShieldOff, Waves } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";

// Section 03b: the checklist the system runs before an alert. A scanner walks
// the cards in order, ticking each one, then loops; it mirrors the pre-alert checks.

export const FEATURES = [
  { icon: Gauge, title: "Alert quality grading", line: "Every alert graded Strong / Decent / Weak, from a study of 1,800+ real alerts across 84 trading days." },
  { icon: Waves, title: "Market mood", line: "Trend, chop, compression, expansion, opening drive: know what kind of day it is before you trade it." },
  { icon: ShieldOff, title: "Chop protection", line: "Knows when not to trade, and tells you when it's standing aside." },
  { icon: Ban, title: "Don't-chase check", line: "Flags when price has already run too far from the alert." },
  { icon: Layers, title: "Timeframe alignment", line: "Short- and higher-timeframe trends must agree before a setup is called strong." },
  { icon: CalendarClock, title: "Macro calendar", line: "FOMC, CPI and jobs-report days flagged before they move the market." },
  { icon: Activity, title: "VIX fear gauge", line: "Reads whether the market is calm or stressed." },
  { icon: Newspaper, title: "Premarket news scan", line: "Flags the high-impact headlines before the bell." },
  { icon: GitMerge, title: "Two-signal confirmation", line: "Two independent alert engines. Extra conviction when both agree." },
  { icon: Library, title: "Pattern library", line: "Pivot reclaims, moving-average retests, early reversals, opening-range setups." },
];

export function FeatureGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(-1); // index being scanned; cards before it are checked

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer = 0;
    const io = new IntersectionObserver(([e]) => {
      window.clearInterval(timer);
      if (!e.isIntersecting) return;
      if (reduceMotion) { setStep(FEATURES.length); return; }
      timer = window.setInterval(() => setStep((s) => (s >= FEATURES.length + 3 ? 0 : s + 1)), 650);
    }, { threshold: 0.25 });
    if (ref.current) io.observe(ref.current);
    return () => { window.clearInterval(timer); io.disconnect(); };
  }, []);

  const done = Math.min(step, FEATURES.length);

  return (
    <section id="features" className="relative scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHead kicker="Under the hood" title={<>Everything it checks <span className="text-white/45">before it says a word.</span></>} />
          <Reveal>
            <div className="font-mono text-xs text-white/45">
              <span className="text-[#C1FF72]">{String(done).padStart(2, "0")}</span> / {FEATURES.length} checks
              {done >= FEATURES.length && <span className="ml-2 text-[#10B981]">· READY TO ALERT</span>}
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 md:mt-16">
          {FEATURES.map(({ icon: Icon, title, line }, i) => {
            const active = i === step;
            const checked = i < step;
            return (
              <Reveal key={title} delay={(i % 5) * 0.06} className="h-full">
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border p-4 transition-all sm:p-5 duration-500 ${
                    active
                      ? "border-[#C1FF72]/60 bg-[#C1FF72]/[0.06] shadow-[0_0_40px_rgba(193,255,114,0.12)]"
                      : "border-white/[0.07] bg-[#0a0d09]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`h-5 w-5 transition-colors ${active || checked ? "text-[#C1FF72]" : "text-white/35"}`} strokeWidth={1.6} />
                    <span
                      className={`font-mono text-[10px] tracking-wider transition-opacity ${
                        checked ? "text-[#10B981] opacity-100" : active ? "text-[#C1FF72] opacity-100" : "opacity-0"
                      }`}
                    >
                      {checked ? "✓ OK" : "SCANNING"}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[15px] sm:mt-5 font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    {title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/50">{line}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
