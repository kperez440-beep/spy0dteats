"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";

// Digit slot height in px — tuned for text-4xl / text-5xl range
const H = 52;

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

// One number (0-9) inside a spinning column — positions itself relative to the spring value
function SpinNum({ mv, n }: { mv: MotionValue<number>; n: number }) {
  const y = useTransform(mv, (v) => {
    const cur = v % 10;
    const offset = (10 + n - cur) % 10;
    let px = offset * H;
    if (offset > 5) px -= 10 * H;
    return px;
  });
  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center tabular-nums select-none"
    >
      {n}
    </motion.span>
  );
}

// One digit column: shows the correct digit via spring-animated slot scroll
function SpinDigit({ place, intVal }: { place: number; intVal: number }) {
  const digit = Math.floor(intVal / place) % 10;
  const spring = useSpring(0, { stiffness: 180, damping: 24, restDelta: 0.01 });

  useEffect(() => {
    spring.set(digit);
  }, [digit, spring]);

  return (
    <span
      style={{ height: H, overflow: "hidden", position: "relative", display: "inline-flex", width: "0.62em" }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <SpinNum key={i} mv={spring} n={i} />
      ))}
    </span>
  );
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
  // Animate an integer: e.g. to=5.4, decimals=1 → intTarget=54
  const intTarget = Math.round(to * Math.pow(10, decimals));
  const [intVal, setIntVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - t0) / duration, 1);
            setIntVal(Math.round(easeOut(t) * intTarget));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [intTarget, duration]);

  // Build digit places from most-significant to least (e.g. 1085 → [1000,100,10,1])
  const maxLog = intTarget > 0 ? Math.floor(Math.log10(intTarget)) : 0;
  const places: number[] = [];
  let p = 1;
  for (let i = 0; i <= maxLog; i++) { places.unshift(p); p *= 10; }

  // Insert decimal point before the last `decimals` digit columns
  const dotIdx = decimals > 0 ? places.length - decimals : -1;

  return (
    <span
      ref={ref}
      className="inline-flex items-end"
      style={{ height: H }}
      aria-label={`${prefix}${to.toFixed(decimals)}${suffix}`}
    >
      {prefix && <span className="self-center mr-[0.06em]">{prefix}</span>}
      {places.map((place, i) => (
        <React.Fragment key={place}>
          {dotIdx === i && (
            <span className="self-end pb-[3px] mx-[1px] leading-none">.</span>
          )}
          <SpinDigit place={place} intVal={intVal} />
        </React.Fragment>
      ))}
      {suffix && <span className="self-center ml-[0.06em]">{suffix}</span>}
    </span>
  );
}
