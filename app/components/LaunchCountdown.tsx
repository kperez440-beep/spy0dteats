"use client";
import { useEffect, useState } from "react";

/* Set your actual launch date here */
const LAUNCH_DATE = new Date("2026-09-01T09:30:00-04:00"); // Sep 1, market open ET
const FOUNDING_SPOTS = 200;
const SPOTS_TAKEN = 47; /* update manually or wire to a real counter */

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

export function LaunchCountdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  const spotsLeft = FOUNDING_SPOTS - SPOTS_TAKEN;
  const pct = (SPOTS_TAKEN / FOUNDING_SPOTS) * 100;

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Countdown */}
      <div
        className="flex items-center justify-center gap-2 sm:gap-4 p-4 rounded-2xl border border-[#1E2D3D] bg-[#0D1520]/80 backdrop-blur-sm mb-3"
        style={{ boxShadow: "0 0 32px rgba(27,114,192,0.06)" }}
      >
        {[
          { val: time.d, label: "Days" },
          { val: time.h, label: "Hours" },
          { val: time.m, label: "Min" },
          { val: time.s, label: "Sec" },
        ].map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-2 sm:gap-4">
            {i > 0 && (
              <span className="text-slate-600 font-mono text-lg font-bold">:</span>
            )}
            <div className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold font-mono tabular-nums"
                style={{ color: "#1B72C0", minWidth: "2.2ch" }}
              >
                {pad(unit.val)}
              </div>
              <div className="text-[9px] font-mono tracking-widest text-slate-600 uppercase mt-0.5">
                {unit.label}
              </div>
            </div>
          </div>
        ))}

        <div className="hidden sm:block w-px h-10 bg-[#1E2D3D] mx-1" />

        <div className="hidden sm:flex flex-col items-center">
          <div className="text-[10px] font-mono text-amber-400/70 tracking-widest uppercase mb-1">
            Launch
          </div>
          <div className="text-[11px] font-mono text-slate-300 font-semibold">Sep 1, 2026</div>
          <div className="text-[9px] font-mono text-slate-600">9:30 AM ET</div>
        </div>
      </div>

      {/* Spots bar */}
      <div className="px-1">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-mono text-slate-500">
            Founding member spots
          </span>
          <span className="text-[11px] font-mono font-semibold text-amber-400">
            {spotsLeft} of {FOUNDING_SPOTS} remaining
          </span>
        </div>
        <div className="h-1.5 bg-[#1E2D3D] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, #1B72C0, #F0B429)",
            }}
          />
        </div>
        <p className="text-[10px] font-mono text-slate-600 mt-1.5 text-center">
          Founding members lock in 40% below launch pricing — forever
        </p>
      </div>
    </div>
  );
}
