"use client";
import { useEffect, useRef, useState } from "react";
import { SPYPivotMark } from "../Logo";
import { Reveal, SectionHead } from "./Reveal";
import { COUNTS, DiscordReplay, type Channel } from "./DiscordReplay";

// Section 05: one real paper-trading day replayed as the members' Discord
// feed. The timeline doubles as the channel filter. SampleAlert below is the
// older single-alert card, still used by the /brand-assets gallery export.

const TIMELINE: { ch: Channel; time: string; title: string; body: string; hot?: boolean }[] = [
  { ch: "all", time: "Fri Oct 30", title: "The whole day", body: "Every message, in the order members got it." },
  { ch: "premarket", time: "~8:45 ET", title: "Premarket brief", body: "The mood, the levels that matter and the plan for the day." },
  { ch: "thoughts", time: "9:30 – 4:00", title: "Robot's thoughts", body: "What it's watching, and a chop warning when it stands aside." },
  { ch: "positions", time: "9:30 – 4:00", title: "Positions", body: "Every paper entry with levels, then target hits, stop moves and the close.", hot: true },
  { ch: "recap", time: "~4:05 ET", title: "Daily recap", body: "Every trade, wins and losses, in one place." },
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
  const [channel, setChannel] = useState<Channel>("all");
  return (
    <section id="sample" className="relative scroll-mt-20 px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="A day inside the machine"
          title={<>A real day. <span className="text-white/45">Every message.</span></>}
          sub="Friday, October 30, replayed from the robot's paper account in the members' alert format. Pick a channel to see what lands where."
        />
        <div className="mt-10 grid gap-12 md:mt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Below lg the feed's own channel chips do this job. */}
          <ol className="relative hidden border-l border-white/[0.08] pl-7 lg:block">
            {TIMELINE.map((t, i) => {
              const on = channel === t.ch;
              return (
                <li key={t.title} className="relative pb-7 last:pb-0">
                  <span
                    aria-hidden
                    className={`absolute -left-[33px] top-[18px] h-2.5 w-2.5 rounded-full ring-4 ring-[#040503] transition-colors ${on ? "bg-[#C1FF72]" : t.hot ? "bg-[#C1FF72]/50" : "bg-white/25"}`}
                  />
                  <Reveal delay={i * 0.05}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => setChannel(t.ch)}
                      className={`-mx-3 block w-[calc(100%+1.5rem)] rounded-xl px-3 py-2.5 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1FF72] ${on ? "bg-white/[0.05]" : "hover:bg-white/[0.03]"}`}
                    >
                      <span className="flex items-baseline justify-between gap-3 font-mono text-[11px] tracking-[0.15em] text-white/35">
                        {t.time}
                        <span className={on ? "text-[#C1FF72]/80" : ""}>{COUNTS[t.ch]} msg</span>
                      </span>
                      <span className={`mt-1 block text-lg font-semibold ${on ? "text-[#C1FF72]" : "text-white"}`} style={{ fontFamily: "var(--font-heading)" }}>
                        {t.title}
                      </span>
                      <span className="mt-1 block text-[15px] leading-relaxed text-white/55">{t.body}</span>
                    </button>
                  </Reveal>
                </li>
              );
            })}
          </ol>
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <DiscordReplay channel={channel} onChannel={setChannel} />
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-white/40">
              A real paper-trading day. Results vary, and some days lose. Times, prices and results come from the paper-account log;
              grades, checklists, targets and contracts show the alert format. Results are in SPY points, not option profit.
              Information only, not trade instructions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
