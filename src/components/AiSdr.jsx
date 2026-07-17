import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Bot, CalendarCheck, Check, PenLine, Repeat2 } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import Avatar from './Avatar'
import Logo from './Logo'
import { Eyebrow } from './SectionHeading'
import { TRIAL_URL } from '../lib/constants'

// The section runs as one live loop: the AI SDR works a lead through three
// stages, and the step list on the left lights in step with the card on the
// right. Same accent rule as the hero and Live Export —
//
//   LIME = in flight  (the stage happening right now: drafting, sending)
//   MINT = confirmed  (a stage that's done: replied, booked, the ticks)
//
// so the section visibly resolves lime -> mint as each lead lands.
const STAGE_MS = 2600

const STEPS = [
  { Icon: PenLine, title: 'Writes personalised emails', desc: 'Opens with the buying signal it found.' },
  { Icon: Repeat2, title: 'Follows up automatically', desc: 'Handles replies and multi-step sequences.' },
  { Icon: CalendarCheck, title: 'Books the meeting', desc: 'Keeps going until it lands a slot.' },
]

// Emoji removed from the subject lines too — the art direction is emoji-free,
// and the copy reads sharper without them.
// Full emails, not one-line teasers: the card is as tall as the copy column
// beside it, so a single sentence left the message stranded in the middle of a
// lot of nothing. Each is a real four-beat cold email — signal, problem, proof,
// ask — which is exactly what the section claims the SDR writes. The greeting
// and sign-off render from the data, so the card reads as a whole message.
const OUTREACH = [
  {
    first: 'Tiffanie', name: 'Tiffanie K.', role: 'CRO', company: 'illumenature', signal: 'new-in-role',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    subject: 'Quick one on your new CRO role',
    paras: [
      'Saw you stepped into the CRO seat at illumenature last month — congrats.',
      'Most new revenue leaders inherit an outbound stack held together by CSV exports and three overlapping data tools. The first 90 days tend to decide whether that gets fixed or just gets bigger.',
      'We pull pipeline straight out of Sales Navigator — triple-verified emails and direct dials, no per-lead billing, and nothing ever touches your reps’ accounts.',
      'Worth 15 minutes to see if it fits what you’re building?',
    ],
  },
  {
    first: 'Tyler', name: 'Tyler B.', role: 'CEO', company: 'Scalawags', signal: 'hiring 14 roles',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    subject: 'Scaling the team at Scalawags?',
    paras: [
      'Noticed Scalawags is hiring across 14 roles right now — that’s a serious quarter.',
      'When headcount moves that fast, lead data is usually the first thing to rot. New reps re-scrape the same accounts, lists drift, and nobody trusts the CRM by month three.',
      'We keep the list clean automatically — enriched, deduped and verified before it ever reaches a sequencer.',
      'Happy to show you what that looks like on your ICP. Fifteen minutes?',
    ],
  },
  {
    first: 'Camille', name: 'Camille H.', role: 'Ops Manager', company: 'Trove', signal: 'new venture',
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
    subject: 'Congrats on the Trove launch',
    paras: [
      'Saw Trove went live this week — the positioning is sharp.',
      'Early teams that get outbound right compound for years; the ones that buy a database and hope tend to spend the first year cleaning it.',
      'We find verified buyers the day they go in-market — real emails, real phones, zero ban risk on your own accounts.',
      'Want the playbook we use for launches like yours?',
    ],
  },
]

// What the card says at each stage. `done` flips the pill from lime to mint.
const STAGE_META = [
  { note: 'drafting · just now', pills: [{ label: 'drafting' }] },
  { note: 'sending · just now', pills: [{ label: 'sent' }] },
  { note: 'booked · just now', pills: [{ label: 'sent', done: true }, { label: 'replied', done: true }] },
]

function OutreachCard({ stage, lead, live }) {
  const meta = STAGE_META[stage]
  const reduce = useReducedMotion()

  return (
    // h-full + flex column: the card stretches to the left column's height (the
    // grid is items-stretch on lg), and the message body below absorbs whatever
    // height that turns out to be — so the two columns end flush instead of the
    // card floating short.
    <div className="relative mx-auto flex h-full max-w-md flex-col overflow-hidden rounded-2xl border border-hairline bg-panel/70 p-5 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float">
      <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-lime/10 blur-[80px]" />

      {/* Header — the agent, branded. The real <Logo> rather than an "AI" disc:
          this is Coldcast's own agent sending the mail, so it should carry the
          mark. LIME live pill. */}
      <div className="relative flex items-center gap-3 border-b border-hairline pb-4">
        <Logo size={36} />
        <div className="min-w-0">
          <div className="text-sm font-semibold text-ink">Coldcast SDR</div>
          <div className="text-xs text-muted">{meta.note}</div>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-lime/15 px-2.5 py-1 text-[11px] font-medium text-lime">
          <span className="relative flex h-1.5 w-1.5">
            {live && (
              <span className="absolute inline-flex h-full w-full animate-[ping_1.6s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-lime opacity-70" />
            )}
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
          </span>
          live
        </span>
      </div>

      {/* flex-1, top-aligned: the message is a full email now, so it fills this
          region on its own. Centring it was only ever compensating for a
          one-line body — an email that floats in the middle of its own window
          reads as a mistake. */}
      <div className="relative mt-4 flex flex-1 flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={lead.name}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? {} : { opacity: 0, y: -12 }}
            transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex h-full flex-col"
          >
            <div className="flex items-center gap-2.5">
              <Avatar src={lead.avatar} name={lead.name} size={32} />
              <div className="min-w-0 text-xs">
                <span className="font-medium text-ink/90">To: {lead.name}</span>
                <span className="text-muted"> · {lead.role} at {lead.company}</span>
              </div>
            </div>

            <div className="mt-3.5 text-sm font-semibold text-ink">{lead.subject}</div>

            <div className="mt-3 space-y-2.5 text-[13.5px] leading-[1.6] text-ink/75">
              <p>Hi {lead.first},</p>
              {lead.paras.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
              {/* Sign-off matches the card header — the agent that wrote it. */}
              <p className="pt-1 text-muted">— Coldcast SDR</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Status pills — lime while in flight, mint once confirmed. */}
      <div className="relative mt-4 flex flex-wrap items-center gap-2 border-t border-hairline pt-4">
        <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-muted">
          signal: {lead.signal}
        </span>
        <AnimatePresence mode="popLayout">
          {meta.pills.map((p) => (
            <motion.span
              key={p.label}
              layout
              initial={reduce ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                p.done ? 'bg-brand/15 text-accent' : 'bg-lime/15 text-lime'
              }`}
            >
              {p.label}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <div className="relative mt-4 flex items-center justify-between border-t border-hairline pt-4">
        <div className="flex items-center gap-1.5">
          {STAGE_META.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-[750ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
                idx === stage ? 'w-4 bg-lime' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
        <span className="text-[11px] text-muted">
          Today · 142 sent · 38 replies · <span className="font-semibold text-accent">9 booked</span>
        </span>
      </div>
    </div>
  )
}

export default function AiSdr() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '120px' })
  const live = inView && !reduce

  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (!live) return undefined
    const id = setInterval(() => setTick((t) => t + 1), STAGE_MS)
    return () => clearInterval(id)
  }, [live])

  // Three stages per lead, then the next lead.
  const stage = tick % STEPS.length
  const lead = OUTREACH[Math.floor(tick / STEPS.length) % OUTREACH.length]

  return (
    <section ref={ref} id="ai-sdr" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6%] top-1/2 h-[440px] w-[560px] -translate-y-1/2 rounded-full bg-lime/[0.07] blur-[150px]" />
        <div className="absolute right-[-4%] top-[20%] h-[360px] w-[460px] rounded-full bg-brand/10 blur-[150px]" />
      </div>

      <div className="container-px relative">
        {/* items-stretch on lg so the card matches the left column's height.
            Below lg the columns stack, and stretching a stacked card would just
            make it tall for no reason — so centre there. */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:items-stretch">
          <div>
            <Reveal>
              <Eyebrow>
                <Bot size={13} className="text-lime" />
                AI SDR · new
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              {/* Leads on the keyword ("AI SDR") and names the outcome
                  ("books meetings") — the two things this section should rank
                  for — in one line instead of two. */}
              <h2 className="mt-7 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                An <span className="text-gradient">AI SDR</span> that writes, sends and books meetings.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Every verified lead goes straight into personalised cold outreach — written, sent and
                followed up automatically.
              </p>
            </Reveal>

            {/* The step list is the card's left half: the active stage is lime,
                finished stages tick over to mint. */}
            <ol className="relative mt-8 space-y-6">
              <span
                aria-hidden
                className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-lime via-brand to-brand opacity-30"
              />
              {STEPS.map((s, i) => {
                const active = live && i === stage
                const done = live && i < stage
                return (
                  <Reveal as="li" key={s.title} delay={0.14 + i * 0.12} className="relative flex gap-4">
                    <span
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-card transition-colors duration-500 ${
                        active
                          ? 'border-lime/40 bg-lime/15 text-lime'
                          : done
                            ? 'border-brand/30 bg-brand/15 text-accent'
                            : 'border-hairline bg-white/[0.04] text-faint'
                      }`}
                    >
                      {done ? <Check size={17} strokeWidth={2.4} /> : <s.Icon size={17} strokeWidth={1.8} />}
                    </span>
                    <div className="pt-1">
                      <h3
                        className={`text-sm font-semibold transition-colors duration-500 ${
                          active ? 'text-lime' : 'text-ink'
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                    </div>
                  </Reveal>
                )
              })}
            </ol>

            <Reveal delay={0.4} className="mt-9">
              <Button as="a" href={TRIAL_URL} variant="primary" size="lg">
                Try the AI SDR free
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Reveal>
          </div>

          {/* h-full on the Reveal too — it's the grid item, so without it the
              card's own h-full would resolve against a shrink-wrapped wrapper
              and the stretch would stop here. */}
          <Reveal delay={0.15} className="h-full">
            <OutreachCard stage={stage} lead={lead} live={live} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
