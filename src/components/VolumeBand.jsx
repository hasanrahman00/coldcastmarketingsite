import { motion, useReducedMotion } from 'framer-motion'
import { Boxes, Check, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import BrandLogo from './BrandLogo'
import { Eyebrow } from './SectionHeading'

const ARMS = [0, 60, 120, 180, 240, 300]

// The Coldcast swirl as currentColor linework, so it takes the pill's own text
// colour. The "Built in" pill reports a STATE and isn't clickable, so it must
// carry no lime: the full <Logo> tile would drop a lime-gradient fill and lime
// glow into it, next to the row's mint check.
function SwirlMark({ size = 13 }) {
  return (
    <svg viewBox="20 20 88 88" width={size} height={size} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="11" strokeLinecap="round" fill="none">
        {ARMS.map((d) => (
          <g key={d} transform={`rotate(${d} 64 64)`}>
            <path d="M64 56 C 71 46 86 48 92 60" />
            <circle cx="92" cy="60" r="6" fill="currentColor" stroke="none" />
          </g>
        ))}
      </g>
    </svg>
  )
}

// Per-card emoji tile colour — variety = contrast = attention.
const TINT = {
  brand: 'bg-brand/15 ring-brand/30',
  safe: 'bg-safe/15 ring-safe/30',
  cyan: 'bg-accent/15 ring-accent/30',
  violet: 'bg-violet/15 ring-violet/30',
  amber: 'bg-amber/15 ring-amber/30',
  magenta: 'bg-magenta/15 ring-magenta/30',
}

// The six things Coldcast does — the value props that replace a whole stack.
const POINTS = [
  { emoji: '🔄', tint: 'brand', title: 'Fresh & accurate data', desc: 'Scraped live on demand — never a stale, recycled database.' },
  { emoji: '✅', tint: 'safe', title: 'Real-time email validation', desc: 'Every address verified the moment it’s found.' },
  { emoji: '💧', tint: 'cyan', title: 'Waterfall enrichment', desc: 'Cascades across providers for maximum coverage.' },
  { emoji: '✍️', tint: 'violet', title: 'Intent & personalised copy', desc: 'Signal-led first lines, written for every lead.' },
  { emoji: '🛡️', tint: 'amber', title: '1000% safe scraping', desc: 'Your own browser, human pace — zero account bans.' },
  { emoji: '🔑', tint: 'magenta', title: 'One login, one bill', desc: 'Your whole GTM stack on a single subscription.' },
]

// Each row = a stack category, with the real tools one Coldcast login replaces.
const REPLACES = [
  { cat: 'Lead sourcing', logos: [{ n: 'LinkedIn', d: 'linkedin.com' }, { n: 'Apollo', d: 'apollo.io' }, { n: 'ZoomInfo', d: 'zoominfo.com' }] },
  { cat: 'Waterfall enrichment', logos: [{ n: 'Lusha', d: 'lusha.com' }, { n: 'ContactOut', d: 'contactout.com' }, { n: 'SalesQL', d: 'salesql.com' }] },
  { cat: 'Email verification', builtIn: true },
  { cat: 'Intent & AI cold copy', logos: [{ n: 'Claude', d: 'anthropic.com' }, { n: 'ChatGPT', d: 'openai.com' }, { n: 'DeepSeek', d: 'deepseek.com' }] },
  { cat: 'Account-safe scraping', builtIn: true },
  { cat: 'Outreach & sending', logos: [{ n: 'Instantly', d: 'instantly.ai' }, { n: 'Smartlead', d: 'smartlead.ai' }] },
]

export default function VolumeBand() {
  const reduce = useReducedMotion()
  return (
    <section className="relative px-6 py-16 sm:px-8 sm:py-24">
      <Reveal className="floating-panel relative mx-auto max-w-6xl overflow-hidden p-8 sm:p-12 lg:p-16">
        {/* violet→blue aurora bloom */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-24 h-[420px] w-[420px] rounded-full bg-violet/25 blur-[120px]" />
          <div className="absolute -bottom-24 right-[-6%] h-[420px] w-[520px] rounded-full bg-brand-light/20 blur-[120px]" />
        </div>

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — the claim */}
          <div>
            <Eyebrow>
              <Boxes size={13} className="text-accent" />
              One subscription
            </Eyebrow>

            <div className="relative mt-6 flex items-center gap-3 font-display text-6xl font-bold leading-none tracking-tight sm:text-7xl">
              <motion.span
                aria-hidden
                className="pointer-events-none absolute right-3 top-1/2 -z-10 h-20 w-20 -translate-y-1/2 rounded-full bg-violet/40 blur-2xl"
                animate={reduce ? {} : { opacity: [0.5, 0.95, 0.5], scale: [1, 1.18, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-ink/25 line-through decoration-2">6</span>
              <ArrowRight size={40} strokeWidth={2.5} className="text-violet" />
              <span className="bg-gradient-to-br from-brand via-violet to-brand-light bg-clip-text text-transparent">
                1
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              six tools → one subscription
            </p>

            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Replace your entire GTM stack.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Stop stitching together a sourcer, an enricher, a verifier and a copywriter.{' '}
              <span className="font-semibold text-ink">Coldcast is all of them — in one login.</span>
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {POINTS.map(({ emoji, tint, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-full gap-3 rounded-xl border border-hairline bg-white/[0.03] p-3.5 transition-colors duration-300 hover:border-hairline-strong hover:bg-white/[0.06]"
                >
                  <span className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[19px] leading-none ring-1 ${TINT[tint]}`}>
                    {emoji}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold leading-snug text-ink">{title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — what it replaces */}
          <div className="rounded-2xl border border-hairline bg-panel/60 p-6 backdrop-blur-sm sm:p-8">
            <div className="text-sm font-semibold text-ink">Your GTM stack, unbundled</div>
            <div className="mt-1 text-xs text-muted">Every tool one Coldcast login replaces</div>

            <ul className="mt-5 flex flex-col">
              {REPLACES.map((r, i) => (
                <motion.li
                  key={r.cat}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.04]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe/20 text-brand ring-1 ring-safe/30">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="flex-1 text-sm font-medium text-ink">{r.cat}</span>
                  {r.builtIn ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white/[0.05] px-2.5 py-1 text-[11px] font-semibold text-ink">
                      <SwirlMark size={13} />
                      Built in
                    </span>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      {r.logos.map((l) => (
                        <BrandLogo key={l.n} domain={l.d} name={l.n} size={24} />
                      ))}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="group mt-5 flex items-center justify-between rounded-xl bg-lime-gradient px-4 py-3.5 text-lime-ink shadow-lime-btn transition-shadow hover:shadow-lime-btn-hover focus-visible:ring-lime"
            >
              <span className="text-sm font-semibold">All in one Coldcast subscription</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
