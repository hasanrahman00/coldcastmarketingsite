import { Globe, Linkedin, FileSpreadsheet, BadgeCheck } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { SAMPLE_LEADS } from '../lib/constants'

const COLUMNS = [
  'Name',
  'Title',
  'Company',
  'Signals',
  'Work Email',
  'Phone',
  'Location',
  'LinkedIn',
]

function SignalPills({ signals = [] }) {
  return (
    <div className="flex flex-col gap-1.5">
      {signals.map((s) => (
        <span
          key={s.label}
          className={`inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium ${
            s.tier === 'strong'
              ? 'bg-amber/15 text-amber'
              : 'bg-black/5 text-muted'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${s.tier === 'strong' ? 'bg-amber' : 'bg-muted/60'}`}
          />
          {s.label}
        </span>
      ))}
    </div>
  )
}

export default function OutputPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Output preview"
          title="Every export comes back as signals, not just rows."
          subtitle="Verified contacts, de-duplicated and ready to send — each one tagged with the buying signals that tell you who to reach right now."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-hairline bg-panel/70 shadow-card backdrop-blur-md">
            {/* sample-data banner */}
            <div className="flex items-center justify-between gap-3 border-b border-hairline bg-black/[0.04] px-4 py-2.5">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Example preview · sample data
              </span>
              <span className="hidden text-[11px] text-muted sm:inline">
                <span className="text-amber">●</span> Strong signal &nbsp;·&nbsp;
                <span className="text-muted/60">●</span> Supporting
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1040px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-hairline bg-black/[0.03] text-xs uppercase tracking-wide text-muted">
                    {COLUMNS.map((col) => (
                      <th key={col} className="whitespace-nowrap px-4 py-3.5 font-semibold">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_LEADS.map((lead, i) => (
                    <tr
                      key={lead.email}
                      className={`border-b border-hairline/60 align-top transition-colors last:border-0 hover:bg-black/[0.04] ${
                        i % 2 ? 'bg-black/[0.02]' : ''
                      }`}
                    >
                      <td className="whitespace-nowrap px-4 py-4 font-medium text-ink">{lead.name}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-muted">{lead.title}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-ink/90">{lead.company}</td>
                      <td className="px-4 py-4">
                        <SignalPills signals={lead.signals} />
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <span className="inline-flex items-center gap-1.5 text-accent">
                          <BadgeCheck size={14} className="shrink-0" />
                          {lead.email}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 tabular-nums text-muted">{lead.phone}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-muted">{lead.location}</td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <span className="inline-flex items-center gap-1.5 text-muted">
                          <Linkedin size={13} className="text-accent/80" />
                          {lead.linkedin}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted">
          <FileSpreadsheet size={15} className="text-accent" />
          Export every list to CSV or XLSX
          <span className="text-muted/40">·</span>
          <Globe size={14} className="text-accent/80" />
          website &amp; company data on every row
        </Reveal>
      </div>
    </section>
  )
}
