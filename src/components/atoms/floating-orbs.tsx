export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="glow-orb animate-float-slow"
        style={{
          width: "500px",
          height: "500px",
          top: "-10%",
          right: "-5%",
          background: "hsl(189 94% 55% / 0.08)",
        }}
      />
      <div
        className="glow-orb animate-float-slower"
        style={{
          width: "400px",
          height: "400px",
          bottom: "10%",
          left: "-10%",
          background: "hsl(217 91% 60% / 0.06)",
        }}
      />
      <div
        className="glow-orb animate-float"
        style={{
          width: "300px",
          height: "300px",
          top: "40%",
          left: "60%",
          background: "hsl(189 94% 55% / 0.04)",
        }}
      />
    </div>
  )
}
