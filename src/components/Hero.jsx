import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from './Button'
import { TRIAL_URL, DEMO_URL, CUSTOMER_COUNT } from '../lib/constants'

// ── The live ledger — rows enrich themselves and get stamped VERIFIED ────────
const LEADS = [
  { name: 'Tiffanie K.', title: 'Chief Revenue Officer', company: 'illumenature', email: 'tiffanie.k@illumenature.com' },
  { name: 'Tyler B.', title: 'Founder & CEO', company: 'Scalawags', email: 'tyler.b@scalawagswhitefish.com' },
  { name: 'Camille H.', title: 'Ops Manager', company: 'Trove', email: 'camille@trove.so' },
  { name: 'Jordan M.', title: 'VP Sales', company: 'Northwind Labs', email: 'jordan.m@northwindlabs.com' },
  { name: 'Priya S.', title: 'Head of Growth', company: 'Meridian', email: 'priya@meridian.io' },
]
const LOOP = LEADS.length + 3 // idle beats before the ledger resets

function Ledger() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(reduce ? LEADS.length : 0)
  const [exported, setExported] = useState(18932)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => {
      setStep((s) => (s + 1) % LOOP)
      setExported((n) => n + Math.floor(Math.random() * 3) + 1)
    }, 1100)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <div className="overflow-hidden rounded-xl border border-ink/15 bg-panel shadow-card">
      {/* File bar */}
      <div className="flex items-center justify-between border-b border-hairline bg-panel2 px-4 py-2.5">
        <span className="font-mono text-[11px] font-medium tracking-wide text-muted">coldcast_export.csv</span>
        <span className="flex items-center gap-4">
          <span className="hidden font-mono text-[11px] tabular-nums text-muted sm:inline">
            {exported.toLocaleString('en-US')} rows today
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-safe">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-safe opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-safe" />
            </span>
            Live
          </span>
        </span>
      </div>

      {/* Header row */}
      <div className="grid grid-cols-[1.1fr_1fr_1.4fr_auto] gap-3 border-b border-hairline px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted sm:grid-cols-[1fr_1fr_1fr_1.5fr_auto]">
        <span>Name</span>
        <span className="hidden sm:block">Title</span>
        <span>Company</span>
        <span>Work email</span>
        <span className="text-right">Status</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-hairline">
        {LEADS.map((l, i) => {
          const found = step > i
          return (
            <div
              key={l.name}
              className={`grid grid-cols-[1.1fr_1fr_1.4fr_auto] items-center gap-3 px-4 py-2.5 text-[13px] transition-colors duration-500 sm:grid-cols-[1fr_1fr_1fr_1.5fr_auto] ${
                found ? 'bg-transparent' : 'bg-panel2/50'
              }`}
            >
              <span className="truncate font-medium text-ink">{l.name}</span>
              <span className="hidden truncate text-muted sm:block">{l.title}</span>
              <span className="truncate text-muted">{l.company}</span>
              <span className="truncate font-mono text-[12px]">
                {found ? (
                  <motion.span
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-ink"
                  >
                    {l.email}
                  </motion.span>
                ) : (
                  <span className="text-muted/70">
                    finding<span className="animate-caret">_</span>
                  </span>
                )}
              </span>
              <span className="flex justify-end">
                {found ? (
                  <motion.span
                    initial={reduce ? false : { scale: 1.6, opacity: 0, rotate: 6 }}
                    animate={{ scale: 1, opacity: 1, rotate: -2 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                    className="stamp"
                  >
                    Verified
                  </motion.span>
                ) : (
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted/60">enriching…</span>
                )}
              </span>
            </div>
          )
        })}
      </div>

      {/* Footer strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-hairline bg-panel2 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
        <span>20,000 rows / day / account</span>
        <span className="hidden md:inline">Waterfall-enriched · catch-all cleaned</span>
        <span className="text-safe">0 bans on record</span>
      </div>
    </div>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] } }),
}

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="container-px">
        {/* Kicker */}
        <motion.p variants={rise} custom={0} initial={reduce ? false : 'hidden'} animate="show" className="kicker">
          Account-safe GTM suite&ensp;·&ensp;Tested by {CUSTOMER_COUNT} sales professionals
        </motion.p>

        {/* Headline — editorial serif, left-aligned */}
        <motion.h1
          variants={rise}
          custom={1}
          initial={reduce ? false : 'hidden'}
          animate="show"
          className="mt-6 max-w-4xl font-display text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-[4rem] lg:text-[4.9rem]"
        >
          The <em className="accent-em">safest</em> LinkedIn Sales&nbsp;Navigator scraper.
        </motion.h1>

        {/* Sub + CTAs */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            variants={rise}
            custom={2}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            Export up to 20,000 triple-verified leads a day — from your own browser, at human pace,
            with zero account bans. One subscription replaces your entire GTM stack.
          </motion.p>

          <motion.div variants={rise} custom={3} initial={reduce ? false : 'hidden'} animate="show" className="flex shrink-0 items-center gap-6">
            <Button as="a" href={TRIAL_URL} variant="primary" size="lg">
              Start free trial
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <a href={DEMO_URL} className="link-draw text-[15px] font-medium text-ink">
              Book a demo
            </a>
          </motion.div>
        </div>

        {/* The live ledger */}
        <motion.div variants={rise} custom={4} initial={reduce ? false : 'hidden'} animate="show" className="mt-14">
          <Ledger />
        </motion.div>
      </div>
    </section>
  )
}
