// One-off: convert hardcoded light utility classes to dark-theme equivalents
// across the section components. Token-based classes (text-ink, text-muted,
// border-hairline, bg-bg/bg2/panel, floating-panel) flip automatically via the
// tailwind tokens — this only handles the hardcoded white/black/amber values.
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'components')

// Excludes: Hero, Navbar, DashboardMock (kept light = product screenshot),
// Button (variants already handle dark), Rain, FinalCTA (colored band).
const FILES = [
  'GtmPipeline', 'TrustBar', 'VolumeBand', 'Safety', 'StatsBand', 'SpeedAccuracy',
  'Features', 'IntentSignals', 'WaterfallEnrichment', 'OutputPreview', 'Comparison',
  'HowItWorks', 'UseCases', 'CredibilityRow', 'Pricing', 'FAQ', 'SectionHeading',
  'SpotlightCard', 'Footer',
].map((n) => join(root, `${n}.jsx`))

// Ordered: longer/opacity variants before bare, so they don't collide.
const REPLACEMENTS = [
  ['bg-white/90', 'bg-white/[0.06]'],
  ['bg-white/85', 'bg-white/[0.045]'],
  ['bg-white/80', 'bg-white/[0.045]'],
  ['bg-white/70', 'bg-white/[0.05]'],
  ['bg-white/60', 'bg-white/[0.05]'],
  ['bg-black/[0.012]', 'bg-white/[0.02]'],
  ['bg-black/[0.025]', 'bg-white/[0.04]'],
  ['bg-black/[0.02]', 'bg-white/[0.03]'],
  ['bg-black/[0.03]', 'bg-white/[0.04]'],
  ['bg-black/5', 'bg-white/5'],
  ['bg-black/10', 'bg-white/10'],
  ['bg-black/15', 'bg-white/15'],
  ['bg-black/20', 'bg-white/20'],
  ['border-black/10', 'border-white/10'],
  ['border-black/15', 'border-white/15'],
  ['border-black/20', 'border-white/20'],
  ['text-[#92400e]', 'text-amber'],
  // bare bg-white (highlighted columns) — after the /opacity ones are gone
  ['bg-white ', 'bg-white/[0.06] '],
  ['bg-white"', 'bg-white/[0.06]"'],
]

let total = 0
for (const f of FILES) {
  let src
  try { src = readFileSync(f, 'utf8') } catch { console.log('skip (missing):', f); continue }
  let n = 0
  for (const [from, to] of REPLACEMENTS) {
    const before = src
    src = src.split(from).join(to)
    if (src !== before) n += (before.length - src.length === 0 ? 1 : 1)
  }
  writeFileSync(f, src)
  console.log(`${f.split(/[\\/]/).pop()}: updated`)
  total += n
}
console.log('done')
