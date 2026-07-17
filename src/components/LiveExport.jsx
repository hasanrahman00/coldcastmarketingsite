import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import StreamCell from './StreamCell'
import { SAMPLE_LEADS } from '../lib/constants'
import { TICK_MS, useRowStream } from '../lib/rowStream'

const COLUMNS = ['Name', 'Title', 'Company', 'Email', 'Phone', 'Status']

// Per-row state, bottom row newest. A lead enters at the bottom as VERIFYING and
// climbs to VERIFIED at the top, so the table reads top-to-bottom as
// done -> checking, and the accents carry the story:
//
//   LIME  = in flight   (VERIFYING, the live job dot)
//   MINT  = confirmed   (VERIFIED, "99% valid")
//   AMBER = needs a look (CATCH-ALL)
//
// Same split as the hero dashboard: work goes in hot, comes out verified.
const STATUSES = ['verified', 'verified', 'verified', 'catch-all', 'verifying']

const ROW_COUNT = 5

function StatusPill({ status, reduce }) {
  if (status === 'catch-all') {
    return (
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-amber/30 bg-amber/15 px-3 py-1 text-[11px] font-bold tracking-wider text-amber">
        CATCH-ALL
      </span>
    )
  }

  // LIME — this row is being verified right now.
  if (status === 'verifying') {
    return (
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-lime/40 bg-lime/15 px-3 py-1 text-[11px] font-bold tracking-wider text-lime">
        <Loader2 size={11} className={`shrink-0 ${reduce ? '' : 'animate-spin'}`} />
        VERIFYING
      </span>
    )
  }

  // MINT — confirmed. Ink on a mint fill is #062119, never white.
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-gradient px-3 py-1 text-[11px] font-bold tracking-wider text-[#062119]">
      <Check size={11} strokeWidth={3.2} className="shrink-0" />
      VERIFIED
    </span>
  )
}

// Shimmering placeholder, matched to the hero's. Full literal width classes only
// — JIT can't see a concatenated one.
function Skeleton({ w = 'w-full' }) {
  return (
    <span
      aria-hidden
      className={`relative inline-block h-[10px] overflow-hidden rounded-full bg-white/[0.07] align-middle ${w}`}
    >
      <span
        className="absolute inset-y-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)]"
        style={{ animation: 'track-shimmer 2.4s linear infinite' }}
      />
    </span>
  )
}

export default function LiveExport() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  // Don't run the job while the section is off-screen.
  const inView = useInView(ref, { margin: '120px' })
  const live = inView && !reduce

  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (!live) return undefined
    const id = setInterval(() => setTick((t) => t + 1), TICK_MS)
    return () => clearInterval(id)
  }, [live])

  // Rows resolve ONE AFTER ANOTHER, and each row's email lands last of all.
  const { rowReady, emailReady } = useRowStream(live, tick, ROW_COUNT)

  const rows = Array.from({ length: ROW_COUNT }, (_, i) => ({
    lead: SAMPLE_LEADS[(tick + i) % SAMPLE_LEADS.length],
    status: STATUSES[i],
  }))

  return (
    <section ref={ref} id="live-export" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Live export"
          title="From search URL to verified list in minutes."
          subtitle="Paste any Sales Navigator search. Coldcast scrapes at human pace inside your own browser, enriches every row through the waterfall, and triple-verifies each email before it hits your CSV."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-hairline-strong bg-panel shadow-card">
            {/* top bar — live job + export affordances (decorative) */}
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-hairline bg-panel2 px-4 py-3.5 sm:px-5">
              <div className="flex items-center gap-3 text-sm font-semibold text-ink">
                {/* LIME — the job is running */}
                <span
                  className={`h-2 w-2 shrink-0 rounded-full bg-lime shadow-[0_0_10px_rgba(204,255,0,0.8)] ${
                    live ? 'animate-[pulse_2.8s_cubic-bezier(0.4,0,0.6,1)_infinite]' : ''
                  }`}
                />
                VP &amp; C-suite — Consumer wellness, US — 1,284 leads
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* MINT — a confirmed fact about the finished list */}
                <span className="rounded-lg border border-brand/35 bg-brand/15 px-3 py-1.5 text-xs font-semibold text-accent">
                  99% valid
                </span>
                <span className="rounded-lg border border-hairline-strong px-3 py-1.5 text-xs font-semibold text-muted">
                  Export CSV
                </span>
                <span className="rounded-lg border border-hairline-strong px-3 py-1.5 text-xs font-semibold text-muted">
                  Export XLSX
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-hairline bg-inset text-[11px] uppercase tracking-[0.1em] text-faint">
                    {COLUMNS.map((col) => (
                      <th key={col} className="whitespace-nowrap px-4 py-3 font-bold sm:px-5">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(({ lead, status }, i) => (
                    <tr
                      // Key on the SLOT, not the lead: each row is a fixed
                      // position that leads flow through, so React updates the
                      // cells in place instead of re-mounting the table.
                      key={`slot-${i}`}
                      // Height is PINNED. Rows previously grew and shrank as
                      // leads rotated (long titles wrapped), swinging the table
                      // 68px per tick. Now only opacity moves.
                      className={`h-[60px] border-b border-hairline transition-colors last:border-0 hover:bg-white/[0.025] ${
                        status === 'verifying' ? 'bg-lime/[0.04]' : i === 0 ? 'bg-brand/5' : ''
                      }`}
                    >
                      <td className="px-4 py-0 font-semibold text-ink sm:px-5">
                        <StreamCell reduce={reduce} ready={rowReady(i)} skeleton={<Skeleton w="w-[76%]" />}>
                          {lead.name}
                        </StreamCell>
                      </td>
                      <td className="max-w-[190px] px-4 py-0 text-muted sm:px-5">
                        <StreamCell reduce={reduce} ready={rowReady(i)} skeleton={<Skeleton w="w-[84%]" />}>
                          {lead.title}
                        </StreamCell>
                      </td>
                      <td className="max-w-[180px] px-4 py-0 text-muted sm:px-5">
                        <StreamCell reduce={reduce} ready={rowReady(i)} skeleton={<Skeleton w="w-[70%]" />}>
                          {lead.company}
                        </StreamCell>
                      </td>
                      {/* The email lands LAST — finding and verifying it is the
                          slow step, so its skeleton lingers a beat longer. */}
                      <td className="px-4 py-0 font-display text-[13px] tracking-tight text-muted sm:px-5">
                        <StreamCell reduce={reduce} ready={emailReady(i)} skeleton={<Skeleton w="w-[88%]" />}>
                          {lead.email}
                        </StreamCell>
                      </td>
                      <td className="px-4 py-0 font-display text-[13px] tabular-nums tracking-tight text-muted sm:px-5">
                        <StreamCell reduce={reduce} ready={emailReady(i)} skeleton={<Skeleton w="w-[72%]" />}>
                          {lead.phone}
                        </StreamCell>
                      </td>
                      <td className="px-4 py-0 sm:px-5">
                        <span className="flex h-5 items-center">
                          {!emailReady(i) ? (
                            <Skeleton w="w-[92px]" />
                          ) : (
                            <span
                              // Re-key on the lead so the pill cross-fades as the
                              // row resolves lime -> mint.
                              key={lead.email}
                              className={reduce ? '' : 'inline-block animate-[status-in_.75s_cubic-bezier(.22,.61,.36,1)]'}
                            >
                              <StatusPill status={status} reduce={reduce} />
                            </span>
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
