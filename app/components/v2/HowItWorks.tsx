import { ScanLine, Send, Target } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";

// Section 04: three steps, joined by a rail on desktop.

const STEPS = [
  { icon: ScanLine, title: "The system scans SPY", body: "All session: pivots, order flow, momentum and market context." },
  { icon: Send, title: "It alerts you in Discord", body: "Every alert graded and explained, the moment it fires." },
  {
    icon: Target,
    title: "You trade smarter",
    body: "Time your entries, avoid weak setups, and know what the system sees before you click buy. You're always in control of your own account.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-20 border-y border-white/[0.06] bg-[#0a0d09]/60 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="How it works" title={<>Scan. Alert. <span className="text-[#C1FF72]">You decide.</span></>} />
        <div role="list" className="relative mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-[#C1FF72]/50 via-[#C1FF72]/20 to-transparent md:block" />
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <div role="listitem" className="relative">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#C1FF72]/40 bg-[#040503]">
                  <Icon className="h-5 w-5 text-[#C1FF72]" strokeWidth={1.6} />
                </div>
                <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-white/35">STEP {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {title}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/55">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
