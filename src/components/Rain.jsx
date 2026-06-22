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
      height: Math.round(40 + r2 * 90),
      opacity: (0.12 + r * 0.3).toFixed(2),
    })
  }
  return out
}

export default function Rain({ count = 46, className = '' }) {
  const drops = useMemo(() => streaks(count), [count])
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
              'linear-gradient(to bottom, transparent, rgba(140,180,255,0.85), transparent)',
            animation: `rain-fall ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
