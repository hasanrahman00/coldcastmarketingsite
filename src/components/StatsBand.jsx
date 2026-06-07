import { ShieldCheck, Download, Radar, MailCheck } from 'lucide-react'
import Reveal from './Reveal'

// [PLACEHOLDER] Every figure here is illustrative — replace with your real,
// documented metrics before launch (any objective number on a marketing page
// needs a defensible basis). The "0 bans" stat is framed as a track record.
const STATS = [
  {
    icon: ShieldCheck,
    value: '0',
    label: 'account bans in 6+ months of daily internal use',
    tag: 'Account-safe',
  },
  {
    icon: Download,
    value: '2.5M+',
    label: 'Sales Navigator leads exported & enriched',
    tag: 'Proven at scale',
  },
  {
    icon: Radar,
    value: '25+',
    label: 'company + person signals captured per lead',
    tag: 'Intent engine',
  },
  {
    icon: MailCheck,
    value: '97%',
    label: 'verified email accuracy, waterfall-enriched in one pass',
    tag: 'Verified, not guessed',
  },
]

export default function StatsBand() {
  return (
    <section className="relative border-b border-hairline py-16 sm:py-20">
      <div className="container-px">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label, tag }, i) => (
            <Reveal key={label} delay={(i % 4) * 0.08} className="flex flex-col items-center text-center">
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-brand-gradient-soft text-accent">
                <Icon size={18} />
              </span>
              <div className="bg-gradient-to-br from-brand to-violet bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                {value}
              </div>
              <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wider text-accent">
                {tag}
              </div>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted">{label}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
