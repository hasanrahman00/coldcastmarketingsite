import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  Sparkles,
  Send,
  MonitorSmartphone,
  Brain,
  PenLine,
  Database,
  Globe,
  BadgeCheck,
  Mail,
  Building2,
  Phone,
} from 'lucide-react'
import BrandLogo from './BrandLogo'
import Reveal from './Reveal'
import { Eyebrow } from './SectionHeading'

// Sources & services that radiate from Coldcast (real logos + own services).
// Every node here is neutral graphite — the hub's structure is lime, and no
// mint is allowed inside it. The verified-state story is told in mint elsewhere.
const SOURCES = [
  { name: 'LinkedIn', domain: 'linkedin.com' },
  { name: 'Apollo', domain: 'apollo.io' },
  { name: 'ZoomInfo', domain: 'zoominfo.com' },
  { name: 'Website', icon: Globe },
  { name: 'Email verify', icon: BadgeCheck },
  { name: 'Email enrich', icon: Mail },
  { name: 'Domain enrich', icon: Building2 },
]

// AI models Coldcast orchestrates for scoring + copy.
const AI = [
  { name: 'Claude', domain: 'anthropic.com' },
  { name: 'DeepSeek', domain: 'deepseek.com' },
  { name: 'ChatGPT', domain: 'openai.com' },
]

const STAGES = [
  {
    step: '02', title: 'ICP scoring', icon: Brain,
    caption: 'Coldcast scores every lead by fit — with the AI you trust.',
    hub: true, nodes: AI,
  },
  {
    step: '03', title: 'Enrich · emails & phones', icon: Sparkles,
    caption: 'Waterfall-enriched verified emails & direct phones.',
    hub: true,
    nodes: [
      { name: 'Email', icon: Mail },
      { name: 'Phone', icon: Phone },
    ],
  },
  {
    step: '04', title: 'Intent & signal-based personalised cold copy', icon: PenLine,
    caption: 'Signal-led first lines written for every lead.',
    hub: true, nodes: AI,
  },
  {
    step: '05', title: 'Cold outbound', icon: Send,
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
    step: '06', title: 'CRM', icon: Database,
    caption: 'Synced to your CRM, ready to work.',
    hub: true,
    center: { icon: Database, label: 'CRM' },
    nodes: [
      { name: 'HubSpot', domain: 'hubspot.com' },
      { name: 'Salesforce', domain: 'salesforce.com' },
    ],
  },
]

// Stage 01 rendered as a first-class card (it used to sit bare, with no card
// behind it). `bigHub` draws the full Coldcast + sources hub.
const STAGE_01 = {
  step: '01',
  title: 'GTM prospecting',
  icon: MonitorSmartphone,
  caption: 'In your own logged-in session, at human pace — LinkedIn, Apollo & ZoomInfo plus Coldcast’s own website, email & domain enrichment.',
  bigHub: true,
}
const ALL_STAGES = [STAGE_01, ...STAGES]

// Lime is the section's single accent. Raw hex only where SVG/box-shadow needs
// a literal — #ccff00 is `lime`, kept in one place so it never drifts.
const LIME = '#0a0a0a'

const ARMS = [0, 60, 120, 180, 240, 300]

// Inherits its colour from the parent's text-* class so the mark can be lime
// linework on graphite rather than a large flat lime fill.
function SwirlMark({ size = 44 }) {
  return (
    <svg viewBox="20 20 88 88" width={size} height={size} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="11" strokeLinecap="round" fill="none">
        {ARMS.map((d) => (
          <g key={d} transform={`rotate(${d} 64 64)`}>
            <path d="M64 56 C 71 46 86 48 92 60" />
            <circle cx="92" cy="60" r="6" fill="currentColor" stroke="none" />
          </g>
        ))}
      </g>
    </svg>
  )
}

// Partner logos keep their own brand colour — they are third-party marks and
// must stay recognisable.
//
// Coldcast's OWN service nodes (Website, Email verify, Email enrich, Domain
// enrich, Email, Phone) are MINT. They were neutral grey, which made them the
// only dead thing in a lime section and left them fighting the graphite tile
// they sit on (7.46:1, the section's worst). Mint is also correct by the
// system's own rule: these are verified data services, and mint = state. The
// lime stays on the pipeline's structure — spokes, hub, numerals — so the two
// never compete: lime is the wiring, mint is what flows through it.
function Node({ domain, name, icon: Icon, size = 38 }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center" style={{ width: 64 }}>
      {domain ? (
        <BrandLogo domain={domain} name={name} size={size} />
      ) : (
        <span
          title={name}
          className="flex items-center justify-center rounded-lg border border-brand/25 bg-brand/[0.08] text-accent"
          style={{ width: size, height: size }}
        >
          {Icon && <Icon size={Math.round(size * 0.46)} strokeWidth={1.75} />}
        </span>
      )}
      <span className="text-[10px] font-medium leading-tight text-muted">
        {name}
      </span>
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
    <div className="relative mx-auto aspect-square w-full max-w-[320px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          {/* Radiates from the hub outward, so every spoke reads identically. */}
          <radialGradient id="gtm-spoke" gradientUnits="userSpaceOnUse" cx="50" cy="50" r="38">
            <stop offset="0" stopColor={LIME} stopOpacity="0.85" />
            <stop offset="1" stopColor={LIME} stopOpacity="0.12" />
          </radialGradient>
        </defs>
        {/* Lime hairline orbit — structure, not decoration */}
        <circle cx="50" cy="50" r="38" fill="none" stroke={LIME} strokeOpacity="0.12" strokeWidth="0.3" strokeDasharray="1.5 2.5" />
        {nodes.map((n, i) => (
          <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="url(#gtm-spoke)" strokeWidth="0.45" />
        ))}
        {/* Data flowing from each source into Coldcast */}
        {!reduce &&
          nodes.map((n, i) => (
            <motion.circle
              key={`p${i}`}
              r="1.3"
              fill={LIME}
              style={{ filter: 'drop-shadow(0 0 2.5px rgba(0,0,0,0.95))' }}
              initial={{ cx: n.x, cy: n.y, opacity: 0 }}
              animate={{ cx: [n.x, 50], cy: [n.y, 50], opacity: [0, 1, 1, 0] }}
              // easeIn is the meaning here — data accelerates INTO the hub.
              // Swapping it for the ease-out curve would reverse that.
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.36, ease: 'easeIn' }}
            />
          ))}
      </svg>

      {/* Center — Coldcast. Lime mark on graphite; the glow marks it active. */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div
          className={`relative flex h-[84px] w-[84px] items-center justify-center rounded-full border transition-all duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
            active
              ? 'border-lime/60 bg-lime-gradient-soft text-lime ring-2 ring-lime/20'
              : 'border-hairline-strong bg-panel2 text-lime/70'
          }`}
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-lime/40 blur-xl"
            animate={
              reduce
                ? { opacity: active ? 0.7 : 0 }
                : { scale: active ? [1, 1.3, 1] : 1, opacity: active ? [0.5, 0.9, 0.5] : 0 }
            }
            transition={{ duration: 3.64, repeat: !reduce && active ? Infinity : 0, ease: 'easeInOut' }}
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
          transition={{ delay: 0.1 + i * 0.12, duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <Node {...n} />
        </motion.div>
      ))}
    </div>
  )
}

// Coldcast at the centre, AI models orbiting — used for ICP scoring & copy.
function MiniHub({ nodes: items, reduce, center, active }) {
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
          <radialGradient id="gtm-mini-spoke" gradientUnits="userSpaceOnUse" cx="50" cy="50" r="33">
            <stop offset="0" stopColor={LIME} stopOpacity="0.85" />
            <stop offset="1" stopColor={LIME} stopOpacity="0.12" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="33" fill="none" stroke={LIME} strokeOpacity="0.12" strokeWidth="0.35" strokeDasharray="1.5 2.5" />
        {nodes.map((n, i) => (
          <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="url(#gtm-mini-spoke)" strokeWidth="0.5" />
        ))}
        {!reduce &&
          nodes.map((n, i) => (
            <motion.circle
              key={`mp${i}`}
              r="1.5"
              fill={LIME}
              style={{ filter: 'drop-shadow(0 0 2.5px rgba(0,0,0,0.95))' }}
              initial={{ cx: n.x, cy: n.y, opacity: 0 }}
              animate={{ cx: [n.x, 50], cy: [n.y, 50], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.52, repeat: Infinity, delay: i * 0.56, ease: 'easeIn' }}
            />
          ))}
      </svg>

      {/* Center — Coldcast, or a labelled stack-category node */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div
          className={`relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
            active ? 'border-lime/60 bg-lime-gradient-soft text-lime' : 'border-hairline-strong bg-panel2 text-lime/70'
          }`}
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-lime/40 blur-lg"
            animate={
              reduce
                ? { opacity: active ? 0.7 : 0 }
                : { scale: active ? [1, 1.25, 1] : 1, opacity: active ? [0.5, 0.85, 0.5] : 0 }
            }
            transition={{ duration: 3.36, repeat: !reduce && active ? Infinity : 0, ease: 'easeInOut' }}
          />
          {CenterIcon ? <CenterIcon size={22} strokeWidth={1.9} /> : <SwirlMark size={30} />}
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
          transition={{ delay: 0.1 + i * 0.12, duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <Node {...n} size={34} />
        </motion.div>
      ))}
    </div>
  )
}

// Each pipeline stage is a scroll-stacking card: it pins near the top and the
// next stage slides up and stacks over it (the classic "stacking cards" effect).
// `index` sets the incremental sticky offset + paint order; the card is opaque so
// it cleanly covers the one behind. `bigHub` renders the full stage-01 hub.
function StageCard({ stage, index, reduce }) {
  const Icon = stage.icon
  const ref = useRef(null)
  // Lit while the card is the one in focus (near the middle of the viewport).
  const active = useInView(ref, { margin: '-42% 0px -42% 0px' })
  return (
    <div
      ref={ref}
      className={`sticky mx-auto flex min-h-[440px] w-full max-w-lg flex-col justify-center overflow-hidden rounded-[18px] border bg-panel p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.35)] transition-colors duration-500 sm:p-8 ${
        active ? 'border-hairline-strong' : 'border-hairline'
      } ${index === 0 ? '' : 'mt-6'}`}
      style={{ top: `${84 + index * 16}px`, zIndex: index + 1 }}
    >
      {/* Header — lime step numeral, then icon + title */}
      <div className="relative flex flex-col items-center gap-2.5">
        <span
          className={`font-display text-4xl font-bold leading-none tracking-tight tabular-nums text-lime transition-opacity duration-500 sm:text-[2.75rem] ${
            active ? 'opacity-100' : 'opacity-45'
          }`}
        >
          {stage.step}
        </span>
        <span className="flex items-center justify-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-hairline bg-panel2 text-ink">
            <Icon size={16} />
          </span>
          <span className="text-center font-display text-sm font-semibold text-ink">{stage.title}</span>
        </span>
      </div>

      <div className="relative mt-4 flex flex-wrap items-start justify-center gap-x-4 gap-y-3">
        {stage.bigHub ? (
          <Hub active={active} reduce={reduce} />
        ) : stage.hub ? (
          <MiniHub nodes={stage.nodes} center={stage.center} reduce={reduce} active={active} />
        ) : (
          stage.nodes.map((n, idx) => (
            <motion.div
              key={n.name}
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.12, duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Node {...n} />
            </motion.div>
          ))
        )}
      </div>

      <p className="relative mt-4 text-center text-xs leading-relaxed text-muted">{stage.caption}</p>
    </div>
  )
}

export default function GtmPipeline() {
  const reduce = useReducedMotion()

  return (
    <section className="relative px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <Eyebrow icon={Sparkles}>One automated GTM pipeline</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Coldcast GTM Stack
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            From scrape to send — your whole stack, connected. Coldcast sits at the centre of your
            pipeline: it sources, scores, enriches, personalises and hands finished leads straight to
            your sequencer and CRM.
          </p>
        </Reveal>

        {/* Scroll-stacking cards — each stage pins, the next slides up over it.
            The cards are direct siblings so `position: sticky` can carry them the
            full height of this container; a per-card wrapper would trap each one. */}
        <div className="relative">
          {ALL_STAGES.map((stage, i) => (
            <StageCard key={stage.step} stage={stage} index={i} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  )
}
