import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Database, Filter, Linkedin, Loader2, MailCheck, Rocket, Send } from 'lucide-react'
import Avatar from './Avatar'
import Logo from './Logo'
import StreamCell from './StreamCell'
import { TRIAL_URL, DEMO_URL, CUSTOMER_COUNT, SAMPLE_LEADS } from '../lib/constants'
import { TICK_MS, useRowStream } from '../lib/rowStream'

// ── Dashboard mock content ───────────────────────────────────
// A screenshot of a scrape mid-flight: rows climb Queued -> Enriching -> VERIFIED
// as the run streams in, and the enrichment (Email) column resolves last — the
// slow step of the real run. In mono the accents are gone, so the story is told
// by the status pills + the live skeleton -> value cross-fade alone.

const RAIL_GROUPS = [
  {
    label: 'Scrapers',
    items: [
      { name: 'Sales Navigator', icon: Linkedin },
      { name: 'Apollo', icon: Rocket },
      { name: 'ZoomInfo', icon: Database },
    ],
  },
  {
    label: 'Enrichment',
    items: [
      { name: 'Waterfall', icon: Filter },
      { name: 'Email Verify', icon: MailCheck },
    ],
  },
  {
    label: 'Outreach',
    items: [{ name: 'AI SDR', icon: Send }],
  },
]

// Flat rail order — the single source for both the entrance stagger and the
// pipeline highlight.
const RAIL_ORDER = RAIL_GROUPS.flatMap((g) => g.items.map((i) => i.name))

const RAIL_INDEX = RAIL_ORDER.reduce((acc, name, i) => ({ ...acc, [name]: i }), {})

// The highlight walks EVERY product in the suite, top to bottom, so each one
// gets its moment lit. Derived from RAIL_ORDER rather than hand-listed.
const PIPELINE = RAIL_ORDER

// Status pills, in pipeline order. A lead visibly changes state as it resolves.
// Label and colour live together so an unrecognised state falls through to amber
// *as* a warning instead of quietly reading "verified".
const STATUSES = {
  queued: { label: 'Queued', className: 'border-hairline bg-black/[0.03] text-faint' },
  enriching: { label: 'Enriching', spin: true, className: 'border-hairline-strong bg-black/[0.05] text-ink' },
  verified: { label: 'Verified', check: true, className: 'border-hairline-strong bg-panel2 text-ink' },
}
const STATUS_FALLBACK = { label: 'Needs review', className: 'border-amber/30 bg-amber/10 text-amber' }

// The five visible slots, bottom row newest. A lead enters at the bottom as
// Queued and climbs to Verified at the top, so the run reads top-to-bottom as
// done -> doing -> waiting.
const ROW_STATUS = ['verified', 'verified', 'verified', 'enriching', 'queued']

const TOTAL_LEADS = 2000

// ── Motion tempo ─────────────────────────────────────────────
// One scale for the whole card, so nothing feels out of step. Every ambient
// animation runs on cubic-bezier(.22,.61,.36,1) — a smooth cubic ease-out.
const RAIL_LAG_MS = 900
const CHIP_LAG_MS = 2900
const CHIP_LOAD_MS = 700
const ROW_COUNT = 5

// Drives the live scrape. Every tick the lead list rotates by one, so each lead
// climbs Queued -> Enriching -> VERIFIED and a new one enters at the bottom —
// and the counter climbs with it. Returns a frozen mid-run state under
// prefers-reduced-motion (no timer at all, not just a paused one).
function useLiveScrape(reduce, intervalMs = TICK_MS) {
  const [tick, setTick] = useState(0)
  const [railTick, setRailTick] = useState(0)
  const [chipTick, setChipTick] = useState(0)
  const [chipLoading, setChipLoading] = useState(false)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setTick((t) => t + 1), intervalMs)
    return () => clearInterval(id)
  }, [reduce, intervalMs])

  // Rows resolve one after another; each row's email lands last. Same hook the
  // Live Export table uses.
  const { rowReady, emailReady } = useRowStream(!reduce, tick, ROW_COUNT)

  useEffect(() => {
    if (reduce || tick === 0) return undefined
    const rail = setTimeout(() => setRailTick(tick), RAIL_LAG_MS)
    const chipStart = setTimeout(() => setChipLoading(true), CHIP_LAG_MS - CHIP_LOAD_MS)
    const chipDone = setTimeout(() => {
      setChipTick(tick)
      setChipLoading(false)
    }, CHIP_LAG_MS)

    return () => {
      clearTimeout(rail)
      clearTimeout(chipStart)
      clearTimeout(chipDone)
    }
  }, [tick, reduce])

  const rows = Array.from({ length: ROW_COUNT }, (_, i) => {
    const lead = SAMPLE_LEADS[(tick + i) % SAMPLE_LEADS.length]
    return { lead, status: ROW_STATUS[i] }
  })
  // Counter climbs one lead per tick and eases off as it nears the total.
  const scraped = Math.min(1362 + tick, TOTAL_LEADS - 3)
  const activeProduct = reduce ? PIPELINE[0] : PIPELINE[railTick % PIPELINE.length]
  const verifiedLead = SAMPLE_LEADS[(chipTick + 2) % SAMPLE_LEADS.length]
  return {
    rows,
    scraped,
    pct: (scraped / TOTAL_LEADS) * 100,
    activeProduct,
    verifiedLead,
    chipLoading,
    rowReady,
    emailReady,
  }
}

// Shimmering placeholder shown while a value resolves. `w` is a Tailwind width
// class — full literal strings only, since JIT can't see a concatenated one.
function Skeleton({ w = 'w-full', className = '' }) {
  return (
    <span
      aria-hidden
      className={`relative inline-block h-[9px] overflow-hidden rounded-full bg-black/[0.07] align-middle ${w} ${className}`}
    >
      <span
        className="absolute inset-y-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.10),transparent)]"
        style={{ animation: 'track-shimmer 2.4s linear infinite' }}
      />
    </span>
  )
}

// Table columns for the wide console. `vis` hides the middle columns as the
// viewport narrows; the grid template below drops the matching track at the same
// breakpoint so nothing is left with an empty column.
const COLUMNS = [
  { key: 'name', label: 'Name', vis: '' },
  { key: 'title', label: 'Title', vis: 'hidden sm:block' },
  { key: 'company', label: 'Company', vis: 'hidden lg:block' },
  { key: 'domain', label: 'Domain', vis: 'hidden lg:block' },
  { key: 'linkedin', label: 'LinkedIn URL', vis: 'hidden lg:block' },
  { key: 'email', label: 'Email', vis: '' },
  { key: 'status', label: 'Status', vis: 'justify-self-end text-right' },
]
// base (mobile) = Name / Email / Status · sm = + Title · lg = all seven.
const ROW_GRID =
  'grid grid-cols-[1.5fr_1.6fr_auto] gap-3 sm:grid-cols-[1.2fr_1.3fr_1.6fr_auto] lg:grid-cols-[1.15fr_1.15fr_1fr_1fr_1.35fr_1.4fr_auto]'

// Slow-drifting white dots layered over the static grid. Positions are FIXED
// (never Math.random) so the SSG prerender and the client render agree — a
// random layout would hydration-mismatch and flicker. Each dot is a white bead
// with a soft shadow so it reads on the white page, and rides one of the drift/
// float keyframes already defined in tailwind.config.js.
const FLOAT_DOTS = [
  { left: '6%', top: '16%', size: 6, anim: 'drift 24s ease-in-out infinite', delay: '0s' },
  { left: '13%', top: '44%', size: 3, anim: 'float-slow 13s ease-in-out infinite', delay: '2s' },
  { left: '9%', top: '72%', size: 5, anim: 'drift-alt 27s ease-in-out infinite', delay: '1s' },
  { left: '23%', top: '24%', size: 4, anim: 'float 9s ease-in-out infinite', delay: '3s' },
  { left: '30%', top: '82%', size: 3, anim: 'drift 20s ease-in-out infinite', delay: '.5s' },
  { left: '43%', top: '12%', size: 5, anim: 'float-slow 15s ease-in-out infinite', delay: '1.6s' },
  { left: '50%', top: '90%', size: 4, anim: 'drift-alt 23s ease-in-out infinite', delay: '2.4s' },
  { left: '58%', top: '20%', size: 3, anim: 'float 8s ease-in-out infinite', delay: '.9s' },
  { left: '69%', top: '74%', size: 6, anim: 'drift 25s ease-in-out infinite', delay: '1.2s' },
  { left: '77%', top: '34%', size: 4, anim: 'float-slow 12s ease-in-out infinite', delay: '3.4s' },
  { left: '85%', top: '60%', size: 5, anim: 'drift-alt 28s ease-in-out infinite', delay: '.3s' },
  { left: '91%', top: '20%', size: 3, anim: 'float 10s ease-in-out infinite', delay: '2.1s' },
  { left: '94%', top: '78%', size: 4, anim: 'drift 21s ease-in-out infinite', delay: '1.8s' },
  { left: '37%', top: '54%', size: 3, anim: 'float-slow 11s ease-in-out infinite', delay: '4s' },
]

// A looping demo cursor that glides across the console — to Export CSV, a rail
// product, then a lead row — pressing at each stop, so the mock reads as "someone
// is using it right now". Positions are % of the console so it tracks any width.
// Motion-gated: nothing renders under prefers-reduced-motion.
function DemoCursor({ reduce }) {
  if (reduce) return null
  // CSS-driven (not framer): framer can't reliably keyframe left/top between
  // percentages. The path + press + ring keyframes live in index.css.
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-20 hidden sm:block"
      style={{ left: '52%', top: '60%', animation: 'demo-cursor 9.5s ease-in-out infinite' }}
    >
      {/* click ripple — pulses at each stop */}
      <span
        className="absolute -left-2 -top-2 h-5 w-5 rounded-full border border-ink/50"
        style={{ animation: 'demo-cursor-ring 9.5s ease-out infinite' }}
      />
      {/* cursor arrow — dark fill, white outline so it reads on the light UI */}
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
        style={{ animation: 'demo-cursor-press 9.5s ease-in-out infinite' }}
      >
        <path d="M5 3l14 7-6 2-2 6-6-15z" fill="#111111" stroke="#ffffff" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  // CSS-driven entrance/fill animations, gated on reduced-motion.
  const anim = (value) => (reduce ? undefined : value)

  // The dashboard's live scrape — rows resolve as it runs, email lands last.
  const { rows, scraped, activeProduct, rowReady, emailReady } = useLiveScrape(reduce)

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-24 sm:pt-28">
      {/* Mindcase-style dot + line grid — dots on a 32px grid with faint 1px
          gridlines, softly masked so it fades out toward the edges. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1.6px), linear-gradient(to right, rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.045) 1px, transparent 1px)',
          backgroundSize: '32px 32px, 32px 32px, 32px 32px',
          maskImage: 'radial-gradient(120% 80% at 50% 32%, #000 38%, transparent 82%)',
          WebkitMaskImage: 'radial-gradient(120% 80% at 50% 32%, #000 38%, transparent 82%)',
        }}
      />
      {/* Slow-drifting white dots over the grid — a gentle "alive" motion layer. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {FLOAT_DOTS.map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.22)] ring-1 ring-black/[0.10]"
            style={{
              left: d.left,
              top: d.top,
              width: `${d.size + 2}px`,
              height: `${d.size + 2}px`,
              animation: anim(d.anim),
              animationDelay: d.delay,
            }}
          />
        ))}
      </div>
      <div className="container-px">
        {/* ── Centred hero copy, stacked vertically (Mindcase / Evaboot style) ── */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-7 inline-flex items-center gap-[9px] rounded-full border border-hairline-strong bg-panel px-[15px] py-[7px] text-[13px] font-semibold tracking-[0.01em] text-ink">
            <span
              aria-hidden
              className="h-[7px] w-[7px] flex-none rounded-full bg-lime"
              style={{ animation: anim('pill-pulse 3.2s ease-in-out infinite') }}
            />
            Premium account-safe scraping
          </span>

          {/* Brand line sits ABOVE the H1 (not inside it) so the heading is a
              single clean keyword phrase; the brand lives in the title tag +
              Organization schema. */}
          <div className="mb-4 text-[15px] font-bold uppercase leading-none tracking-[0.2em] text-lime">
            Coldcast.io
          </div>
          <h1 className="font-display text-[clamp(2.25rem,5.6vw,4rem)] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
            The world&rsquo;s{' '}
            <span className="bg-[linear-gradient(100deg,#1a1a1a,#737373)] bg-clip-text text-transparent">
              safest
            </span>{' '}
            LinkedIn Sales Navigator scraper.
          </h1>

          <p className="mt-6 max-w-[600px] text-[17.5px] leading-[1.6] text-muted">
            <strong className="font-semibold text-ink">Coldcast</strong> replaces your whole GTM stack —
            scrape Sales Navigator, Apollo &amp; ZoomInfo at zero ban risk, pull triple-verified emails
            &amp; phone numbers, and let the AI SDR run your outreach.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-[14px]">
            <a
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-[9px] rounded-xl bg-lime-gradient px-8 py-[15px] text-[15.5px] font-semibold text-lime-ink shadow-lime-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lime-btn-hover focus-visible:ring-lime"
            >
              Export Leads Now
              <ArrowRight size={15} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-hairline-strong px-8 py-[15px] text-[15.5px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/50 hover:bg-lime/[0.06]"
            >
              Book a demo
            </a>
          </div>

          {/* Proof row — real portraits, punched out of the page background */}
          <div className="mt-8 flex items-center gap-[14px] text-[13.5px] font-medium text-faint">
            <div className="flex">
              {SAMPLE_LEADS.slice(0, 4).map((lead) => (
                <Avatar key={lead.email} src={lead.avatar} name={lead.name} size={28} className="-mr-[9px] ring-2 ring-bg" />
              ))}
            </div>
            <span className="pl-[9px]">Tested by {CUSTOMER_COUNT} sales professionals</span>
          </div>
        </div>

        {/* ── Wide animated console, below the copy ── */}
        <div
          className="relative mx-auto mt-16 w-full max-w-6xl overflow-hidden rounded-[14px] border border-hairline-strong bg-panel shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]"
          style={{ animation: anim('rise 1.2s .15s cubic-bezier(.22,.61,.36,1) both') }}
        >
          {/* Mac-style window chrome — real traffic-light dots, a centred URL, and
              a live credit balance on the right (à la Mindcase's console). */}
          <div className="relative flex h-[40px] items-center gap-2 border-b border-hairline bg-panel2 px-4">
            <span aria-hidden className="h-[11px] w-[11px] flex-none rounded-full bg-[#ff5f57]" />
            <span aria-hidden className="h-[11px] w-[11px] flex-none rounded-full bg-[#febc2e]" />
            <span aria-hidden className="h-[11px] w-[11px] flex-none rounded-full bg-[#28c840]" />
            <span className="absolute left-1/2 -translate-x-1/2 truncate font-mono text-[11.5px] font-medium text-muted">
              app.coldcast.io/exports
            </span>
            <span className="ml-auto inline-flex flex-none items-center gap-1.5 font-mono text-[11px] font-semibold text-ink">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
              8,600 credits
            </span>
          </div>

          <div className="flex">
            {/* Left product rail — the scraper / enrichment / outreach suite, with
                the active product lit as the run walks the pipeline. Hidden below
                lg so the table keeps the full width on narrow screens. */}
            <aside className="hidden w-[176px] flex-none flex-col border-r border-hairline bg-panel/60 px-2.5 py-4 lg:flex">
              <div className="flex items-center gap-2 px-2 pb-3 pt-1 text-[12.5px] font-semibold text-ink">
                <Logo size={20} />
                Coldcast
              </div>
              {RAIL_GROUPS.map((group) => (
                <div key={group.label}>
                  <div className="px-2 pb-1.5 pt-3.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-faint">
                    {group.label}
                  </div>
                  {group.items.map(({ name, icon: Icon }) => {
                    const active = name === activeProduct
                    return (
                      <div
                        key={name}
                        className={`relative mb-px flex items-center gap-2 rounded-[6px] px-2 py-[7px] text-[12.5px] transition-colors duration-[900ms] ${
                          active ? 'bg-panel2 font-medium text-ink' : 'text-muted'
                        }`}
                        style={{
                          animation: anim(`rail-in .75s ${0.3 + RAIL_INDEX[name] * 0.11}s cubic-bezier(.22,.61,.36,1) both`),
                        }}
                      >
                        {active && (
                          <span aria-hidden className="absolute left-0 top-1/2 h-3.5 w-[2.5px] -translate-y-1/2 rounded-r-full bg-ink" />
                        )}
                        <Icon size={14} strokeWidth={1.8} className={`flex-none ${active ? 'opacity-100' : 'opacity-70'}`} />
                        <span className="truncate">{name}</span>
                        {active && !reduce && (
                          <span
                            aria-hidden
                            className="ml-auto h-1 w-1 flex-none rounded-full bg-ink"
                            style={{ animation: 'pill-pulse 2.8s ease-in-out infinite' }}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </aside>

            <div className="min-w-0 flex-1 p-4 sm:p-6">
            {/* Toolbar — source, live status and export */}
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink">
                <Linkedin size={15} strokeWidth={1.9} className="flex-none" />
                Sales Navigator
              </span>
              <span className="hidden text-[12.5px] text-muted sm:inline">· CRO — SaaS, 51–200 · US</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline-strong bg-black/[0.05] px-2.5 py-[2.5px] text-[10.5px] font-medium text-ink">
                <span aria-hidden className={`h-[5px] w-[5px] flex-none rounded-full bg-lime ${reduce ? '' : 'animate-pulse'}`} />
                Scraping
              </span>
              <span className="ml-auto hidden items-center gap-1.5 text-[12px] text-muted sm:inline-flex">
                <b className="font-semibold tabular-nums text-ink">{scraped.toLocaleString()}</b> / {TOTAL_LEADS.toLocaleString()} ·{' '}
                <b className="font-semibold text-ink">0 flags</b>
              </span>
              <span className="inline-flex flex-none items-center gap-1.5 rounded-lg border border-hairline-strong bg-bg px-3 py-1.5 text-[12px] font-medium text-ink">
                Export CSV
              </span>
            </div>

            {/* Wide lead table — Name / Title / Company / Domain / LinkedIn / Email /
                Status. StreamCell cross-fades each value out of its skeleton; the
                Email column resolves last, on the enrichment beat. */}
            <div role="table" aria-label="Leads being scraped and enriched" className="min-w-0 text-[12px]">
              <div
                role="row"
                className={`${ROW_GRID} border-b border-hairline px-1 pb-2.5 text-[10px] font-semibold uppercase tracking-[0.09em] text-faint`}
              >
                {COLUMNS.map((c) => (
                  <span role="columnheader" key={c.key} className={c.vis}>
                    {c.label}
                  </span>
                ))}
              </div>

              {rows.map(({ lead, status: key }, i) => {
                const status = STATUSES[key] ?? STATUS_FALLBACK
                return (
                  <div
                    role="row"
                    key={`slot-${i}`}
                    className={`${ROW_GRID} items-center border-b border-hairline/70 px-1 py-2.5 transition-colors last:border-0 hover:bg-black/[0.02]`}
                    style={{ animation: anim(`rail-in .7s ${0.5 + i * 0.12}s cubic-bezier(.22,.61,.36,1) both`) }}
                  >
                    <span role="cell" className="min-w-0 truncate font-medium text-ink">
                      <StreamCell reduce={reduce} ready={rowReady(i)} skeleton={<Skeleton w="w-[70%]" />}>
                        {lead.name}
                      </StreamCell>
                    </span>
                    <span role="cell" className="hidden min-w-0 truncate text-muted sm:block">
                      <StreamCell reduce={reduce} ready={rowReady(i)} skeleton={<Skeleton w="w-[85%]" />}>
                        {lead.title}
                      </StreamCell>
                    </span>
                    <span role="cell" className="hidden min-w-0 truncate text-muted lg:block">
                      <StreamCell reduce={reduce} ready={rowReady(i)} skeleton={<Skeleton w="w-[80%]" />}>
                        {lead.company}
                      </StreamCell>
                    </span>
                    <span role="cell" className="hidden min-w-0 truncate text-muted lg:block">
                      <StreamCell reduce={reduce} ready={rowReady(i)} skeleton={<Skeleton w="w-[75%]" />}>
                        {lead.website}
                      </StreamCell>
                    </span>
                    <span role="cell" className="hidden min-w-0 truncate text-muted lg:block">
                      <StreamCell reduce={reduce} ready={rowReady(i)} skeleton={<Skeleton w="w-[90%]" />}>
                        linkedin.com{lead.linkedin}
                      </StreamCell>
                    </span>
                    <span role="cell" className="min-w-0 truncate text-muted">
                      {key === 'queued' ? (
                        <span className="text-faint">—</span>
                      ) : (
                        <StreamCell reduce={reduce} ready={emailReady(i)} skeleton={<Skeleton w="w-[92%]" />}>
                          {lead.email}
                        </StreamCell>
                      )}
                    </span>
                    <span role="cell" className="justify-self-end">
                      <span
                        key={lead.email}
                        className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-[2.5px] text-[10.5px] font-medium ${status.className} ${
                          reduce ? '' : 'animate-[status-in_.75s_cubic-bezier(.22,.61,.36,1)]'
                        }`}
                      >
                        {status.check && <Check size={9} strokeWidth={3} className="flex-none" />}
                        {status.spin && (
                          <Loader2 size={9} strokeWidth={3} className={`flex-none ${reduce ? '' : 'animate-spin'}`} />
                        )}
                        {status.label}
                      </span>
                    </span>
                  </div>
                )
              })}
            </div>
            </div>
          </div>
          <DemoCursor reduce={reduce} />
        </div>

        {/* The source-chips row lived here; <TrustBar> below the hero makes the
            same point with real logos + ratings, so keeping both said it twice. */}
      </div>
    </section>
  )
}
