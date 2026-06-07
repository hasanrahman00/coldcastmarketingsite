import { ShieldCheck, UserCheck, Database, KeyRound, Scale, CalendarCheck } from 'lucide-react'
import {
  SiSalesforce,
  SiHubspot,
  SiZoho,
  SiGooglesheets,
  SiAirtable,
  SiNotion,
  SiZapier,
} from 'react-icons/si'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Real, recognizable tools your exported (CSV/XLSX) leads drop into. Framed as
// "works with your stack" — NOT a customer/"trusted by" wall, which would imply
// relationships Coldcast doesn't have. Swap for real customer logos once you have them.
const STACK = [
  { icon: SiSalesforce, name: 'Salesforce' },
  { icon: SiHubspot, name: 'HubSpot' },
  { icon: SiZoho, name: 'Zoho CRM' },
  { icon: SiGooglesheets, name: 'Google Sheets' },
  { icon: SiAirtable, name: 'Airtable' },
  { icon: SiNotion, name: 'Notion' },
  { icon: SiZapier, name: 'Zapier' },
]

// Trust tiles. Each is a concrete, falsifiable mechanic or promise — no bare
// superlatives. [PLACEHOLDER] notes flag claims to confirm before launch.
const TILES = [
  {
    icon: ShieldCheck,
    title: '6+ months · 0 account bans',
    desc: 'Documented internal track record — human pace, in your own session.',
    // [PLACEHOLDER] confirm the exact duration + that the zero-bans record is documented.
  },
  {
    icon: UserCheck,
    title: 'Your session, your IP',
    desc: 'Scraping runs in your own browser — no proxies, no separate logins.',
  },
  {
    icon: Database,
    title: 'You own your data',
    desc: 'Your leads never touch our servers. We never sell your information.',
  },
  {
    icon: KeyRound,
    title: 'No password sharing',
    desc: 'You never hand over your LinkedIn password. Nothing is stored.',
  },
  {
    icon: Scale,
    title: 'GDPR-ready handling',
    desc: 'Built around compliant data handling from day one.',
    // [PLACEHOLDER] keep "GDPR-ready" wording until a formal review; no fake badges.
  },
  {
    icon: CalendarCheck,
    title: 'Cancel anytime',
    desc: 'Month to month. No lock-in, no contracts, no questions.',
  },
]

export default function CredibilityRow() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Built for trust"
          title="No bots. No bans. No surprises."
          subtitle="Coldcast runs in your own browser at human pace — so your account, your data, and your budget stay yours."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-hairline bg-white/85 p-5 shadow-card backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-hairline bg-black/5 text-accent">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Works-with-your-stack logo strip (real, recognizable tools — honest framing) */}
        <Reveal delay={0.1} className="mt-16 flex flex-col items-center gap-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted/70">
            Your enriched leads drop straight into the tools you already use
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-5">
            {STACK.map(({ icon: Icon, name }) => (
              <span
                key={name}
                className="flex items-center gap-2 text-muted/55 transition-colors duration-200 hover:text-ink"
              >
                <Icon className="h-6 w-6 shrink-0" aria-hidden />
                <span className="text-sm font-medium">{name}</span>
              </span>
            ))}
          </div>
          <span className="text-[11px] text-muted/50">
            Export as CSV or XLSX — works with anything that takes a spreadsheet.
          </span>
        </Reveal>
      </div>
    </section>
  )
}
