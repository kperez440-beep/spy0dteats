"use client";
import { useRef, useState, type ReactNode, type CSSProperties } from "react";

export function SpotlightCard({
  children,
  className = "",
  style,
  spotlightColor = "rgba(255,255,255,0.12)",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  spotlightColor?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseMove={onMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
        style={{
          opacity,
          background: `radial-gradient(circle 350px at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
