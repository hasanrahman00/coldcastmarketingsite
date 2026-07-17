import { useRef } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
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

// A highlight travelling the row, not a strobe: each avatar and each logo lifts
// in turn, so the row reads as a live roster being checked. The resting state is
// bright and the wave adds light to one item — see the logo-blink keyframe for
// why the inverse (dimming everything) washed the section out.
const AVATAR_CYCLE = 6 // seconds for one pass across the faces
const LOGO_CYCLE = 9 // longer: there are 11 logos, so the wave stays gentle

export default function TrustBar() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  // 16 infinite animations (11 logos + 5 faces) would otherwise keep the
  // compositor working for the whole page, including while this section is far
  // off-screen. Run them only while it's actually visible. `once: false` is the
  // point — it must stop again on scroll away.
  const inView = useInView(ref, { margin: '120px' })
  const animate = inView && !reduce

  // Stagger each item by its index so the highlight travels left to right.
  const ripple = (i, count, cycle, name) =>
    animate ? `${name} ${cycle}s ease-in-out ${((i / count) * cycle).toFixed(2)}s infinite` : undefined

  return (
    <section ref={ref} className="border-y border-hairline bg-white/[0.02] py-12">
      <div className="container-px">
        <Reveal className="flex flex-col items-center gap-7 text-center">
          {/* Social proof — trusted by 2,500+ sales teams */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            <div className="flex -space-x-2.5">
              {AVATARS.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-9 w-9 rounded-full border-2 border-bg2 object-cover"
                  style={{ animation: ripple(i, AVATARS.length, AVATAR_CYCLE, 'face-pulse') }}
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
              {ENRICHMENT_SOURCES.map((source, i) => (
                <li
                  key={source.name}
                  style={{ animation: ripple(i, ENRICHMENT_SOURCES.length, LOGO_CYCLE, 'logo-blink') }}
                >
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
