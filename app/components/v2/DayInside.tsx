"use client";
import { useEffect, useRef, useState } from "react";
import { SPYPivotMark } from "../Logo";
import { Reveal, SectionHead } from "./Reveal";

// Section 05: a trading day as a timeline, beside a Discord-style sample alert
// that types itself out when scrolled into view. All messages are illustrative.

const TIMELINE = [
  { time: "~9:00 ET", title: "Premarket brief", body: "Key levels, overnight context and the robot's bias for the day." },
  { time: "9:30 – 4:00", title: "Live alerts", body: "Graded and explained, the moment they fire.", hot: true },
  { time: "9:30 – 4:00", title: "Chop warnings", body: "“⚠️ Chop detected. The system is standing aside.”" },
  { time: "9:30 – 4:00", title: "Thoughts", body: "“Skipping this bear signal. Chop filter is on and we're inside the opening range.”" },
  { time: "9:30 – 4:00", title: "Positions", body: "Entry, stop, T1 and exit on the paper account." },
  { time: "~4:15 ET", title: "Daily recap", body: "What fired, what worked, what didn't." },
];

type Line = { text: string; className?: string };
const ALERT: Line[] = [
  { text: "🟢 BULL ALERT · SPY 582.40 · 15M", className: "font-semibold text-[#10B981]" },
  { text: "💪 Quality: STRONG", className: "text-white" },
  { text: "   ✓ All timeframes agree  ✓ Healthy volume  ✓ Calm market", className: "text-white/60" },
  { text: "📊 Market mood: Opening Drive · VIX calm", className: "text-white/80" },
  { text: "🎯 Watching: entry zone 582.30–582.60 · invalidation 581.80", className: "text-white/80" },
  { text: "⚠️ Don't chase above 583.10", className: "text-[#F5C46B]" },
  { text: "🧠 “Clean reclaim of the pivot with volume behind it. This is the kind of setup I take.”", className: "italic text-[#C1FF72]/90" },
];
// Each line's characters and where it starts in the overall typing sequence.
const LINES = ALERT.map((l, i) => ({
  ...l,
  chars: [...l.text],
  start: ALERT.slice(0, i).reduce((n, p) => n + [...p.text].length, 0),
}));
const TOTAL = LINES.reduce((n, l) => n + l.chars.length, 0);

export function SampleAlert() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0); // characters revealed so far

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (reduceMotion) { setShown(TOTAL); return; }
      timer = window.setInterval(() => {
        setShown((n) => {
          if (n >= TOTAL) window.clearInterval(timer);
          return Math.min(TOTAL, n + 3);
        });
      }, 18);
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => { window.clearInterval(timer); io.disconnect(); };
  }, []);

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#313338]/[0.18] shadow-[0_30px_120px_-30px_rgba(193,255,114,0.25)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-black/30 px-4 py-2.5 font-mono text-[11px] text-white/45">
        <span className="text-white/30">#</span> spy-alerts
        <span className="ml-auto rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-white/40">SAMPLE</span>
      </div>
      <div className="flex gap-3 p-4 md:p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C1FF72]/30 bg-[#0a0d09]">
          <SPYPivotMark size={20} color="#C1FF72" badge={false} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[15px] font-semibold text-white">SPY Pivot Pro</span>
            <span className="rounded bg-[#5865F2] px-1 py-px text-[9px] font-semibold text-white">BOT</span>
            <span className="text-[11px] text-white/35">Today at 9:47 AM</span>
          </div>
          {/* Full text reserves the space; the typed copy is layered on top. */}
          <div className="relative mt-2 font-mono text-[12px] leading-[1.7] md:text-[13px]">
            <div aria-hidden className="invisible whitespace-pre-wrap">
              {ALERT.map((l) => <div key={l.text}>{l.text}</div>)}
            </div>
            <div className="absolute inset-0 whitespace-pre-wrap" aria-label="Sample alert">
              {LINES.map((l) => {
                const take = Math.max(0, Math.min(l.chars.length, shown - l.start));
                const typing = take > 0 && take < l.chars.length;
                if (take === 0) return null;
                return (
                  <div key={l.text} className={l.className}>
                    {l.chars.slice(0, take).join("")}
                    {typing && <span className="v2-caret ml-px inline-block h-[1em] w-[0.5em] translate-y-[2px] bg-[#C1FF72]" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DayInside() {
  return (
    <section id="sample" className="relative scroll-mt-20 px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="A day inside the machine" title={<>From premarket <span className="text-white/45">to the closing bell.</span></>} />
        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <ol className="relative border-l border-white/[0.08] pl-7">
            {TIMELINE.map((t, i) => (
              <li key={t.title} className="relative pb-9 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-[#040503] ${t.hot ? "bg-[#C1FF72]" : "bg-white/25"}`}
                />
                <Reveal delay={i * 0.05}>
                  <p className="font-mono text-[11px] tracking-[0.15em] text-white/35">{t.time}</p>
                  <h3 className={`mt-1 text-lg font-semibold ${t.hot ? "text-[#C1FF72]" : "text-white"}`} style={{ fontFamily: "var(--font-heading)" }}>
                    {t.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-white/55">{t.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SampleAlert />
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-white/35">
              Illustrative example. Alerts are information, not trade instructions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
