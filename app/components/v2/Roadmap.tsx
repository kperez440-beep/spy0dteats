import { Reveal, SectionHead } from "./Reveal";

// Section 07b: roadmap. Copy rule: statuses only, never dates or promises.

const STAGES = [
  { status: "Live", dot: "bg-[#10B981]", items: ["SPY alerts", "Quality grading", "The robot's thoughts", "Daily positions"] },
  { status: "Next", dot: "bg-[#C1FF72]", items: ["Telegram delivery", "Sector heat map: which sectors lead or lag SPY today"] },
  { status: "Planned", dot: "bg-white/40", items: ["QQQ", "NQ futures", "High-volume names like NVDA"] },
  { status: "Later", dot: "bg-white/20", items: ["Access to the automated system itself"] },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="What's next" title={<>SPY first. <span className="text-white/45">Not SPY only.</span></>} />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {STAGES.map((s, i) => (
            <Reveal key={s.status} delay={i * 0.08} className="h-full">
              <div className={`h-full rounded-2xl border p-6 ${i === 0 ? "border-[#10B981]/30 bg-[#10B981]/[0.04]" : "border-white/[0.07] bg-[#0a0d09]"}`}>
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                  <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                  {s.status}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className={`text-[15px] leading-snug ${i < 2 ? "text-white/85" : "text-white/50"}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
