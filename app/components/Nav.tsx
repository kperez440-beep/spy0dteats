"use client";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "System",          href: "#system"   },
  { label: "Research",        href: "#research" },
  { label: "Intelligence",    href: "#adaptive" },
  { label: "Founding Access", href: "#founding" },
] as const;

const SECTION_IDS = ["system", "research", "adaptive", "founding"] as const;

export function Nav() {
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen,      setMenuOpen]      = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Nav bar ── */}
      <header
        style={{
          position:             "fixed",
          top:                  0,
          left:                 0,
          right:                0,
          zIndex:               50,
          height:               "60px",
          display:              "flex",
          alignItems:           "center",
          paddingInline:        "clamp(20px, 3vw, 40px)",
          background:           scrolled ? "rgba(2,5,8,0.90)" : "transparent",
          backdropFilter:       scrolled ? "blur(24px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
          borderBottom:         scrolled ? "1px solid rgba(12,28,48,0.80)" : "1px solid transparent",
          boxShadow:            scrolled
            ? "0 1px 0 rgba(6,182,212,0.035), 0 12px 40px rgba(0,0,0,0.38)"
            : "none",
          transition:           "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >

        {/* ── Left — brand ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "13px",
              fontWeight:    700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color:         "#D8E4EC",
            }}
          >
            SPY Pivot Pro
          </span>
          <span
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "8px",
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color:         "#152230",
              marginTop:     "4px",
            }}
          >
            by Fortitud Capital
          </span>
        </div>

        {/* ── Center — nav links (desktop) ── */}
        <nav
          className="hidden md:flex items-center gap-8"
          style={{
            position:  "absolute",
            left:      "50%",
            transform: "translateX(-50%)",
          }}
          aria-label="Primary navigation"
        >
          {LINKS.map(link => {
            const id       = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily:     "var(--font-sans)",
                  fontSize:       "13px",
                  fontWeight:     isActive ? 500 : 400,
                  color:          isActive ? "#C8D8E4" : "#263C50",
                  letterSpacing:  "0.01em",
                  textDecoration: "none",
                  position:       "relative",
                  paddingBottom:  "3px",
                  transition:     "color 0.18s ease",
                }}
                onMouseEnter={e => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#5A7A8E";
                }}
                onMouseLeave={e => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#263C50";
                }}
              >
                {link.label}
                {/* Active underline */}
                <span
                  aria-hidden="true"
                  style={{
                    position:   "absolute",
                    bottom:     0,
                    left:       0,
                    right:      0,
                    height:     "1px",
                    background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.45), transparent)",
                    opacity:    isActive ? 1 : 0,
                    transition: "opacity 0.2s ease",
                  }}
                />
              </a>
            );
          })}
        </nav>

        {/* ── Right — button + hamburger ── */}
        <div
          style={{
            flex:           1,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "flex-end",
            gap:            "12px",
          }}
        >
          {/* Request Access — desktop */}
          <a
            href="#founding"
            className="hidden sm:inline-flex items-center"
            style={{
              fontFamily:     "var(--font-sans)",
              fontSize:       "12px",
              fontWeight:     500,
              letterSpacing:  "0.03em",
              color:          "#4A6A80",
              background:     "rgba(5,10,18,0.75)",
              border:         "1px solid rgba(18,36,54,0.85)",
              borderRadius:   "7px",
              padding:        "8px 16px",
              textDecoration: "none",
              transition:     "color 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color       = "#FFFFFF";
              el.style.borderColor = "rgba(16,185,129,0.22)";
              el.style.background  = "rgba(4,14,12,0.80)";
              el.style.boxShadow   = "0 0 18px rgba(16,185,129,0.09), inset 0 0 0 1px rgba(16,185,129,0.06)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color       = "#4A6A80";
              el.style.borderColor = "rgba(18,36,54,0.85)";
              el.style.background  = "rgba(5,10,18,0.75)";
              el.style.boxShadow   = "none";
            }}
          >
            Request Access
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              width:          "36px",
              height:         "36px",
              display:        "flex",
              flexDirection:  "column",
              alignItems:     "center",
              justifyContent: "center",
              gap:            "5px",
              background:     "transparent",
              border:         "1px solid rgba(18,36,54,0.75)",
              borderRadius:   "7px",
              cursor:         "pointer",
              padding:        0,
            }}
          >
            {[
              menuOpen ? "rotate(45deg) translate(4px, 4px)"  : "none",
              menuOpen ? "scaleX(0)"                          : "none",
              menuOpen ? "rotate(-45deg) translate(4px, -4px)": "none",
            ].map((transform, i) => (
              <span
                key={i}
                aria-hidden="true"
                style={{
                  display:    "block",
                  width:      "14px",
                  height:     "1px",
                  background: "#3A566A",
                  transition: "all 0.22s ease",
                  opacity:    i === 1 && menuOpen ? 0 : 1,
                  transform,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <div
        className="md:hidden"
        style={{
          position:      "fixed",
          inset:         0,
          zIndex:        40,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        onClick={() => setMenuOpen(false)}
      >
        {/* Backdrop */}
        <div
          aria-hidden="true"
          style={{
            position:             "absolute",
            inset:                0,
            background:           "rgba(1,3,6,0.70)",
            backdropFilter:       "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            opacity:              menuOpen ? 1 : 0,
            transition:           "opacity 0.3s ease",
          }}
        />

        {/* Slide-in panel */}
        <div
          style={{
            position:      "absolute",
            top:           0,
            right:         0,
            bottom:        0,
            width:         "270px",
            background:    "rgba(3,6,10,0.98)",
            borderLeft:    "1px solid rgba(12,28,48,0.8)",
            transform:     menuOpen ? "translateX(0)" : "translateX(100%)",
            transition:    "transform 0.32s cubic-bezier(0.16,1,0.3,1)",
            padding:       "76px 28px 36px",
            display:       "flex",
            flexDirection: "column",
          }}
          onClick={e => e.stopPropagation()}
        >
          {LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize:       "15px",
                fontWeight:     400,
                color:          "#2C4558",
                padding:        "16px 0",
                borderBottom:   "1px solid rgba(12,26,42,0.7)",
                textDecoration: "none",
                letterSpacing:  "0.01em",
                transition:     "color 0.15s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#6A8FA8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#2C4558"; }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#founding"
            onClick={() => setMenuOpen(false)}
            style={{
              display:        "block",
              marginTop:      "28px",
              fontSize:       "12px",
              fontWeight:     500,
              letterSpacing:  "0.04em",
              color:          "#4A6A80",
              background:     "rgba(5,10,18,0.9)",
              border:         "1px solid rgba(18,36,54,0.85)",
              borderRadius:   "7px",
              padding:        "13px 20px",
              textAlign:      "center",
              textDecoration: "none",
            }}
          >
            Request Access
          </a>

          <div style={{ marginTop: "auto" }}>
            <p
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "8px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:         "#0D1A24",
              }}
            >
              by Fortitud Capital
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
