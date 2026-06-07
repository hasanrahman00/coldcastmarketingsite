import Logo from './Logo'

// Logo tile + "Coldcast" wordmark with a small tagline subtitle.
export default function Wordmark({ size = 38, subtitle = 'LEAD EXPORTER', className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Logo size={size} />
      <span className="flex flex-col leading-none">
        <span className="text-[1.15rem] font-bold tracking-tight text-ink">Coldcast</span>
        {subtitle && (
          <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
            {subtitle}
          </span>
        )}
      </span>
    </span>
  )
}
