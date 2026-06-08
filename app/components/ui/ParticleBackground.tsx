"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delta: number;
  color: string;
}

const COLORS = ["#F0B429", "#06B6D4", "#10B981", "#1B72C0"];

export function ParticleBackground({ count = 55 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const mk = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.4 + 0.3,
      speed: Math.random() * 0.35 + 0.08,
      opacity: Math.random() * 0.45 + 0.08,
      delta: (Math.random() * 0.0015 + 0.0005) * (Math.random() > 0.5 ? 1 : -1),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const particles = Array.from({ length: count }, mk);
    let id: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y -= p.speed;
        p.opacity += p.delta;
        if (p.opacity < 0.06 || p.opacity > 0.55) p.delta *= -1;
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      id = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(id); ro.disconnect(); };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
