import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import BrandLogo from './BrandLogo'
import { TRIAL_URL, DEMO_URL, CUSTOMER_COUNT } from '../lib/constants'

// Cloud-Büro-style cloud gradient: deep purple sky fading to soft white cloud
// at the bottom, which flows straight into the light body below.
const CLOUD_BG =
  'radial-gradient(ellipse 130% 52% at 50% 112%, rgba(255,255,255,1) 0%, rgba(214,224,255,0.85) 32%, rgba(140,170,255,0.25) 58%, transparent 78%),' +
  'linear-gradient(176deg, #1c074c 0%, #3a10a0 28%, #5720ce 52%, #7b4fd4 70%, rgba(190,202,255,0.45) 86%, transparent 100%)'

// Floating glassmorphism squares — positions adapted from the reference (em units).
const LEFT = [
  [10, 0.75], [19, 0.75], [28.1, 0.75], [1, 5.25], [5.6, 5.25], [22.2, 5.25],
  [1, 9.75], [14.6, 9.75], [27.4, 10.5], [32.5, 9.75], [1, 18.75], [14.6, 18.75],
  [10, 26.25], [1, 32.25], [6.25, 32.25], [1, 36.75], [1, 41.25],
]
const RIGHT = [
  [1, 27.75], [6.25, 27.75], [1, 23.25], [6.25, 23.25], [1, 18.75], [14.6, 18.75],
  [1, 14.25], [5.6, 14.25], [23.5, 14.25], [10, 9.75], [19.1, 9.75], [32.5, 10.75],
  [1, 5.25], [14.6, 5.25], [1, 0.75], [10, 0.75], [23.6, 0.75], [19.1, 26.5],
]

function Squares() {
  const make = (arr, side) =>
    arr.map(([bottom, off], i) => (
      <div
        key={`${side}-${i}`}
        className="absolute h-[5.25em] w-[5.25em] rounded-[1em] border border-white/15 bg-white/[0.13] backdrop-blur-[4px] motion-reduce:!animate-none"
        style={{
          bottom: `${bottom}em`,
          [side]: `${off}em`,
          animation: `square-blink ${(2.6 + ((i * 7) % 9) * 0.35).toFixed(2)}s ease-in-out ${(((i * 5 + (side === 'right' ? 3 : 0)) % 11) * 0.32).toFixed(2)}s infinite`,
        }}
      />
    ))
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 top-0 hidden max-h-[82vh] overflow-hidden lg:block">
      {make(LEFT, 'left')}
      {make(RIGHT, 'right')}
    </div>
  )
}

const INTEGRATIONS = [
  { name: 'Apollo', domain: 'apollo.io' },
  { name: 'Instantly', domain: 'instantly.ai' },
  { name: 'Smartlead', domain: 'smartlead.ai' },
  { name: 'HubSpot', domain: 'hubspot.com' },
  { name: 'Salesforce', domain: 'salesforce.com' },
]

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } } }

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section
      id="top"
      className="relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden pb-28 pt-40 sm:pt-44"
      style={{ backgroundImage: CLOUD_BG }}
    >
      <Squares />

      <motion.div
        variants={stagger}
        initial={reduce ? false : 'hidden'}
        animate="show"
        className="container-px relative z-10"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
          {/* social-proof eyebrow */}
          <motion.a
            variants={fade}
            href="#safety"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.10] px-3.5 py-1.5 text-sm text-white/85 backdrop-blur transition-colors hover:bg-white/[0.16]"
          >
            <ShieldCheck size={14} className="text-[#9fe3c3]" />
            Tested by <span className="font-semibold text-white">{CUSTOMER_COUNT}</span> sales professionals
            <ArrowRight size={14} className="text-white/55" />
          </motion.a>

          <motion.h1
            variants={fade}
            className="text-balance font-display text-[2.75rem] font-bold leading-[1.04] tracking-[-0.02em] text-white sm:text-[3.6rem] lg:text-[4.6rem]"
          >
            The world&rsquo;s safest<br />Sales Navigator scraper.
          </motion.h1>

          <motion.p variants={fade} className="max-w-2xl text-pretty text-base leading-relaxed text-[#e3ddf6] sm:text-lg">
            The <span className="font-semibold text-white">Apify alternative</span> that replaces your whole GTM
            stack — one subscription to scrape Sales Navigator, Apollo &amp; ZoomInfo at zero ban risk and pull{' '}
            <span className="font-semibold text-white">fresh, triple-verified</span> emails &amp; phone numbers.
          </motion.p>

          <motion.div variants={fade} className="mt-1 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={TRIAL_URL}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.08em] text-[#3a10a0] shadow-[0_14px_40px_-10px_rgba(20,8,60,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgba(20,8,60,0.6)]"
            >
              Start free trial
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={DEMO_URL}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/35 bg-white/[0.10] px-8 text-sm font-semibold uppercase tracking-[0.08em] text-white backdrop-blur transition-all duration-200 hover:border-white/60 hover:bg-white/[0.18]"
            >
              Book a demo
            </a>
          </motion.div>

          {/* integrations strip — sits on the light cloud base */}
          <motion.div variants={fade} className="mt-10 flex flex-col items-center gap-4 border-t border-white/15 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {INTEGRATIONS.map((b) => (
                <BrandLogo key={b.name} domain={b.domain} name={b.name} size={36} />
              ))}
            </div>
            <p className="text-sm font-medium text-[#4b4a73]">
              Plugs into the outbound &amp; CRM tools you already use
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
