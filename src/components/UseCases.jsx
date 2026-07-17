import { Link } from 'react-router-dom'
import { Target, Briefcase, Rocket, Users, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Keyword-rich "who it's for" section — targets long-tail searches like
// "Sales Navigator scraper for agencies", "lead list tool for SDRs",
// "candidate sourcing from LinkedIn", etc. while reading naturally.
const CASES = [
  {
    icon: Target,
    color: 'text-brand',
    title: 'SDRs & account executives',
    to: '/roles/sdrs-aes',
    desc: 'Build cold-email and cold-call lists in minutes. Export the exact Sales Navigator search you’re working — enriched with verified work emails and direct-dial phone numbers — so you spend the day selling instead of copy-pasting into a spreadsheet.',
  },
  {
    icon: Briefcase,
    color: 'text-violet',
    title: 'Lead-gen agencies & freelancers',
    to: '/roles/agencies',
    desc: 'Deliver clean, enriched lead lists for every client without paying for a stack of data tools. Connect each client’s Sales Navigator, export leads at scale, and hand over CRM-ready CSV or XLSX files with emails, phones and buying signals already attached.',
  },
  {
    icon: Rocket,
    color: 'text-amber',
    title: 'Founders & GTM teams',
    to: '/roles/founders',
    desc: 'Go to market without a data budget. Pull your entire ICP out of LinkedIn Sales Navigator, score every lead by buying intent, and push send-ready prospects straight into your sequencer and CRM — all account-safe, from your own browser.',
  },
  {
    icon: Users,
    color: 'text-magenta',
    title: 'Recruiters & talent teams',
    to: '/roles/recruiters',
    desc: 'Source candidates straight from Sales Navigator searches. Export profiles with verified personal and work emails plus phone numbers, so you can reach passive talent by email and phone instead of waiting on LinkedIn InMail credits.',
  },
]

export default function UseCases({ showHeading = true }) {
  return (
    <section id="use-cases" className="relative py-24 sm:py-32">
      <div className="container-px">
        {showHeading && (
          <SectionHeading
            eyebrow="Who it’s for"
            title="Built for everyone who lives in Sales Navigator."
            subtitle="From a single SDR to a full lead-generation agency, Coldcast turns LinkedIn Sales Navigator searches into clean, enriched, ready-to-send lead lists — without the throttling, the per-lead bill, or the banned accounts."
          />
        )}

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {CASES.map(({ icon: Icon, color, title, desc, to }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.12}>
              <Link
                to={to}
                className="group flex h-full flex-col rounded-2xl border border-hairline bg-panel p-7 shadow-card backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1"
              >
                <span
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-hairline bg-brand-gradient-soft ${color}`}
                >
                  <Icon size={22} />
                </span>
                <h3 className="flex items-center gap-1.5 text-base font-semibold text-ink">
                  {title}
                  <ArrowRight size={15} className="text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
