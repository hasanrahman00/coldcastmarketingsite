import { Check, X } from 'lucide-react'
import Logo from './Logo'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const ROWS = [
  {
    feature: 'Daily export limit',
    coldcast: 'Up to ~20,000 leads / account / day',
    others: 'A few hundred to a couple thousand, then throttled',
  },
  {
    feature: 'Where it runs',
    coldcast: 'Your own browser, device, session & IP',
    others: 'A cloud / headless browser on the vendor’s servers',
  },
  {
    feature: 'Account / ban risk',
    coldcast: 'Low by design — genuine human activity',
    others: 'Elevated — foreign sessions & bot-speed bursts',
  },
  {
    feature: 'LinkedIn password',
    coldcast: 'Never asked for, never stored',
    others: 'Often required and stored server-side',
  },
  {
    feature: 'Enrichment',
    coldcast: 'Built-in waterfall — verified emails, phones & company data',
    others: 'Raw export only, or a separate paid step',
  },
  {
    feature: 'Intent signals',
    coldcast: 'Person + company buying signals captured live',
    others: 'Rarely included — names and titles only',
  },
  {
    feature: 'Output quality',
    coldcast: 'Clean, de-duplicated, signal-tagged CSV / XLSX',
    others: 'Messy, duplicate-prone dumps needing cleanup',
  },
]

export default function Comparison() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-bg2/70 px-6 py-12 shadow-card backdrop-blur-md sm:px-10 sm:py-16">
        <SectionHeading
          eyebrow="The difference"
          title="Coldcast vs. other Sales Navigator scrapers."
          subtitle="Two things set Coldcast apart: the volume you can pull, and the fact that pulling it doesn’t put your account on the line."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr>
                  <th className="w-1/3 px-5 py-4" />
                  <th className="w-1/3 px-5 py-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-3 py-1.5 text-sm font-semibold text-[#062119] shadow-brand-btn">
                      <Logo size={18} />
                      Coldcast
                    </span>
                  </th>
                  <th className="w-1/3 px-5 py-4 align-middle text-sm font-semibold uppercase tracking-wider text-muted">
                    Other scrapers
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.feature}>
                    <td
                      className={`px-5 py-4 align-top font-medium text-ink ${
                        i === 0 ? '' : 'border-t border-hairline'
                      }`}
                    >
                      {row.feature}
                    </td>
                    <td
                      className={`bg-safe/[0.05] px-5 py-4 align-top ${
                        i === 0 ? 'rounded-t-2xl' : 'border-t border-safe/10'
                      } ${i === ROWS.length - 1 ? 'rounded-b-2xl' : ''}`}
                    >
                      <span className="flex items-start gap-2.5 text-ink/90">
                        <Check size={16} className="mt-0.5 shrink-0 text-safe" />
                        {row.coldcast}
                      </span>
                    </td>
                    <td
                      className={`px-5 py-4 align-top ${i === 0 ? '' : 'border-t border-hairline'}`}
                    >
                      <span className="flex items-start gap-2.5 text-muted">
                        <X size={16} className="mt-0.5 shrink-0 text-danger" />
                        {row.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        </div>
      </div>
    </section>
  )
}
