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
//
// `color` is each brand's own SimpleIcons hex, so the logos read in full colour
// against the graphite band. Notion's brand colour is pure black, which would
// vanish here, so it's lifted to a light neutral — the one logo that can't wear
// its real hex on a dark strip.
const STACK = [
  { icon: SiSalesforce, name: 'Salesforce', color: '#00A1E0' },
  { icon: SiHubspot, name: 'HubSpot', color: '#FF7A59' },
  { icon: SiZoho, name: 'Zoho CRM', color: '#E42527' },
  { icon: SiGooglesheets, name: 'Google Sheets', color: '#34A853' },
  { icon: SiAirtable, name: 'Airtable', color: '#18BFFF' },
  { icon: SiNotion, name: 'Notion', color: '#E9E9E9' },
  { icon: SiZapier, name: 'Zapier', color: '#FF4F00' },
]

export default function StackStrip() {
  return (
    <section className="border-y border-hairline bg-white/[0.02] py-12">
      <Reveal className="container-px flex flex-col items-center gap-7">
        <span className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Your enriched leads drop straight into the tools you already use
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-5">
          {STACK.map(({ icon: Icon, name, color }) => (
            <span key={name} className="group flex items-center gap-2">
              {/* Full-colour brand mark (currentColor via inline style), mint
                  label beside it. */}
              <Icon
                className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ color }}
                aria-hidden
              />
              <span className="text-sm font-medium text-accent">{name}</span>
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
