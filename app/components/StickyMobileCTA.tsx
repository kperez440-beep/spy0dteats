"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  const [atFounding, setAtFounding] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    const founding = document.getElementById("founding");
    let observer: IntersectionObserver | null = null;
    if (founding) {
      observer = new IntersectionObserver(
        ([entry]) => setAtFounding(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(founding);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {show && !atFounding && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-4 pb-4"
          initial={{ y: 88, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 88, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#founding"
            className="flex items-center justify-between bg-[#F0B429] text-[#050810] font-bold text-[13px] px-5 py-4 rounded-2xl w-full cursor-pointer"
            style={{ boxShadow: "0 8px 32px rgba(240,180,41,0.45), 0 0 0 1px rgba(255,255,255,0.1) inset" }}
          >
            <span>Request Founding Access</span>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-mono opacity-60 tabular-nums">47 / 200</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
