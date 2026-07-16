import { useState } from 'react'

// Real brand logo on a graphite tile. Tries the Clearbit logo API first (best
// quality), falls back to the Google favicon service (near-universal coverage),
// then to initials if both fail (e.g. offline / sandboxed preview).
export default function BrandLogo({ domain, name, size = 36 }) {
  const [stage, setStage] = useState(0)
  const initials = name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()
  const src =
    stage === 0
      ? `https://logo.clearbit.com/${domain}`
      : `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
  return (
    <span
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-hairline bg-panel2 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.55)]"
      style={{ width: size, height: size }}
      title={name}
    >
      {stage >= 2 || !domain ? (
        <span className="text-[11px] font-bold text-ink">{initials}</span>
      ) : (
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setStage((s) => s + 1)}
          className="object-contain"
          style={{ width: size * 0.66, height: size * 0.66 }}
        />
      )}
    </span>
  )
}
