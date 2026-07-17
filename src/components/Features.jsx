import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { Radar, Sparkles, MousePointerClick, MailCheck, ShieldCheck, Building2, Check, X, Loader2, Layers } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'
import BrandLogo from './BrandLogo'

// Every tile is lime now — the icons are the section's accent, and the bento
// gets its variety from card SIZE, not colour. One faint lime bloom per card
// keeps the surfaces alive without turning into six flat lime fills.
const LIME_GLOW = 'rgba(204,255,0,0.16)'

function TileIcon({ icon: Icon }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-lime/25 bg-lime-gradient-soft text-lime">
      <Icon size={19} />
    </span>
  )
}

function Bloom() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl"
      style={{ background: LIME_GLOW }}
    />
  )
}

const INTENT_PILLS = ['Job change', 'New-in-role', 'Headcount +22%', 'Series C', 'Hiring 14 roles']

// Real waterfall providers — rendered as their own logos (BrandLogo falls back
// to initials if the logo host is unreachable, e.g. in a sandboxed preview).
const SOURCES = [
  { name: 'Lusha', domain: 'lusha.com' },
  { name: 'SalesQL', domain: 'salesql.com' },
  { name: 'ContactOut', domain: 'contactout.com' },
]

// Plausible-but-invented addresses — never real people. The chip cycles through
// them the way the live cards cycle rows: skeleton -> address, on a slow loop.
const VERIFIED_EMAILS = [
  'j.mercer@datastride.io',
  'p.okonkwo@nimbusflow.com',
  's.laurent@brightwharf.co',
  'a.venkat@corebloom.ai',
  'm.holt@steadyharbor.com',
  'r.delacroix@northpeak.com',
]

// The waterfall in motion. Each provider is checked in turn — some MISS (red ✗),
// the ones that hit resolve to MATCHED (mint ✓) — and once the cascade lands a
// hit the verified address drops out the bottom. Every state cross-fades; the
// whole loop is gated on inView + reduced-motion, and off-screen it rests on a
// clean all-matched state (no red ✗ sitting statically in the card).
//
// Each row is [Lusha, SalesQL, ContactOut]; every scenario has at least one hit,
// because the waterfall's whole promise is that it finds them.
const SCENARIOS = [
  [false, false, true],
  [true, false, false],
  [false, true, true],
  [true, false, true],
  [false, true, false],
]

// Fixed-width status so the row never reflows between checking / matched / no
// match. Loading spinner and the resolved verdict are stacked and cross-faded.
function SourceStatus({ loading, matched, reduce }) {
  return (
    <span className="relative inline-flex h-4 w-[74px] shrink-0 items-center justify-end">
      <span
        className={`absolute inset-0 flex items-center justify-end gap-1 text-muted transition-opacity duration-[500ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
          loading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Loader2 size={12} className={reduce ? '' : 'animate-spin'} /> checking
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-end gap-1 transition-opacity duration-[500ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
          loading ? 'opacity-0' : 'opacity-100'
        } ${matched ? 'text-accent' : 'text-danger'}`}
      >
        {matched ? <Check size={13} /> : <X size={13} />}
        {matched ? 'matched' : 'no match'}
      </span>
    </span>
  )
}

function WaterfallEnrichment() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '120px' })
  const live = inView && !reduce

  const [cycle, setCycle] = useState(0)
  const [srcReady, setSrcReady] = useState([true, true, true])
  const [emailReady, setEmailReady] = useState(true)

  useEffect(() => {
    if (!live) {
      setSrcReady([true, true, true])
      setEmailReady(true)
      return undefined
    }
    const timers = []
    const run = () => {
      timers.forEach(clearTimeout)
      timers.length = 0
      setSrcReady([false, false, false])
      setEmailReady(false)
      // Providers resolve top-to-bottom, then the verified address lands last —
      // finding and verifying it is the slow step, same as the hero's row stream.
      timers.push(setTimeout(() => setSrcReady((r) => [true, r[1], r[2]]), 800))
      timers.push(setTimeout(() => setSrcReady((r) => [r[0], true, r[2]]), 1350))
      timers.push(setTimeout(() => setSrcReady((r) => [r[0], r[1], true]), 1900))
      timers.push(setTimeout(() => setEmailReady(true), 2500))
    }
    run()
    const loop = setInterval(() => {
      setCycle((c) => c + 1)
      run()
    }, 4200)
    return () => {
      clearInterval(loop)
      timers.forEach(clearTimeout)
    }
  }, [live])

  // Off-screen / reduced-motion rests on all-matched; live runs the scenarios.
  const matches = live ? SCENARIOS[cycle % SCENARIOS.length] : [true, true, true]
  const email = VERIFIED_EMAILS[cycle % VERIFIED_EMAILS.length]

  return (
    <div ref={ref} className="relative mt-auto flex flex-col gap-2 pt-5">
      {SOURCES.map((s, i) => {
        const resolved = srcReady[i]
        const matched = matches[i]
        return (
          <div
            key={s.name}
            // A missed provider fades back once it resolves, so the hits carry
            // the eye.
            className={`flex items-center justify-between rounded-lg border border-hairline bg-white/[0.03] px-3 py-2 text-xs transition-opacity duration-[500ms] ${
              resolved && !matched ? 'opacity-55' : 'opacity-100'
            }`}
          >
            <span className="flex items-center gap-2">
              <BrandLogo domain={s.domain} name={s.name} size={20} />
              <span className="font-medium text-ink">{s.name}</span>
            </span>
            <SourceStatus loading={!resolved} matched={matched} reduce={reduce} />
          </div>
        )
      })}

      {/* The address the cascade produced — skeleton while "verifying", then the
          verified mint chip. Mint on purpose: it's the confirmed STATE the whole
          waterfall was chasing. */}
      <div className="mt-1 flex items-center justify-between gap-2 rounded-lg border border-brand/25 bg-brand/[0.07] px-3 py-2 text-xs">
        <span className="relative flex h-4 min-w-0 flex-1 items-center overflow-hidden">
          <span
            aria-hidden
            className={`absolute left-0 h-[9px] w-[72%] overflow-hidden rounded-full bg-white/[0.08] transition-opacity duration-[600ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
              emailReady ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span
              className="absolute inset-y-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)]"
              style={{ animation: reduce ? undefined : 'track-shimmer 2.4s linear infinite' }}
            />
          </span>
          <span
            className={`min-w-0 truncate font-display text-[11px] tracking-tight text-ink transition-opacity duration-[600ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
              emailReady ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {email}
          </span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 font-medium text-accent">
          <MailCheck size={13} /> verified
        </span>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Features"
          eyebrowIcon={Layers}
          eyebrowTone="cyan"
          title="Everything you need to build a clean, signal-rich list."
          subtitle="From the search you’re already running to a CRM-ready spreadsheet scored by buying intent."
        />

        <div className="mt-14 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:auto-rows-[minmax(168px,1fr)] lg:grid-flow-dense lg:grid-cols-3">
          {/* Intent — wide */}
          <Reveal className="lg:col-span-2" as="div">
            <SpotlightCard glow={LIME_GLOW} className="flex flex-col p-6">
              <Bloom />
              <TileIcon icon={Radar} />
              <h3 className="relative mt-4 text-base font-semibold text-ink">Buying-intent signals</h3>
              <p className="relative mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                Person + company signals — job changes, new-in-role, growth, hiring, funding — captured
                live at export.
              </p>
              <div className="relative mt-auto flex flex-wrap gap-2 pt-4">
                {INTENT_PILLS.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-2.5 py-1 text-[11px] font-medium text-lime"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    {p}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Enrichment — tall */}
          <Reveal className="lg:row-span-2" as="div">
            <SpotlightCard glow={LIME_GLOW} className="flex flex-col p-6">
              <Bloom />
              <TileIcon icon={Sparkles} />
              <h3 className="relative mt-4 text-base font-semibold text-ink">Multi-source enrichment</h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-muted">
                Verified emails, phones, and domains from Lusha, SalesQL, and ContactOut — one waterfall
                pass.
              </p>
              <WaterfallEnrichment />
            </SpotlightCard>
          </Reveal>

          {/* One-click export */}
          <Reveal as="div">
            <SpotlightCard glow={LIME_GLOW} className="flex flex-col p-5">
              <Bloom />
              <TileIcon icon={MousePointerClick} />
              <h3 className="relative mt-4 text-base font-semibold text-ink">One-click export</h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-muted">
                Capture the exact Sales Navigator search you’re viewing — no copy-paste.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Verified emails */}
          <Reveal as="div">
            <SpotlightCard glow={LIME_GLOW} className="flex flex-col p-5">
              <Bloom />
              <TileIcon icon={MailCheck} />
              <h3 className="relative mt-4 text-base font-semibold text-ink">Verified emails &amp; domains</h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-muted">
                Business-only, de-duplicated, validated before they land in your file.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Account-safe — wide */}
          <Reveal className="lg:col-span-2" as="div">
            <SpotlightCard glow={LIME_GLOW} className="flex h-full flex-col justify-center p-6">
              <Bloom />
              <div className="relative flex items-start gap-4">
                <TileIcon icon={ShieldCheck} />
                <div>
                  <h3 className="text-base font-semibold text-ink">Account-safe by design</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                    Your real session, your IP, human-paced — no headless bots, no stored credentials.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Company intelligence */}
          <Reveal as="div">
            <SpotlightCard glow={LIME_GLOW} className="flex flex-col p-5">
              <Bloom />
              <TileIcon icon={Building2} />
              <h3 className="relative mt-4 text-base font-semibold text-ink">Company intelligence</h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-muted">
                Website, size, industry, growth, and location on every lead.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
