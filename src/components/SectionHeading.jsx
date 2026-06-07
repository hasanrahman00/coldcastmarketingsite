import Reveal from './Reveal'

// Small pill used above section titles + hero.
export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-hairline bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-muted backdrop-blur ${className}`}
    >
      {children}
    </span>
  )
}

// Consistent section header: optional eyebrow, big title, optional subtitle.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center'
  return (
    <div
      className={`flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${isCenter ? 'mx-auto' : ''}`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${isCenter ? 'mx-auto' : ''}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
