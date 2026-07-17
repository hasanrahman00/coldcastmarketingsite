import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Database, Filter, Linkedin, Loader2, MailCheck, Rocket, Send } from 'lucide-react'
import Avatar from './Avatar'
import Logo from './Logo'
import { TRIAL_URL, DEMO_URL, CUSTOMER_COUNT, SAMPLE_LEADS } from '../lib/constants'
import { TICK_MS, useRowStream } from '../lib/rowStream'

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
// gets its moment lit. Derived from RAIL_ORDER rather than hand-listed: a
// hardcoded list silently skipped Apollo and ZoomInfo, and would skip any
// product added to the rail later.
const PIPELINE = RAIL_ORDER

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

// ── Motion tempo ─────────────────────────────────────────────
// One scale for the whole card, so nothing feels out of step. Every ambient
// animation here runs on cubic-bezier(.22,.61,.36,1) — a smooth cubic ease-out.
// The previous curve, cubic-bezier(.2,.7,.2,1), accelerated hard off the line,
// which is what made the email snap into place instead of gliding.
//
// This governs AMBIENT motion only — entrances, loops, state changes. Hover and
// focus feedback stay fast on purpose: slowing those makes a UI feel broken
// rather than calm.
const RAIL_LAG_MS = 600
const CHIP_LAG_MS = 1300
// Each value spends a beat LOADING before it resolves — a shimmering skeleton
// in place of the text — so the card reads as a product fetching data rather
// than a ticker flipping strings. The loading window ends exactly when the new
// value lands. Row timing itself lives in ../lib/rowStream, shared with the
// Live Export table so the two cards stay in step.
const CHIP_LOAD_MS = 480
const ROW_COUNT = 5

// Drives the live scrape. Every tick the lead list rotates by one, so each lead
// climbs Queued -> Enriching -> VERIFIED and a new one enters at the bottom —
// and the counter climbs with it. Returns a frozen mid-run state under
// prefers-reduced-motion (no timer at all, not just a paused one).
function useLiveScrape(reduce, intervalMs = TICK_MS) {
  const [tick, setTick] = useState(0)
  // The three stages LAG the tick instead of firing with it. Everything moving
  // on the same frame reads as a jolt; staggering them turns the same data into
  // cause and effect — the row resolves, then its product lights, then the
  // verified chip pops. Both lags sit well inside TICK_MS, and each lands after
  // the previous beat's transition has settled.
  const [railTick, setRailTick] = useState(0)
  const [chipTick, setChipTick] = useState(0)
  // Loading windows: true while a value is being "fetched", false the moment it
  // resolves. Never true on first paint — the card should arrive populated, not
  // pretending to load data it already has.
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

    // Chip: skeleton first, then the address lands exactly as loading ends.
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
  // Counter climbs one lead per tick and eases off as it nears the total, so it
  // never runs past 2,000 no matter how long the page is left open.
  const scraped = Math.min(1362 + tick, TOTAL_LEADS - 3)
  // Which product currently owns the work. Frozen on the scraper when motion is
  // reduced, so the card still reads as a Sales Navigator run.
  const activeProduct = reduce ? PIPELINE[0] : PIPELINE[railTick % PIPELINE.length]
  // Slot 2 is the newest VERIFIED row (it just climbed out of Enriching), so the
  // chip always shows the lead that most recently cleared — the chip is the
  // consequence of the row above it, not a separate ticker.
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
      className={`relative inline-block h-[9px] overflow-hidden rounded-full bg-white/[0.07] align-middle ${w} ${className}`}
    >
      <span
        className="absolute inset-y-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)]"
        style={{ animation: 'track-shimmer 1.4s linear infinite' }}
      />
    </span>
  )
}

// The rail's Coldcast mark used to be a hand-copied clone of <Logo> in mint, on
// the reasoning that lime was banned inside this card. That reasoning was wrong:
// the brand mark is the brand mark everywhere, and a copy is exactly how the nav
// went lime while this one stayed mint. It renders <Logo> now — one source of
// truth, so the lockup can never drift again.

export default function Hero() {
  const reduce = useReducedMotion()

  // CSS-driven entrance/fill animations, gated on reduced-motion.
  const anim = (value) => (reduce ? undefined : value)

  // The dashboard's live scrape — rows resolve lime -> mint as it runs, and the
  // rail highlight hands off down the product pipeline.
  const { rows, scraped, pct, activeProduct, verifiedLead, chipLoading, rowReady, emailReady } =
    useLiveScrape(reduce)

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
                style={{ animation: anim('pill-pulse 3.2s ease-in-out infinite') }}
              />
              Premium account-safe scraping
            </span>

            {/* "Coldcast.io" sits INSIDE the h1, not above it as a separate
                element. Visually it reads as a brand line over the title; for
                SEO the H1 now carries brand + keyword together ("Coldcast.io …
                world's safest Sales Navigator scraper"), which is the whole
                point — a sibling <div> above the h1 would look identical and
                contribute nothing to the heading signal. */}
            <h1 className="mb-6 font-display text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
              <span className="mb-3 block text-[15px] font-bold uppercase leading-none tracking-[0.2em] text-lime">
                Coldcast.io
              </span>{' '}
              {/* ^ that space is load-bearing. The span is display:block so it
                  looks like its own line either way, but without whitespace in
                  the DOM a crawler reads the H1 as "Coldcast.ioThe world's…" —
                  one broken token, which defeats the point of putting the brand
                  in the heading at all. */}
              The world&rsquo;s{' '}
              <span className="bg-[linear-gradient(100deg,#4ce8c3,#8ff2da)] bg-clip-text text-transparent">
                safest
              </span>{' '}
              Sales Navigator scraper.
            </h1>

            <p className="mb-9 max-w-[520px] text-[17.5px] leading-[1.65] text-muted">
              <strong className="font-semibold text-ink">Coldcast</strong> replaces your whole GTM stack —
              scrape Sales Navigator, Apollo &amp; ZoomInfo at zero ban risk, pull triple-verified emails
              &amp; phone numbers, and let the AI SDR run your outreach.
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
              style={{ animation: anim('rise 1.2s cubic-bezier(.22,.61,.36,1) both') }}
            >
              {/* Titlebar — LIME. This is Coldcast's own app chrome, so it wears
                  the brand/action colour, exactly as the mock's titlebar wore the
                  accent. Everything on it is dark ink: #131a00 reads 15.2:1 on the
                  lime, and 8.3:1 inside the darkened URL chip. */}
              <div className="relative flex h-[42px] items-center gap-2 overflow-hidden bg-[linear-gradient(90deg,#ccff00,#d9ff4d)] px-4">
                <span aria-hidden className="h-2.5 w-2.5 flex-none rounded-full bg-[rgba(19,26,0,0.55)]" />
                <span aria-hidden className="h-2.5 w-2.5 flex-none rounded-full bg-[rgba(19,26,0,0.38)]" />
                <span aria-hidden className="h-2.5 w-2.5 flex-none rounded-full bg-[rgba(19,26,0,0.22)]" />
                <span className="mx-auto truncate rounded-md bg-[rgba(19,26,0,0.28)] px-6 py-[3px] font-mono text-[11px] font-semibold text-lime-ink sm:px-10">
                  app.coldcast.io/exports
                </span>
                {/* slow sheen across the lime — the card feels awake before you
                    even read it */}
                {!reduce && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 w-1/4 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)]"
                    style={{ animation: 'track-shimmer 7.5s linear infinite' }}
                  />
                )}
              </div>

              <div className="flex min-h-[392px]">
                {/* Left rail */}
                {/* 152px + 8px paddings, not 148 + 10: "Sales Navigator" is the active
                    label and needs 93px of text width — tighter chrome truncates it. */}
                <aside className="hidden w-[152px] flex-none flex-col border-r border-hairline bg-white/[0.015] px-2 py-4 sm:flex">
                  <div className="flex items-center gap-2 px-2 pb-3.5 pt-1 text-[12.5px] font-semibold text-ink">
                    <Logo size={20} />
                    Coldcast
                  </div>

                  {RAIL_GROUPS.map((group) => (
                    <div key={group.label}>
                      <div className="px-2 pb-1.5 pt-3.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-faint">
                        {group.label}
                      </div>
                      {group.items.map(({ name, icon: Icon }) => {
                        // LIME = whichever product currently owns the work. The
                        // highlight hands off down the pipeline, so every product
                        // gets its moment lit.
                        const active = name === activeProduct
                        return (
                          <div
                            key={name}
                            className={`relative mb-px flex items-center gap-2 rounded-[7px] px-2 py-[7px] text-[12.5px] transition-colors duration-[900ms] ${
                              active ? 'bg-lime/15 text-lime' : 'text-muted'
                            }`}
                            style={{
                              animation: anim(
                                `rail-in .75s ${0.3 + RAIL_INDEX[name] * 0.11}s cubic-bezier(.22,.61,.36,1) both`,
                              ),
                            }}
                          >
                            {active && (
                              <span
                                aria-hidden
                                className="absolute left-0 top-1/2 h-3.5 w-[2.5px] -translate-y-1/2 rounded-r-full bg-lime shadow-[0_0_10px_rgba(204,255,0,0.9)]"
                              />
                            )}
                            <Icon
                              size={14}
                              strokeWidth={1.8}
                              className={`flex-none transition-opacity duration-[900ms] ${active ? 'opacity-100' : 'opacity-80'}`}
                            />
                            <span className="truncate">{name}</span>
                            {active && !reduce && (
                              <span
                                aria-hidden
                                className="ml-auto h-1 w-1 flex-none rounded-full bg-lime"
                                style={{ animation: 'pill-pulse 2.8s ease-in-out infinite' }}
                              />
                            )}
                          </div>
                        )
                      })}
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
                        className="h-full rounded-full bg-[linear-gradient(90deg,#a3cc00,#ccff00)] transition-[width] duration-[1200ms] ease-out"
                        style={{ width: `${pct}%` }}
                      />
                      {/* shimmer sweep — reads as "still running" */}
                      {!reduce && (
                        <span
                          aria-hidden
                          className="absolute inset-y-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]"
                          style={{ animation: 'track-shimmer 3.4s linear infinite' }}
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
                          // Rows land one after another, after the rail has filled.
                          style={{ animation: anim(`rail-in .75s ${0.95 + i * 0.13}s cubic-bezier(.22,.61,.36,1) both`) }}
                        >
                          {/* Each row resolves on its own beat (see lib/rowStream),
                              so the list fills one row after another rather than
                              every row blinking back at once. */}
                          <span role="cell" className="truncate font-medium text-ink">
                            {rowReady(i) ? (
                              <span
                                className={`block truncate ${reduce ? '' : 'animate-[cell-in_.55s_cubic-bezier(.22,.61,.36,1)_both]'}`}
                              >
                                {lead.name}
                              </span>
                            ) : (
                              <Skeleton w="w-[72%]" />
                            )}
                          </span>
                          {/* Title stands in for the "found" detail here — it lands
                              on the email beat, the slow step of the real run. */}
                          <span role="cell" className="truncate text-muted">
                            {emailReady(i) ? (
                              <span
                                className={`block truncate ${reduce ? '' : 'animate-[cell-in_.55s_cubic-bezier(.22,.61,.36,1)_both]'}`}
                              >
                                {lead.title}
                              </span>
                            ) : (
                              <Skeleton w="w-[88%]" />
                            )}
                          </span>
                          <span role="cell" className="justify-self-end">
                            <span
                              // Re-key on the lead so the pill cross-fades as the
                              // lead resolves lime -> mint.
                              key={lead.email}
                              // Same easing curve as every other beat in the card,
                              // so the whole thing moves like one object.
                              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-[2.5px] text-[10.5px] font-medium ${status.className} ${
                                reduce ? '' : 'animate-[status-in_.75s_cubic-bezier(.22,.61,.36,1)]'
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
              // Lands LAST, after the rows have filled (0.72s + 5 x 0.09s), so the
              // entrance reads as one cascade: card -> rail -> rows -> chip.
              style={{ animation: anim('rise 1.1s 1.75s cubic-bezier(.22,.61,.36,1) both') }}
            >
              <span
                // Re-key on the lead so the tick pings the orb each time a new
                // address clears.
                key={`orb-${verifiedLead.email}`}
                className={`grid h-[30px] w-[30px] flex-none place-items-center rounded-full bg-brand/15 ${
                  reduce ? '' : 'animate-[orb-ping_1.1s_cubic-bezier(.22,.61,.36,1)]'
                }`}
              >
                <Check size={14} strokeWidth={2.2} className="text-accent" />
              </span>
              <span className="min-w-0">
                <small className="block text-[10px] font-semibold uppercase tracking-[0.06em] text-faint">
                  Verified
                </small>
                {/* Fixed height + overflow-hidden so each address slides through a
                    window instead of reflowing the chip as names change width. */}
                <span className="flex h-[17px] items-center overflow-hidden">
                  {chipLoading ? (
                    // Verifying the next address — skeleton holds the line's
                    // height so the chip never jumps.
                    <Skeleton w="w-[168px]" />
                  ) : (
                    <b
                      key={verifiedLead.email}
                      className={`block truncate text-[12.5px] font-semibold leading-[17px] text-ink ${
                        reduce ? '' : 'animate-[email-in_1.1s_cubic-bezier(.22,.61,.36,1)]'
                      }`}
                    >
                      {verifiedLead.email}
                    </b>
                  )}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* The "Works with the sources your pipeline already lives in" chips row
            used to sit here. <CredibilityRow> replaced it directly below the hero
            — it makes the same point with real logos plus the ratings and
            zero-bans proof, so keeping both was saying it twice. */}
      </div>
    </section>
  )
}
