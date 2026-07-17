import Reveal from './Reveal'

// The section kicker pill. The wash + text colour VARIES per section (`tone`) so
// the eyebrows read as a set rather than one repeated lime chip — but the icon
// stays MINT on every one, the constant thread that ties them together. Every
// tone is a wash (~15% over graphite), never a solid fill: a mint icon on a solid
// accent is invisible, and the dark tint keeps both the mint glyph and the
// coloured text legible. Pass `icon` (a lucide component); it's rendered mint.
const EYEBROW_TONE = {
  lime: 'border-lime/40 bg-lime/15 text-lime',
  amber: 'border-amber/40 bg-amber/15 text-amber',
  cyan: 'border-magenta/40 bg-magenta/15 text-magenta',
  teal: 'border-violet/40 bg-violet/15 text-violet',
}

export function Eyebrow({ icon: Icon, tone = 'lime', children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide backdrop-blur ${EYEBROW_TONE[tone] ?? EYEBROW_TONE.lime} ${className}`}
    >
      {Icon && <Icon size={13} strokeWidth={2} className="shrink-0 text-accent" />}
      {children}
    </span>
  )
}

// Consistent section header: optional eyebrow (+ its icon), big title, subtitle.
export default function SectionHeading({
  eyebrow,
  eyebrowIcon,
  eyebrowTone = 'lime',
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
          <Eyebrow icon={eyebrowIcon} tone={eyebrowTone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`max-w-3xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${isCenter ? 'mx-auto' : ''}`}
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
