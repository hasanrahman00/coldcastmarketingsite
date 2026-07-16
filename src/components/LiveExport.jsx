import { Check, Loader2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { SAMPLE_LEADS } from '../lib/constants'

const COLUMNS = ['Name', 'Title', 'Company', 'Email', 'Phone', 'Status']

// Per-row verification state, mirroring the mock: verified ×3, then one
// catch-all and one still in flight. Indexed against SAMPLE_LEADS.
const STATUSES = ['verified', 'verified', 'verified', 'catch-all', 'verifying']

function StatusPill({ status }) {
  if (status === 'catch-all') {
    return (
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-amber/30 bg-amber/15 px-3 py-1 text-[11px] font-bold tracking-wider text-amber">
        CATCH-ALL
      </span>
    )
  }

  if (status === 'verifying') {
    return (
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-hairline-strong bg-white/5 px-3 py-1 text-[11px] font-bold tracking-wider text-faint">
        <Loader2 size={11} className="shrink-0 animate-spin" />
        VERIFYING
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-gradient px-3 py-1 text-[11px] font-bold tracking-wider text-[#062119]">
      <Check size={11} strokeWidth={3.2} className="shrink-0" />
      VERIFIED
    </span>
  )
}

export default function LiveExport() {
  return (
    <section id="live-export" className="relative py-24 sm:py-32">
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
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-brand" />
                VP &amp; C-suite — Consumer wellness, US — 1,284 leads
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
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
                      <th
                        key={col}
                        className="whitespace-nowrap px-4 py-3 font-bold sm:px-5"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_LEADS.map((lead, i) => (
                    <tr
                      key={lead.email}
                      className={`border-b border-hairline transition-colors last:border-0 hover:bg-white/[0.025] ${
                        i === 0 ? 'bg-brand/5' : ''
                      }`}
                    >
                      <td className="whitespace-nowrap px-4 py-4 font-semibold text-ink sm:px-5">
                        {lead.name}
                      </td>
                      <td className="px-4 py-4 text-muted sm:px-5">
                        {lead.title}
                      </td>
                      <td className="px-4 py-4 text-muted sm:px-5">
                        {lead.company}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 font-display text-[13px] tracking-tight text-muted sm:px-5">
                        {lead.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 font-display text-[13px] tabular-nums tracking-tight text-muted sm:px-5">
                        {lead.phone}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 sm:px-5">
                        <StatusPill status={STATUSES[i]} />
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
