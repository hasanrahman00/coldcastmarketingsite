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
    'border border-hairline bg-black/[0.04] text-ink/90 hover:bg-black/[0.07] hover:text-ink',
  light:
    'bg-white text-[#0c1228] shadow-[0_10px_30px_-8px_rgba(20,30,80,0.35)] hover:-translate-y-0.5 hover:bg-white/90',
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
