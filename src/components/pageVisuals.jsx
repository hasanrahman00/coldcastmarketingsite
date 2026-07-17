import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, Check, Mail, Phone, Building2, Globe, Sparkles, Send, Users, BarChart3, Layers } from 'lucide-react'
import Logo from './Logo'

// Shared card shell for every signature visual.
function Card({ children, className = '' }) {
  return (
    <div className={`relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-hairline bg-panel p-6 shadow-card backdrop-blur-md ${className}`}>
      {children}
    </div>
  )
}

function Glow({ accent }) {
  return <div aria-hidden className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full ${accent.tile} blur-[70px]`} />
}

// ───────────────────────── Coldcast Agent: assembly line ─────────────────────
const AGENT_TASKS = ['Extract website', 'Score ICP fit', 'Find decision-maker', 'Enrich company & person', 'Mine buying signal', 'Write 3-step sequence', 'Push to CRM']
function AgentFlow({ accent }) {
  const reduce = useReducedMotion()
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative mb-4 flex items-center gap-2.5 border-b border-hairline pb-4">
        <Logo size={30} />
        <div className="text-sm font-semibold text-ink">Coldcast Agent</div>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-safe/15 px-2.5 py-1 text-[11px] font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-safe" /> running
        </span>
      </div>
      <ul className="relative space-y-2.5">
        {AGENT_TASKS.map((t, i) => (
          <li key={t} className="flex items-center gap-3 text-sm">
            <motion.span
              className={`flex h-5 w-5 items-center justify-center rounded-full ${accent.tile} ring-1`}
              initial={{ opacity: 0.25, scale: 0.85 }}
              animate={reduce ? { opacity: 1, scale: 1 } : { opacity: [0.25, 1, 1], scale: [0.85, 1, 1] }}
              transition={{ duration: 0.5, delay: i * 0.45, repeat: !reduce ? Infinity : 0, repeatDelay: AGENT_TASKS.length * 0.45 }}
            >
              <Check size={11} className={accent.text} strokeWidth={3} />
            </motion.span>
            <span className="text-ink/85">{t}</span>
          </li>
        ))}
      </ul>
      <div className={`relative mt-4 flex items-center justify-between rounded-xl bg-gradient-to-r ${accent.grad} px-4 py-2.5 text-[#062119]`}>
        <span className="text-sm font-semibold">3-step sequence ready</span>
        <Send size={15} />
      </div>
    </Card>
  )
}

// ─────────────────── Sales Nav: live scrape meter + 0-ban shield ─────────────
function ScrapeMeter({ accent }) {
  const reduce = useReducedMotion()
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted">Scraping · live</div>
          <div className={`mt-1 bg-gradient-to-br ${accent.grad} bg-clip-text font-display text-4xl font-bold text-transparent`}>10,000<span className="text-lg text-muted">/hr</span></div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-safe/30 bg-safe/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
          <ShieldCheck size={13} /> 0 ban risk
        </span>
      </div>
      <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div className={`h-full rounded-full bg-gradient-to-r ${accent.grad}`} initial={{ width: '8%' }} animate={reduce ? { width: '96%' } : { width: ['8%', '96%'] }} transition={{ duration: 3, repeat: !reduce ? Infinity : 0, ease: 'easeInOut', repeatType: 'reverse' }} />
      </div>
      <div className="relative mt-4 space-y-2">
        {[0, 1, 2].map((i) => (
          <motion.div key={i} className="flex items-center gap-2.5 rounded-lg border border-hairline bg-panel2 px-3 py-2"
            initial={{ opacity: 0, x: -10 }} animate={reduce ? { opacity: 1, x: 0 } : { opacity: [0, 1, 1, 0.4], x: 0 }} transition={{ duration: 2.4, delay: i * 0.5, repeat: !reduce ? Infinity : 0 }}>
            <span className={`h-6 w-6 rounded-full ${accent.tile}`} />
            <div className="h-2 w-24 rounded-full bg-white/15" />
            <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-accent"><Check size={11} /> verified</span>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

// ───────────────────── Apollo: stale → fresh re-verification ─────────────────
function ApolloList({ accent }) {
  const reduce = useReducedMotion()
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative mb-3 flex items-center justify-between text-xs">
        <span className="font-semibold text-ink">Re-verifying export</span>
        <span className="text-muted">live</span>
      </div>
      <div className="relative space-y-2.5">
        {['Jordan • VP Sales', 'Priya • Head of Growth', 'Marcus • RevOps Lead'].map((p, i) => (
          <div key={p} className="flex items-center gap-3 rounded-xl border border-hairline bg-panel2 px-3 py-2.5">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${accent.tile} text-xs font-semibold ${accent.text}`}>{p[0]}</span>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-medium text-ink">{p}</div>
              <div className="text-[11px] text-muted">verified email · direct dial</div>
            </div>
            <motion.span className="inline-flex items-center gap-1 rounded-full bg-safe/15 px-2 py-0.5 text-[10px] font-semibold text-accent"
              initial={{ opacity: 0, scale: 0.6 }} animate={reduce ? { opacity: 1, scale: 1 } : { opacity: [0, 1, 1], scale: [0.6, 1, 1] }} transition={{ duration: 0.5, delay: 0.4 + i * 0.5, repeat: !reduce ? Infinity : 0, repeatDelay: 2 }}>
              <Check size={10} /> fresh
            </motion.span>
          </div>
        ))}
      </div>
      <div className="relative mt-4 text-center text-[11px] text-muted">Whole list · re-verified in real time</div>
    </Card>
  )
}

// ──────────────────────── ZoomInfo: company profile card ─────────────────────
function CompanyCard({ accent }) {
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative flex items-center gap-3 border-b border-hairline pb-4">
        <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.tile} ${accent.text}`}><Building2 size={20} /></span>
        <div>
          <div className="text-sm font-semibold text-ink">Northwind Labs</div>
          <div className="text-[11px] text-muted">northwindlabs.com</div>
        </div>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-safe/15 px-2 py-0.5 text-[10px] font-semibold text-accent"><Check size={10} /> fresh</span>
      </div>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {['SaaS · B2B', '120 staff', 'Austin, TX', 'Series B'].map((c) => (
          <span key={c} className="rounded-full border border-hairline bg-panel2 px-2.5 py-1 text-[11px] text-ink/80">{c}</span>
        ))}
      </div>
      <div className="relative mt-4 space-y-2">
        {[['Mail', 'verified email'], ['Phone', 'direct dial']].map(([icon, label], i) => (
          <motion.div key={label} className="flex items-center gap-2.5 rounded-lg border border-hairline bg-panel2 px-3 py-2 text-xs text-ink/80"
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 + i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}>
            {icon === 'Mail' ? <Mail size={14} className={accent.text} /> : <Phone size={14} className={accent.text} />}
            {label}
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

// ───────────────────── Waterfall: cascade → verified email ───────────────────
function Cascade({ accent }) {
  const reduce = useReducedMotion()
  const providers = ['Provider A', 'Provider B', 'Provider C']
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative mb-4 inline-flex items-center gap-2 rounded-lg border border-hairline bg-panel2 px-3 py-2 text-xs text-ink/80">
        <Globe size={14} className={accent.text} /> jane • acme.com
      </div>
      <div className="relative space-y-2">
        {providers.map((p, i) => (
          <div key={p} className="flex items-center gap-3">
            <span className="text-[11px] text-muted">{p}</span>
            <div className="relative h-px flex-1 bg-white/10">
              <motion.span className={`absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${accent.dot}`}
                initial={{ left: '0%' }} animate={reduce ? { left: '100%' } : { left: ['0%', '100%'] }} transition={{ duration: 1.4, delay: i * 0.3, repeat: !reduce ? Infinity : 0, repeatDelay: 1 }} />
            </div>
            <Check size={13} className={i === providers.length - 1 ? accent.text : 'text-muted/40'} />
          </div>
        ))}
      </div>
      <motion.div className={`relative mt-4 flex items-center justify-between rounded-xl bg-gradient-to-r ${accent.grad} px-4 py-2.5 text-[#062119]`}
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}>
        <span className="inline-flex items-center gap-2 text-sm font-semibold"><Mail size={15} /> jane@acme.com</span>
        <span className="rounded-full bg-[#062119]/15 px-2 py-0.5 text-[11px] font-bold">99% valid</span>
      </motion.div>
    </Card>
  )
}

// ─────────────────────── Email Verify: result card ──────────────────────────
function VerifyCard({ accent }) {
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-sm text-ink">tiffanie@illumenature.com</span>
        <span className="rounded-full bg-safe/10 px-2.5 py-1 text-xs font-semibold text-accent ring-1 ring-safe/30">Deliverable</span>
      </div>
      <div className="relative mt-4">
        <div className="mb-1.5 flex justify-between text-xs text-muted"><span>Confidence</span><span>100/100</span></div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full rounded-full bg-safe" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, ease: 'easeOut' }} />
        </div>
      </div>
      <ul className="relative mt-4 space-y-2">
        {['Valid syntax', 'Not disposable', 'Not a catch-all', 'Business domain'].map((c, i) => (
          <motion.li key={c} className="flex items-center gap-2.5 text-sm text-ink/85"
            initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.15 + i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-safe/15 text-accent"><Check size={11} strokeWidth={3} /></span>
            {c}
          </motion.li>
        ))}
      </ul>
    </Card>
  )
}

// ───────────────────── Domain Enrichment: domain → profile ───────────────────
function DomainCard({ accent }) {
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative inline-flex items-center gap-2 rounded-lg border border-hairline bg-panel2 px-3 py-2 text-xs text-ink/80">
        <Globe size={14} className={accent.text} /> acme.com
      </div>
      <div className="relative mt-4 grid grid-cols-2 gap-2">
        {[['Industry', 'B2B SaaS'], ['Headcount', '210'], ['Location', 'Berlin'], ['Stack', 'React · AWS']].map(([k, v], i) => (
          <motion.div key={k} className="rounded-xl border border-hairline bg-panel2 px-3 py-2.5"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 + i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}>
            <div className="text-[10px] uppercase tracking-wider text-muted">{k}</div>
            <div className="text-xs font-semibold text-ink">{v}</div>
          </motion.div>
        ))}
      </div>
      <div className="relative mt-3 flex items-center gap-2.5 rounded-xl border border-hairline bg-panel2 px-3 py-2.5">
        <span className={`flex h-7 w-7 items-center justify-center rounded-full ${accent.tile} text-[11px] font-semibold ${accent.text}`}>JL</span>
        <div className="text-xs text-ink/80">Jonas L. · Head of Ops</div>
        <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-accent"><Check size={10} /> verified</span>
      </div>
    </Card>
  )
}

// ─────────────────────────── Role visuals (lighter) ──────────────────────────
function PipelineBars({ accent }) {
  const bars = [38, 55, 47, 72, 64, 88]
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative flex items-center justify-between">
        <span className="text-sm font-semibold text-ink">Pipeline this week</span>
        <BarChart3 size={16} className={accent.text} />
      </div>
      <div className="relative mt-5 flex h-32 items-end gap-2.5">
        {bars.map((h, i) => (
          <motion.div key={i} className={`flex-1 rounded-t-md bg-gradient-to-t ${accent.grad}`} style={{ minHeight: 6 }}
            initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] }} />
        ))}
      </div>
      <div className="relative mt-4 flex items-center justify-between border-t border-hairline pt-3 text-xs">
        <span className="text-muted">Meetings booked</span>
        <span className={`font-semibold ${accent.text}`}>+38 this week</span>
      </div>
    </Card>
  )
}

function PeopleCards({ accent, label = 'verified', title = 'Sourced & verified' }) {
  const rows = [['AK', 'Aisha K.'], ['TM', 'Tom M.'], ['RS', 'Rosa S.']]
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative mb-3 flex items-center gap-2 text-sm font-semibold text-ink"><Users size={16} className={accent.text} /> {title}</div>
      <div className="relative space-y-2.5">
        {rows.map(([in_, name], i) => (
          <motion.div key={name} className="flex items-center gap-3 rounded-xl border border-hairline bg-panel2 px-3 py-2.5"
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}>
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${accent.tile} text-xs font-semibold ${accent.text}`}>{in_}</span>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-medium text-ink">{name}</div>
              <div className="text-[11px] text-muted">email · phone</div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-safe/15 px-2 py-0.5 text-[10px] font-semibold text-accent"><Check size={10} /> {label}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

function StackBoard({ accent, title = 'Every client, one board' }) {
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative mb-3 flex items-center gap-2 text-sm font-semibold text-ink"><Layers size={16} className={accent.text} /> {title}</div>
      <div className="relative grid grid-cols-2 gap-2.5">
        {['Acme Co', 'Globex', 'Initech', 'Umbrella'].map((c, i) => (
          <motion.div key={c} className="rounded-xl border border-hairline bg-panel2 p-3"
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-ink">{c}</span>
              <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
              <div className={`h-full rounded-full bg-gradient-to-r ${accent.grad}`} style={{ width: `${50 + i * 12}%` }} />
            </div>
            <div className="mt-1.5 text-[10px] text-muted">{(i + 3) * 1240} leads</div>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

function CleanData({ accent }) {
  return (
    <Card>
      <Glow accent={accent} />
      <div className="relative mb-3 flex items-center gap-2 text-sm font-semibold text-ink"><Sparkles size={16} className={accent.text} /> CRM hygiene</div>
      <div className="relative space-y-2.5">
        {['Catch-all removed', 'Duplicates merged', 'Emails re-verified', 'Records standardised'].map((t, i) => (
          <motion.div key={t} className="flex items-center justify-between rounded-lg border border-hairline bg-panel2 px-3 py-2 text-xs text-ink/85"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}>
            {t}
            <span className="inline-flex items-center gap-1 text-accent"><Check size={12} /> done</span>
          </motion.div>
        ))}
      </div>
      <div className="relative mt-4 flex items-center justify-between border-t border-hairline pt-3 text-xs">
        <span className="text-muted">List health</span><span className={`font-semibold ${accent.text}`}>99% valid</span>
      </div>
    </Card>
  )
}

// slug → signature visual component
export const VISUALS = {
  'coldcast-agent': AgentFlow,
  'sales-navigator-scraper': ScrapeMeter,
  'apollo-scraper': ApolloList,
  'zoominfo-scraper': CompanyCard,
  'waterfall-enricher': Cascade,
  'email-verify': VerifyCard,
  'domain-enrichment': DomainCard,
  // roles
  'sdrs-aes': PipelineBars,
  founders: AgentFlow,
  'sales-leaders': (p) => <PeopleCards {...p} title="Your team’s pipeline" label="safe" />,
  agencies: StackBoard,
  revops: CleanData,
  recruiters: (p) => <PeopleCards {...p} title="Candidates sourced" label="verified" />,
}
