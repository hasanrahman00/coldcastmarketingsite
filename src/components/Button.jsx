// Reusable button / link. Renders as <a> by default (landing-page CTAs),
// or any element via the `as` prop.

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

const VARIANTS = {
  primary:
    'bg-brand-gradient text-white shadow-brand-btn hover:-translate-y-0.5 hover:bg-brand-gradient-vivid hover:shadow-brand-btn-hover',
  ghost:
    'border border-hairline bg-white/5 text-ink/90 backdrop-blur hover:bg-white/10 hover:text-white',
  light:
    'bg-white text-[#070512] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 hover:bg-white/95',
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
    'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60'

  return (
    <Comp className={`${base} ${SIZES[size]} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  )
}
