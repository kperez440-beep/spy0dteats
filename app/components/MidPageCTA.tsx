"use client";
import { motion } from "framer-motion";

export function MidPageCTA() {
  return (
    <section className="relative py-24 px-4 bg-[#050810]" id="mid-cta">
      <div className="max-w-2xl mx-auto text-center">

        {/* Top rule */}
        <motion.div
          className="h-px mb-16"
          style={{ background: "linear-gradient(to right, transparent, rgba(240,180,41,0.25), transparent)" }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3"
        >
          You&apos;ve Seen How It Works.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.18 }}
          className="text-slate-500 text-[15px] mb-9 leading-relaxed"
        >
          See it live before public release.
        </motion.p>

        <motion.a
          href="#founding"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.24 }}
          className="inline-flex items-center gap-2 bg-[#F0B429] hover:bg-[#FFD060] text-[#050810] font-bold text-[14px] px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_28px_rgba(240,180,41,0.45)] hover:-translate-y-px cursor-pointer"
        >
          Request Founding Access
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.a>

        {/* Bottom rule */}
        <motion.div
          className="h-px mt-16"
          style={{ background: "linear-gradient(to right, transparent, rgba(30,45,61,0.8), transparent)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        />
      </div>
    </section>
  );
}
