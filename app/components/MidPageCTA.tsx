"use client";
import { motion } from "framer-motion";

export function MidPageCTA() {
  return (
    <section className="relative py-24 px-4 bg-[#050810]" id="mid-cta">
      <div className="max-w-2xl mx-auto text-center">

        {/* Top rule */}
        <motion.div
          className="h-px mb-16"
          style={{ background: "linear-gradient(to right, transparent, rgba(6,182,212,0.20), transparent)" }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
        >
          The infrastructure is live.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          className="text-slate-500 text-[15px] mb-10 leading-relaxed max-w-lg mx-auto"
        >
          Founding members access the intelligence terminal now —
          and shape every feature that ships next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary */}
          <a
            href="#founding"
            className="inline-flex items-center gap-2 font-bold rounded-full cursor-pointer"
            style={{
              background:  "#06B6D4",
              color:       "#030608",
              fontSize:    "14px",
              padding:     "13px 32px",
              fontFamily:  "var(--font-sans)",
              boxShadow:   "0 0 0 1px rgba(6,182,212,0.35), 0 4px 28px rgba(6,182,212,0.16)",
              transition:  "all 0.22s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#22D3EE";
              el.style.boxShadow  = "0 0 40px rgba(6,182,212,0.48), 0 0 0 1px rgba(6,182,212,0.9)";
              el.style.transform  = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#06B6D4";
              el.style.boxShadow  = "0 0 0 1px rgba(6,182,212,0.35), 0 4px 28px rgba(6,182,212,0.16)";
              el.style.transform  = "translateY(0)";
            }}
          >
            Request Early Access
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Secondary */}
          <a
            href="#platform"
            className="inline-flex items-center gap-1.5 cursor-pointer"
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "12px",
              letterSpacing: "0.06em",
              color:         "#374151",
              transition:    "color 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#374151"; }}
          >
            Explore the Platform
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          className="h-px mt-16"
          style={{ background: "linear-gradient(to right, transparent, rgba(30,45,61,0.6), transparent)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.3 }}
        />
      </div>
    </section>
  );
}
