"use client";
import { useEffect, useRef } from "react";

// Hero background: a synthetic SPY-style price line scrolls toward a "scanner"
// at the leading edge. Pivot levels are drawn across the field, and whenever
// price crosses one the system "notices" it: a pulse ring plus an alert tag.
// Purely decorative; the prices are simulated, not market data.

const LIME = "193,255,114";
const EMERALD = "16,185,129";
const RED = "248,113,113";

const LEVELS = [
  { name: "R1", price: 584.2 },
  { name: "PIVOT", price: 582.4 },
  { name: "S1", price: 580.9 },
];
const PRICE_MIN = 579.6;
const PRICE_MAX = 585.6;

type Point = { v: number; fast: number; slow: number };
type Signal = { tick: number; price: number; up: boolean; label: string; born: number };

export function MarketCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1;
    let dx = 7;                 // px between points
    const stepSecs = 0.32;      // time per point

    // ── Price model: mean-reverting walk whose target hops between levels ──
    let tick = 0;
    let target = 582.4;
    let targetTtl = 0;
    let momentum = 0;
    const pts: Point[] = [];
    const signals: Signal[] = [];

    const nextValue = (prev: number) => {
      if (--targetTtl <= 0) {
        const lv = LEVELS[Math.floor(Math.random() * LEVELS.length)].price;
        target = lv + (Math.random() - 0.5) * 1.6;
        targetTtl = 30 + Math.floor(Math.random() * 60);
      }
      momentum = momentum * 0.82 + (target - prev) * 0.018 + (Math.random() - 0.5) * 0.11;
      return Math.min(PRICE_MAX - 0.2, Math.max(PRICE_MIN + 0.2, prev + momentum));
    };

    const push = (v: number, live: boolean) => {
      const last = pts[pts.length - 1];
      const fast = last ? last.fast + (v - last.fast) * 0.18 : v;
      const slow = last ? last.slow + (v - last.slow) * 0.06 : v;
      if (last && live) {
        for (const lv of LEVELS) {
          const up = last.v < lv.price && v >= lv.price;
          const down = last.v > lv.price && v <= lv.price;
          if (up || down) {
            const grade = Math.random() < 0.6 ? "STRONG" : "DECENT";
            const what = lv.name === "PIVOT" ? (up ? "PIVOT RECLAIM" : "PIVOT LOSS") : `${lv.name} ${up ? "BREAK" : "LOSS"}`;
            signals.push({ tick, price: lv.price, up, label: `${up ? "BULL" : "BEAR"} · ${what} · ${grade}`, born: performance.now() });
          }
        }
      }
      pts.push({ v, fast, slow });
      tick++;
      const maxPts = Math.ceil(w / dx) + 4;
      if (pts.length > maxPts) pts.splice(0, pts.length - maxPts);
      while (signals.length && tick - signals[0].tick > maxPts) signals.shift();
    };

    let next = 582.4;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dx = w < 640 ? 5 : 7;
      // Backfill so the line already spans the screen on first paint.
      while (pts.length < Math.ceil(w / dx) + 2) {
        const prev = pts.length ? pts[pts.length - 1].v : 582.4;
        push(nextValue(prev), false);
      }
      next = nextValue(pts[pts.length - 1].v);
    };

    const y = (p: number) => {
      const top = h * 0.2, bottom = h * 0.82;
      return bottom - ((p - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * (bottom - top);
    };

    let t = 0; // 0..1 progress toward `next`
    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      const headX = w * (w < 640 ? 0.84 : 0.74);
      const last = pts[pts.length - 1];
      const headV = last.v + (next - last.v) * t;
      const xAt = (k: number) => headX - t * dx - k * dx; // k = steps back from newest point

      // Pivot levels
      ctx.font = "500 10px 'IBM Plex Mono', monospace";
      for (const lv of LEVELS) {
        const ly = y(lv.price);
        ctx.strokeStyle = `rgba(${LIME},${lv.name === "PIVOT" ? 0.22 : 0.12})`;
        ctx.setLineDash([3, 7]);
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, ly); ctx.lineTo(w, ly); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = `rgba(${LIME},0.45)`;
        ctx.textAlign = "right";
        ctx.fillText(`${lv.name} ${lv.price.toFixed(2)}`, w - 16, ly - 6);
      }

      // Moving-average ghosts
      const series = (key: "fast" | "slow", alpha: number) => {
        ctx.beginPath();
        for (let k = 0; k < pts.length; k++) {
          const p = pts[pts.length - 1 - k];
          const x = xAt(k);
          if (k === 0) ctx.moveTo(x, y(p[key])); else ctx.lineTo(x, y(p[key]));
          if (x < -10) break;
        }
        ctx.strokeStyle = `rgba(${LIME},${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      };
      series("slow", 0.1);
      series("fast", 0.16);

      // Price path (head → history)
      const path = new Path2D();
      path.moveTo(headX, y(headV));
      let minX = headX;
      for (let k = 0; k < pts.length; k++) {
        const x = xAt(k);
        path.lineTo(x, y(pts[pts.length - 1 - k].v));
        minX = x;
        if (x < -10) break;
      }

      // Area fill under the line
      const area = new Path2D(path);
      area.lineTo(minX, h); area.lineTo(headX, h); area.closePath();
      const grad = ctx.createLinearGradient(0, h * 0.2, 0, h);
      grad.addColorStop(0, `rgba(${LIME},0.10)`);
      grad.addColorStop(1, `rgba(${LIME},0)`);
      ctx.fillStyle = grad;
      ctx.fill(area);

      // Fade the tail into the left edge
      const lineGrad = ctx.createLinearGradient(0, 0, headX, 0);
      lineGrad.addColorStop(0, `rgba(${LIME},0)`);
      lineGrad.addColorStop(0.35, `rgba(${LIME},0.55)`);
      lineGrad.addColorStop(1, `rgba(${LIME},1)`);
      ctx.save();
      ctx.shadowColor = `rgba(${LIME},0.8)`;
      ctx.shadowBlur = 14;
      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.stroke(path);
      ctx.restore();

      // Scanner beam at the leading edge
      const beam = ctx.createLinearGradient(headX - 120, 0, headX, 0);
      beam.addColorStop(0, `rgba(${LIME},0)`);
      beam.addColorStop(1, `rgba(${LIME},0.07)`);
      ctx.fillStyle = beam;
      ctx.fillRect(headX - 120, 0, 120, h);
      ctx.strokeStyle = `rgba(${LIME},0.35)`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(headX, 0); ctx.lineTo(headX, h); ctx.stroke();

      // Head dot + readout
      const hy = y(headV);
      const pulse = 0.5 + 0.5 * Math.sin(now / 380);
      ctx.fillStyle = `rgba(${LIME},${0.15 + 0.15 * pulse})`;
      ctx.beginPath(); ctx.arc(headX, hy, 9 + 4 * pulse, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = `rgb(${LIME})`;
      ctx.beginPath(); ctx.arc(headX, hy, 3.5, 0, Math.PI * 2); ctx.fill();
      // Readout sits beside the scanner on wide screens; on phones the copy
      // fills the top of the hero, so it's skipped there.
      if (w >= 768) {
        ctx.textAlign = "left";
        ctx.font = "500 11px 'IBM Plex Mono', monospace";
        ctx.fillStyle = "rgba(238,240,245,0.85)";
        const readX = w - headX < 150 ? headX - 128 : headX + 14;
        ctx.fillText(`SPY ${headV.toFixed(2)}`, readX, h * 0.12);
        ctx.fillStyle = `rgba(${LIME},${0.4 + 0.4 * pulse})`;
        ctx.fillText("● SCANNING", readX, h * 0.12 + 16);
      }

      // Signals: pulse ring + tag that scroll with the line
      for (const s of signals) {
        const age = (now - s.born) / 1000;
        const x = xAt(tick - 1 - s.tick);
        const sy = y(s.price);
        const col = s.up ? EMERALD : RED;
        if (age < 1.4) {
          const r = 6 + age * 34;
          ctx.strokeStyle = `rgba(${col},${0.7 * (1 - age / 1.4)})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.arc(x, sy, r, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.fillStyle = `rgb(${col})`;
        ctx.beginPath(); ctx.arc(x, sy, 3, 0, Math.PI * 2); ctx.fill();
        const tagAlpha = age < 0.25 ? age / 0.25 : age > 4.5 ? Math.max(0, 1 - (age - 4.5) / 0.8) : 1;
        if (tagAlpha > 0 && w >= 480) {
          ctx.font = "600 10px 'IBM Plex Mono', monospace";
          const tw = ctx.measureText(s.label).width + 16;
          const tx = Math.min(x - tw / 2, w - tw - 8);
          const ty = s.up ? sy - 34 : sy + 14;
          ctx.globalAlpha = tagAlpha;
          ctx.fillStyle = "rgba(10,13,9,0.92)";
          ctx.strokeStyle = `rgba(${col},0.6)`;
          ctx.beginPath(); ctx.roundRect(tx, ty, tw, 20, 4); ctx.fill(); ctx.stroke();
          ctx.fillStyle = `rgb(${col})`;
          ctx.textAlign = "left";
          ctx.fillText(s.label, tx + 8, ty + 13.5);
          ctx.globalAlpha = 1;
        }
      }
    };

    resize();
    draw(performance.now()); // paint immediately; the loop may start a beat later
    const ro = new ResizeObserver(() => { resize(); if (reduceMotion) draw(performance.now()); });
    ro.observe(canvas);

    if (reduceMotion) {
      draw(performance.now());
      return () => ro.disconnect();
    }

    let raf = 0, prev = performance.now(), visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) { prev = performance.now(); raf = requestAnimationFrame(loop); }
    });
    io.observe(canvas);

    function loop(now: number) {
      if (!visible) return;
      const dt = Math.min(0.1, (now - prev) / 1000);
      prev = now;
      t += dt / stepSecs;
      while (t >= 1) {
        push(next, true);
        next = nextValue(next);
        t -= 1;
      }
      draw(now);
      raf = requestAnimationFrame(loop);
    }
    // The IntersectionObserver's initial callback starts the loop.

    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
