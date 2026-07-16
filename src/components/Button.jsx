// The Ledger button system. Primary = ink pill that sweeps cobalt on hover.
// Renders as <a> by default (landing-page CTAs), or any element via `as`.

const SIZES = {
  sm: 'h-10 px-5 text-[13px]',
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-8 text-[15px]',
}

const VARIANTS = {
  // Ink pill → cobalt on hover. The site's main CTA.
  primary:
    'bg-ink text-bg hover:bg-brand hover:text-white shadow-[0_10px_28px_-12px_rgba(23,20,16,0.5)] hover:shadow-brand-btn hover:-translate-y-0.5',
  // Hairline pill on paper.
  ghost:
    'border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-bg',
  // Paper pill for use on ink/dark sections.
  light:
    'bg-bg text-ink hover:bg-white shadow-[0_14px_36px_-14px_rgba(0,0,0,0.55)] hover:-translate-y-0.5',
  // Hairline pill for use on ink/dark sections.
  'outline-light':
    'border border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink',
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
    'group inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-tight transition-all duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60'

  return (
    <Comp className={`${base} ${SIZES[size]} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  )
}
