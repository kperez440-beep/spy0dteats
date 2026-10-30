import { BellRing, Brain, ClipboardList } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";

// Section 03: the three things a member gets. Each card carries a small
// illustrative mock (sample data, not real alerts).

function AlertsMock() {
  const rows = [
    { side: "BULL", what: "Pivot reclaim", grade: "STRONG", col: "#10B981" },
    { side: "BEAR", what: "R1 rejection", grade: "DECENT", col: "#F87171" },
    { side: "BULL", what: "EMA retest", grade: "FORMING", col: "#C1FF72" },
  ];
  return (
    <div className="space-y-2 font-mono text-[11px]">
      {rows.map((r) => (
        <div key={r.what} className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-black/40 px-3 py-2">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: r.col }} />
            <span style={{ color: r.col }}>{r.side}</span>
            <span className="text-white/55">{r.what}</span>
          </span>
          <span className="rounded border px-1.5 py-0.5 text-[10px] tracking-wider" style={{ color: r.col, borderColor: `${r.col}55` }}>
            {r.grade}
          </span>
        </div>
      ))}
    </div>
  );
}

function ThoughtsMock() {
  return (
    <div className="space-y-2 text-[13px] leading-snug">
      <div className="rounded-xl rounded-tl-sm border border-white/[0.06] bg-black/40 px-3.5 py-2.5 text-white/70">
        <span className="mr-1.5">🧠</span>Skipping this bear signal. Chop filter is on and we&apos;re still inside the opening range.
      </div>
      <div className="rounded-xl rounded-tl-sm border border-[#C1FF72]/20 bg-[#C1FF72]/[0.04] px-3.5 py-2.5 text-white/70">
        <span className="mr-1.5">👀</span>Watching the pivot at 582.40. A clean reclaim with volume is the setup.
      </div>
    </div>
  );
}

function PositionsMock() {
  const rows = [
    ["ENTRY", "582.45", "text-white/80"],
    ["STOP", "581.80", "text-[#F87171]"],
    ["T1", "583.30", "text-[#10B981]"],
    ["EXIT", "583.10 · trimmed", "text-[#C1FF72]"],
  ];
  return (
    <div className="rounded-lg border border-white/[0.06] bg-black/40 font-mono text-[11px]">
      <div className="flex justify-between border-b border-white/[0.06] px-3 py-2 text-white/40">
        <span>SPY 583C 0DTE</span>
        <span>PAPER</span>
      </div>
      {rows.map(([k, v, c]) => (
        <div key={k} className="flex justify-between px-3 py-1.5">
          <span className="text-white/40">{k}</span>
          <span className={c}>{v}</span>
        </div>
      ))}
    </div>
  );
}

const ITEMS = [
  {
    icon: BellRing,
    kicker: "01 · Alerts",
    title: "Alerts as they happen",
    body: "Pivot and order-flow alerts, each graded Strong, Decent or Weak with the reasons. A heads-up when a setup is forming, then a follow-up when it confirms or fades.",
    mock: <AlertsMock />,
  },
  {
    icon: Brain,
    kicker: "02 · The robot's thoughts",
    title: "The why, not just the what",
    body: "Most alert services tell you what. This one tells you why: what it's watching, which setups it's skipping, and the reason. Use it to sharpen your own read of the tape.",
    mock: <ThoughtsMock />,
  },
  {
    icon: ClipboardList,
    kicker: "03 · Daily positions",
    title: "Every position, losers included",
    body: "What the system entered, trimmed, stopped and exited on its paper account, with entry, stop and target levels. No hiding the losers.",
    mock: <PositionsMock />,
  },
];

export function WhatYouGet() {
  return (
    <section id="alerts" className="relative scroll-mt-20 px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="What you get"
          title={<>Three feeds. <span className="text-white/45">One machine.</span></>}
          sub="Everything lands in Discord, in real time, during market hours."
        />
        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3">
          {ITEMS.map(({ icon: Icon, kicker, title, body, mock }, i) => (
            <Reveal key={kicker} delay={i * 0.1} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-[#0a0d09] p-6 transition-colors hover:border-[#C1FF72]/25 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">{kicker}</span>
                  <Icon className="h-5 w-5 text-[#C1FF72]/70 transition-colors group-hover:text-[#C1FF72]" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">{body}</p>
                <div className="mt-auto pt-8">{mock}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
