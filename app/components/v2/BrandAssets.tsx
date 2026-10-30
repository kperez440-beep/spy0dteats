"use client";
import type { ReactNode } from "react";
import { SPYPivotMark } from "../Logo";
import { MarketCanvas } from "./MarketCanvas";
import { SampleAlert } from "./DayInside";
import { FEATURES } from "./FeatureGrid";

// Fixed-size frames for Whop / social graphics. Each frame is screenshotted by
// its id at 1:1 pixels, so sizes here are the exported image sizes.

const heading = { fontFamily: "var(--font-heading)" } as const;

function Frame({ id, w, h, children }: { id: string; w: number; h: number; children: ReactNode }) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-xs text-white/40">#{id} · {w}×{h}</p>
      <div id={id} className="relative overflow-hidden bg-[#040503]" style={{ width: w, height: h }}>
        {children}
      </div>
    </div>
  );
}

function Lockup({ size = 34 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <SPYPivotMark size={size} color="#F7F6F1" badge={false} />
      <span className="font-bold text-white" style={{ fontFamily: "var(--font-display)", fontSize: size * 0.8 }}>SPY Pivot Pro</span>
    </div>
  );
}

function Chips({ scale = 1 }: { scale?: number }) {
  return (
    <div className="flex flex-wrap gap-3" style={{ zoom: scale }}>
      {["Graded alerts", "The robot's thoughts", "Daily positions"].map((c) => (
        <span key={c} className="rounded-full border border-white/15 bg-black/50 px-4 py-2 font-mono text-[13px] text-white/75">{c}</span>
      ))}
      <span className="rounded-full border border-[#C1FF72]/40 bg-[#C1FF72]/10 px-4 py-2 font-mono text-[13px] text-[#C1FF72]">● Live in Discord</span>
    </div>
  );
}

const Fineprint = () => (
  <p className="font-mono text-[13px] text-white/35">Informational alerts · Not financial advice · System currently paper trading</p>
);

function Shade() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_60%,rgba(4,5,3,0.95)_0%,rgba(4,5,3,0.6)_40%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#040503] to-transparent" />
    </>
  );
}

export function BrandAssets() {
  return (
    <div className="p-10">
      {/* 16:9 product banner */}
      <Frame id="banner" w={1920} h={1080}>
        <MarketCanvas className="absolute inset-0 h-full w-full" />
        <Shade />
        <div className="relative flex h-full flex-col justify-between p-[110px]">
          <Lockup size={44} />
          <div>
            <p className="mb-8 font-mono text-[18px] uppercase tracking-[0.3em] text-[#C1FF72]/85">Automated SPY 0DTE system</p>
            <h1 className="text-[100px] font-bold leading-[0.98] tracking-[-0.035em] text-white" style={heading}>
              A trading robot<br />built for SPY.<br />
              <span className="text-white/45">Now you can watch it </span><span className="text-[#C1FF72]">think.</span>
            </h1>
            <div className="mt-12"><Chips scale={1.35} /></div>
          </div>
          <Fineprint />
        </div>
      </Frame>

      {/* 3:1 wide header */}
      <Frame id="banner-wide" w={1500} h={500}>
        <MarketCanvas className="absolute inset-0 h-full w-full" />
        <Shade />
        <div className="relative flex h-full flex-col justify-center px-[80px]">
          <Lockup size={30} />
          <h1 className="mt-7 text-[66px] font-bold leading-[1] tracking-[-0.035em] text-white" style={heading}>
            A trading robot built for SPY.<br />
            <span className="text-white/45">Now you can watch it </span><span className="text-[#C1FF72]">think.</span>
          </h1>
          <div className="mt-7"><Chips /></div>
        </div>
      </Frame>

      {/* Square icon */}
      <Frame id="icon" w={1024} h={1024}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(193,255,114,0.22),transparent_62%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <SPYPivotMark size={560} color="#C1FF72" badge={false} />
        </div>
      </Frame>

      {/* Gallery: sample alert */}
      <Frame id="gallery-alert" w={1920} h={1080}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(193,255,114,0.10),transparent_60%)]" />
        <div className="relative grid h-full grid-cols-[0.75fr_1.45fr] items-center gap-[60px] p-[110px]">
          <div>
            <p className="font-mono text-[18px] uppercase tracking-[0.3em] text-[#C1FF72]/85">01 · Alerts</p>
            <h2 className="mt-6 text-[92px] font-bold leading-[1] tracking-[-0.035em] text-white" style={heading}>
              Every alert. <span className="text-white/45">Graded and explained.</span>
            </h2>
            <p className="mt-8 max-w-[560px] text-[26px] leading-snug text-white/55">
              Quality grade, market mood, the zone it&apos;s watching, and the robot&apos;s own reasoning.
            </p>
          </div>
          <div style={{ zoom: 1.6 }}><SampleAlert /></div>
        </div>
        <div className="absolute bottom-[50px] left-[110px]"><p className="font-mono text-[13px] text-white/35">Illustrative example · Not financial advice</p></div>
      </Frame>

      {/* Gallery: the checklist */}
      <Frame id="gallery-checks" w={1920} h={1080}>
        <div className="relative flex h-full flex-col justify-center p-[110px]">
          <p className="font-mono text-[18px] uppercase tracking-[0.3em] text-[#C1FF72]/85">Under the hood</p>
          <h2 className="mt-6 text-[84px] font-bold leading-[1] tracking-[-0.035em] text-white" style={heading}>
            Everything it checks <span className="text-white/45">before it says a word.</span>
          </h2>
          <div className="mt-16 grid grid-cols-5 gap-5">
            {FEATURES.map(({ icon: Icon, title }) => (
              <div key={title} className="rounded-2xl border border-white/[0.08] bg-[#0a0d09] p-6">
                <div className="flex items-center justify-between">
                  <Icon className="h-8 w-8 text-[#C1FF72]" strokeWidth={1.6} />
                  <span className="font-mono text-[14px] text-[#10B981]">✓ OK</span>
                </div>
                <p className="mt-6 text-[22px] font-semibold leading-tight text-white" style={heading}>{title}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-mono text-[18px] text-white/45">
            <span className="text-[#C1FF72]">10</span> / 10 checks <span className="text-[#10B981]">· READY TO ALERT</span>
          </p>
        </div>
      </Frame>

      {/* Gallery: what's included */}
      <Frame id="gallery-included" w={1920} h={1080}>
        <MarketCanvas className="absolute inset-0 h-full w-full opacity-40" />
        <div className="absolute inset-0 bg-[#040503]/70" />
        <div className="relative flex h-full flex-col justify-center p-[110px]">
          <p className="font-mono text-[18px] uppercase tracking-[0.3em] text-[#C1FF72]/85">Every trading day, in Discord</p>
          <h2 className="mt-6 text-[92px] font-bold leading-[1] tracking-[-0.035em] text-white" style={heading}>
            From premarket <span className="text-white/45">to the closing bell.</span>
          </h2>
          <div className="mt-16 grid grid-cols-3 gap-6">
            {[
              ["~9:00 ET", "Premarket brief", "Key levels, overnight context, the robot's bias."],
              ["9:30 – 4:00", "Live alerts + thoughts", "Graded setups, chop warnings, and what it's skipping."],
              ["~4:15 ET", "Positions + recap", "Paper-account entries, stops, exits, and the day's review."],
            ].map(([t, title, body]) => (
              <div key={title} className="rounded-3xl border border-white/[0.08] bg-[#0a0d09]/90 p-9">
                <p className="font-mono text-[16px] text-white/40">{t}</p>
                <p className="mt-4 text-[34px] font-semibold text-white" style={heading}>{title}</p>
                <p className="mt-3 text-[21px] leading-snug text-white/55">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Frame>
    </div>
  );
}
