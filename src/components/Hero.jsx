import { useEffect, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
  animate,
  useReducedMotion,
} from 'framer-motion'
import { ArrowRight, PlayCircle, Star, ShieldCheck } from 'lucide-react'
import Button from './Button'
import DashboardMock from './DashboardMock'
import { APP_URL, RATING } from '../lib/constants'

const REASSURANCE = ['No password sharing', 'Runs in your own browser', 'Cancel anytime']

const ROTATING = [
  { text: 'export at scale', color: 'text-brand-light' },
  { text: 'enrich in one pass', color: 'text-violet' },
  { text: 'spot buying intent', color: 'text-amber' },
  { text: 'stay account-safe', color: 'text-safe' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}
const child = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

function RotatingWords() {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2400)
    return () => clearInterval(id)
  }, [reduce])
  return (
    <span className="relative inline-flex h-[1.2em] min-w-[12ch] items-center justify-center overflow-hidden align-bottom sm:justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: '0.6em', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-0.6em', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`font-semibold ${ROTATING[i].color}`}
        >
          {ROTATING[i].text}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function RatingChip() {
  // [PLACEHOLDER] only ship "#1" / rating once backed by real reviews.
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white/5 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
      <span className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="fill-amber text-amber" />
        ))}
      </span>
      <span className="font-semibold text-ink">{RATING.stars}</span>
      <span className="h-3 w-px bg-white/15" />
      <span>{RATING.claim}</span>
    </span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const color = useMotionValue('#4f7cf5')
  const spotX = useMotionValue(-300)
  const spotY = useMotionValue(-300)

  useEffect(() => {
    if (reduce) return undefined
    const controls = animate(color, ['#4f7cf5', '#a855f7', '#22d3ee', '#3257d6', '#4f7cf5'], {
      duration: 16,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    })
    return () => controls.stop()
  }, [color, reduce])

  const animatedBg = useMotionTemplate`radial-gradient(130% 120% at 50% 0%, #070512 42%, ${color})`
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotX}px ${spotY}px, rgba(168,85,247,0.10), transparent 70%)`

  const handleMove = (e) => {
    spotX.set(e.clientX)
    spotY.set(e.clientY)
  }

  return (
    <section
      id="top"
      onMouseMove={handleMove}
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Animated aurora gradient */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{ backgroundImage: animatedBg }}
      />
      {/* Cursor spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
        style={{ background: spotlight }}
      />
      {/* Floating orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[22%] h-44 w-44 animate-float rounded-full bg-brand-light/20 blur-3xl" />
        <div className="absolute right-[10%] top-[14%] h-56 w-56 animate-float-slow rounded-full bg-violet/20 blur-3xl" />
        <div className="absolute right-[26%] top-[44%] h-40 w-40 animate-float rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container-px relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RatingChip />
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-7 text-balance text-[2.6rem] font-bold leading-[0.98] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl"
          >
            <motion.span variants={child} className="inline-block">Export</motion.span>{' '}
            <motion.span variants={child} className="text-gradient inline-block">
              20,000 leads a day.
            </motion.span>{' '}
            <motion.span variants={child} className="inline-block">
              Without getting your account banned.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            Coldcast runs your Sales Navigator searches in your{' '}
            <span className="font-semibold text-ink">own browser</span>, at human pace — so you pull
            clean, enriched, signal-scored lists while your LinkedIn account stays safe. No cloud
            bots. No throttling.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 flex items-center justify-center gap-2 text-base text-muted sm:text-lg"
          >
            <span>Built to</span>
            <RotatingWords />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button as="a" href={APP_URL} variant="primary" size="lg" className="w-full sm:w-auto">
              Get started
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button as="a" href="#how" variant="ghost" size="lg" className="w-full sm:w-auto">
              <PlayCircle size={18} />
              See how it works
            </Button>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? {} : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted"
          >
            {REASSURANCE.map((item, i) => (
              <li key={item} className="flex items-center gap-2">
                {i > 0 && <span className="text-muted/40">·</span>}
                <ShieldCheck size={13} className="text-safe" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div
            aria-hidden
            className="absolute inset-x-6 -top-8 bottom-0 -z-10 rounded-[2.5rem] bg-violet/15 blur-3xl"
          />
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  )
}
