import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import Avatar from './Avatar'
import { Eyebrow } from './SectionHeading'
import { TRIAL_URL } from '../lib/constants'

const STEPS = [
  { emoji: '✍️', tile: 'bg-brand/15', title: 'Writes personalised emails', desc: 'Opens with the exact buying signal it found on each lead.' },
  { emoji: '🔁', tile: 'bg-violet/15', title: 'Follows up for you', desc: 'Handles replies and multi-step sequences automatically.' },
  { emoji: '📅', tile: 'bg-safe/15', title: 'Books the meeting', desc: 'Keeps going until it lands a slot on your calendar.' },
]

const OUTREACH = [
  {
    name: 'Tiffanie K.', role: 'CRO', company: 'illumenature', signal: 'new-in-role', status: ['sent', 'replied'],
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    subject: 'Quick one on your new CRO role 👋',
    body: 'Hi Tiffanie — saw you just stepped into the CRO seat at illumenature. Most new revenue leaders rebuild their outbound stack in month one — worth 15 minutes on how teams pull verified pipeline without the busywork?',
  },
  {
    name: 'Tyler B.', role: 'CEO', company: 'Scalawags', signal: 'hiring 14 roles', status: ['sent'],
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    subject: 'Scaling the team at Scalawags? 🚀',
    body: 'Hi Tyler — noticed Scalawags is hiring across 14 roles right now. When teams scale this fast, lead data gets messy quick — happy to share how we keep it clean and enriched automatically.',
  },
  {
    name: 'Camille H.', role: 'Ops Manager', company: 'Trove', signal: 'new venture', status: ['sent', 'replied'],
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
    subject: 'Congrats on the Trove launch ✨',
    body: 'Hi Camille — saw Trove just launched. Early teams that nail outbound now compound for years — want the playbook we use to find verified buyers the day they go in-market?',
  },
]

const STAT_STYLE = {
  sent: 'bg-brand/20 text-brand',
  replied: 'bg-safe/15 text-accent',
}

function OutreachCard() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % OUTREACH.length), 4200)
    return () => clearInterval(id)
  }, [])
  const o = OUTREACH[i]

  return (
    <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-hairline bg-panel/70 p-5 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float">
      <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/20 blur-[80px]" />

      {/* Header — the agent */}
      <div className="relative flex items-center gap-3 border-b border-hairline pb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-xs font-semibold text-[#062119]">AI</span>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-ink">AI SDR</div>
          <div className="text-xs text-muted">drafting · just now</div>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-safe/15 px-2.5 py-1 text-[11px] font-medium text-accent">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-safe opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-safe" />
          </span>
          live
        </span>
      </div>

      {/* Cycling outreach — one lead after another */}
      <div className="relative mt-4 min-h-[208px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? {} : { opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2.5">
              <Avatar src={o.avatar} name={o.name} size={32} />
              <div className="min-w-0 text-xs">
                <span className="font-medium text-ink/90">To: {o.name}</span>
                <span className="text-muted"> · {o.role} at {o.company}</span>
              </div>
            </div>
            <div className="mt-3 text-sm font-medium text-ink">{o.subject}</div>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">{o.body}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-hairline pt-4">
              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-muted">signal: {o.signal}</span>
              {o.status.map((s) => (
                <span key={s} className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${STAT_STYLE[s]}`}>{s}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots + live tally */}
      <div className="relative mt-4 flex items-center justify-between border-t border-hairline pt-4">
        <div className="flex items-center gap-1.5">
          {OUTREACH.map((_, idx) => (
            <span key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? 'w-4 bg-brand-light' : 'w-1.5 bg-white/20'}`} />
          ))}
        </div>
        <span className="text-[11px] text-muted">Today · 142 sent · 38 replies · 9 booked</span>
      </div>
    </div>
  )
}

export default function AiSdr() {
  return (
    <section id="ai-sdr" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6%] top-1/2 h-[440px] w-[560px] -translate-y-1/2 rounded-full bg-brand/15 blur-[150px]" />
        <div className="absolute right-[-4%] top-[20%] h-[360px] w-[460px] rounded-full bg-violet/15 blur-[150px]" />
      </div>

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — story */}
          <div>
            <Reveal>
              <Eyebrow>
                <span className="text-sm leading-none">🤖</span>
                AI SDR · new
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-7 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Your leads don’t sit in a CSV. Your <span className="text-gradient">AI SDR</span> works them.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                The moment a lead is scraped, enriched and verified, your AI SDR takes over — writing,
                sending and following up so the pipeline runs while you sleep.
              </p>
            </Reveal>

            {/* Connected step flow */}
            <ol className="relative mt-8 space-y-6">
              <span aria-hidden className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-brand via-violet to-safe opacity-40" />
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={0.14 + i * 0.07} className="relative flex gap-4">
                  <span className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hairline text-[18px] leading-none shadow-card ${s.tile}`}>
                    {s.emoji}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.4} className="mt-9">
              <Button as="a" href={TRIAL_URL} variant="primary" size="lg" className="shadow-[0_0_28px_-6px_rgba(53,224,184,0.7)]">
                Try the AI SDR free
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Reveal>
          </div>

          {/* Right — live, cycling outreach */}
          <Reveal delay={0.15}>
            <OutreachCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
