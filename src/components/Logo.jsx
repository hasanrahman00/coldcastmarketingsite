// Coldcast logo — the brand lockup, specified exactly by the user:
//
//   32x32 viewBox · lime #ccff00 tile at rx 8 · six arms sweeping out from the
//   centre hub · stroke #0a0a0a at 2.4, round caps · no tip dots.
//
// The tile is the <rect> INSIDE the svg, so this component needs no wrapper
// background. Keep it identical everywhere it appears: nav, footer, the hero
// dashboard rail, public/favicon.svg, public/favicon-square.svg, the OG card and
// the standalone privacy/terms pages. Change one, change all of them.
const ARMS = [0, 60, 120, 180, 240, 300]
const ARM = 'M16 16 C16 10.5 19 8 23.5 8'

export default function Logo({ size = 36, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <rect width="32" height="32" rx="8" fill="#ccff00" />
      <g stroke="#0a0a0a" strokeWidth="2.4" strokeLinecap="round" fill="none">
        {ARMS.map((deg) => (
          <path key={deg} d={ARM} transform={deg ? `rotate(${deg} 16 16)` : undefined} />
        ))}
      </g>
    </svg>
  )
}
