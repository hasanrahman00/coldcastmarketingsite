import { Radar, Sparkles, MousePointerClick, MailCheck, ShieldCheck, Building2, Check } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'

function TileIcon({ icon: Icon, className }) {
  return (
    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-white/5 ${className}`}>
      <Icon size={20} />
    </span>
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
          subtitle="From the search you’re already running to a CRM-ready spreadsheet scored by buying intent — every step handled, nothing risky."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(196px,1fr)] lg:grid-flow-dense lg:grid-cols-3">
          {/* Intent — wide */}
          <Reveal className="lg:col-span-2" as="div">
            <SpotlightCard glow="rgba(245,158,11,0.16)" className="flex flex-col p-7">
              <TileIcon icon={Radar} className="text-amber" />
              <h3 className="mt-5 text-lg font-semibold text-ink">Buying-intent signals</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                Person and company signals — job changes, new-in-role, headcount growth, hiring, and
                funding — captured live from your session at export time.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {INTENT_PILLS.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-2.5 py-1 text-[11px] font-medium text-amber"
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
            <SpotlightCard glow="rgba(168,85,247,0.18)" className="flex flex-col p-7">
              <TileIcon icon={Sparkles} className="text-violet" />
              <h3 className="mt-5 text-lg font-semibold text-ink">Multi-source enrichment</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Verified emails, phones, and domains from your own Lusha, SalesQL, and ContactOut
                accounts — combined in one waterfall pass.
              </p>
              <div className="mt-auto flex flex-col gap-2 pt-6">
                {SOURCES.map((s) => (
                  <div
                    key={s}
                    className="flex items-center justify-between rounded-lg border border-hairline bg-white/[0.03] px-3 py-2 text-xs"
                  >
                    <span className="text-muted">{s}</span>
                    <span className="inline-flex items-center gap-1 text-violet">
                      <Check size={13} /> matched
                    </span>
                  </div>
                ))}
                <div className="mt-1 flex items-center justify-between rounded-lg border border-accent/20 bg-accent/[0.06] px-3 py-2 text-xs">
                  <span className="font-medium text-ink">Verified email</span>
                  <MailCheck size={14} className="text-accent" />
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* One-click export */}
          <Reveal as="div">
            <SpotlightCard glow="rgba(79,124,245,0.16)" className="flex flex-col p-6">
              <TileIcon icon={MousePointerClick} className="text-brand-light" />
              <h3 className="mt-5 text-base font-semibold text-ink">One-click export</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Capture the exact Sales Navigator search you’re viewing — no copy-paste, no
                page-by-page.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Verified emails */}
          <Reveal as="div">
            <SpotlightCard glow="rgba(34,211,238,0.16)" className="flex flex-col p-6">
              <TileIcon icon={MailCheck} className="text-accent" />
              <h3 className="mt-5 text-base font-semibold text-ink">Verified emails &amp; domains</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Business-only, de-duplicated, and validated before they ever land in your file.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Account-safe — wide */}
          <Reveal className="lg:col-span-2" as="div">
            <SpotlightCard glow="rgba(52,211,153,0.16)" className="flex h-full flex-col justify-center p-7">
              <div className="flex items-start gap-4">
                <TileIcon icon={ShieldCheck} className="text-safe" />
                <div>
                  <h3 className="text-lg font-semibold text-ink">Account-safe by design</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    Your real session, your IP, human-paced — no headless bots and no stored
                    credentials. The fingerprints that get LinkedIn accounts flagged simply never
                    happen.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Company intelligence */}
          <Reveal as="div">
            <SpotlightCard glow="rgba(79,124,245,0.16)" className="flex flex-col p-6">
              <TileIcon icon={Building2} className="text-brand-light" />
              <h3 className="mt-5 text-base font-semibold text-ink">Company intelligence</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Website, size, industry, growth, and location attached to every lead.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
