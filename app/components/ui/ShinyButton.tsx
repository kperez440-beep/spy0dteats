"use client";
import type { ReactNode } from "react";

interface ShinyButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  color?: "gold" | "blue" | "teal";
}

const colorMap = {
  gold: { highlight: "#F0B429", subtle: "#FDE68A", fg: "#050810", bg: "#F0B429" },
  blue: { highlight: "#1B72C0", subtle: "#93C5FD", fg: "#ffffff", bg: "#0D1520" },
  teal: { highlight: "#06B6D4", subtle: "#A5F3FC", fg: "#050810", bg: "#0D1520" },
};

export function ShinyButton({
  children,
  href,
  onClick,
  className = "",
  color = "gold",
}: ShinyButtonProps) {
  const c = colorMap[color];

  const inner = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  const style = {
    "--shiny-highlight": c.highlight,
    "--shiny-subtle": c.subtle,
    "--shiny-fg": c.fg,
    "--shiny-bg": c.bg,
  } as React.CSSProperties;

  const baseClass = `shiny-btn ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} style={style}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass} style={style}>
      {inner}
    </button>
  );
}
