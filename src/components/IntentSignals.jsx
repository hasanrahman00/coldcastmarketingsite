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
  {
    icon: TrendingUp,
    title: 'Headcount growth',
    desc: 'Teams scaling fast are actively buying tooling — catch the growth spike while decisions are still open.',
  },
  {
    icon: Banknote,
    title: 'New funding round',
    desc: 'Fresh capital resets budgets — reach out in the weeks after the announcement, before vendors lock in.',
  },
  {
    icon: Briefcase,
    title: 'Active hiring by role',
    desc: 'The roles a company opens reveal its priorities — map the function being hired to your buyer.',
  },
  {
    icon: UserPlus,
    title: 'New executive hires',
    desc: 'New leaders rebuild the stack early — land while they’re still choosing tools in their first quarter.',
  },
  {
    icon: Layers,
    title: 'Tech stack in use',
    desc: 'What a company adopts or drops tells you when to run a displacement play or pitch the next tool.',
  },
  {
    icon: Building2,
    title: 'Company size & industry',
    desc: 'Firmographics on every row, so you can segment by fit and stack signals for sharper targeting.',
  },
]

const PERSON_SIGNALS = [
  {
    icon: Repeat,
    title: 'Changed jobs recently',
    desc: 'A new role means no incumbent vendor and a fresh stack to build — the strongest person-level trigger.',
  },
  {
    icon: ArrowUpCircle,
    title: 'Promotion / expanded scope',
    desc: 'A bigger title shifts budget and priorities — engage on their new mandate once they’ve settled in.',
  },
  {
    icon: Clock,
    title: 'New in current role',
    desc: 'New managers buy fast to prove early impact — anchor your pitch to their first-90-day goals.',
  },
  {
    icon: Activity,
    title: 'Recently active on LinkedIn',
    desc: 'People posting or engaging in the last 30 days reply at far higher rates — prioritize the reachable.',
  },
  {
    icon: BadgeCheck,
    title: 'Seniority & decision-maker fit',
    desc: 'Confirm the person can actually buy before you layer behavioral signals — the targeting baseline.',
  },
  {
    icon: MailCheck,
    title: 'Verified, reachable contact',
    desc: 'A valid email or phone is itself a signal of actionability — enriched and verified, not guessed.',
  },
]

function SignalGroup({ label, accentIcon: AccentIcon, signals }) {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-hairline bg-panel/60 p-6 backdrop-blur-sm sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-brand-gradient-soft text-accent">
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
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-black/5 text-accent">
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
              <Radar size={13} className="text-accent" />
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
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-hairline bg-brand-gradient-soft p-6 sm:flex-row sm:items-center sm:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/15 bg-black/5 text-accent">
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
