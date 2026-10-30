import { Check } from "lucide-react";
import { LINKS } from "./links";
import { Reveal, SectionHead } from "./Reveal";

// Section 07: single founding-member plan. No fake scarcity counter; the cap is stated plainly.

const INCLUDED = [
  "All live alerts with quality grades",
  "The robot's thoughts",
  "Daily positions",
  "Premarket brief and daily recap",
  "Members' Discord",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-20 px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center text-center">
          <SectionHead kicker="Pricing" title={<>One plan. <span className="text-white/45">Founding price.</span></>} />
        </div>
        <Reveal className="mx-auto mt-14 max-w-xl md:mt-20">
          <div className="relative rounded-[28px] p-px [background:linear-gradient(160deg,rgba(193,255,114,0.55),rgba(193,255,114,0.05)_45%,rgba(255,255,255,0.06))]">
            <div className="relative overflow-hidden rounded-[27px] bg-[#0a0d09] p-7 md:p-10">
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C1FF72]/10 blur-3xl" />
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>Founding Member</h3>
                <span className="rounded-full border border-[#C1FF72]/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#C1FF72]">
                  First 100 members
                </span>
              </div>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-6xl font-bold tracking-[-0.04em] text-white md:text-7xl" style={{ fontFamily: "var(--font-heading)" }}>$19</span>
                <span className="pb-2 text-white/45">/ month</span>
              </div>
              <p className="mt-3 text-[15px] text-white/55">Locked in for as long as you stay subscribed.</p>
              <ul className="mt-8 space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-white/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C1FF72]/15">
                      <Check className="h-3 w-3 text-[#C1FF72]" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={LINKS.whop}
                className="group mt-10 flex items-center justify-center gap-2 rounded-full bg-[#C1FF72] px-7 py-4 text-[15px] font-semibold text-[#081c0e] shadow-[0_0_40px_rgba(193,255,114,0.25)] transition hover:-translate-y-0.5 hover:bg-[#D9FFA0]"
              >
                Become a Founding Member on Whop
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <p className="mt-5 text-center font-mono text-[11px] leading-relaxed text-white/40">
                $29/month after founding spots fill · Cancel anytime through Whop
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
