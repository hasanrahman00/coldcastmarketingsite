import { ShieldCheck, Star } from 'lucide-react'
import Reveal from './Reveal'
import BrandLogo from './BrandLogo'
import { ENRICHMENT_SOURCES, CUSTOMER_COUNT } from '../lib/constants'

const AVATARS = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/52.jpg',
]

export default function TrustBar() {
  return (
    <section className="border-y border-hairline bg-black/[0.015] py-12">
      <div className="container-px">
        <Reveal className="flex flex-col items-center gap-7 text-center">
          {/* Social proof — trusted by 2,500+ sales teams */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            <div className="flex -space-x-2.5">
              {AVATARS.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-9 w-9 rounded-full border-2 border-bg2 object-cover"
                />
              ))}
            </div>
            <div className="flex flex-col items-start">
              <span className="flex items-center gap-0.5 text-amber">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={14} className="fill-amber stroke-amber" />
                ))}
              </span>
              <span className="text-sm text-ink">
                Trusted by <strong className="font-semibold">{CUSTOMER_COUNT} sales professionals</strong>
              </span>
            </div>
          </div>

          <p className="flex items-center gap-2.5 text-sm font-medium text-ink sm:text-base">
            <ShieldCheck size={18} className="shrink-0 text-accent" />
            Tested daily with internal sales teams for 6+ months — zero account bans.
          </p>

          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Enriches from the sources you already use
            </span>
            <ul className="flex max-w-3xl flex-wrap items-center justify-center gap-3.5">
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
