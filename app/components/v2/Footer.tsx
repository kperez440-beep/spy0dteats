import { FortitudTreeSimple, SPYPivotMark } from "../Logo";
import { MarketCanvas } from "./MarketCanvas";
import { LINKS } from "./links";

// Sections 10 + 11: closing CTA over the market field, then footer and the required disclaimer.

export function FinalCta() {
  return (
    <section id="join" className="relative flex min-h-[70vh] items-center overflow-hidden border-t border-white/[0.06]">
      <MarketCanvas className="absolute inset-0 h-full w-full opacity-60" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(4,5,3,0.9)_0%,rgba(4,5,3,0.5)_45%,transparent_80%)]" />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-24 text-center md:px-8">
        <h2
          className="text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Watch the machine <span className="text-[#C1FF72]">work.</span>
        </h2>
        <a
          href={LINKS.whop}
          className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#C1FF72] px-8 py-4 text-[15px] font-semibold text-[#081c0e] shadow-[0_0_50px_rgba(193,255,114,0.3)] transition hover:-translate-y-0.5 hover:bg-[#D9FFA0]"
        >
          Get the Alerts on Whop
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <p className="mt-4 font-mono text-[11px] text-white/40">$19/mo founding price · first 100 members</p>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { label: "Whop", href: LINKS.whop },
  { label: "Discord", href: LINKS.discord },
  { label: "Instagram @spypivotpro", href: LINKS.instagram, external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#040503] px-5 pb-10 pt-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <SPYPivotMark size={24} color="#F7F6F1" badge={false} />
              <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>SPY Pivot Pro</span>
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs text-white/40">
              <FortitudTreeSimple size={14} color="#C1FF72" /> A Fortitud Capital product
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/55">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="transition hover:text-white"
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 max-w-5xl border-t border-white/[0.06] pt-8 text-[12px] leading-relaxed text-white/35">
          SPY Pivot Pro alerts are for informational and educational purposes only and are not financial, investment, or trading
          advice. Options trading involves substantial risk and is not suitable for all investors; 0DTE options can lose their
          entire value within a single session. Any historical, backtested, or simulated results are hypothetical, have inherent
          limitations, and do not guarantee future results. Fortitud Capital is not a registered investment adviser or
          broker-dealer. You are solely responsible for your own trading decisions.
        </p>
        <p className="mt-6 font-mono text-[11px] text-white/30">© {new Date().getFullYear()} Fortitud Capital. All rights reserved.</p>
      </div>
    </footer>
  );
}
