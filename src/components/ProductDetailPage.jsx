import { useState } from 'react'
import { useParams, useLocation, Navigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, X, Plus, Minus } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import Logo from './Logo'
import SectionHeading, { Eyebrow } from './SectionHeading'
import EmailVerifier from './EmailVerifier'
import { VISUALS } from './pageVisuals'
import { PRODUCT_PAGES } from '../lib/productPages'
import { ROLE_PAGES } from '../lib/rolePages'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

const PAGES = { ...PRODUCT_PAGES, ...ROLE_PAGES }

const ACCENT = {
  brand: { tile: 'bg-brand/15 ring-brand/30', text: 'text-brand-light', dot: 'bg-brand', line: 'from-brand', grad: 'from-brand to-brand-light', glow: 'rgba(79,124,245,0.18)' },
  violet: { tile: 'bg-violet/15 ring-violet/30', text: 'text-violet', dot: 'bg-violet', line: 'from-violet', grad: 'from-violet to-magenta', glow: 'rgba(167,139,250,0.18)' },
  cyan: { tile: 'bg-accent/15 ring-accent/30', text: 'text-accent', dot: 'bg-accent', line: 'from-accent', grad: 'from-accent to-brand-light', glow: 'rgba(34,211,238,0.16)' },
  safe: { tile: 'bg-safe/15 ring-safe/30', text: 'text-safe', dot: 'bg-safe', line: 'from-safe', grad: 'from-safe to-accent', glow: 'rgba(52,211,153,0.16)' },
  amber: { tile: 'bg-amber/15 ring-amber/30', text: 'text-amber', dot: 'bg-amber', line: 'from-amber', grad: 'from-amber to-magenta', glow: 'rgba(251,191,36,0.16)' },
  magenta: { tile: 'bg-magenta/15 ring-magenta/30', text: 'text-magenta', dot: 'bg-magenta', line: 'from-magenta', grad: 'from-magenta to-violet', glow: 'rgba(232,121,249,0.16)' },
}

function HeroBg({ accent }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10"
      style={{ backgroundImage: `radial-gradient(95% 75% at 50% -10%, ${accent.glow}, transparent 60%), radial-gradient(60% 50% at 85% 0%, rgba(34,211,238,0.09), transparent 55%), linear-gradient(180deg,#0a1020,#0a1020)` }}
    />
  )
}

function CtaRow({ center }) {
  return (
    <div className={`mt-8 flex flex-wrap items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <Button as="a" href={TRIAL_URL} variant="primary" size="lg">
        Start free trial
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
      </Button>
      <Button as="a" href={DEMO_URL} variant="outline-light" size="lg">Book a demo</Button>
    </div>
  )
}

function Badges({ badges, accent, center }) {
  if (!badges?.length) return null
  return (
    <div className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60 ${center ? 'justify-center' : ''}`}>
      {badges.map((b) => (
        <span key={b} className="inline-flex items-center gap-1.5"><Check size={15} className={accent.text} />{b}</span>
      ))}
    </div>
  )
}

function Hero({ data, accent, Visual }) {
  const reduce = useReducedMotion()
  const split = data.heroVariant === 'split' && Visual
  const isAgent = data.kind === 'agent'

  if (split) {
    return (
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <HeroBg accent={accent} />
        <div className="container-px relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal><Eyebrow><span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />{data.hero.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.1rem]">{data.hero.title}</h1>
            </Reveal>
            <Reveal delay={0.14}><p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">{data.hero.subtitle}</p></Reveal>
            <Reveal delay={0.2}><CtaRow /></Reveal>
            <Reveal delay={0.26}><Badges badges={data.hero.badges} accent={accent} /></Reveal>
          </div>
          <Reveal delay={0.15}><Visual accent={accent} /></Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden pb-14 pt-36 text-center sm:pt-44">
      <HeroBg accent={accent} />
      <div className="container-px relative">
        <Reveal className="flex justify-center">
          {isAgent ? (
            <div className="relative">
              <motion.span aria-hidden className="absolute inset-0 -z-10 rounded-3xl bg-brand/40 blur-2xl"
                animate={reduce ? {} : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.12, 1] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }} />
              <Logo size={64} className="!rounded-3xl" />
            </div>
          ) : (
            <span className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl leading-none ring-1 ${accent.tile}`}>{data.emoji}</span>
          )}
        </Reveal>
        <Reveal delay={0.05} className="mt-6 flex justify-center"><Eyebrow><span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />{data.hero.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.1}><h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">{data.hero.title}</h1></Reveal>
        <Reveal delay={0.15}><p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">{data.hero.subtitle}</p></Reveal>
        <Reveal delay={0.2} className="flex justify-center"><CtaRow center /></Reveal>
        <Reveal delay={0.25} className="flex justify-center"><Badges badges={data.hero.badges} accent={accent} center /></Reveal>
      </div>
    </section>
  )
}

// ── How it works ─────────────────────────────────────────────────────────────
function StepsTimeline({ how, accent }) {
  return (
    <ol className="relative mx-auto mt-14 max-w-2xl">
      <span aria-hidden className={`absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b ${accent.line} via-white/15 to-transparent`} />
      {how.steps.map((s, i) => (
        <motion.li key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }} className="relative flex gap-5 pb-8 last:pb-0">
          <span className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl leading-none ring-1 ${accent.tile}`}>{s.emoji}</span>
          <div className="pt-1.5">
            <div className="flex items-center gap-2"><span className={`text-xs font-bold tabular-nums ${accent.text}`}>{String(i + 1).padStart(2, '0')}</span><h3 className="text-base font-semibold text-ink">{s.title}</h3></div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}

function StepsRail({ how, accent }) {
  return (
    <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {how.steps.map((s, i) => (
        <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-hairline bg-white/[0.03] p-6">
          <span aria-hidden className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${accent.grad}`} />
          <div className="flex items-center justify-between">
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[22px] leading-none ring-1 ${accent.tile}`}>{s.emoji}</span>
            <span className={`font-display text-2xl font-bold ${accent.text} opacity-40`}>{String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3 className="mt-5 text-base font-semibold text-ink">{s.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

function Steps({ how, accent, variant }) {
  return (
    <section className="container-px py-20 sm:py-24">
      <SectionHeading eyebrow="How it works" title={how.heading} subtitle={how.subtitle} />
      {variant === 'rail' ? <StepsRail how={how} accent={accent} /> : <StepsTimeline how={how} accent={accent} />}
    </section>
  )
}

// ── Features ─────────────────────────────────────────────────────────────────
function FeatureCard({ f, accent, className = '' }) {
  return (
    <div className={`group rounded-2xl border border-hairline bg-white/[0.03] p-6 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.05] ${className}`}>
      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[22px] leading-none ring-1 ${accent.tile}`}>{f.emoji}</span>
      <h3 className="mt-5 text-base font-semibold text-ink">{f.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.desc}</p>
    </div>
  )
}

function Features({ features, accent, variant }) {
  const items = features.items
  return (
    <section className="container-px py-20 sm:py-24">
      <SectionHeading eyebrow="Features" title={features.heading} subtitle={features.subtitle} />
      {variant === 'bento' ? (
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <Reveal as="div" key={f.title} delay={(i % 3) * 0.05} className={i === 0 ? 'sm:col-span-2 lg:row-span-2' : ''}>
              <FeatureCard f={f} accent={accent} className={`h-full ${i === 0 ? 'bg-white/[0.05]' : ''}`} />
            </Reveal>
          ))}
        </div>
      ) : variant === 'list' ? (
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
          {items.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.06 }} className="flex gap-4 border-b border-hairline py-5">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl leading-none ring-1 ${accent.tile}`}>{f.emoji}</span>
              <div><h3 className="text-sm font-semibold text-ink">{f.title}</h3><p className="mt-1 text-[13px] leading-relaxed text-muted">{f.desc}</p></div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <Reveal as="div" key={f.title} delay={(i % 3) * 0.06}><FeatureCard f={f} accent={accent} className="h-full" /></Reveal>
          ))}
        </div>
      )}
    </section>
  )
}

function Stats({ stats, accent }) {
  return (
    <section className="container-px py-12">
      <div className="floating-panel mx-auto grid max-w-5xl grid-cols-2 gap-6 p-8 sm:p-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="text-center">
            <div className={`bg-gradient-to-br ${accent.grad} bg-clip-text font-display text-4xl font-bold tracking-tight text-transparent sm:text-5xl`}>{s.value}</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Benefits({ benefits, accent }) {
  return (
    <section className="container-px py-20 sm:py-24">
      <SectionHeading eyebrow="Why Coldcast" title={benefits.heading} />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {benefits.items.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-hairline bg-white/[0.03] p-6">
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl leading-none ring-1 ${accent.tile}`}>{b.emoji}</span>
              <h3 className="mt-4 text-base font-semibold text-ink">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{b.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Comparison({ comparison, accent }) {
  return (
    <section className="container-px py-20 sm:py-24">
      <SectionHeading eyebrow="The difference" title={comparison.heading} />
      <Reveal className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-hairline">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-white/[0.03] text-xs font-semibold uppercase tracking-wider text-muted">
          <div className="p-4" />
          <div className="p-4 text-center">Other tools</div>
          <div className={`p-4 text-center ${accent.text}`}>Coldcast</div>
        </div>
        {comparison.rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-t border-hairline text-sm">
            <div className="p-4 font-medium text-ink">{r.label}</div>
            <div className="flex items-center justify-center gap-1.5 p-4 text-muted">
              <X size={14} className="text-danger/70" /> <span className="hidden sm:inline">{r.them}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-4 font-medium text-ink">
              <Check size={14} className={accent.text} /> <span className="hidden sm:inline">{r.us}</span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

function Signature({ kind, accent }) {
  if (kind === 'verifier') {
    return (
      <section className="pt-4">
        <SectionHeading eyebrow="Try it free" title="Verify an address right now." subtitle="No login — runs in your browser." />
        <div className="mt-4"><EmailVerifier /></div>
      </section>
    )
  }
  return null
}

function Faq({ faq }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="container-px py-20 sm:py-24">
      <SectionHeading eyebrow="FAQ" title="Questions, answered." />
      <div className="mx-auto mt-12 max-w-2xl divide-y divide-hairline border-y border-hairline">
        {faq.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left" aria-expanded={isOpen}>
                <span className="text-sm font-semibold text-ink sm:text-base">{item.q}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline text-muted">{isOpen ? <Minus size={14} /> : <Plus size={14} />}</span>
              </button>
              <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Cta({ cta }) {
  return (
    <section className="container-px py-20 sm:py-28">
      <Reveal className="floating-panel relative mx-auto max-w-4xl overflow-hidden p-10 text-center sm:p-14">
        <div aria-hidden className="pointer-events-none absolute inset-0"><div className="absolute left-1/2 top-0 h-64 w-[640px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" /></div>
        <h2 className="relative mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">{cta.title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{cta.subtitle}</p>
        <div className="relative flex justify-center"><CtaRow center /></div>
      </Reveal>
    </section>
  )
}

export default function ProductDetailPage({ slug: slugProp }) {
  const params = useParams()
  const location = useLocation()
  const slug = slugProp || params.slug
  const data = PAGES[slug]
  if (!data) return <Navigate to={location.pathname.startsWith('/roles') ? '/roles' : '/products'} replace />

  const accent = ACCENT[data.color] || ACCENT.brand
  const Visual = VISUALS[slug]

  // Default middle-section order; pages can override with `order`.
  const order = data.order || ['how', 'stats', 'features', 'benefits', 'faq']
  const blocks = {
    visual: Visual && (
      <section key="visual" className="container-px py-12">
        <Reveal><Visual accent={accent} /></Reveal>
      </section>
    ),
    how: data.how && <Steps key="how" how={data.how} accent={accent} variant={data.howVariant} />,
    stats: data.stats?.length > 0 && <Stats key="stats" stats={data.stats} accent={accent} />,
    features: data.features && <Features key="features" features={data.features} accent={accent} variant={data.featuresVariant} />,
    benefits: data.benefits && <Benefits key="benefits" benefits={data.benefits} accent={accent} />,
    comparison: data.comparison && <Comparison key="comparison" comparison={data.comparison} accent={accent} />,
    signature: data.signature && <Signature key="signature" kind={data.signature} accent={accent} />,
    faq: data.faq?.length > 0 && <Faq key="faq" faq={data.faq} />,
  }

  return (
    <>
      <Hero data={data} accent={accent} Visual={Visual} />
      {order.map((k) => blocks[k]).filter(Boolean)}
      <Cta cta={data.cta} />
    </>
  )
}
