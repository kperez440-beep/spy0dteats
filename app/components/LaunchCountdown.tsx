"use client";
import { useEffect, useRef, useState } from "react";

const TOTAL_SPOTS = 200;
const TARGET_COUNT = 47;

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const AVATARS = [
  { initials: "MK", color: "#F0B429" },
  { initials: "AS", color: "#06B6D4" },
  { initials: "TR", color: "#10B981" },
  { initials: "DL", color: "#1B72C0" },
];

export function LaunchCountdown() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const duration = 1600;
          const tick = (now: number) => {
            const t = Math.min((now - t0) / duration, 1);
            setCount(Math.round(easeOut(t) * TARGET_COUNT));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const pct = (count / TOTAL_SPOTS) * 100;
  const remaining = TOTAL_SPOTS - TARGET_COUNT;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-5 w-full max-w-md mx-auto"
    >
      {/* Status pill */}
      <div className="inline-flex items-center gap-2 border border-[#10B981]/30 bg-[#10B981]/10 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-[#10B981] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] pulse-dot inline-block" />
        Beta Access · Now Open
      </div>

      {/* Counter */}
      <div className="flex flex-col items-center gap-1">
        <div
          className="text-6xl sm:text-7xl font-bold font-mono tabular-nums leading-none"
          style={{
            color: "#F0B429",
            textShadow: "0 0 32px rgba(240,180,41,0.45), 0 0 60px rgba(240,180,41,0.2)",
          }}
        >
          {count}
        </div>
        <div className="text-sm text-slate-400 font-mono tracking-wide">
          traders already in
        </div>
      </div>

      {/* Avatar row */}
      <div className="flex items-center">
        {AVATARS.map((av, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold font-mono border-2"
            style={{
              background: av.color + "22",
              color: av.color,
              borderColor: "#050810",
              marginLeft: i === 0 ? 0 : -8,
            }}
          >
            {av.initials}
          </div>
        ))}
        <span className="ml-3 text-[11px] text-slate-500 font-mono">
          +{TARGET_COUNT - AVATARS.length} more
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full flex flex-col gap-1.5">
        <div className="h-2 w-full bg-[#1E2D3D] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, #F0B429, #06B6D4)",
              boxShadow: "0 0 10px rgba(240,180,41,0.5)",
            }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-500">
          <span>{count} joined</span>
          <span>{remaining} of {TOTAL_SPOTS} spots left</span>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-[12px] text-slate-500 text-center font-mono leading-relaxed">
        Founding members lock in{" "}
        <span className="text-amber-400 font-semibold">40% below launch pricing</span>
        {" "}— forever.
      </p>
    </div>
  );
}
