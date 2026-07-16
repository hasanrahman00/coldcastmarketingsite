import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Database, Filter, Linkedin, Loader2, MailCheck, Rocket, Send } from 'lucide-react'
import Avatar from './Avatar'
import { TRIAL_URL, DEMO_URL, CUSTOMER_COUNT, SAMPLE_LEADS } from '../lib/constants'

// ── Dashboard mock content ───────────────────────────────────
// A screenshot of a scrape mid-flight. It carries BOTH accents, split by
// meaning rather than decoration — that split is what stops two greens from
// reading as an accident:
//
//   LIME  = in flight. The run is happening right now: the Scraping pill, the
//           progress fill, the active rail row, a row being enriched.
//   MINT  = confirmed. The work is done and trustworthy: VERIFIED, 0 flags,
//           the floating verified chip.
//
// So the card animates lime -> mint as each lead resolves, which is the product
// claim in one image: work goes in hot, comes out verified.

const RAIL_GROUPS = [
  {
    label: 'Scrapers',
    items: [
      { name: 'Sales Navigator', icon: Linkedin, active: true },
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

// Status pills, in pipeline order. Enriching is LIME (in flight) and VERIFIED is
// MINT (confirmed) — a lead visibly changes accent as it resolves. Label and
// colour live together so an unrecognised state falls through to amber *as* a
// warning instead of quietly reading "verified".
const STATUSES = {
  queued: { label: 'Queued', className: 'border-hairline bg-white/5 text-faint' },
  enriching: { label: 'Enriching', spin: true, className: 'border-lime/40 bg-lime/15 text-lime' },
  verified: { label: 'VERIFIED', check: true, className: 'border-brand/30 bg-brand/15 text-brand-light' },
}
const STATUS_FALLBACK = { label: 'Needs review', className: 'border-amber/30 bg-amber/15 text-amber' }

// The five visible slots, bottom row newest. A lead enters at the bottom as
// Queued and climbs to VERIFIED at the top, so the run reads top-to-bottom as
// done -> doing -> waiting.
const ROW_STATUS = ['verified', 'verified', 'verified', 'enriching', 'queued']

// Only three columns: this card lives in a ~500px hero column, and Company/Email
// forced a horizontal scrollbar that clipped the table. Name/Title/Status fits.
const TABLE_COLUMNS = ['Name', 'Title', 'Status']

const TOTAL_LEADS = 2000

const SOURCES = [
  { name: 'LinkedIn Sales Navigator', icon: Linkedin },
  { name: 'Apollo', icon: Rocket },
  { name: 'ZoomInfo', icon: Database },
]

// Drives the live scrape. Every tick the lead list rotates by one, so each lead
// climbs Queued -> Enriching -> VERIFIED and a new one enters at the bottom —
// and the counter climbs with it. Returns a frozen mid-run state under
// prefers-reduced-motion (no timer at all, not just a paused one).
function useLiveScrape(reduce, intervalMs = 2600) {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setTick((t) => t + 1), intervalMs)
    return () => clearInterval(id)
  }, [reduce, intervalMs])

  const rows = Array.from({ length: 5 }, (_, i) => {
    const lead = SAMPLE_LEADS[(tick + i) % SAMPLE_LEADS.length]
    return { lead, status: ROW_STATUS[i] }
  })
  // Counter climbs one lead per tick and eases off as it nears the total, so it
  // never runs past 2,000 no matter how long the page is left open.
  const scraped = Math.min(1362 + tick, TOTAL_LEADS - 3)
  return { rows, scraped, pct: (scraped / TOTAL_LEADS) * 100 }
}

// Coldcast mark in mint. Deliberately NOT <Logo>, which carries the lime brand
// fill — lime is banned inside this card. Ink on a mint fill is #062119.
const MARK_ARMS = [0, 60, 120, 180, 240, 300]

function RailMark({ size = 20 }) {
  return (
    <span
      aria-hidden
      className="inline-flex shrink-0 items-center justify-center rounded-[28%] bg-brand-gradient"
      style={{ width: size, height: size }}
    >
      <svg viewBox="20 20 88 88" width={size * 0.82} height={size * 0.82} fill="none">
        <g stroke="#062119" strokeWidth="11" strokeLinecap="round" fill="none">
          {MARK_ARMS.map((deg) => (
            <g key={deg} transform={`rotate(${deg} 64 64)`}>
              <path d="M64 56 C 71 46 86 48 92 60" />
              <circle cx="92" cy="60" r="6" fill="#062119" stroke="none" />
            </g>
          ))}
        </g>
      </svg>
    </span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  // CSS-driven entrance/fill animations, gated on reduced-motion.
  const anim = (value) => (reduce ? undefined : value)

  // The dashboard's live scrape — rows resolve lime -> mint as it runs.
  const { rows, scraped, pct } = useLiveScrape(reduce)

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-40 sm:pt-44">
      <div className="container-px">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          {/* ── Left column ─────────────────────────────── */}
          <div>
            <span className="mb-7 inline-flex items-center gap-[9px] rounded-full border border-lime/30 bg-lime/[0.12] px-[15px] py-[7px] text-[13px] font-semibold tracking-[0.01em] text-lime-light">
              <span
                aria-hidden
                className="h-[7px] w-[7px] flex-none rounded-full bg-lime"
                style={{ animation: anim('pill-pulse 2.4s ease-in-out infinite') }}
              />
              Premium account-safe scraping
            </span>

            <h1 className="mb-6 font-display text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
              The world&rsquo;s{' '}
              <span className="bg-[linear-gradient(100deg,#4ce8c3,#8ff2da)] bg-clip-text text-transparent">
                safest
              </span>{' '}
              Sales Navigator scraper.
            </h1>

            <p className="mb-9 max-w-[520px] text-[17.5px] leading-[1.65] text-muted">
              One subscription replaces your GTM stack — scrape Sales Navigator, Apollo &amp; ZoomInfo at zero
              ban risk, pull triple-verified emails &amp; phone numbers, and let the AI SDR run your outreach.
            </p>

            <div className="mb-8 flex flex-wrap gap-[14px]">
              <a
                href={TRIAL_URL}
                className="group inline-flex items-center justify-center gap-[9px] rounded-xl bg-lime-gradient px-7 py-[15px] text-[15.5px] font-semibold text-lime-ink shadow-lime-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lime-btn-hover focus-visible:ring-lime"
              >
                Start free trial
                <ArrowRight size={15} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={DEMO_URL}
                className="inline-flex items-center justify-center rounded-xl border border-hairline-strong px-7 py-[15px] text-[15.5px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/50 hover:bg-lime/[0.06]"
              >
                Book a demo
              </a>
            </div>

            {/* Proof row — real portraits, punched out of the page background */}
            <div className="flex items-center gap-[14px] text-[13.5px] font-medium text-faint">
              <div className="flex">
                {SAMPLE_LEADS.slice(0, 4).map((lead) => (
                  <Avatar
                    key={lead.email}
                    src={lead.avatar}
                    name={lead.name}
                    size={28}
                    className="-mr-[9px] ring-2 ring-bg"
                  />
                ))}
              </div>
              <span className="pl-[9px]">Tested by {CUSTOMER_COUNT} sales professionals</span>
            </div>
          </div>

          {/* ── Right column — dashboard mock ───────────── */}
          {/* min-w-0: this is a grid item, so its default min-width:auto would let
              the nowrap table's min-content width blow out the 1.05fr_1fr tracks
              and crush the left column. Pinning it to 0 keeps the scroll inside. */}
          <div className="relative min-w-0">
            <div
              className="overflow-hidden rounded-2xl border border-hairline-strong bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              style={{ animation: anim('rise .9s cubic-bezier(.2,.7,.2,1) both') }}
            >
              {/* Titlebar */}
              <div className="flex h-[42px] items-center gap-2 border-b border-hairline bg-white/[0.02] px-4">
                <span aria-hidden className="h-2.5 w-2.5 flex-none rounded-full bg-white/[0.12]" />
                <span aria-hidden className="h-2.5 w-2.5 flex-none rounded-full bg-white/[0.12]" />
                <span aria-hidden className="h-2.5 w-2.5 flex-none rounded-full bg-white/[0.12]" />
                <span className="mx-auto truncate rounded-md border border-hairline bg-inset px-6 py-[3px] font-mono text-[11px] text-faint sm:px-10">
                  app.coldcast.io/exports
                </span>
              </div>

              <div className="flex min-h-[392px]">
                {/* Left rail */}
                {/* 152px + 8px paddings, not 148 + 10: "Sales Navigator" is the active
                    label and needs 93px of text width — tighter chrome truncates it. */}
                <aside className="hidden w-[152px] flex-none flex-col border-r border-hairline bg-white/[0.015] px-2 py-4 sm:flex">
                  <div className="flex items-center gap-2 px-2 pb-3.5 pt-1 text-[12.5px] font-semibold text-ink">
                    <RailMark size={20} />
                    Coldcast
                  </div>

                  {RAIL_GROUPS.map((group) => (
                    <div key={group.label}>
                      <div className="px-2 pb-1.5 pt-3.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-faint">
                        {group.label}
                      </div>
                      {group.items.map(({ name, icon: Icon, active }) => (
                        <div
                          key={name}
                          className={`relative mb-px flex items-center gap-2 rounded-[7px] px-2 py-[7px] text-[12.5px] ${
                            active ? 'bg-brand/15 text-brand-light' : 'text-muted'
                          }`}
                        >
                          {active && (
                            <span
                              aria-hidden
                              className="absolute left-0 top-1/2 h-3.5 w-[2.5px] -translate-y-1/2 rounded-r-full bg-brand"
                            />
                          )}
                          <Icon size={14} strokeWidth={1.8} className="flex-none opacity-80" />
                          <span className="truncate">{name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </aside>

                {/* Main */}
                <div className="flex min-w-0 flex-1 flex-col gap-4 p-4">
                  {/* Head row */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[13px] font-semibold tracking-[-0.01em] text-ink">
                      CRO — SaaS, 51–200 · US
                    </span>
                    {/* LIME: the run is in flight right now */}
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/40 bg-lime/15 px-2.5 py-[2.5px] text-[10.5px] font-medium text-lime">
                      <span
                        aria-hidden
                        className={`h-[5px] w-[5px] flex-none rounded-full bg-lime shadow-[0_0_8px_rgba(204,255,0,0.8)] ${
                          reduce ? '' : 'animate-pulse'
                        }`}
                      />
                      Scraping
                    </span>
                    <span className="hidden rounded-[5px] border border-hairline border-b-2 bg-white/[0.03] px-[7px] py-0.5 font-mono text-[10.5px] text-muted sm:inline-block">
                      ⌘E export
                    </span>
                    <span className="ml-auto inline-flex flex-none items-center rounded-lg border border-hairline px-3 py-1.5 text-[12px] font-medium text-muted">
                      Export CSV
                    </span>
                  </div>

                  {/* Progress card. The track is LIME (work in flight) and ticks
                      up live; "0 flags" is MINT (a confirmed safety fact). */}
                  <div className="flex items-center gap-3.5 rounded-[10px] border border-hairline bg-white/[0.03] px-4 py-3">
                    <span className="flex-none whitespace-nowrap text-[11.5px] text-muted">
                      <b className="font-semibold tabular-nums text-ink">{scraped.toLocaleString()}</b> /{' '}
                      {TOTAL_LEADS.toLocaleString()} leads
                    </span>
                    <div className="relative h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-hairline">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#a3cc00,#ccff00)] transition-[width] duration-700 ease-out"
                        style={{ width: `${pct}%` }}
                      />
                      {/* shimmer sweep — reads as "still running" */}
                      {!reduce && (
                        <span
                          aria-hidden
                          className="absolute inset-y-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]"
                          style={{ animation: 'track-shimmer 2.2s linear infinite' }}
                        />
                      )}
                    </div>
                    <span className="flex-none whitespace-nowrap text-[11.5px] text-muted">
                      human pace · <b className="font-semibold text-accent">0 flags</b>
                    </span>
                  </div>

                  {/* Lead list. A grid, not a <table>: fixed fractions + truncation
                      make it fit the hero column at any width, so nothing clips
                      and nothing scrolls sideways. */}
                  <div role="table" aria-label="Leads being scraped" className="text-[12px]">
                    <div
                      role="row"
                      className="grid grid-cols-[1.05fr_1.35fr_auto] gap-2 border-b border-hairline px-1 py-2 text-[10px] font-semibold uppercase tracking-[0.09em] text-faint"
                    >
                      {TABLE_COLUMNS.map((col) => (
                        <span role="columnheader" key={col} className={col === 'Status' ? 'text-right' : ''}>
                          {col}
                        </span>
                      ))}
                    </div>

                    {rows.map(({ lead, status: key }, i) => {
                      const status = STATUSES[key] ?? STATUS_FALLBACK
                      return (
                        <div
                          role="row"
                          // Key on the slot, not the lead: the row is a fixed
                          // position that leads flow through, so React updates
                          // the content in place instead of re-mounting the list.
                          key={`slot-${i}`}
                          className="grid grid-cols-[1.05fr_1.35fr_auto] items-center gap-2 border-b border-white/[0.04] px-1 py-2.5 transition-colors last:border-0 hover:bg-white/[0.03]"
                        >
                          <span role="cell" className="truncate font-medium text-ink">
                            {lead.name}
                          </span>
                          <span role="cell" className="truncate text-muted">
                            {lead.title}
                          </span>
                          <span role="cell" className="justify-self-end">
                            <span
                              // Re-key on the lead so the pill cross-fades as the
                              // lead resolves lime -> mint.
                              key={lead.email}
                              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-[2.5px] text-[10.5px] font-medium ${status.className} ${
                                reduce ? '' : 'animate-[status-in_.45s_ease-out]'
                              }`}
                            >
                              {status.check && <Check size={9} strokeWidth={3} className="flex-none" />}
                              {status.spin && (
                                <Loader2
                                  size={9}
                                  strokeWidth={3}
                                  className={`flex-none ${reduce ? '' : 'animate-spin'}`}
                                />
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
            </div>

            {/* Floating verified chip — straddles the card's bottom-left corner.
                It hangs just below the bottom edge rather than sitting 34px inside:
                the rail's last nav row ("AI SDR") now lives there, and cutting a
                label in half reads as a bug instead of as a floating layer. */}
            <div
              className="mt-4 flex w-fit items-center gap-2.5 rounded-xl border border-[rgba(53,224,184,0.35)] bg-panel2 px-4 py-[11px] shadow-[0_18px_50px_rgba(0,0,0,0.55),0_0_24px_rgba(53,224,184,0.12)] lg:absolute lg:-bottom-3 lg:-left-7 lg:mt-0"
              style={{ animation: anim('rise 1s .5s cubic-bezier(.2,.7,.2,1) both') }}
            >
              <span className="grid h-[30px] w-[30px] flex-none place-items-center rounded-full bg-brand/15">
                <Check size={14} strokeWidth={2.2} className="text-accent" />
              </span>
              <span>
                <small className="block text-[10px] font-semibold uppercase tracking-[0.06em] text-faint">
                  Verified
                </small>
                <b className="text-[12.5px] font-semibold text-ink">{SAMPLE_LEADS[0].email}</b>
              </span>
            </div>
          </div>
        </div>

        {/* ── Logo chips ───────────────────────────────── */}
        <div className="mt-[72px]">
          <div className="mb-[22px] text-center text-[12.5px] font-semibold uppercase tracking-[0.14em] text-faint">
            Works with the sources your pipeline already lives in
          </div>
          <div className="flex flex-wrap justify-center gap-[18px]">
            {SOURCES.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-[11px] rounded-2xl border border-hairline bg-panel px-7 py-[15px] text-[14.5px] font-semibold text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/35 hover:text-ink"
              >
                <Icon size={18} strokeWidth={1.6} className="flex-none opacity-85" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
