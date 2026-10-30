"use client";
import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

// Section 08: email waitlist for full-system access. The list belongs to Kevin,
// independent of Whop/Discord. The email provider isn't chosen yet: set
// NEXT_PUBLIC_WAITLIST_ENDPOINT to a form endpoint that accepts a JSON { email } POST.
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

type State = "idle" | "sending" | "done" | "error" | "offline";

export function Waitlist() {
  const [state, setState] = useState<State>("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    if (!ENDPOINT) return setState("offline");
    setState("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  const message = {
    idle: "",
    sending: "",
    done: "You're on the list. We'll email you first when access opens.",
    error: "Something went wrong. Please try again in a minute.",
    offline: "The waitlist opens at launch. Check back soon.",
  }[state];

  return (
    <section id="waitlist" className="relative scroll-mt-20 px-5 pb-24 md:px-8 md:pb-32">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a0d09] px-6 py-12 text-center md:px-14 md:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(193,255,114,0.10),transparent_60%)]" />
          <p className="relative font-mono text-[11px] uppercase tracking-[0.28em] text-[#C1FF72]/80">Full system access</p>
          <h2
            className="relative mx-auto mt-4 max-w-2xl text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The automated system isn&apos;t public yet. <span className="text-white/45">Members hear first.</span>
          </h2>
          {state === "done" ? (
            <p className="relative mt-8 font-mono text-sm text-[#10B981]">✓ {message}</p>
          ) : (
            <form onSubmit={submit} className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="waitlist-email" className="sr-only">Email address</label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-black/40 px-5 py-3.5 text-[15px] text-white placeholder:text-white/30 outline-none transition focus:border-[#C1FF72]/60"
              />
              <button
                type="submit"
                disabled={state === "sending"}
                className="rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#040503] transition hover:bg-[#C1FF72] disabled:opacity-60"
              >
                {state === "sending" ? "Joining…" : "Join the waitlist"}
              </button>
            </form>
          )}
          {message && state !== "done" && <p className="relative mt-4 font-mono text-xs text-white/50">{message}</p>}
          <p className="relative mt-5 text-xs text-white/35">No spam. Unsubscribe anytime.</p>
        </div>
      </Reveal>
    </section>
  );
}
