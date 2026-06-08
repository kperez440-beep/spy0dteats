"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function RevealText({
  text,
  className = "",
  delay = 0,
  stagger = 0.07,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.4 });
  const words = text.split(" ");

  const MotionTag = motion[Tag] as typeof motion.span;

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.45,
            delay: delay + i * stagger,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
