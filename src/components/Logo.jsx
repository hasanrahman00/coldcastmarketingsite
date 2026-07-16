// Coldcast logo: a rounded-square tile with the lime gradient containing a
// dark "swirl" mark (6 arms, each rotated 60°). Used in nav, footer, favicon.
// Lime = ACTION/brand mark; the glyph ink is #131a00 (lime-ink), never #062119.

const ARMS = [0, 60, 120, 180, 240, 300]

export default function Logo({ size = 36, className = '' }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[28%] bg-lime-gradient shadow-[0_4px_18px_rgba(204,255,0,0.35)] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="20 20 88 88"
        width={size * 0.82}
        height={size * 0.82}
        fill="none"
        role="img"
      >
        <g stroke="#131a00" strokeWidth="11" strokeLinecap="round" fill="none">
          {ARMS.map((deg) => (
            <g key={deg} transform={`rotate(${deg} 64 64)`}>
              <path d="M64 56 C 71 46 86 48 92 60" />
              <circle cx="92" cy="60" r="6" fill="#131a00" stroke="none" />
            </g>
          ))}
        </g>
      </svg>
    </span>
  )
}
