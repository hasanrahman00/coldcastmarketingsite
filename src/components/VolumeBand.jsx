import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Boxes,
  Check,
  Droplets,
  KeyRound,
  MailCheck,
  PenLine,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react'
import Reveal from './Reveal'
import BrandLogo from './BrandLogo'
import Logo from './Logo'
import { Eyebrow } from './SectionHeading'

// The checklist fills on scroll-in, borrowing the live cards' cadence so the
// whole site ticks at one tempo. Same numbers as src/lib/rowStream.js — but NOT
// that hook: rowStream loops forever because it's showing a job that's actually
// running. This is a static list, and a checklist that periodically un-ticks
// itself reads as broken, not alive. So: once, on entry, then it stays done.
const CHECK_LOAD_MS = 700
const CHECK_STAGGER_MS = 260

// The "Built in" marks blink on a shared cycle, phase-shifted by row index the
// way TrustBar spreads its logo relay — the two rows are at index 2 and 4, so
// anything keyed on odd/even would leave them blinking in lockstep.
const MARK_CYCLE = 2.6

// The six things Coldcast does. Tiles are all mint on purpose. The old version
// gave each card its own `TINT`, but four of the six resolved to the same colour
// (`brand` and `safe` are both #35e0b8; `cyan` and `violet` land within ΔE ~2),
// so the "variety" was invisible and the emoji sitting in them ignored the tint
// entirely — 🔄 measured 2.44:1 against the panel. One mint family reads as a
// system rather than a rainbow, and matches the own-service nodes in
// GtmPipeline. Lime is not used here at all: this column is what you GET
// (state), the right column is what you DO (action).
const POINTS = [
  { Icon: RefreshCw, title: 'Fresh data', desc: 'Live from Sales Navigator, never bought.' },
  { Icon: MailCheck, title: 'Verified emails', desc: 'Checked as they’re found.' },
  { Icon: Droplets, title: 'Waterfall enrichment', desc: 'Cascades until it finds them.' },
  { Icon: PenLine, title: 'Intent & AI copy', desc: 'Signal-led first lines.' },
  // No ban claim here. Safety.jsx hedges that exact number ("our track record —
  // not a guarantee") and renders directly below this section, so an absolute
  // promise would be walked back four seconds later in the same scroll.
  { Icon: ShieldCheck, title: 'Account-safe scraping', desc: 'Your browser, human pace.' },
  { Icon: KeyRound, title: 'One login, one bill', desc: 'Your whole stack, one line item.' },
]

// Each row = a stack category, with the real tools one Coldcast login replaces.
const REPLACES = [
  { cat: 'Lead sourcing', logos: [{ n: 'LinkedIn', d: 'linkedin.com' }, { n: 'Apollo', d: 'apollo.io' }, { n: 'ZoomInfo', d: 'zoominfo.com' }] },
  { cat: 'Waterfall enrichment', logos: [{ n: 'Lusha', d: 'lusha.com' }, { n: 'ContactOut', d: 'contactout.com' }, { n: 'SalesQL', d: 'salesql.com' }] },
  { cat: 'Email verification', builtIn: true },
  { cat: 'Intent & AI copy', logos: [{ n: 'Claude', d: 'anthropic.com' }, { n: 'ChatGPT', d: 'openai.com' }, { n: 'DeepSeek', d: 'deepseek.com' }] },
  { cat: 'Account-safe scraping', builtIn: true },
  { cat: 'Outreach & sending', logos: [{ n: 'Instantly', d: 'instantly.ai' }, { n: 'Smartlead', d: 'smartlead.ai' }] },
]

// One checklist tick. Lime, because a tick is the row being granted to you — and
// the six of them walk the eye down to the lime CTA they lead to.
//
// The glyph is `lime-ink` (#131a00) and it CROSS-FADES on opacity, never on
// colour. That's deliberate: lime sits at luminance 0.84, so a tween from any
// light colour toward #131a00 would drag the glyph through the whole 1.2–4.5:1
// dead zone on its way. White on lime is 1.18:1 and mint on lime is 1.43:1 —
// both invisible. #131a00 on lime is 15.2:1. There is one legible ink here.
function CheckChip({ done, reduce }) {
  return (
    <span
      className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-[600ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
        done
          ? 'bg-lime-gradient shadow-[0_0_14px_rgba(204,255,0,0.45)]'
          : 'bg-lime/10 ring-1 ring-inset ring-lime/30'
      }`}
    >
      {/* Pending: a lime dot pinging in the empty chip. `pill-pulse` is already
          the site's lime ring ping, so this reuses it rather than minting a
          third pulse of its own. */}
      <span
        aria-hidden
        className={`absolute h-1.5 w-1.5 rounded-full bg-lime transition-opacity duration-[600ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
          done ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ animation: reduce || done ? undefined : 'pill-pulse 1.8s ease-in-out infinite' }}
      />
      <Check
        size={13}
        strokeWidth={3}
        className={`relative text-lime-ink transition-opacity duration-[600ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
          done ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  )
}

export default function VolumeBand() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  // `once` so the ticks latch: re-running the fill every time the section
  // re-enters would un-tick a finished list.
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [checksIn, setChecksIn] = useState(0)

  useEffect(() => {
    if (reduce) {
      setChecksIn(REPLACES.length)
      return undefined
    }
    if (!inView) return undefined
    const timers = REPLACES.map((_, i) =>
      setTimeout(() => setChecksIn((n) => Math.max(n, i + 1)), CHECK_LOAD_MS + i * CHECK_STAGGER_MS)
    )
    return () => timers.forEach(clearTimeout)
  }, [inView, reduce])

  return (
    <section ref={ref} className="relative px-6 py-16 sm:px-8 sm:py-24">
      <Reveal className="floating-panel relative mx-auto max-w-6xl overflow-hidden p-8 sm:p-12 lg:p-16">
        {/* teal→mint aurora bloom */}
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
                transition={{ duration: 3.9, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-ink/25 line-through decoration-2">6</span>
              <ArrowRight size={40} strokeWidth={2.5} className="text-brand" />
              <span className="bg-gradient-to-br from-brand via-violet to-brand-light bg-clip-text text-transparent">
                1
              </span>
            </div>

            {/* The kicker line that used to sit here ("six tools → one
                subscription") was a verbatim transcript of the glyphs above it,
                and the paragraph below it was the right-hand checklist written
                out as prose. The lockup and the logo grid already say both. */}
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Replace your entire GTM stack.
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {POINTS.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
                  className="group flex h-full gap-3 rounded-xl border border-hairline bg-white/[0.03] p-3.5 transition-colors duration-300 hover:border-brand/30 hover:bg-white/[0.06]"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-brand-gradient-soft text-accent">
                    <Icon size={18} strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold leading-snug text-ink">{title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — what it replaces. Mint names the row, lime ticks it: the
              same split the nav submenus and the GTM pipeline steps use. */}
          <div className="rounded-2xl border border-hairline bg-panel/60 p-6 backdrop-blur-sm sm:p-8">
            {/* The sub that sat under this ("Every tool one Coldcast login
                replaces") restated the header, and the six rows below restate it
                again with actual logos. */}
            <div className="text-sm font-semibold text-accent">Your GTM stack, unbundled</div>

            <ul className="mt-5 flex flex-col">
              {REPLACES.map((r, i) => (
                <motion.li
                  key={r.cat}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.75, delay: 0.1 + i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.04]"
                >
                  <CheckChip done={i < checksIn} reduce={reduce} />
                  <span className="flex-1 text-sm font-medium text-accent">{r.cat}</span>
                  {r.builtIn ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand/[0.08] px-2.5 py-1 text-[11px] font-semibold text-accent">
                      {/* The real mark, not a hand-drawn copy of it. This pill
                          used to render a local `SwirlMark` — thick strokes and
                          tip dots, the geometry that got rejected for reading as
                          a blob. Logo.jsx is the spec; import it.

                          The blink lives on a wrapper, not on <Logo>, because
                          Logo takes only `size`/`className` — an inline style
                          passed to it would be silently dropped. The wrapper
                          also carries the per-pill delay, so the two "Built in"
                          rows blink in turn instead of in unison. */}
                      <span
                        className="inline-flex"
                        style={{
                          animation: reduce
                            ? undefined
                            : `mark-blink ${MARK_CYCLE}s ease-in-out ${(
                                (i / REPLACES.length) *
                                MARK_CYCLE
                              ).toFixed(2)}s infinite`,
                        }}
                      >
                        <Logo size={13} />
                      </span>
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
              <span className="text-sm font-semibold">See Coldcast pricing</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
