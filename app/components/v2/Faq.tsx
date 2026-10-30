import { Plus } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";

// Section 09: native <details> accordion, so it works without JavaScript.

const FAQS = [
  ["What exactly do I get?", "Live SPY alerts, the robot's reasoning, daily positions, a premarket brief and a recap, all in Discord."],
  [
    "How does it help my trading?",
    "It flags setups as they form, grades them Strong / Decent / Weak, and explains why. That helps you time entries, skip weak setups, and make informed decisions instead of trading on impulse.",
  ],
  [
    "Does the system trade real money?",
    "Not yet. It paper trades (simulated) every session, and the positions we share are paper positions. We'll say so clearly if that ever changes.",
  ],
  ["Does it trade for me?", "No. Alerts are information. You decide whether to place any trade in your own account."],
  ["Is this financial advice?", "No. See the disclaimer at the bottom of this page."],
  ["What experience do I need?", "You should already understand SPY options and 0DTE risk. This is not a beginner course."],
  ["Can I get access to the automated system?", "Not yet. Join the waitlist; members get first access."],
  ["How do I cancel?", "Anytime, in one click through Whop."],
  ["Telegram?", "Coming soon. Discord first."],
];

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20 border-t border-white/[0.06] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHead kicker="FAQ" title={<>Straight answers.</>} />
        <Reveal>
          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {FAQS.map(([q, a]) => (
              <details key={q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-medium text-white/90 transition hover:text-white [&::-webkit-details-marker]:hidden">
                  {q}
                  <Plus className="h-4 w-4 shrink-0 text-[#C1FF72] transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-[15px] leading-relaxed text-white/55">{a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
