import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Loader2, Check, X, Minus, ShieldCheck, BadgeCheck } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import BrandLogo from './BrandLogo'
import Avatar from './Avatar'

// Illustrative waterfall run: providers are tried in order until a verified hit.
const PROVIDERS = [
  { name: 'Lusha', domain: 'lusha.com' },
  { name: 'SalesQL', domain: 'salesql.com' },
  { name: 'ContactOut', domain: 'contactout.com' },
]
const HIT = 1 // SalesQL returns the match
const CYCLE = HIT + 6 // animation steps before looping (incl. a hold on the result)

const LEAD = {
  name: 'Tiffanie K.',
  title: 'Chief Revenue Officer',
  company: 'illumenature candle co',
  email: 'tiffanie.k@illumenature.com',
  avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
}

function StatusPill({ state }) {
  const map = {
    idle: { cls: 'text-muted/40', icon: <span className="h-1.5 w-1.5 rounded-full bg-muted/30" />, label: 'Queued' },
    checking: { cls: 'text-accent', icon: <Loader2 size={13} className="animate-spin" />, label: 'Checking…' },
    miss: { cls: 'text-muted', icon: <X size={13} className="text-danger/70" />, label: 'No match' },
    hit: { cls: 'text-safe', icon: <Check size={13} />, label: 'Match found' },
    verified: { cls: 'text-safe', icon: <Check size={13} />, label: 'Verified' },
    skip: { cls: 'text-muted/50', icon: <Minus size={13} />, label: 'Skipped' },
  }
  const s = map[state] || map.idle
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${s.cls}`}>
      {s.icon}
      {s.label}
    </span>
  )
}

export default function WaterfallEnrichment() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setStep((s) => (s + 1) % CYCLE), 950)
    return () => clearInterval(id)
  }, [reduce])

  const providerState = (i) => {
    if (reduce) return i < HIT ? 'miss' : i === HIT ? 'hit' : 'skip'
    if (i < HIT) return step < i + 1 ? 'idle' : step === i + 1 ? 'checking' : 'miss'
    if (i === HIT) return step < i + 1 ? 'idle' : step === i + 1 ? 'checking' : 'hit'
    return step <= HIT + 1 ? 'idle' : 'skip'
  }
  const validate = reduce ? 'done' : step <= HIT + 1 ? 'idle' : step === HIT + 2 ? 'checking' : 'done'
  const verified = reduce || step >= HIT + 3

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow={
            <>
              <BadgeCheck size={13} className="text-accent" />
              Waterfall enrichment
            </>
          }
          title="Find the email other tools miss."
          subtitle="Coldcast cascades every lead through your enrichment sources in priority order and stops at the first verified hit — the highest match rate, with no credits wasted on misses."
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-xl">
          <div className="relative overflow-hidden rounded-3xl border border-hairline bg-panel/70 p-6 shadow-card backdrop-blur-md sm:p-8">
            <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet/15 blur-[90px]" />

            {/* Lead being enriched */}
            <div className="relative flex items-center gap-3 border-b border-hairline pb-5">
              <Avatar src={LEAD.avatar} name={LEAD.name} size={40} />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-ink">{LEAD.name}</div>
                <div className="truncate text-xs text-muted">
                  {LEAD.title} · {LEAD.company}
                </div>
              </div>
              <span className="ml-auto text-[11px] font-medium text-muted">
                {verified ? 'email found' : 'email: missing'}
              </span>
            </div>

            {/* Provider waterfall */}
            <div className="relative mt-5 flex flex-col gap-2.5">
              {PROVIDERS.map((p, i) => {
                const state = providerState(i)
                const dim = state === 'idle' || state === 'skip'
                return (
                  <div
                    key={p.name}
                    className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-300 ${
                      state === 'hit'
                        ? 'border-safe/30 bg-safe/[0.06]'
                        : state === 'checking'
                          ? 'border-accent/30 bg-accent/[0.05]'
                          : 'border-hairline bg-black/[0.02]'
                    } ${dim ? 'opacity-50' : 'opacity-100'}`}
                  >
                    <BrandLogo domain={p.domain} name={p.name} size={28} />
                    <span className="text-sm font-medium text-ink">{p.name}</span>
                    <span className="mx-2 hidden h-px flex-1 bg-gradient-to-r from-hairline to-transparent sm:block" />
                    <span className="ml-auto sm:ml-0">
                      <StatusPill state={state} />
                    </span>
                  </div>
                )
              })}

              {/* Validation step (the email-validator moat) */}
              <div
                className={`mt-1 flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-300 ${
                  validate === 'done'
                    ? 'border-safe/30 bg-safe/[0.06]'
                    : validate === 'checking'
                      ? 'border-accent/30 bg-accent/[0.05]'
                      : 'border-hairline bg-black/[0.02] opacity-50'
                }`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/5 text-accent">
                  <ShieldCheck size={16} />
                </span>
                <span className="text-sm font-medium text-ink">Email validation</span>
                <span className="mx-2 hidden h-px flex-1 bg-gradient-to-r from-hairline to-transparent sm:block" />
                <span className="ml-auto sm:ml-0">
                  <StatusPill state={validate === 'done' ? 'verified' : validate} />
                </span>
              </div>
            </div>

            {/* Result */}
            <div className="relative mt-5 h-12">
              {verified && (
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={reduce ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3 rounded-xl border border-safe/30 bg-safe/10 px-4 py-3"
                >
                  <BadgeCheck size={18} className="shrink-0 text-safe" />
                  <span className="truncate font-medium text-ink">{LEAD.email}</span>
                  <span className="ml-auto whitespace-nowrap text-xs font-semibold text-safe">
                    verified · deliverable
                  </span>
                </motion.div>
              )}
            </div>

            <p className="relative mt-4 text-center text-[11px] text-muted/60">
              You’re only charged for the verified hit — never the misses.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
