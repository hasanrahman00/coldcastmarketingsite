import { motion, useReducedMotion } from 'framer-motion'

// Compact page header for sub-pages (Products, Roles) — graphite hero with a mint wash.
export default function PageHero({ eyebrow, title, subtitle, children }) {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden pb-10 pt-36 sm:pb-14 sm:pt-44" style={{ backgroundColor: '#0f1214' }}>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(100% 80% at 50% -20%, rgba(53,224,184,0.16), transparent 60%), radial-gradient(70% 60% at 85% 0%, rgba(34,211,238,0.12), transparent 55%), linear-gradient(180deg, #121517, #0f1214)',
        }}
      />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="container-px relative text-center"
      >
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent shadow-sm ring-1 ring-white/5 backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mx-auto mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink/65 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex items-center justify-center gap-3">{children}</div>}
      </motion.div>
    </section>
  )
}
