"use client";
import { useRef, useState, type ReactNode, type CSSProperties } from "react";

export function TiltCard({
  children,
  className = "",
  style,
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -intensity, y: x * intensity });
  };

  const onLeave = () => {
    setHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  const extraTransition = style?.transition
    ? style.transition.replace(/\btransform\b[^,]*/g, "").replace(/^,\s*|,\s*$/g, "").trim()
    : "";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovering ? "scale(1.015)" : "scale(1)"}`,
        transition: hovering
          ? `transform 0.12s ease-out${extraTransition ? `, ${extraTransition}` : ""}`
          : `transform 0.5s cubic-bezier(0.23,1,0.32,1)${extraTransition ? `, ${extraTransition}` : ""}`,
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
