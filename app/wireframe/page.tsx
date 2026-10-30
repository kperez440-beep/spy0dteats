import type { Metadata } from "next";
import { Geist } from "next/font/google";

// Structure-only wireframe of the new homepage (copy from docs/COPY_DRAFT.md).
// Grey boxes stand in for visuals; the real design replaces this page once approved.

const geist = Geist({ subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Wireframe · SPY Pivot Pro",
  robots: { index: false, follow: false },
};

const WHOP = "#"; // Whop product URL goes here

function Label({ n, name }: { n: string; name: string }) {
  return (
    <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[#C1FF72]/70">
      {n} · {name}
    </div>
  );
}

function Section({ id, n, name, children }: { id?: string; n: string; name: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-b border-dashed border-white/10 px-5 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Label n={n} name={name} />
        {children}
      </div>
    </section>
  );
}

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-6 text-center font-mono text-xs text-white/40 ${className}`}>
      {label}
    </div>
  );
}

function Cta({ children, ghost = false }: { children: React.ReactNode; ghost?: boolean }) {
  return (
    <a
      href={WHOP}
      className={
        ghost
          ? "inline-block rounded-full border border-white/25 px-6 py-3 text-sm text-white/80"
          : "inline-block rounded-full bg-[#C1FF72] px-6 py-3 text-sm font-semibold text-[#081c0e]"
      }
    >
      {children}
    </a>
  );
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className={`${geist.className} mb-8 text-3xl font-semibold tracking-tight md:text-5xl`}>{children}</h2>
);

const features = [
  ["Alert quality grading", "Every alert graded Strong / Decent / Weak, from a study of 1,800+ real alerts across 84 trading days."],
  ["Market mood", "Trend, chop, compression, expansion, opening drive: know what kind of day it is before you trade it."],
  ["Chop protection", "Knows when not to trade, and tells you when it's standing aside."],
  ["Don't-chase check", "Flags when price has already run too far from the alert."],
  ["Macro calendar", "FOMC, CPI and jobs-report days flagged before they move the market."],
  ["VIX fear gauge", "Reads whether the market is calm or stressed."],
];
const moreFeatures = [
  ["Timeframe alignment", "Short- and higher-timeframe trends must agree before a setup is called strong."],
  ["Premarket news scan", "High-impact headlines flagged before the bell."],
  ["Two-signal confirmation", "Two independent alert engines; extra conviction when both agree."],
  ["Pattern library", "Pivot reclaims, moving-average retests, early reversals, opening-range setups."],
];

const faqs = [
  ["What exactly do I get?", "Live SPY alerts, the robot's reasoning, daily positions, a premarket brief and a recap, all in Discord."],
  ["How does it help my trading?", "It flags setups as they form, grades them Strong / Decent / Weak, and explains why. That helps you time entries, skip weak setups, and make informed decisions instead of trading on impulse."],
  ["Does the system trade real money?", "Not yet. It paper trades (simulated) every session, and the positions we share are paper positions. We'll say so clearly if that ever changes."],
  ["Does it trade for me?", "No. Alerts are information. You decide whether to place any trade in your own account."],
  ["Is this financial advice?", "No. See the disclaimer below."],
  ["What experience do I need?", "You should already understand SPY options and 0DTE risk. This is not a beginner course."],
  ["Can I get access to the automated system?", "Not yet. Join the waitlist; members get first access."],
  ["How do I cancel?", "Anytime, in one click through Whop."],
  ["Telegram?", "Coming soon. Discord first."],
];

export default function Wireframe() {
  return (
    <div className="min-h-screen bg-[#040503] text-[#EEF0F5]">
      {/* Reviewer banner */}
      <div className="sticky top-0 z-50 bg-[#C1FF72] px-4 py-2 text-center font-mono text-xs text-[#081c0e]">
        WIREFRAME: layout and copy only. Grey boxes = visuals to be designed.
      </div>

      {/* 00 Font comparison */}
      <Section n="00" name="Headline font: pick one">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 p-8">
            <div className="mb-4 font-mono text-xs text-white/50">A · IBM Plex Sans (current)</div>
            <p className="text-4xl font-semibold leading-tight tracking-tight" style={{ fontFamily: "var(--font-sans)" }}>
              A trading robot built for SPY. Now you can watch it think.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-8">
            <div className="mb-4 font-mono text-xs text-white/50">B · Geist (proposed)</div>
            <p className={`${geist.className} text-4xl font-semibold leading-tight tracking-tight`}>
              A trading robot built for SPY. Now you can watch it think.
            </p>
          </div>
        </div>
      </Section>

      {/* 01 Nav */}
      <Section n="01" name="Nav (sticky)">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 px-5 py-4">
          <span className="font-semibold">▼ SPY Pivot Pro</span>
          <nav className="flex flex-wrap gap-5 text-sm text-white/60">
            <a href="#get">Alerts</a><a href="#how">How it works</a><a href="#system">The System</a><a href="#faq">FAQ</a>
          </nav>
          <Cta>Join on Whop</Cta>
        </div>
      </Section>

      {/* 02 Hero */}
      <Section n="02" name="Hero: full-screen cinematic video / 3D (Williams feel)">
        <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/20">
          <Placeholder label="BACKGROUND: slow cinematic 3D/video loop (robot / SPY chart / pivot mark)" className="absolute inset-0 rounded-none border-0" />
          <div className="relative px-6 py-24 md:px-14 md:py-32">
            <h1 className={`${geist.className} max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-7xl`}>
              A trading robot built for SPY. Now you can watch it think.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70">
              An automated system built to trade SPY 0DTE options. Get its alerts, its reasoning, and its positions
              live in Discord, so you can find better entries and make informed decisions as a SPY day trader.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta>Get the Alerts: $19/mo founding price</Cta>
              <Cta ghost>See a sample alert ↓</Cta>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[["Since 2024", "alerts on my own trades"], ["6+ months", "of system testing"], ["1,800+", "historical alerts studied"], ["SPY 0DTE", "one market, mastered"]].map(([a, b]) => (
            <div key={a} className="rounded-xl border border-white/10 p-4">
              <div className="font-mono text-xl text-[#C1FF72]">{a}</div>
              <div className="text-xs text-white/50">{b}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 03 What you get */}
      <Section id="get" n="03" name="What you get: alternating image/text blocks (Deepbook feel)">
        {[
          ["ALERTS", "Pivot and order-flow alerts as they happen. Each one is graded Strong / Decent / Weak, with the reasons. You also get a heads-up when a setup is forming, then a follow-up when it confirms or fades."],
          ["THE ROBOT'S THOUGHTS", "Most alert services tell you what. This one tells you why. The system explains what it's watching, which setups it's skipping, and why. You can use it to sharpen your own read of the tape."],
          ["DAILY POSITIONS", "What the system entered, trimmed, stopped and exited on its paper account, with entry, stop and target levels. No hiding the losers."],
        ].map(([t, d], i) => (
          <div key={t} className={`mb-10 grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <Placeholder label={`ART: collage-style visual for ${t}`} className="aspect-[4/3]" />
            <div>
              <div className="mb-3 font-mono text-sm tracking-widest text-[#C1FF72]">{t}</div>
              <p className="text-lg text-white/75">{d}</p>
            </div>
          </div>
        ))}
      </Section>

      {/* 03b Features */}
      <Section n="03b" name="Under the hood: feature grid">
        <H2>Everything it checks before it says a word.</H2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([t, d]) => (
            <div key={t} className="rounded-xl border border-white/10 p-6">
              <div className="mb-3 h-8 w-8 rounded-md border border-dashed border-white/25" />
              <div className="mb-2 font-semibold">{t}</div>
              <p className="text-sm text-white/60">{d}</p>
            </div>
          ))}
        </div>
        <details className="mt-6">
          <summary className="cursor-pointer text-sm text-[#C1FF72]">See everything it checks →</summary>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {moreFeatures.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-white/10 p-5">
                <div className="mb-1 font-semibold">{t}</div>
                <p className="text-sm text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </details>
      </Section>

      {/* 04 How it works */}
      <Section id="how" n="04" name="How it works: three steps">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["The system scans SPY", "All session: pivots, order flow, momentum and market context."],
            ["It sends an alert to Discord", "Graded and explained."],
            ["You trade smarter", "Time your entries, avoid weak setups, and know what the system sees before you click buy. You're always in control of your own account."],
          ].map(([t, d], i) => (
            <div key={t} className="rounded-xl border border-white/10 p-6">
              <div className="mb-4 font-mono text-3xl text-[#C1FF72]">0{i + 1}</div>
              <div className="mb-2 font-semibold">{t}</div>
              <p className="text-sm text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 05 A day with SPY Pivot Pro */}
      <Section n="05" name="A day with SPY Pivot Pro: timeline + sample alert">
        <H2>A day inside the machine.</H2>
        <div className="grid gap-8 md:grid-cols-2">
          <ol className="space-y-4 border-l border-white/15 pl-6">
            {[
              ["~9:00", "Premarket brief: key levels, overnight context, the robot's bias"],
              ["9:30–4:00", "Live alerts: graded, explained, forming → confirmed / faded"],
              ["9:30–4:00", "Chop warnings: “The system is standing aside.”"],
              ["9:30–4:00", "Robot's thoughts + position updates"],
              ["~4:15", "Daily recap: what fired, what worked, what didn't"],
            ].map(([t, d]) => (
              <li key={t + d}>
                <div className="font-mono text-xs text-[#C1FF72]">{t} ET</div>
                <div className="text-white/75">{d}</div>
              </li>
            ))}
          </ol>
          <div id="sample" className="rounded-xl border border-white/10 bg-[#0a0d09] p-5 font-mono text-[13px] leading-relaxed">
            <div className="mb-3 text-xs text-white/40"># alerts · Discord mockup</div>
            <div>🟢 <b>BULL ALERT</b> · SPY 582.40 · 15M</div>
            <div>💪 Quality: <span className="text-[#C1FF72]">STRONG</span></div>
            <div className="pl-5 text-white/60">✓ All timeframes agree ✓ Healthy volume ✓ Calm market</div>
            <div>📊 Market mood: Opening Drive · VIX calm</div>
            <div>🎯 Watching: entry zone 582.30–582.60 · invalidation 581.80</div>
            <div>⚠️ Don&apos;t chase above 583.10</div>
            <div className="text-white/70">🧠 “Clean reclaim of the pivot with volume behind it. This is the kind of setup I take.”</div>
            <div className="mt-3 text-[11px] text-white/30">Illustrative example. Replaced with a real alert before launch.</div>
          </div>
        </div>
      </Section>

      {/* 05b Founder */}
      <Section n="05b" name="Founder: built by a trader who codes (no photo)">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <Placeholder label="VISUAL: abstract / silhouette / desk-at-night mood (no face)" className="aspect-square" />
          <blockquote className="space-y-4 text-lg text-white/75">
            <p>I started trading options in 2020. It&apos;s been a roller coaster, like it is for most of us chasing consistency.</p>
            <p>So I built alerts to help me trade better. Then I automated them, so I could stop staring at every candle and trade with some peace of mind. In 2026 I decided to turn it into a real system, and I&apos;ve been building it every day since: one that watches every pivot, grades every setup, and never gets tired or emotional.</p>
            <p>Along the way, the laptop it all lived on died. I pulled the drive, recovered every line, and kept building.</p>
            <p>Today it&apos;s the second set of eyes on every SPY trade I take. It tells me when a setup is forming, whether it&apos;s worth taking, and why. That&apos;s what I&apos;m opening up to you: alerts that help you find better entries and make informed decisions as a SPY day trader, instead of guessing.</p>
            <p>The system itself is still paper trading while I keep sharpening it, and full access to it comes later. The alerts are ready now.</p>
            <footer className="font-mono text-[#C1FF72]">— kevnbuffet</footer>
          </blockquote>
        </div>
      </Section>

      {/* 06 Spec table */}
      <Section id="system" n="06" name="The System: spec table (Deepbook feel)">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <tbody>
              {[
                ["Instrument", "SPY options (0DTE focus)"],
                ["Alerts in use since", "2024, on the founder's own trades"],
                ["Full system in development since", "2026"],
                ["Testing", "6+ months of historical replay and paper trading"],
                ["Current status", "Paper trading daily. No real-money trading yet"],
                ["Research base", "1,800+ historical alerts studied for alert quality grading"],
                ["Built by", "A trader who codes"],
                ["Delivery", "Discord (Telegram coming soon)"],
                ["Full system access", "Not yet available. Join the waitlist"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-white/10">
                  <td className="py-4 pr-6 font-mono text-xs uppercase tracking-wider text-white/45">{k}</td>
                  <td className="py-4">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 07 Pricing */}
      <Section n="07" name="Pricing">
        <div className="mx-auto max-w-md rounded-2xl border border-[#C1FF72]/40 p-8">
          <div className="font-mono text-xs uppercase tracking-widest text-[#C1FF72]">Founding Member · first 100</div>
          <div className={`${geist.className} my-4 text-6xl font-bold`}>$19<span className="text-xl text-white/50">/mo</span></div>
          <p className="mb-6 text-sm text-white/60">Locked in for as long as you stay subscribed.</p>
          <ul className="mb-8 space-y-2 text-sm">
            {["All live alerts with quality grades", "The robot's thoughts", "Daily positions", "Premarket brief and daily recap", "Members' Discord"].map((x) => (
              <li key={x}>✓ {x}</li>
            ))}
          </ul>
          <Cta>Become a Founding Member on Whop</Cta>
          <p className="mt-4 text-xs text-white/40">Regular price after founding spots fill: $29/month. Cancel anytime through Whop.</p>
        </div>
      </Section>

      {/* 07b Roadmap */}
      <Section n="07b" name="Roadmap">
        <H2>SPY first. Not SPY only.</H2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["✅ Live", "SPY alerts, quality grading, the robot's thoughts, daily positions"],
            ["🔜 Next", "Telegram delivery · sector heat map: which sectors are leading or lagging SPY today"],
            ["🧭 Planned", "QQQ · NQ futures · high-volume names like NVDA"],
            ["🔒 Later", "Access to the automated system itself"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-white/10 p-5">
              <div className="mb-2 font-semibold">{t}</div>
              <p className="text-sm text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 08 Waitlist */}
      <Section n="08" name="Waitlist: full system access (email list)">
        <div className="mx-auto max-w-xl text-center">
          <H2>The system isn&apos;t public yet. Members hear first.</H2>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="you@email.com" className="flex-1 rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm" />
            <button type="button" className="rounded-full bg-[#C1FF72] px-6 py-3 text-sm font-semibold text-[#081c0e]">Join the waitlist</button>
          </form>
          <p className="mt-3 text-xs text-white/40">Not wired up yet; the email tool is chosen at build time.</p>
        </div>
      </Section>

      {/* 09 FAQ */}
      <Section id="faq" n="09" name="FAQ">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map(([q, a]) => (
            <details key={q} className="py-4">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-3 text-white/65">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* 10 Final CTA */}
      <Section n="10" name="Final CTA">
        <div className="text-center">
          <H2>Watch the machine work.</H2>
          <Cta>Get the Alerts on Whop</Cta>
        </div>
      </Section>

      {/* 11 Footer */}
      <Section n="11" name="Footer">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <span>▼ SPY Pivot Pro · <span className="text-[#C1FF72]">a Fortitud Capital product 🌳</span></span>
          <div className="flex flex-wrap gap-5 text-sm text-white/60">
            <a href={WHOP}>Whop</a><a href="#">Discord</a><a href="https://instagram.com/spypivotpro">Instagram @spypivotpro</a><a href="#">Terms</a><a href="#">Privacy</a>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-white/40">
          SPY Pivot Pro alerts are for informational and educational purposes only and are not financial, investment, or
          trading advice. Options trading involves substantial risk and is not suitable for all investors; 0DTE options can
          lose their entire value within a single session. Any historical, backtested, or simulated results are hypothetical,
          have inherent limitations, and do not guarantee future results. Fortitud Capital is not a registered investment
          adviser or broker-dealer. You are solely responsible for your own trading decisions.
        </p>
      </Section>
    </div>
  );
}
