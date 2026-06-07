import { ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'
import BrandLogo from './BrandLogo'
import { ENRICHMENT_SOURCES } from '../lib/constants'

export default function TrustBar() {
  return (
    <section className="border-y border-hairline bg-white/[0.015] py-10">
      <div className="container-px">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="flex items-center gap-2.5 text-sm font-medium text-ink sm:text-base">
            <ShieldCheck size={18} className="shrink-0 text-accent" />
            Tested daily with internal sales teams for 6+ months — zero account bans.
          </p>

          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted/70">
              Enriches from the sources you already use
            </span>
            <ul className="flex flex-wrap items-center justify-center gap-3.5">
              {ENRICHMENT_SOURCES.map((source) => (
                <li key={source.name}>
                  <BrandLogo domain={source.domain} name={source.name} size={40} />
                  <span className="sr-only">{source.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
