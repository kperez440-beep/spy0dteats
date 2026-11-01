"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { SPYPivotMark } from "../Logo";

// A Discord-style replay of one real paper-trading session (Fri Oct 30 2026)
// in the members' alert format. Times, prices and results come from the
// robot's paper-account log; grades, checklists, targets, contracts and the
// robot's wording show the alert format.

export type Channel = "all" | "premarket" | "thoughts" | "positions" | "recap";

export const CHANNELS: { id: Channel; name: string; short: string }[] = [
  { id: "all", name: "all-activity", short: "All" },
  { id: "premarket", name: "premarket-brief", short: "Premarket" },
  { id: "thoughts", name: "robot-thoughts", short: "Thoughts" },
  { id: "positions", name: "positions", short: "Positions" },
  { id: "recap", name: "daily-recap", short: "Recap" },
];

type Tone = "brief" | "watch" | "bear" | "update" | "win" | "loss";
const BAR: Record<Tone, string> = {
  brief: "#C1FF72",
  watch: "#F5C46B",
  bear: "#F87171",
  update: "#5B8CFF",
  win: "#10B981",
  loss: "#F87171",
};

type Msg = {
  time: string;
  ch: Exclude<Channel, "all">;
  tone: Tone;
  title: ReactNode;
  grade?: "A" | "B";
  sub?: string;
  fields?: [string, string][];
  checks?: [boolean, string][];
  body?: ReactNode;
  thought?: string;
  paper?: boolean;
};

const N = ({ children }: { children: ReactNode }) => <span className="font-mono text-white">{children}</span>;
const Up = ({ children }: { children: ReactNode }) => <span className="font-mono font-semibold text-[#10B981]">{children}</span>;
const Dn = ({ children }: { children: ReactNode }) => <span className="font-mono font-semibold text-[#F87171]">{children}</span>;

const MESSAGES: Msg[] = [
  {
    time: "8:45 AM", ch: "premarket", tone: "brief", title: "☀️ Premarket brief · Fri Oct 30",
    body: (
      <>
        <p><b className="text-white">Mood: risk-off.</b> SPY is <N>8.1</N> pts below Thursday&apos;s close of <N>769.50</N>.</p>
        <p className="mt-1.5 font-semibold text-white">Levels the robot is watching</p>
        <ul className="mt-0.5 list-disc space-y-0.5 pl-4">
          <li><N>763.76</N> premarket high. Bulls need this back.</li>
          <li><N>760.90</N> premarket low. A break opens a trend day lower.</li>
          <li><N>766.62</N> Thursday&apos;s low. Gap-fill target if buyers show up.</li>
        </ul>
        <p className="mt-1.5"><b className="text-white">Plan:</b> favor bear setups below <N>760.90</N>. No bull ideas unless price gets back above <N>763.76</N>.</p>
      </>
    ),
    thought: "Gaps that hold under the premarket low tend to keep sliding. I'm waiting for the first failed bounce, not chasing the open.",
  },
  {
    time: "9:52 AM", ch: "thoughts", tone: "watch", title: "👀 Watching · bear setup forming",
    body: <p>Premarket low <N>760.90</N> broke at the open (low <N>759.44</N>). Price is drifting back up to test it.</p>,
    thought: "If 760.5 holds as a ceiling, that's my entry. If it pushes back over 761.3, I'm wrong and I stay out.",
  },
  {
    time: "10:03 AM", ch: "positions", tone: "bear", title: "🔴 Paper position opened · BEAR", grade: "A",
    sub: "Setup: failed reclaim of the premarket low",
    fields: [["Entry", "760.29"], ["Wrong if above", "761.30"], ["Targets", "759.3 · 758.3"], ["Don't chase below", "759.50"], ["Contract (paper)", "760P 0DTE"], ["Size", "Normal"]],
    checks: [[true, "Below VWAP and the premarket low"], [true, "15m and 30m trend agree"], [true, "Bounce failed at the level"], [true, "Volume above normal"], [false, "1-hour trend not confirmed yet"]],
    thought: "Price tried to get back over the premarket low and couldn't. That's the trap I was waiting for.",
    paper: true,
  },
  {
    time: "10:16 AM", ch: "positions", tone: "update", title: "🎯 Target 1 hit · BEAR from 760.29",
    body: <p>SPY <N>758.33</N>. Stop moved to entry (<N>760.29</N>). Holding the rest for <N>758.3</N> and below.</p>,
  },
  {
    time: "10:29 AM", ch: "positions", tone: "win", title: <>✅ Closed · <Up>+2.23 pts</Up></>,
    fields: [["In → out", "760.29 → 758.06"], ["Held", "26 min"], ["Why out", "Momentum stalled"]],
  },
  {
    time: "10:36 AM", ch: "positions", tone: "bear", title: "🔴 Paper position opened · BEAR", grade: "B",
    sub: "Setup: trend continuation",
    fields: [["Entry", "758.48"], ["Wrong if above", "759.33"], ["Targets", "757.5 · 756.5"]],
    thought: "Trend is down, but this entry is late in the leg. Smaller conviction.",
    paper: true,
  },
  {
    time: "10:38 AM", ch: "positions", tone: "loss", title: <>❌ Stopped out · <Dn>−1.26 pts</Dn></>,
    fields: [["In → out", "758.48 → 759.74"], ["Held", "2 min"], ["Planned risk", "0.85 pts"]],
    thought: "The bounce ripped through my stop in one bar, so the loss ran 0.41 pts past plan. Standing aside until it settles.",
  },
  {
    time: "10:50 AM", ch: "thoughts", tone: "watch", title: "⚠️ Chop warning",
    body: <p>SPY is swinging between <N>758</N> and <N>760</N>. Signals in a range like this fail more often. Expect fewer messages until it picks a side.</p>,
    thought: "Sitting out is a position too.",
  },
  {
    time: "11:38 AM", ch: "positions", tone: "bear", title: "🔴 Paper position opened · BEAR", grade: "A",
    sub: "Setup: retest after the chop",
    fields: [["Entry", "758.12"], ["Wrong if above", "758.47"], ["Targets", "757.0 · 755.5"], ["Don't chase below", "757.40"], ["Contract (paper)", "758P 0DTE"], ["Size", "Normal"]],
    checks: [[true, "Range broke to the downside"], [true, "15m, 30m and 1h trend agree"], [true, "Tight stop, 0.35 pts of risk"], [true, "Below VWAP all session"]],
    thought: "The bounce stalled right under the 10:30 high. Selling the retest, not chasing the low.",
    paper: true,
  },
  {
    time: "12:46 PM", ch: "positions", tone: "update", title: "🎯 Target 1 hit · BEAR from 758.12",
    body: <p>SPY <N>756.21</N>. Stop moved to entry. Letting the rest run with the trend.</p>,
  },
  {
    time: "2:00 PM", ch: "positions", tone: "update", title: "⏳ Still holding · BEAR from 758.12",
    body: <p>SPY <N>753.82</N>, <Up>+4.30 pts</Up> open. Trailing the stop above each new lower high.</p>,
  },
  {
    time: "3:06 PM", ch: "positions", tone: "win", title: <>✅ Closed · <Up>+5.73 pts</Up></>,
    fields: [["In → out", "758.12 → 752.39"], ["Held", "3 h 28 min"], ["Why out", "Bounce off day low"]],
    thought: "Day low printed at 750.36 at 2:52. Price is bouncing, so I'm taking what the trend gave.",
  },
  {
    time: "4:05 PM", ch: "recap", tone: "brief", title: "📊 End of day · Fri Oct 30",
    body: (
      <>
        <p>SPY <N>761.38 → 755.69</N> (−0.75%), range <N>11.10</N> pts. Trend day down, as the premarket brief flagged.</p>
        <p className="mt-1.5 font-semibold text-white">Paper positions: 3 · 2 wins, 1 loss · <Up>+6.70 SPY pts</Up></p>
        <table className="mt-1 w-full font-mono text-[12px] tabular-nums">
          <tbody>
            {[["10:03 Bear 760.29 → 758.06", "+2.23", true], ["10:36 Bear 758.48 → 759.74", "−1.26", false], ["11:38 Bear 758.12 → 752.39", "+5.73", true]].map(([l, r, up]) => (
              <tr key={l as string} className="border-b border-white/[0.05]">
                <td className="py-0.5 pr-2">{l}</td>
                <td className={`py-0.5 text-right font-semibold ${up ? "text-[#10B981]" : "text-[#F87171]"}`}>{r}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-1.5"><b className="text-white">What went wrong:</b> trade 2 lost 0.41 pts more than planned on a fast bar.</p>
        <p className="mt-1.5 text-[11px] text-white/40">Paper account results in SPY points, not option profit. Past results don&apos;t predict future results. Not financial advice.</p>
      </>
    ),
  },
];

export const COUNTS = MESSAGES.reduce<Record<Channel, number>>(
  (c, m) => ({ ...c, [m.ch]: c[m.ch] + 1 }),
  { all: MESSAGES.length, premarket: 0, thoughts: 0, positions: 0, recap: 0 },
);

function Embed({ m }: { m: Msg }) {
  return (
    <div className="mt-1.5 grid max-w-[540px] gap-2 rounded border-l-4 bg-black/30 px-3.5 py-2.5 text-[13.5px] leading-snug text-[#dbdee1]" style={{ borderLeftColor: BAR[m.tone] }}>
      <div className="text-[14.5px] font-bold text-white">
        {m.title}
        {m.grade && (
          <span className={`ml-2 inline-block rounded px-1.5 py-px align-[1px] font-mono text-[11px] font-semibold text-[#0a0d09] ${m.grade === "A" ? "bg-[#C1FF72]" : "bg-white/70"}`}>
            {m.grade}
          </span>
        )}
      </div>
      {m.sub && <p className="-mt-1.5 text-[12.5px] text-white/50">{m.sub}</p>}
      {m.body && <div>{m.body}</div>}
      {m.fields && (
        <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
          {m.fields.map(([k, v]) => (
            <div key={k} className="min-w-0">
              <dt className="text-[11.5px] font-bold text-white/85">{k}</dt>
              <dd className="font-mono text-[12.5px] tabular-nums text-white">{v}</dd>
            </div>
          ))}
        </dl>
      )}
      {m.checks && (
        <ul className="grid gap-0.5 text-[12.5px]">
          {m.checks.map(([ok, t]) => (
            <li key={t} className={ok ? "" : "text-white/35"}>{ok ? "✅" : "⬜"} {t}</li>
          ))}
        </ul>
      )}
      {m.thought && (
        <p className="rounded bg-black/25 px-2.5 py-1.5 text-[12.5px]">
          <span className="font-semibold text-[#C1FF72]">Robot thought: </span>{m.thought}
        </p>
      )}
      {m.paper && <p className="text-[10.5px] text-white/35">Paper account · information only, not a trade instruction</p>}
    </div>
  );
}

export function DiscordReplay({ channel, onChannel }: { channel: Channel; onChannel: (c: Channel) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const shown = MESSAGES.filter((m) => channel === "all" || m.ch === channel);
  const name = CHANNELS.find((c) => c.id === channel)?.name;

  // Messages arrive one after another the first time the window scrolls in.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    document.documentElement.classList.add("v2-js");
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.dataset.in = "";
      io.disconnect();
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="dr-feed overflow-hidden rounded-2xl border border-white/[0.08] bg-[#313338]/[0.22] shadow-[0_30px_120px_-30px_rgba(193,255,114,0.25)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-black/30 px-4 py-2.5">
        <span className="font-mono text-[12px] text-white/70"><span className="text-white/30">#</span> {name}</span>
        <span className="ml-auto rounded bg-[#C1FF72]/10 px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-[#C1FF72]/80">REAL PAPER DAY · OCT 30</span>
      </div>
      <div role="group" aria-label="Channels" className="flex gap-1.5 overflow-x-auto border-b border-white/[0.06] px-3 py-2 lg:hidden">
        {CHANNELS.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={channel === c.id}
            onClick={() => onChannel(c.id)}
            className="shrink-0 rounded-full px-3 py-1 text-[12px] text-white/55 transition-colors aria-pressed:bg-[#C1FF72] aria-pressed:font-semibold aria-pressed:text-[#0a0d09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1FF72]"
          >
            {c.short}
          </button>
        ))}
      </div>
      <div className="h-[560px] overflow-y-auto overscroll-contain py-2 md:h-[640px]" tabIndex={0} aria-label={`#${name} messages`}>
        {shown.map((m, i) => (
          <article key={`${m.time}-${i}`} className="dr-msg flex gap-3 px-4 py-2.5 hover:bg-black/10" style={{ "--d": `${Math.min(i, 8) * 0.12}s` } as React.CSSProperties}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C1FF72]/30 bg-[#0a0d09]">
              <SPYPivotMark size={18} color="#C1FF72" badge={false} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-[14.5px] font-semibold text-[#C1FF72]">SPY Pivot Pro</span>
                <span className="rounded bg-[#5865F2] px-1 py-px text-[9px] font-semibold text-white">BOT</span>
                <span className="text-[11px] text-white/35">{m.time}</span>
                {channel === "all" && <span className="font-mono text-[11px] text-white/30">#{CHANNELS.find((c) => c.id === m.ch)?.name}</span>}
              </div>
              <Embed m={m} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
