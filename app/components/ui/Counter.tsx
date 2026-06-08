"use client";
import { useEffect, useRef, useState } from "react";

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function Counter({
  to,
  duration = 1800,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            setValue(easeOut(t) * to);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (spanRef.current) obs.observe(spanRef.current);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={spanRef}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
