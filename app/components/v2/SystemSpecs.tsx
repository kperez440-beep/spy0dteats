import { Reveal, SectionHead } from "./Reveal";

// Section 06: Deepbook-style spec sheet. Status rows are deliberately plain about paper trading.

const SPECS: [string, string, string?][] = [
  ["Instrument", "SPY options (0DTE focus)"],
  ["Alerts in use since", "2024, on the founder's own trades"],
  ["Full system in development since", "2026"],
  ["Testing", "6+ months of historical replay and paper trading"],
  ["Current status", "Paper trading daily. No real-money trading yet", "status"],
  ["Research base", "1,800+ historical alerts studied for alert quality grading"],
  ["Built by", "A trader who codes"],
  ["Delivery", "Discord (Telegram coming soon)"],
  ["Full system access", "Not yet available. Join the waitlist", "waitlist"],
];

export function SystemSpecs() {
  return (
    <section id="system" className="relative scroll-mt-20 border-y border-white/[0.06] bg-[#0a0d09]/60 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHead
          kicker="The system"
          title={<>The spec sheet. <span className="text-white/45">No hype.</span></>}
          sub="What it is, where it stands today, and what it isn't yet."
        />
        <Reveal>
          <dl className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {SPECS.map(([k, v, kind]) => (
              <div key={k} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/40 sm:pt-0.5">{k}</dt>
                <dd className="text-[15px] text-white/85">
                  {kind === "status" && <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#F5C46B] align-middle" />}
                  {kind === "waitlist" ? (
                    <>
                      Not yet available.{" "}
                      <a href="#waitlist" className="text-[#C1FF72] underline decoration-[#C1FF72]/40 underline-offset-4 hover:decoration-[#C1FF72]">
                        Join the waitlist
                      </a>
                    </>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
