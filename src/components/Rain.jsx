import { useMemo } from 'react'

// Subtle falling-rain effect — thin vertical light streaks drifting downward.
// Deterministic (no Math.random in render churn): seeded from the index.
function streaks(count) {
  const out = []
  for (let i = 0; i < count; i += 1) {
    const seed = (i * 9301 + 49297) % 233280
    const r = seed / 233280
    const r2 = ((i * 4099 + 7919) % 104729) / 104729
    out.push({
      left: (r * 100).toFixed(2),
      delay: (r2 * 4).toFixed(2),
      duration: (2.6 + r * 2.8).toFixed(2),
      height: Math.round(46 + r2 * 100),
      opacity: (0.22 + r * 0.4).toFixed(2),
    })
  }
  return out
}

export default function Rain({ count = 60, className = '' }) {
  const drops = useMemo(() => streaks(count), [count])
  // Light theme: the rain streaks were a dark-hero effect — neutralised.
  // (Floating glass squares in the hero replace this ambience.)
  return null
  // eslint-disable-next-line no-unreachable
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden ${className}`}
    >
      {drops.map((d, i) => (
        <span
          key={i}
          className="absolute top-0 w-px rounded-full"
          style={{
            left: `${d.left}%`,
            height: `${d.height}px`,
            opacity: d.opacity,
            background:
              'linear-gradient(to bottom, transparent, rgba(150,190,255,0.95), transparent)',
            animation: `rain-fall ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
