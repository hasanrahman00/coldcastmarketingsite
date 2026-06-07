// Low-amplitude SVG wave divider. Set `fill` to the color of the section it
// flows INTO so the two sections appear to blend. `flip` mirrors it vertically.
export default function WaveDivider({ fill = '#0b0a1f', flip = false, className = '' }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="h-10 w-full sm:h-16">
        <path
          d="M0,45 C 320,95 560,5 720,40 C 900,80 1160,100 1440,38 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
