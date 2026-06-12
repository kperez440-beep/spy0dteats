"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

// ─── Shared card wrapper ──────────────────────────────────────────────────────
function BentoCard({
  category,
  name,
  desc,
  color,
  children,
  delay = 0,
  className = "",
}: {
  category: string;
  name: string;
  desc: string;
  color: string;
  children?: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group rounded-2xl border border-[#1E2D3D] bg-[#0A1220] p-5 overflow-hidden transition-all duration-400 hover:border-[#2A3A50] ${className}`}
      style={{
        boxShadow: "0 1px 0 rgba(255,255,255,0.02) inset",
      }}
      whileHover={{ y: -2 }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top, ${color}07, transparent 62%)` }}
        aria-hidden="true"
      />

      <p className="text-[8px] font-mono text-slate-600 tracking-[0.22em] uppercase mb-2">
        {category}
      </p>
      <h3 className="text-[17px] font-bold text-white leading-tight mb-1.5">{name}</h3>
      <p className="text-[12px] text-slate-500 leading-relaxed mb-4">{desc}</p>

      {children}
    </motion.div>
  );
}

// ─── Mini visualizations ──────────────────────────────────────────────────────

const MTF_ROWS = [
  { tf: "15M", dir: "BULL", pct: 84, color: "#10B981" },
  { tf: "30M", dir: "BULL", pct: 78, color: "#10B981" },
  { tf: "1H",  dir: "BULL", pct: 81, color: "#10B981" },
  { tf: "4H",  dir: "BULL", pct: 74, color: "#F0B429" },
];

function TrendViz() {
  return (
    <div className="flex flex-col gap-2 mt-1">
      {MTF_ROWS.map((row, i) => (
        <div key={row.tf} className="flex items-center gap-2.5">
          <span className="text-[9px] font-mono text-slate-600 w-7 shrink-0">{row.tf}</span>
          <span className="text-[9px] font-mono font-bold shrink-0" style={{ color: row.color }}>↑</span>
          <div className="flex-1 h-[4px] bg-[#111C2E] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: row.color, transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: row.pct / 100 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
          <span className="text-[9px] font-mono text-slate-600 tabular-nums w-8 text-right shrink-0">
            {row.pct}%
          </span>
        </div>
      ))}
      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1 h-px bg-[#1E2D3D]" />
        <span className="text-[8px] font-mono text-emerald-400 tracking-widest">4/4 Aligned</span>
        <div className="flex-1 h-px bg-[#1E2D3D]" />
      </div>
    </div>
  );
}

const GATES = [
  { label: "Confluence ≥ 68",   value: "72/100", pass: true },
  { label: "ML Win Prob ≥ 65%", value: "73.2%",  pass: true },
  { label: "Risk Parameters",   value: "Aligned", pass: true },
  { label: "Session Filter",    value: "Active",  pass: true },
];

function EligibilityViz() {
  return (
    <div className="flex flex-col gap-2">
      {GATES.map((g, i) => (
        <motion.div
          key={g.label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-1.5">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <circle cx="5.5" cy="5.5" r="5" fill="rgba(16,185,129,0.14)" stroke="#10B981" strokeWidth="0.8"/>
              <path d="M 3 5.5 l 1.5 1.5 L 8 3.5" stroke="#10B981" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] font-mono text-slate-500">{g.label}</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">{g.value}</span>
        </motion.div>
      ))}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55, type: "spring", stiffness: 180, damping: 20 }}
        className="mt-2 py-1.5 text-center rounded-lg text-[9px] font-mono font-bold tracking-widest uppercase"
        style={{
          background: "rgba(240,180,41,0.1)",
          border: "1px solid rgba(240,180,41,0.28)",
          color: "#F0B429",
        }}
      >
        ▲ Eligible Long
      </motion.div>
    </div>
  );
}

function StructureViz() {
  return (
    <div className="mt-1">
      <svg viewBox="0 0 120 44" className="w-full" aria-label="Bullish market structure">
        {/* Grid lines */}
        {[10, 22, 34].map(y => (
          <line key={y} x1="0" y1={y} x2="120" y2={y} stroke="#1E2D3D" strokeWidth="0.5" />
        ))}
        {/* Structure line */}
        <polyline
          points="0,38 18,26 30,32 50,16 65,24 85,8 105,18 120,10"
          fill="none"
          stroke="#1E2D3D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.polyline
          points="0,38 18,26 30,32 50,16 65,24 85,8 105,18 120,10"
          fill="none"
          stroke="#06B6D4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 3px rgba(6,182,212,0.5))" }}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ pathLength: { delay: 0.3, duration: 1.0, ease: "easeInOut" }, opacity: { delay: 0.3 } }}
        />
        {/* HH/HL labels */}
        {[
          { x: 50, y: 12, label: "HH" },
          { x: 85, y: 4,  label: "HH" },
          { x: 30, y: 40, label: "HL" },
          { x: 65, y: 32, label: "HL" },
        ].map(pt => (
          <text key={`${pt.x}-${pt.label}`} x={pt.x} y={pt.y} textAnchor="middle" fill="#475569" fontSize="5" fontFamily="'IBM Plex Mono', monospace">{pt.label}</text>
        ))}
      </svg>
      <div className="flex items-center gap-2 mt-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
        <span className="text-[9px] font-mono text-emerald-400 tracking-wider">Bullish Structure Active</span>
      </div>
    </div>
  );
}

const SD_ZONES = [
  { label: "R2",     price: "$596.20", color: "#FF4D6A", weight: 0.55 },
  { label: "R1",     price: "$594.50", color: "#FF4D6A", weight: 0.80 },
  { label: "PRICE",  price: "$592.41", color: "#F0B429", weight: 1.00 },
  { label: "S1",     price: "$590.10", color: "#10B981", weight: 0.80 },
  { label: "S2",     price: "$587.40", color: "#10B981", weight: 0.55 },
];

function SupplyDemandViz() {
  return (
    <div className="flex flex-col gap-1.5 mt-1">
      {SD_ZONES.map((z) => {
        const isCurrent = z.label === "PRICE";
        return (
          <div key={z.label} className="flex items-center gap-2">
            <span className="text-[8px] font-mono text-slate-600 w-9 shrink-0 text-right">{z.label}</span>
            <div
              className="flex-1 h-[5px] rounded-full relative overflow-hidden"
              style={{ background: isCurrent ? `${z.color}20` : "#111C2E" }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: z.color, opacity: isCurrent ? 1 : z.weight * 0.7 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: z.weight }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
            <span
              className="text-[9px] font-mono tabular-nums shrink-0"
              style={{ color: isCurrent ? z.color : "#475569", fontWeight: isCurrent ? 700 : 400 }}
            >
              {z.price}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function RiskViz() {
  return (
    <div className="mt-1 flex flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <span className="text-[9px] font-mono text-slate-600 w-12 shrink-0">Risk</span>
        <div className="flex-1 h-2.5 rounded-full overflow-hidden bg-[#111C2E]">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "rgba(248,71,71,0.55)", transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0.44 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.55 }}
          />
        </div>
        <span className="text-[9px] font-mono text-rose-400 shrink-0">$289</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[9px] font-mono text-slate-600 w-12 shrink-0">Reward</span>
        <div className="flex-1 h-2.5 rounded-full overflow-hidden bg-[#111C2E]">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "rgba(16,185,129,0.55)", transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0.82 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.55 }}
          />
        </div>
        <span className="text-[9px] font-mono text-emerald-400 shrink-0">$539</span>
      </div>
      <div className="text-center mt-1">
        <span className="text-[22px] font-mono font-bold text-amber-400">1:1.86</span>
        <div className="text-[8px] font-mono text-slate-600">risk / reward ratio</div>
      </div>
    </div>
  );
}

const VOL_BARS = [
  { price: "≥ $594",      vol: 0.28, isPOC: false },
  { price: "$592–$594",   vol: 0.90, isPOC: true  },
  { price: "$590–$592",   vol: 0.62, isPOC: false },
  { price: "$588–$590",   vol: 0.44, isPOC: false },
  { price: "≤ $588",      vol: 0.20, isPOC: false },
];

function VolumeViz() {
  return (
    <div className="flex flex-col gap-1.5 mt-1">
      {VOL_BARS.map((b, i) => (
        <div key={b.price} className="flex items-center gap-2">
          <div className="flex-1 h-[5px] rounded-full overflow-hidden bg-[#111C2E] relative">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: b.isPOC ? "#F0B429" : "#06B6D440",
                transformOrigin: "left",
                boxShadow: b.isPOC ? "0 0 8px rgba(240,180,41,0.4)" : "none",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: b.vol }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.06, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
          <span className="text-[8px] font-mono text-right shrink-0" style={{ color: b.isPOC ? "#F0B429" : "#475569", width: 68 }}>
            {b.price}
            {b.isPOC && <span className="ml-1 text-[7px] text-amber-400/70">POC</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

function ExecutionViz() {
  return (
    <div className="flex gap-5 items-stretch mt-1">
      {/* Price range bar */}
      <div className="flex flex-col items-center py-1 gap-1 shrink-0">
        <div className="w-[7px] h-[7px] rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px rgba(16,185,129,0.5)" }} />
        <div className="flex-1 w-px" style={{ background: "linear-gradient(to bottom, rgba(16,185,129,0.4), rgba(240,180,41,0.4))" }} />
        <div className="w-[7px] h-[7px] rounded-full bg-amber-400" style={{ boxShadow: "0 0 6px rgba(240,180,41,0.5)" }} />
        <div className="flex-1 w-px" style={{ background: "linear-gradient(to bottom, rgba(240,180,41,0.4), rgba(248,71,71,0.4))" }} />
        <div className="w-[7px] h-[7px] rounded-full bg-rose-400" style={{ boxShadow: "0 0 6px rgba(248,71,71,0.4)" }} />
      </div>

      {/* Labels */}
      <div className="flex flex-col justify-between flex-1 py-1">
        <div>
          <div className="text-[8px] font-mono text-slate-600 tracking-widest uppercase">Target</div>
          <div className="text-[13px] font-mono font-bold text-emerald-400 tabular-nums">$597.80</div>
          <div className="text-[8px] font-mono text-emerald-400/60">+$5.39 / +0.91%</div>
        </div>
        <div>
          <div className="text-[8px] font-mono text-slate-600 tracking-widest uppercase">Entry</div>
          <div className="text-[13px] font-mono font-bold text-amber-400 tabular-nums">$592.41</div>
        </div>
        <div>
          <div className="text-[8px] font-mono text-slate-600 tracking-widest uppercase">Stop</div>
          <div className="text-[13px] font-mono font-bold text-rose-400 tabular-nums">$589.50</div>
          <div className="text-[8px] font-mono text-rose-400/60">−$2.91 / −0.49%</div>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col justify-between py-1 shrink-0">
        {[
          { k: "Contract", v: "592C 0DTE" },
          { k: "Budget",   v: "$500"      },
          { k: "R:R",      v: "1 : 1.86" },
        ].map(r => (
          <div key={r.k}>
            <div className="text-[8px] font-mono text-slate-600 tracking-widest">{r.k}</div>
            <div className="text-[10px] font-mono font-semibold text-slate-300">{r.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export function IntelligenceBento() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="platform">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(6,182,212,0.03) 0%, transparent 55%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-5"
          >
            <span className="text-teal-400/60">◆</span>
            Platform Intelligence
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Seven Intelligence Modules
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Each module is a specialized engine. Together they form a complete intelligence stack.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Row 1: Trend (2-col) + Eligibility (1-col) */}
          <BentoCard
            category="Directional Intelligence"
            name="Trend Intelligence"
            desc="Multi-timeframe trend alignment scored across 15M, 30M, 1H, and 4H. Full alignment signals maximum conviction before a trade plan is generated."
            color="#F0B429"
            delay={0}
            className="sm:col-span-2 lg:col-span-2"
          >
            <TrendViz />
          </BentoCard>

          <BentoCard
            category="Decision Engine"
            name="Eligibility Engine"
            desc="Four-condition gate. All conditions must clear before a trade plan is generated — no partial signals, no edge-case entries."
            color="#10B981"
            delay={0.08}
          >
            <EligibilityViz />
          </BentoCard>

          {/* Row 2: Market Structure + Supply & Demand + Risk */}
          <BentoCard
            category="Technical Framework"
            name="Market Structure"
            desc="Directional bias analysis classifies market phase and structure across timeframes to confirm alignment before signals are evaluated."
            color="#06B6D4"
            delay={0.12}
          >
            <StructureViz />
          </BentoCard>

          <BentoCard
            category="Level Intelligence"
            name="Supply & Demand"
            desc="Key zones mapped from prior session structure. Stop and target placement derived from these levels — not arbitrary ticks."
            color="#FF6B7A"
            delay={0.16}
          >
            <SupplyDemandViz />
          </BentoCard>

          <BentoCard
            category="Risk Intelligence"
            name="Risk Planning"
            desc="Budget, maximum risk, and expected reward are defined before entry. Minimum 1.5:1 risk-to-reward required to qualify."
            color="#06B6D4"
            delay={0.20}
          >
            <RiskViz />
          </BentoCard>

          {/* Row 3: Volume + Execution (2-col) */}
          <BentoCard
            category="Participation Intelligence"
            name="Volume Participation"
            desc="Volume and participation analysis confirms that directional moves carry institutional backing before an entry is taken."
            color="#10B981"
            delay={0.24}
          >
            <VolumeViz />
          </BentoCard>

          <BentoCard
            category="Execution Intelligence"
            name="Execution Planning"
            desc="Strike selection, contract sizing, and budget allocation are output by the system. Every entry is defined before the session opens."
            color="#F0B429"
            delay={0.28}
            className="sm:col-span-2 lg:col-span-2"
          >
            <ExecutionViz />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
