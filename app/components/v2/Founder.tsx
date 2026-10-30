import { Reveal } from "./Reveal";

// Section 05b: first-person founder story, signed with the handle (no photo by design).

const PARAGRAPHS = [
  "I started trading options in 2020. It's been a roller coaster, like it is for most of us chasing consistency.",
  "So I built alerts to help me trade better. Then I automated them, so I could stop staring at every candle and trade with some peace of mind. In 2026 I decided to turn it into a real system, and I've been building it every day since: one that watches every pivot, grades every setup, and never gets tired or emotional.",
  "Along the way, the laptop it all lived on died. I pulled the drive, recovered every line, and kept building.",
  "Today it's the second set of eyes on every SPY trade I take. It tells me when a setup is forming, whether it's worth taking, and why. That's what I'm opening up to you: alerts that help you find better entries and make informed decisions as a SPY day trader, instead of guessing.",
  "The system itself is still paper trading while I keep sharpening it, and full access to it comes later. The alerts are ready now.",
];

export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-36">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[#C1FF72]/[0.04] blur-3xl" />
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#C1FF72]/80">Built by a trader who codes</p>
          <p
            className="mt-6 text-[clamp(1.6rem,3.2vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            “I built the alerts I wished I had. <span className="text-white/45">Then I taught a machine to send them.”</span>
          </p>
        </Reveal>
        <div className="mt-10 space-y-5 border-l border-[#C1FF72]/25 pl-6 md:pl-8">
          {PARAGRAPHS.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-[16px] leading-[1.75] text-white/60 md:text-[17px]">{p}</p>
            </Reveal>
          ))}
          <Reveal>
            <p className="pt-2 font-mono text-sm text-[#C1FF72]">— kevnbuffet</p>
            <p className="mt-1 font-mono text-[11px] text-white/35">Founder, SPY Pivot Pro</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
