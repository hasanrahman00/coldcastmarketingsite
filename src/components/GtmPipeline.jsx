import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, Send, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import BrandLogo from './BrandLogo'
import Reveal from './Reveal'
import { Eyebrow } from './SectionHeading'

// Enrich + Activate stacks — recognizable GTM tools with verified domains
// (logos resolve via Clearbit, with a favicon fallback in BrandLogo).
const ENRICH = [
  { name: 'Lusha', domain: 'lusha.com' },
  { name: 'SalesQL', domain: 'salesql.com' },
  { name: 'ContactOut', domain: 'contactout.com' },
  { name: 'Crunchbase', domain: 'crunchbase.com' },
]
const ACTIVATE = [
  { name: 'Instantly', domain: 'instantly.ai' },
  { name: 'Smartlead', domain: 'smartlead.ai' },
  { name: 'Lemlist', domain: 'lemlist.com' },
  { name: 'HubSpot', domain: 'hubspot.com' },
  { name: 'Salesforce', domain: 'salesforce.com' },
]

const TINT = {
  violet: { icon: 'text-violet', ring: 'ring-violet/40', glow: 'shadow-glow-violet' },
  safe: { icon: 'text-safe', ring: 'ring-safe/40', glow: 'shadow-glow-safe' },
}

function Connector({ reduce }) {
  return (
    <div className="relative flex h-12 w-px items-stretch justify-center overflow-visible">
      <div className="relative h-full w-px overflow-hidden bg-gradient-to-b from-white/25 to-white/5">
        {!reduce && (
          <motion.span
            className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
            style={{ boxShadow: '0 0 10px 2px rgba(34,211,238,0.7)' }}
            animate={{ top: ['-10%', '110%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </div>
      <ChevronDown size={16} className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-muted/60" />
    </div>
  )
}

function Stack({ nodes }) {
  return (
    <div className="mt-4 flex flex-wrap items-start justify-center gap-x-4 gap-y-3">
      {nodes.map((n) => (
        <div key={n.name} className="flex w-[62px] flex-col items-center gap-1.5 text-center">
          <BrandLogo domain={n.domain} name={n.name} size={38} />
          <span className="text-[10px] font-medium leading-tight text-muted">{n.name}</span>
        </div>
      ))}
    </div>
  )
}

function StageCard({ step, title, icon: Icon, tint, active, children, caption }) {
  const t = TINT[tint]
  return (
    <div
      className={`relative w-full max-w-md rounded-2xl border border-hairline bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-500 ${
        active ? `ring-1 ${t.ring} ${t.glow}` : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span className={`flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-brand-gradient-soft ${t.icon}`}>
            <Icon size={16} />
          </span>
          <span className="text-sm font-semibold text-ink">{title}</span>
        </span>
        <span className="text-xs font-semibold tabular-nums text-muted/50">{step}</span>
      </div>
      {children}
      <p className="mt-4 text-center text-xs leading-relaxed text-muted">{caption}</p>
    </div>
  )
}

export default function GtmPipeline() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setActive((v) => (v + 1) % 3), 2200)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <section className="relative px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-10 flex flex-col items-center text-center">
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
          <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-bg2/60 px-4 py-10 shadow-card backdrop-blur-md sm:px-8">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-brand-light/15 blur-[90px]" />
              <div className="absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/12 blur-[90px]" />
              <div className="absolute bottom-0 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-safe/12 blur-[90px]" />
            </div>

            <div className="relative flex flex-col items-center">
              {/* Coldcast — the source, in focus */}
              <div className="relative w-full max-w-md">
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-brand/25 blur-2xl" />
                <div
                  className={`relative flex items-center gap-4 rounded-2xl border-2 border-brand/40 bg-white/[0.05] p-5 backdrop-blur-sm transition-all duration-500 ${
                    active === 0 ? 'ring-1 ring-brand-light/50 shadow-brand-btn' : ''
                  }`}
                >
                  <Logo size={48} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold text-ink">Coldcast</span>
                      <span className="rounded-full bg-brand/25 px-2 py-0.5 text-[10px] font-semibold text-brand-light">01 · Scrape</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      GTM prospecting in your own browser, at human pace.
                    </p>
                  </div>
                </div>
              </div>

              <Connector reduce={reduce} />

              <StageCard step="02" title="Enrich" icon={Sparkles} tint="violet" active={active === 1} caption="Verified emails, phones, domains & company data — waterfalled.">
                <Stack nodes={ENRICH} />
              </StageCard>

              <Connector reduce={reduce} />

              <StageCard step="03" title="Activate" icon={Send} tint="safe" active={active === 2} caption="Pushed straight into your outreach sequencer & CRM.">
                <Stack nodes={ACTIVATE} />
              </StageCard>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
