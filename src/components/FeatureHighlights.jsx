import { Sparkles, ShieldCheck, Zap, Target, Wallet } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Merges the old Safety ("your own session at human pace, not a machine-speed bot") and
// SpeedAccuracy ("faster / higher match / lower cost") sections into one Features
// block. Each card leads with a keyword-forward <h3> for SEO; the four claims are
// the same substantiated ones the two source sections carried.
// [PLACEHOLDER] match-rate / speed / price figures are competitive illustrations
// — confirm against real benchmarks before launch (kept defensible).
const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Account-safe LinkedIn scraping',
    desc: 'Runs your own logged-in LinkedIn session in a secure, isolated cloud browser — human-paced with hard limits, never storing your password. 6+ months of daily use, zero account bans.',
  },
  {
    icon: Zap,
    title: 'Faster Sales Navigator exports',
    desc: 'Export a 2,500-lead search in about five minutes, and up to ~20,000 leads a day — a fraction of the time other Sales Navigator scrapers take to hand you the same list.',
  },
  {
    icon: Target,
    title: 'Higher email & phone match rates',
    desc: 'Waterfall enrichment across Apollo, Lusha, SalesQL and ContactOut lifts verified email & phone match to 70–85% — triple-checked, never guessed.',
  },
  {
    icon: Wallet,
    title: 'Lower cost per verified lead',
    desc: 'Scraping is free and enrichment is pay-as-you-go — no per-lead bill or seat minimums other Sales Navigator scrapers hand you.',
  },
]

function Card({ icon: Icon, title, desc, className = '' }) {
  return (
    <div
      className={`group relative flex h-full flex-col rounded-2xl border border-hairline bg-panel p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-hairline-strong hover:shadow-float ${className}`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 text-lime ring-1 ring-lime/20">
        <Icon size={22} strokeWidth={1.9} />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
    </div>
  )
}

export default function FeatureHighlights() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Features"
          eyebrowIcon={Sparkles}
          eyebrowTone="cyan"
          title="The account-safe LinkedIn Sales Navigator scraper — faster exports, higher match rates, lower cost."
          subtitle="Coldcast is the LinkedIn Sales Navigator scraper that runs your own logged-in session at human pace with hard limits, so your account stays safe — while exporting more verified leads, faster and cheaper than machine-speed scrapers."
        />

        {/* 3 across on the first row; the 4th centres under them (lg:col-start-2). */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08} className={i === 3 ? 'lg:col-start-2' : ''}>
              <Card {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
