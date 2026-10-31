import type { Metadata } from "next";
import Link from "next/link";
import { geist } from "@/app/fonts";
import { Footer } from "@/app/components/v2/Footer";
import { LINKS } from "@/app/components/v2/links";

export const metadata: Metadata = {
  title: "Privacy Policy | SPY Pivot Pro",
  description: "How SPY Pivot Pro handles your information.",
};

const UPDATED = "October 31, 2026";

const SECTIONS: [string, string[]][] = [
  [
    "Who we are",
    [
      "SPY Pivot Pro is a product of Fortitud Capital. This policy covers spypivotpro.com. Memberships are sold and managed through Whop, and member alerts are delivered through Discord.",
    ],
  ],
  [
    "What we collect",
    [
      "Waitlist: if you join the waitlist, we collect your email address so we can tell you when access to the automated system opens.",
      "Purchases: payments are processed by Whop. We don't receive or store your card details. Whop shares with us what's needed to manage your membership, such as your name, email and membership status.",
      "Discord: when you join the members' server, Discord and Whop link your Discord account to your membership so the right role can be assigned.",
      "Basic site data: our hosting provider may log standard technical information such as IP address, browser type and pages visited, for security and performance.",
    ],
  ],
  [
    "How we use it",
    [
      "To run the waitlist and email you about access to the system and important product updates.",
      "To provide and manage your membership.",
      "To keep the site secure and working.",
      "We don't sell your personal information.",
    ],
  ],
  [
    "Third parties",
    [
      "We rely on a small number of service providers: Whop (payments and memberships), Discord (member community and alerts), our email provider (waitlist), and our hosting provider. Each handles data under its own privacy policy.",
    ],
  ],
  [
    "Your choices",
    [
      "Every waitlist email includes an unsubscribe link. You can also ask us to delete your waitlist email at any time.",
      "You can cancel your membership anytime through Whop.",
    ],
  ],
  [
    "Contact",
    [
      "Questions about this policy or your data: message us on Instagram at @spypivotpro.",
    ],
  ],
];

export default function PrivacyPage() {
  return (
    <div className={`${geist.variable} min-h-screen bg-[#040503] text-[#EEF0F5]`}>
      <header className="border-b border-white/[0.06] px-5 py-5 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="font-mono text-xs text-white/50 transition hover:text-white">← Back to SPY Pivot Pro</Link>
        </div>
      </header>
      <main className="px-5 py-16 md:px-8 md:py-24">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] font-bold tracking-[-0.03em] text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Privacy Policy
          </h1>
          <p className="mt-3 font-mono text-xs text-white/40">Last updated {UPDATED}</p>
          {SECTIONS.map(([title, paras]) => (
            <section key={title} className="mt-12">
              <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>{title}</h2>
              {paras.map((p) => (
                <p key={p} className="mt-3 text-[15px] leading-relaxed text-white/60">{p}</p>
              ))}
            </section>
          ))}
          <p className="mt-12 text-[15px] text-white/60">
            Ready to join?{" "}
            <a href={LINKS.whop} className="text-[#C1FF72] underline decoration-[#C1FF72]/40 underline-offset-4">Get the alerts on Whop</a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
