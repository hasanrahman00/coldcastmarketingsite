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

// Where the export LANDS. This closes out HowItWorks: those four steps end at a
// file, and this says what the file opens in — so it's deliberately pinned
// directly below that section rather than floating as a section of its own.
//
// It's a BAND, not a section: same chrome as TrustBar (hairline top and bottom,
// a 2% wash, compressed py-12) because that's what this site's logo strips look
// like. Full py-24/py-32 section padding would strand one short row of logos in
// 256px of empty graphite.
//
// Lifted out of CredibilityRow when that section was removed — it was the only
// part of it worth keeping, and copying the list into a second file is how the
// logo marks drifted last time.
//
// Real, recognisable tools your exported (CSV/XLSX) leads drop into. Framed as
// "works with your stack" — NOT a customer/"trusted by" wall, which would imply
// relationships Coldcast doesn't have.
const STACK = [
  { icon: SiSalesforce, name: 'Salesforce' },
  { icon: SiHubspot, name: 'HubSpot' },
  { icon: SiZoho, name: 'Zoho CRM' },
  { icon: SiGooglesheets, name: 'Google Sheets' },
  { icon: SiAirtable, name: 'Airtable' },
  { icon: SiNotion, name: 'Notion' },
  { icon: SiZapier, name: 'Zapier' },
]

export default function StackStrip() {
  return (
    <section className="border-y border-hairline bg-white/[0.02] py-12">
      <Reveal className="container-px flex flex-col items-center gap-7">
        <span className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Your enriched leads drop straight into the tools you already use
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-5">
          {STACK.map(({ icon: Icon, name }) => (
            <span
              key={name}
              className="flex items-center gap-2 text-muted transition-colors duration-200 hover:text-ink"
            >
              <Icon className="h-6 w-6 shrink-0" aria-hidden />
              <span className="text-sm font-medium">{name}</span>
            </span>
          ))}
        </div>
        <span className="text-center text-[11px] text-muted">
          Export as CSV or XLSX — works with anything that takes a spreadsheet.
        </span>
      </Reveal>
    </section>
  )
}
