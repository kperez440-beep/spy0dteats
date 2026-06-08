export function AuroraBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Gold — upper left */}
      <div
        style={{
          position: "absolute",
          top: "-8%",
          left: "10%",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.16) 0%, transparent 68%)",
          filter: "blur(64px)",
          animation: "aurora-1 24s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      {/* Blue — center right */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "-8%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27,114,192,0.12) 0%, transparent 68%)",
          filter: "blur(72px)",
          animation: "aurora-2 30s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      {/* Teal — lower center */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "35%",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 68%)",
          filter: "blur(80px)",
          animation: "aurora-3 20s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      {/* Green — bottom left accent */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "-5%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 68%)",
          filter: "blur(60px)",
          animation: "aurora-1 36s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />
    </div>
  );
}
