// Fine film-grain / noise overlay over the whole page. Kills gradient banding on
// the near-black base and adds an "expensive print" texture. Very low opacity.
const SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>"

export default function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,${SVG}")`,
        backgroundSize: '160px 160px',
      }}
    />
  )
}
