import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, Send, ChevronDown, Brain, PenLine, Database } from 'lucide-react'
import Logo from './Logo'
import BrandLogo from './BrandLogo'
import Reveal from './Reveal'
import { Eyebrow } from './SectionHeading'

// Sources & services that radiate from Coldcast (real logos + own services).
const SOURCES = [
  { name: 'LinkedIn', domain: 'linkedin.com' },
  { name: 'Apollo', domain: 'apollo.io' },
  { name: 'ZoomInfo', domain: 'zoominfo.com' },
  { name: 'Website', emoji: '🌐' },
  { name: 'Email verify', emoji: '✅' },
  { name: 'Email enrich', emoji: '✉️' },
  { name: 'Domain enrich', emoji: '🏢' },
]

// AI models Coldcast orchestrates for scoring + copy.
const AI = [
  { name: 'Claude', domain: 'anthropic.com' },
  { name: 'DeepSeek', domain: 'deepseek.com' },
  { name: 'ChatGPT', domain: 'openai.com' },
]

const STAGES = [
  {
    step: '02', title: 'ICP scoring', icon: Brain, tint: 'cyan',
    caption: 'Coldcast scores every lead by fit — with the AI you trust.',
    hub: true, nodes: AI,
  },
  {
    step: '03', title: 'Enrich · emails & phones', icon: Sparkles, tint: 'violet',
    caption: 'Waterfall-enriched verified emails & direct phones.',
    hub: true,
    nodes: [
      { name: 'Email', emoji: '✉️' },
      { name: 'Phone', emoji: '📞' },
    ],
  },
  {
    step: '04', title: 'Intent & signal-based personalised cold copy', icon: PenLine, tint: 'violet',
    caption: 'Signal-led first lines written for every lead.',
    hub: true, nodes: AI,
  },
  {
    step: '05', title: 'Cold outbound', icon: Send, tint: 'safe',
    caption: 'Pushed straight into your outreach sequencer.',
    hub: true,
    center: { icon: Send, label: 'Cold outbound' },
    nodes: [
      { name: 'Lemlist', domain: 'lemlist.com' },
      { name: 'Smartlead', domain: 'smartlead.ai' },
      { name: 'Instantly', domain: 'instantly.ai' },
      { name: 'Reachinbox', domain: 'reachinbox.ai' },
    ],
  },
  {
    step: '06', title: 'CRM', icon: Database, tint: 'safe',
    caption: 'Synced to your CRM, ready to work.',
    hub: true,
    center: { icon: Database, label: 'CRM' },
    nodes: [
      { name: 'HubSpot', domain: 'hubspot.com' },
      { name: 'Salesforce', domain: 'salesforce.com' },
    ],
  },
]

const TINT = {
  cyan: { icon: 'text-[#0e90ad]', ring: 'ring-accent/50', glow: 'shadow-card' },
  violet: { icon: 'text-[#7c3aed]', ring: 'ring-violet/50', glow: 'shadow-card' },
  safe: { icon: 'text-[#0f9d72]', ring: 'ring-safe/50', glow: 'shadow-card' },
}

const ARMS = [0, 60, 120, 180, 240, 300]
function SwirlMark({ size = 44 }) {
  return (
    <svg viewBox="20 20 88 88" width={size} height={size} fill="none" aria-hidden>
      <g stroke="#fff" strokeWidth="11" strokeLinecap="round" fill="none">
        {ARMS.map((d) => (
          <g key={d} transform={`rotate(${d} 64 64)`}>
            <path d="M64 56 C 71 46 86 48 92 60" />
            <circle cx="92" cy="60" r="6" fill="#fff" stroke="none" />
          </g>
        ))}
      </g>
    </svg>
  )
}

function Node({ domain, name, emoji, size = 38 }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center" style={{ width: 64 }}>
      {domain ? (
        <BrandLogo domain={domain} name={name} size={size} />
      ) : (
        <span
          className="flex items-center justify-center rounded-lg border border-hairline bg-brand-gradient-soft text-[18px] leading-none"
          style={{ width: size, height: size }}
        >
          {emoji}
        </span>
      )}
      <span className="text-[10px] font-medium leading-tight text-muted">{name}</span>
    </div>
  )
}

function Connector({ reduce, index = 0 }) {
  return (
    <div className="relative flex h-14 w-px items-stretch justify-center">
      <div className="relative h-full w-px overflow-hidden bg-gradient-to-b from-accent/40 via-black/15 to-accent/40">
        {!reduce &&
          [0, 1].map((p) => (
            <motion.span
              key={p}
              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
              style={{ background: '#5eead4', boxShadow: '0 0 9px 2px rgba(34,211,238,0.85)' }}
              animate={{ top: ['-12%', '112%'], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay: index * 0.3 + p * 0.8 }}
            />
          ))}
      </div>
      <ChevronDown size={16} className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-muted/60" />
    </div>
  )
}

function Hub({ active, reduce }) {
  const N = SOURCES.length
  const nodes = SOURCES.map((s, i) => {
    const a = (-90 + (i * 360) / N) * (Math.PI / 180)
    return { ...s, x: 50 + 38 * Math.cos(a), y: 50 + 38 * Math.sin(a) }
  })
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="spoke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4f7cf5" stopOpacity="0.7" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {nodes.map((n, i) => (
          <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="url(#spoke)" strokeWidth="0.45" />
        ))}
        {/* Data flowing from each source into Coldcast */}
        {!reduce &&
          nodes.map((n, i) => (
            <motion.circle
              key={`p${i}`}
              r="1.3"
              fill="#5eead4"
              style={{ filter: 'drop-shadow(0 0 2.5px rgba(34,211,238,0.95))' }}
              initial={{ cx: n.x, cy: n.y, opacity: 0 }}
              animate={{ cx: [n.x, 50], cy: [n.y, 50], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.26, ease: 'easeIn' }}
            />
          ))}
      </svg>

      {/* Center — Coldcast */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className={`relative flex h-[84px] w-[84px] items-center justify-center rounded-full bg-brand-gradient shadow-brand-btn transition-all duration-500 ${active ? 'ring-2 ring-brand-light/60' : ''}`}>
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-brand/45 blur-xl"
            animate={reduce ? {} : { scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <SwirlMark size={44} />
        </div>
        <span className="mt-2 text-sm font-semibold text-ink">Coldcast</span>
      </div>

      {/* Sources & services — staggered pop-in */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.name}
          className="absolute"
          style={{ left: `${n.x}%`, top: `${n.y}%`, x: '-50%', y: '-50%' }}
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.1 + i * 0.07, type: 'spring', stiffness: 240, damping: 16 }}
        >
          <Node {...n} />
        </motion.div>
      ))}
    </div>
  )
}

// Coldcast at the centre, AI models orbiting — used for ICP scoring & copy.
function MiniHub({ nodes: items, reduce, center }) {
  const N = items.length
  const start = N === 2 ? 180 : -90 // 2 nodes read better left/right than top/bottom
  const CenterIcon = center?.icon
  const nodes = items.map((s, i) => {
    const a = (start + (i * 360) / N) * (Math.PI / 180)
    return { ...s, x: 50 + 33 * Math.cos(a), y: 50 + 33 * Math.sin(a) }
  })
  return (
    <div className="relative mx-auto mt-1 aspect-square w-full max-w-[240px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="mini-spoke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a78bfa" stopOpacity="0.7" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {nodes.map((n, i) => (
          <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="url(#mini-spoke)" strokeWidth="0.5" />
        ))}
        {!reduce &&
          nodes.map((n, i) => (
            <motion.circle
              key={`mp${i}`}
              r="1.5"
              fill="#5eead4"
              style={{ filter: 'drop-shadow(0 0 2.5px rgba(34,211,238,0.95))' }}
              initial={{ cx: n.x, cy: n.y, opacity: 0 }}
              animate={{ cx: [n.x, 50], cy: [n.y, 50], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4, ease: 'easeIn' }}
            />
          ))}
      </svg>

      {/* Center — Coldcast, or a labelled stack-category node */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient shadow-brand-btn">
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-brand/45 blur-lg"
            animate={reduce ? {} : { scale: [1, 1.25, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {CenterIcon ? <CenterIcon size={24} className="text-ink" /> : <SwirlMark size={30} />}
        </div>
        <span className="mt-1.5 text-[11px] font-semibold text-ink">{center ? center.label : 'Coldcast'}</span>
      </div>

      {/* AI models */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.name}
          className="absolute"
          style={{ left: `${n.x}%`, top: `${n.y}%`, x: '-50%', y: '-50%' }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 240, damping: 16 }}
        >
          <Node {...n} size={34} />
        </motion.div>
      ))}
    </div>
  )
}

function StageCard({ stage, active, reduce }) {
  const t = TINT[stage.tint]
  const Icon = stage.icon
  return (
    <div
      className={`relative w-full max-w-md rounded-2xl border border-hairline bg-black/[0.04] p-5 backdrop-blur-sm transition-all duration-500 ${
        active ? `ring-1 ${t.ring} ${t.glow}` : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span className={`flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-brand-gradient-soft ${t.icon}`}>
            <Icon size={16} />
          </span>
          <span className="text-sm font-semibold text-ink">{stage.title}</span>
        </span>
        <span className="text-xs font-semibold tabular-nums text-muted/50">{stage.step}</span>
      </div>

      <div className="mt-4 flex flex-wrap items-start justify-center gap-x-4 gap-y-3">
        {stage.hub ? (
          <MiniHub nodes={stage.nodes} center={stage.center} reduce={reduce} />
        ) : stage.coldcast ? (
          <span className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-3.5 py-2.5 text-sm font-semibold text-white shadow-brand-btn">
            <Logo size={18} />
            Coldcast
          </span>
        ) : (
          stage.nodes.map((n, idx) => (
            <motion.div
              key={n.name}
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, type: 'spring', stiffness: 260, damping: 18 }}
            >
              <Node {...n} />
            </motion.div>
          ))
        )}
      </div>

      <p className="mt-4 text-center text-xs leading-relaxed text-muted">{stage.caption}</p>
    </div>
  )
}

export default function GtmPipeline() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setActive((v) => (v + 1) % (STAGES.length + 1)), 1900)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <section className="relative px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-10 flex flex-col items-center text-center">
          <Eyebrow>
            <Sparkles size={13} className="text-[#0e90ad]" />
            One automated GTM pipeline
          </Eyebrow>
          <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            From scrape to send — your whole stack, connected.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Coldcast sits at the centre of your pipeline: it sources, scores, enriches, personalises
            and hands finished leads straight to your sequencer and CRM.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-bg2/60 px-4 py-10 shadow-card backdrop-blur-md sm:px-8">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-brand-light/15 blur-[90px]" />
              <div className="absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/12 blur-[90px]" />
              <div className="absolute bottom-0 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-safe/12 blur-[90px]" />
            </div>

            <div className="relative flex flex-col items-center">
              {/* Hub — Coldcast + sources */}
              <Hub active={active === 0} reduce={reduce} />
              <p className="-mt-2 mb-1 max-w-xs text-center text-xs leading-relaxed text-muted">
                01 · GTM prospecting in your own browser, at human pace.
              </p>

              <Connector reduce={reduce} index={0} />

              {STAGES.map((stage, i) => (
                <div key={stage.step} className="contents">
                  <StageCard stage={stage} active={active === i + 1} reduce={reduce} />
                  {i < STAGES.length - 1 && <Connector reduce={reduce} index={i + 1} />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
