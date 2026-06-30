import {
  TrendingUp,
  Banknote,
  Briefcase,
  UserPlus,
  Layers,
  Building2,
  Repeat,
  ArrowUpCircle,
  Clock,
  Activity,
  BadgeCheck,
  MailCheck,
  Radar,
  Target,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const COMPANY_SIGNALS = [
  { icon: TrendingUp, title: 'Headcount growth', desc: 'Scaling teams are buying.' },
  { icon: Banknote, title: 'New funding', desc: 'Fresh budget, new vendors.' },
  { icon: Briefcase, title: 'Active hiring', desc: 'Open roles reveal priorities.' },
  { icon: UserPlus, title: 'New exec hires', desc: 'New leaders rebuild the stack.' },
  { icon: Layers, title: 'Tech stack', desc: 'Spot displacement openings.' },
  { icon: Building2, title: 'Size & industry', desc: 'Firmographics on every row.' },
]

const PERSON_SIGNALS = [
  { icon: Repeat, title: 'Changed jobs', desc: 'No incumbent vendor yet.' },
  { icon: ArrowUpCircle, title: 'Promotion', desc: 'New budget, new mandate.' },
  { icon: Clock, title: 'New in role', desc: 'Buys fast to prove impact.' },
  { icon: Activity, title: 'Recently active', desc: 'Far higher reply rates.' },
  { icon: BadgeCheck, title: 'Decision-maker fit', desc: 'Confirm they can buy.' },
  { icon: MailCheck, title: 'Verified contact', desc: 'Real email or phone — not guessed.' },
]

function SignalGroup({ label, accentIcon: AccentIcon, signals }) {
  return (
    <div className="floating-panel relative h-full overflow-hidden p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-brand-gradient-soft text-[#0e90ad]">
          <AccentIcon size={20} />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-ink">{label} signals</h3>
          <p className="text-xs text-muted">Captured live at export time</p>
        </div>
      </div>

      <ul className="mt-6 flex flex-col gap-5">
        {signals.map(({ icon: Icon, title, desc }) => (
          <li key={title} className="flex gap-3.5">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-brand-gradient-soft text-[#0e90ad]">
              <Icon size={17} />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-ink">{title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function IntentSignals() {
  return (
    <section id="signals" className="relative overflow-hidden py-24 sm:py-32">
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[18%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-light/10 blur-[140px]" />
      </div>

      <div className="container-px relative">
        <SectionHeading
          eyebrow={
            <>
              <Radar size={13} className="text-[#0e90ad]" />
              Intent signals, not just contacts
            </>
          }
          title="Every export is a list of reasons to reach out now."
          subtitle="Coldcast doesn’t just hand you contacts — it captures the company and person signals that show who’s in-market, straight from your live Sales Navigator session. Not bought from a stale third-party database."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <SignalGroup label="Company" accentIcon={Building2} signals={COMPANY_SIGNALS} />
          </Reveal>
          <Reveal delay={0.1}>
            <SignalGroup label="Person" accentIcon={UserPlus} signals={PERSON_SIGNALS} />
          </Reveal>
        </div>

        {/* How to use it */}
        <Reveal delay={0.15} className="mx-auto mt-10 max-w-4xl">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-l-4 border-hairline border-l-brand/60 bg-brand-gradient-soft p-6 shadow-card transition-shadow hover:shadow-float sm:flex-row sm:items-center sm:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-black/[0.05] text-[#0e90ad]">
              <Target size={22} />
            </span>
            <p className="text-sm leading-relaxed text-ink/90 sm:text-[0.95rem]">
              <span className="font-semibold text-ink">How to use it:</span> prioritize the accounts
              showing the strongest signals — a new VP hire at a fast-growing company beats either
              alone — time outreach to the trigger, and open with the signal itself, so every message
              reads like it was written for that moment instead of blasted to a list.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
