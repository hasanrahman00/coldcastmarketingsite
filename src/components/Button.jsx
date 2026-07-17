// Reusable button / link. Renders as <a> by default (landing-page CTAs),
// or any element via the `as` prop.

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

const VARIANTS = {
  // Lime ACTION face — text/icons must be the lime ink (#131a00), never white
  // and never the dark green #062119, which goes muddy on lime.
  primary:
    'bg-lime-gradient text-lime-ink shadow-lime-btn hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lime-btn-hover',
  // Mint face — the secondary CTA beside a lime primary. Ink here is #062119,
  // NOT lime's #131a00: each fill has its own ink, and swapping them muddies.
  mint:
    'bg-brand-gradient text-[#062119] shadow-brand-btn hover:-translate-y-0.5 hover:brightness-105 hover:shadow-brand-btn-hover',
  ghost:
    'border border-hairline bg-white/[0.04] text-ink hover:bg-white/[0.07] hover:text-ink',
  // Inverted pill: light ink surface, so the label goes dark.
  light:
    'bg-ink text-bg2 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 hover:bg-ink/90',
  // Secondary CTA on the graphite body: quiet outlined pill that lights lime on hover.
  'outline-light':
    'border border-hairline-strong bg-transparent text-ink shadow-card hover:-translate-y-0.5 hover:border-lime/50 hover:bg-lime/[0.06]',
}

export default function Button({
  as: Comp = 'a',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60'

  return (
    <Comp className={`${base} ${SIZES[size]} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  )
}
