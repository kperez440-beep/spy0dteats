"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const FORMSPREE = "https://formspree.io/f/xykvpdya";

export function FoundingGate() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "SPY Pivot Pro — Founding Access Request",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="founding"
      className="relative overflow-hidden"
      style={{
        background:    "#030608",
        paddingTop:    "148px",
        paddingBottom: "148px",
      }}
    >
      {/* Tall narrow spotlight — emerald tint, from above */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: [
            "radial-gradient(ellipse 28% 70% at 50% -5%,  rgba(6,182,212,0.06)  0%, transparent 65%)",
            "radial-gradient(ellipse 20% 50% at 50% 105%, rgba(16,185,129,0.04) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* Edge vignette — deepens the sense of enclosure */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(2,4,8,0.7) 100%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-4 text-center">

        {/* ── Eyebrow ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-6"
        >
          <span
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "9px",
              letterSpacing: "0.40em",
              textTransform: "uppercase",
              color:         "rgba(255,255,255,0.13)",
            }}
          >
            Limited Release
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.07 }}
          style={{
            fontSize:      "clamp(34px, 5vw, 62px)",
            fontWeight:    800,
            letterSpacing: "-0.03em",
            lineHeight:    1.07,
            color:         "#FFFFFF",
            marginBottom:  "28px",
          }}
        >
          Request Founding Access.
        </motion.h2>

        {/* ── Subheadline ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          style={{
            display:       "flex",
            flexDirection: "column",
            gap:           "12px",
            marginBottom:  "52px",
          }}
        >
          {[
            "SPY Pivot Pro is currently being refined and expanded.",
            "Initial access will remain intentionally limited as the platform evolves.",
            "Join the founding waitlist to receive updates and early access opportunities.",
          ].map((sentence, i) => (
            <p
              key={i}
              style={{
                fontSize:   "14px",
                color:      i === 2 ? "rgba(255,255,255,0.34)" : "rgba(255,255,255,0.28)",
                lineHeight: 1.72,
              }}
            >
              {sentence}
            </p>
          ))}
        </motion.div>

        {/* ── Form / Success ── */}
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              style={{
                display:       "flex",
                flexDirection: "column",
                alignItems:    "center",
                gap:           "10px",
                padding:       "36px 0",
              }}
            >
              {/* Teal confirmation dot */}
              <span
                aria-hidden="true"
                style={{
                  display:      "inline-block",
                  width:        6,
                  height:       6,
                  borderRadius: "50%",
                  background:   "#10B981",
                  boxShadow:    "0 0 8px rgba(16,185,129,0.7)",
                  marginBottom: "6px",
                }}
              />
              <p
                style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "10px",
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  color:         "rgba(16,185,129,0.65)",
                }}
              >
                Access request received.
              </p>
              <p
                style={{
                  fontSize:  "15px",
                  fontWeight: 500,
                  color:     "rgba(16,185,129,0.75)",
                  letterSpacing: "-0.01em",
                }}
              >
                We&rsquo;ll be in touch.
              </p>
            </motion.div>

          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{
                display:       "flex",
                flexDirection: "column",
                gap:           "12px",
                width:         "100%",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  width:         "100%",
                  background:    "rgba(6,10,20,0.7)",
                  border:        "1px solid rgba(20,36,56,0.9)",
                  borderRadius:  "10px",
                  color:         "#FFFFFF",
                  fontSize:      "14px",
                  padding:       "15px 18px",
                  letterSpacing: "0.01em",
                  outline:       "none",
                  boxSizing:     "border-box",
                  transition:    "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = "rgba(6,182,212,0.20)";
                  e.currentTarget.style.boxShadow  = "0 0 0 3px rgba(6,182,212,0.04)";
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = "rgba(20,36,56,0.9)";
                  e.currentTarget.style.boxShadow  = "none";
                }}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  width:         "100%",
                  background:    loading ? "rgba(6,182,212,0.45)" : "#06B6D4",
                  color:         "#030608",
                  fontWeight:    700,
                  fontSize:      "14px",
                  letterSpacing: "0.01em",
                  padding:       "15px 28px",
                  borderRadius:  "10px",
                  border:        "none",
                  cursor:        loading ? "not-allowed" : "pointer",
                  transition:    "all 0.2s ease",
                  boxSizing:     "border-box",
                }}
                onMouseEnter={e => {
                  if (loading) return;
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "#22D3EE";
                  el.style.boxShadow  = "0 0 32px rgba(6,182,212,0.30)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = loading ? "rgba(6,182,212,0.45)" : "#06B6D4";
                  el.style.boxShadow  = "none";
                }}
              >
                {loading ? "Requesting…" : "Request Access"}
              </button>

              {error && (
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize:   "10px",
                    color:      "#7A2A2A",
                    textAlign:  "center",
                  }}
                >
                  {error}
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>

        {/* ── Below-form copy ── */}
        {!submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "7px" }}
          >
            <p
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "10px",
                letterSpacing: "0.10em",
                color:         "rgba(255,255,255,0.12)",
              }}
            >
              Built for disciplined SPY options traders.
            </p>
            <p
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "9px",
                letterSpacing: "0.08em",
                color:         "rgba(255,255,255,0.08)",
              }}
            >
              Access to the initial release will remain intentionally limited.
            </p>
          </motion.div>
        )}

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          style={{
            height:     "1px",
            background: "linear-gradient(90deg, transparent, rgba(15,30,50,0.8), transparent)",
            margin:     "52px 0",
          }}
          aria-hidden="true"
        />

        {/* ── Closing brand lockup ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "7px" }}
        >
          <p
            style={{
              fontSize:      "18px",
              fontWeight:    600,
              letterSpacing: "-0.02em",
              color:         "rgba(255,255,255,0.09)",
            }}
          >
            SPY Pivot Pro
          </p>
          <p
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color:         "rgba(255,255,255,0.06)",
            }}
          >
            The Operating System for SPY Options Traders
          </p>
          <p
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "9px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color:         "rgba(255,255,255,0.04)",
              marginTop:     "3px",
            }}
          >
            by Fortitud Capital
          </p>
        </motion.div>

      </div>
    </section>
  );
}
