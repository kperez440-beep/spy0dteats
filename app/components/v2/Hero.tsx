import { Fragment } from "react";
import { MarketCanvas } from "./MarketCanvas";
import { LINKS } from "./links";

const HEADLINE = [["A", "trading", "robot", "built", "for", "SPY."], ["Now", "you", "can", "watch", "it", "think."]];
const STATS = [
  ["Since 2024", "Alerts on the founder's own trades"],
  ["6+ months", "Of full-system testing"],
  ["1,800+", "Historical alerts studied"],
  ["SPY 0DTE", "One market. Fully focused."],
];

const delay = (s: number) => ({ animationDelay: `${s}s` });

export function Hero() {
  let word = 0;
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#040503]">
      {/* Background: live market field + legibility shading */}
      <MarketCanvas className="absolute inset-0 h-full w-full" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_70%,rgba(4,5,3,0.92)_0%,rgba(4,5,3,0.55)_40%,transparent_75%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#040503] via-[#040503]/70 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-10 pt-28 md:px-8 md:pb-14">
        <div className="v2-rise mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-[#C1FF72]/80" style={delay(0.05)}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C1FF72] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C1FF72]" />
          </span>
          Automated SPY 0DTE system<span className="hidden sm:inline">&nbsp;· by Fortitud Capital</span>
        </div>

        <h1
          className="max-w-5xl text-[clamp(2.4rem,6vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {HEADLINE.map((line, li) => (
            <span key={li} className={`block ${li === 1 ? "text-white/45" : ""}`}>
              {line.map((w) => {
                const i = word++;
                // Real spaces between the clipped word boxes so the line can wrap.
                return (
                  <Fragment key={w + i}>
                    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                      <span className="v2-word" style={delay(0.15 + i * 0.05)}>
                        {w === "think." ? <span className="text-[#C1FF72]">{w}</span> : w}
                      </span>
                    </span>{" "}
                  </Fragment>
                );
              })}
            </span>
          ))}
        </h1>

        <p className="v2-rise mt-7 max-w-xl text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-white/60" style={delay(0.75)}>
          An automated system built to trade SPY 0DTE options. Get its alerts, its reasoning, and its positions live in
          Discord, so you can find better entries and make informed decisions as a SPY day trader.
        </p>

        <div className="v2-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5" style={delay(0.9)}>
          <a
            href={LINKS.whop}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C1FF72] px-7 py-4 text-[15px] font-semibold text-[#081c0e] shadow-[0_0_40px_rgba(193,255,114,0.28)] transition hover:-translate-y-0.5 hover:bg-[#D9FFA0] hover:shadow-[0_0_60px_rgba(193,255,114,0.5)]"
          >
            Get the Alerts · $19/mo founding price
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#sample" className="inline-flex items-center justify-center gap-2 px-2 py-3 font-mono text-[13px] text-white/55 transition hover:text-white">
            See a sample alert <span aria-hidden>↓</span>
          </a>
        </div>

        <dl className="v2-rise mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4" style={delay(1.05)}>
          {STATS.map(([v, l]) => (
            <div key={v} className="bg-[#040503]/85 px-5 py-4 backdrop-blur-sm">
              <dt className="sr-only">{l}</dt>
              <dd className="font-mono text-lg font-medium text-[#C1FF72] md:text-xl">{v}</dd>
              <dd className="mt-1 text-xs text-white/45">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
