import { Radar, Sparkles, MousePointerClick, MailCheck, ShieldCheck, Building2, Check } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'

const TINT = {
  amber: { grad: 'from-[#fbbf24] to-[#f59e0b]', glow: 'rgba(245,158,11,0.22)' },
  violet: { grad: 'from-[#a855f7] to-[#7c3aed]', glow: 'rgba(124,58,237,0.22)' },
  brand: { grad: 'from-[#60a5fa] to-[#3257d6]', glow: 'rgba(79,124,245,0.22)' },
  cyan: { grad: 'from-[#22d3ee] to-[#0891b2]', glow: 'rgba(8,145,178,0.22)' },
  safe: { grad: 'from-[#34d399] to-[#059669]', glow: 'rgba(5,150,105,0.22)' },
}

function TileIcon({ icon: Icon, tint }) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${TINT[tint].grad} text-white`}
      style={{ boxShadow: `0 10px 24px -8px ${TINT[tint].glow}` }}
    >
      <Icon size={22} />
    </span>
  )
}

function Bloom({ tint }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-2xl"
      style={{ background: TINT[tint].glow }}
    />
  )
}

const INTENT_PILLS = ['Job change', 'New-in-role', 'Headcount +22%', 'Series C', 'Hiring 14 roles']
const SOURCES = ['Lusha', 'SalesQL', 'ContactOut']

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to build a clean, signal-rich list."
          subtitle="From the search you’re already running to a CRM-ready spreadsheet scored by buying intent."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(196px,1fr)] lg:grid-flow-dense lg:grid-cols-3">
          {/* Intent — wide */}
          <Reveal className="lg:col-span-2" as="div">
            <SpotlightCard glow={TINT.amber.glow} className="flex flex-col p-7">
              <Bloom tint="amber" />
              <TileIcon icon={Radar} tint="amber" />
              <h3 className="relative mt-5 text-base font-semibold text-ink">Buying-intent signals</h3>
              <p className="relative mt-2 max-w-md text-sm leading-relaxed text-muted">
                Person + company signals — job changes, new-in-role, growth, hiring, funding — captured
                live at export.
              </p>
              <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
                {INTENT_PILLS.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-2.5 py-1 text-[11px] font-medium text-[#c2740c]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    {p}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Enrichment — tall */}
          <Reveal className="lg:row-span-2" as="div">
            <SpotlightCard glow={TINT.violet.glow} className="flex flex-col p-7">
              <Bloom tint="violet" />
              <TileIcon icon={Sparkles} tint="violet" />
              <h3 className="relative mt-5 text-base font-semibold text-ink">Multi-source enrichment</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                Verified emails, phones, and domains from Lusha, SalesQL, and ContactOut — one waterfall
                pass.
              </p>
              <div className="relative mt-auto flex flex-col gap-2 pt-6">
                {SOURCES.map((s) => (
                  <div
                    key={s}
                    className="flex items-center justify-between rounded-lg border border-hairline bg-black/[0.03] px-3 py-2 text-xs"
                  >
                    <span className="text-muted">{s}</span>
                    <span className="inline-flex items-center gap-1 text-[#7c3aed]">
                      <Check size={13} /> matched
                    </span>
                  </div>
                ))}
                <div className="mt-1 flex items-center justify-between rounded-lg border border-accent/20 bg-accent/[0.06] px-3 py-2 text-xs">
                  <span className="font-medium text-ink">Verified email</span>
                  <MailCheck size={14} className="text-[#0e90ad]" />
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* One-click export */}
          <Reveal as="div">
            <SpotlightCard glow={TINT.brand.glow} className="flex flex-col p-6">
              <Bloom tint="brand" />
              <TileIcon icon={MousePointerClick} tint="brand" />
              <h3 className="relative mt-5 text-base font-semibold text-ink">One-click export</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                Capture the exact Sales Navigator search you’re viewing — no copy-paste.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Verified emails */}
          <Reveal as="div">
            <SpotlightCard glow={TINT.cyan.glow} className="flex flex-col p-6">
              <Bloom tint="cyan" />
              <TileIcon icon={MailCheck} tint="cyan" />
              <h3 className="relative mt-5 text-base font-semibold text-ink">Verified emails &amp; domains</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                Business-only, de-duplicated, validated before they land in your file.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Account-safe — wide */}
          <Reveal className="lg:col-span-2" as="div">
            <SpotlightCard glow={TINT.safe.glow} className="flex h-full flex-col justify-center p-7">
              <Bloom tint="safe" />
              <div className="relative flex items-start gap-4">
                <TileIcon icon={ShieldCheck} tint="safe" />
                <div>
                  <h3 className="text-base font-semibold text-ink">Account-safe by design</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    Your real session, your IP, human-paced — no headless bots, no stored credentials.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Company intelligence */}
          <Reveal as="div">
            <SpotlightCard glow={TINT.brand.glow} className="flex flex-col p-6">
              <Bloom tint="brand" />
              <TileIcon icon={Building2} tint="brand" />
              <h3 className="relative mt-5 text-base font-semibold text-ink">Company intelligence</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                Website, size, industry, growth, and location on every lead.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
