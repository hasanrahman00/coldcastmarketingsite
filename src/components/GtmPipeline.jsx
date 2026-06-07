import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Crosshair, Sparkles, Send } from 'lucide-react'
import Logo from './Logo'
import BrandLogo from './BrandLogo'
import Reveal from './Reveal'
import { Eyebrow } from './SectionHeading'

const TINT = {
  brand: { dot: 'bg-brand-light', text: 'text-brand-light', ring: 'ring-brand-light/50', glow: 'shadow-brand-btn' },
  violet: { dot: 'bg-violet', text: 'text-violet', ring: 'ring-violet/50', glow: 'shadow-glow-violet' },
  safe: { dot: 'bg-safe', text: 'text-safe', ring: 'ring-safe/50', glow: 'shadow-glow-safe' },
}

const STAGES = [
  {
    key: 'scrape',
    step: '01',
    title: 'Scrape',
    icon: Crosshair,
    tint: 'brand',
    caption: 'GTM automated prospecting — in your own browser, at human pace.',
    source: true,
    nodes: [{ name: 'Coldcast' }],
  },
  {
    key: 'enrich',
    step: '02',
    title: 'Enrich',
    icon: Sparkles,
    tint: 'violet',
    caption: 'Verified emails, phones, domains & company data — waterfalled.',
    nodes: [
      { name: 'Lusha', domain: 'lusha.com' },
      { name: 'SalesQL', domain: 'salesql.com' },
      { name: 'ContactOut', domain: 'contactout.com' },
      { name: 'OceanLeads', domain: 'ocean.io' },
      { name: 'Crunchbase', domain: 'crunchbase.com' },
    ],
  },
  {
    key: 'activate',
    step: '03',
    title: 'Activate',
    icon: Send,
    tint: 'safe',
    caption: 'Pushed straight into your outreach sequencer & CRM.',
    nodes: [
      { name: 'Instantly', domain: 'instantly.ai' },
      { name: 'Smartlead', domain: 'smartlead.ai' },
      { name: 'HubSpot', domain: 'hubspot.com' },
    ],
  },
]

function Connector({ reduce }) {
  return (
    <div className="flex items-center justify-center self-stretch py-1.5 lg:w-12 lg:flex-none lg:py-0">
      {/* mobile: vertical */}
      <div className="relative h-7 w-px overflow-hidden bg-gradient-to-b from-black/20 to-transparent lg:hidden">
        {!reduce && (
          <motion.span
            className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
            style={{ boxShadow: '0 0 8px 2px rgba(34,211,238,0.6)' }}
            animate={{ top: ['-10%', '110%'], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </div>
      {/* desktop: horizontal */}
      <div className="relative hidden h-px w-full bg-gradient-to-r from-hairline via-black/20 to-hairline lg:block">
        {!reduce &&
          [0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
              style={{ boxShadow: '0 0 8px 2px rgba(34,211,238,0.6)' }}
              animate={{ left: ['-8%', '108%'], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6, ease: 'linear' }}
            />
          ))}
      </div>
    </div>
  )
}

function StageCard({ stage, active }) {
  const tint = TINT[stage.tint]
  const Icon = stage.icon
  return (
    <div
      className={`relative flex-1 rounded-2xl border border-hairline bg-panel/70 p-5 backdrop-blur-sm transition-all duration-500 ${
        active ? `ring-1 ${tint.ring} ${tint.glow}` : 'shadow-none'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span className={`flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-brand-gradient-soft ${tint.text}`}>
            <Icon size={16} />
          </span>
          <span className="text-sm font-semibold text-ink">{stage.title}</span>
        </span>
        <span className="text-xs font-semibold tabular-nums text-muted/50">{stage.step}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-3">
        {stage.source ? (
          <span className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-3 py-2.5 text-sm font-semibold text-white shadow-brand-btn">
            <Logo size={18} />
            Coldcast
          </span>
        ) : (
          stage.nodes.map((n) => (
            <div key={n.name} className="flex w-[60px] flex-col items-center gap-1.5 text-center">
              <BrandLogo domain={n.domain} name={n.name} />
              <span className="text-[10px] font-medium leading-tight text-muted">{n.name}</span>
            </div>
          ))
        )}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">{stage.caption}</p>
    </div>
  )
}

export default function GtmPipeline() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setActive((v) => (v + 1) % STAGES.length), 2000)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <section className="relative px-6 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-7 flex flex-col items-center text-center">
          <Eyebrow>
            <Sparkles size={13} className="text-accent" />
            One automated GTM pipeline
          </Eyebrow>
          <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            From scrape to send — your whole stack, connected.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Coldcast sits at the top of your pipeline: it prospects, waterfall-enriches across your
            tools, and hands finished leads straight to your sequencer and CRM.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-bg2/60 p-4 shadow-card backdrop-blur-md sm:p-6">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-brand-light/15 blur-[90px]" />
              <div className="absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/12 blur-[90px]" />
              <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-safe/12 blur-[90px]" />
            </div>

            <div className="relative flex flex-col lg:flex-row lg:items-stretch">
              {STAGES.map((stage, i) => (
                <div key={stage.key} className="contents">
                  <StageCard stage={stage} active={active === i} />
                  {i < STAGES.length - 1 && <Connector reduce={reduce} />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
