import { Link } from 'react-router-dom'
import { Target, Briefcase, Rocket, Users, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Keyword-rich "who it's for" section — targets long-tail searches like
// "Sales Navigator scraper for agencies", "lead list tool for SDRs",
// "candidate sourcing from LinkedIn", etc. while reading naturally.
//
// Each card is a LINK to the full role page, so the desc's job is to earn the
// click, not to be the page. These ran ~40 words each and buried the one reason
// a given role would care; they're one line now and the role page carries the
// rest. The per-card `color` went with them — text-brand/violet/magenta are all
// within a hair of each other (#35e0b8 / #2dd4bf / #22d3ee), so three of the
// four "different" tiles read as the same mint and only amber broke ranks.
const CASES = [
  {
    icon: Target,
    title: 'SDRs & account executives',
    to: '/roles/sdrs-aes',
    desc: 'Export the exact Sales Navigator search you’re working — verified emails and direct dials attached.',
  },
  {
    icon: Briefcase,
    title: 'Lead-gen agencies & freelancers',
    to: '/roles/agencies',
    desc: 'Clean, CRM-ready lists for every client, without paying for a stack of data tools.',
  },
  {
    icon: Rocket,
    title: 'Founders & GTM teams',
    to: '/roles/founders',
    desc: 'Pull your whole ICP, scored by buying intent, straight into your sequencer.',
  },
  {
    icon: Users,
    title: 'Recruiters & talent teams',
    to: '/roles/recruiters',
    desc: 'Reach passive talent by email and phone instead of burning InMail credits.',
  },
]

export default function UseCases({ showHeading = true }) {
  return (
    <section id="use-cases" className="relative py-24 sm:py-32">
      <div className="container-px">
        {/* No subtitle. It restated the title and then said what the four cards
            below say one by one — and on /roles, where this renders with
            showHeading={false}, PageHero already carries almost the same
            sentence verbatim. */}
        {showHeading && (
          <SectionHeading
            eyebrow="Who it’s for"
            eyebrowIcon={Users}
            eyebrowTone="cyan"
            title="Built for everyone who lives in Sales Navigator."
          />
        )}

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {CASES.map(({ icon: Icon, title, desc, to }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.12}>
              {/* Mint tiles the icon, lime names the role — the same split the
                  nav submenus and the trust tiles use. Lime earns its place here
                  more than anywhere: these cards are real links, and lime is the
                  site's ACTION accent, so the thing you click is the thing that's
                  lime. Hover washes the card to match. */}
              <Link
                to={to}
                className="group flex h-full flex-col rounded-2xl border border-hairline bg-panel p-7 shadow-card backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-lime/40 hover:bg-lime/[0.05]"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/25 bg-brand-gradient-soft text-accent">
                  <Icon size={22} />
                </span>
                <h3 className="flex items-center gap-1.5 text-base font-semibold text-lime">
                  {title}
                  <ArrowRight size={15} className="text-lime opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
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
