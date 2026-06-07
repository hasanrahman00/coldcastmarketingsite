import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  LayoutDashboard,
  ListChecks,
  KeyRound,
  Puzzle,
  Lock,
  Download,
  TrendingUp,
  BadgeCheck,
  Loader2,
} from 'lucide-react'
import Logo from './Logo'
import Counter from './Counter'
import Avatar from './Avatar'
import { SAMPLE_LEADS } from '../lib/constants'

const SIDEBAR = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Jobs', icon: ListChecks },
  { label: 'API key', icon: KeyRound },
  { label: 'Extension', icon: Puzzle },
]

const TOTAL = SAMPLE_LEADS.length
const HOLD = 3 // ticks to hold the "fully enriched" state before looping

// A CSS/div mock of the Coldcast app dashboard with a table that animates its
// enrichment: email + signal cells resolve row-by-row, progress climbs, loops.
export default function DashboardMock() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(reduce ? TOTAL : 0)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setStep((s) => (s + 1) % (TOTAL + HOLD)), 850)
    return () => clearInterval(id)
  }, [reduce])

  const enriched = Math.min(step, TOTAL) // rows fully enriched
  const progress = Math.round((enriched / TOTAL) * 100)

  const stateFor = (i) => {
    if (reduce || enriched > i) return 'done'
    if (enriched === i) return 'enriching'
    return 'pending'
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-panel/80 shadow-card backdrop-blur-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-hairline bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex flex-1 justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1 text-[11px] text-muted">
            <Lock size={11} className="text-accent" />
            app.coldcast.io
          </div>
        </div>
      </div>

      {/* App body */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 flex-col border-r border-hairline bg-white/[0.02] p-3 sm:flex">
          <div className="flex items-center gap-2 px-2 pb-4 pt-1">
            <Logo size={22} />
            <span className="text-sm font-semibold">Coldcast</span>
          </div>
          <nav className="flex flex-col gap-1">
            {SIDEBAR.map(({ label, icon: Icon, active }) => (
              <span
                key={label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium ${
                  active ? 'bg-brand-light/15 text-ink' : 'text-muted'
                }`}
              >
                <Icon size={15} className={active ? 'text-accent' : ''} />
                {label}
              </span>
            ))}
          </nav>
          <div className="mt-auto rounded-lg border border-hairline bg-white/[0.03] p-3">
            <div className="text-[11px] text-muted">Credits left</div>
            <div className="mt-1 text-sm font-semibold text-ink">3,752</div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-brand-gradient" />
            </div>
          </div>
        </aside>

        {/* Main panel */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-ink">Leads</div>
              <div className="text-[11px] text-muted">1,248 contacts · sample data</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-lg border border-hairline bg-white/5 px-2.5 py-1.5 text-[11px] text-muted sm:inline-flex">
                <TrendingUp size={12} className="text-safe" />
                <Counter to={18932} className="font-semibold text-ink" /> exported today
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-gradient px-2.5 py-1.5 text-[11px] font-semibold text-white">
                <Download size={12} />
                Export
              </span>
            </div>
          </div>

          {/* Job status */}
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-hairline bg-white/[0.03] px-3 py-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] font-medium text-ink">Enriching emails, phones &amp; signals</span>
            <div className="ml-auto flex w-28 items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-brand-light transition-[width] duration-700 ease-out"
                  style={{ width: `${Math.max(progress, 6)}%` }}
                />
              </div>
              <span className="w-8 text-right text-[11px] tabular-nums text-muted">{progress}%</span>
            </div>
          </div>

          {/* Table */}
          <div className="mt-4 overflow-hidden rounded-lg border border-hairline">
            <table className="w-full border-collapse text-left text-[11px]">
              <thead>
                <tr className="bg-white/[0.03] text-muted">
                  <th className="px-3 py-2 font-medium">Name</th>
                  <th className="px-3 py-2 font-medium">Company</th>
                  <th className="hidden px-3 py-2 font-medium md:table-cell">Work email</th>
                  <th className="px-3 py-2 font-medium">Signal</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_LEADS.map((lead, i) => {
                  const state = stateFor(i)
                  return (
                    <tr key={lead.email} className={i % 2 ? 'bg-white/[0.015]' : ''}>
                      {/* Name (scraped — always shown) */}
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-2">
                          <Avatar src={lead.avatar} name={lead.name} size={24} />
                          <span className="font-medium text-ink">{lead.name}</span>
                        </div>
                      </td>
                      {/* Company (scraped) */}
                      <td className="px-3 py-2.5 text-muted">{lead.company}</td>
                      {/* Work email (enriched) */}
                      <td className="hidden px-3 py-2.5 md:table-cell">
                        {state === 'done' ? (
                          <motion.span
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35 }}
                            className="inline-flex items-center gap-1 text-accent"
                          >
                            <BadgeCheck size={12} className="shrink-0" />
                            {lead.email}
                          </motion.span>
                        ) : state === 'enriching' ? (
                          <span className="inline-flex items-center gap-1.5 text-muted/70">
                            <Loader2 size={11} className="animate-spin text-accent" />
                            finding…
                          </span>
                        ) : (
                          <span className="block h-2 w-28 rounded bg-white/[0.06]" />
                        )}
                      </td>
                      {/* Signal (enriched) */}
                      <td className="px-3 py-2.5">
                        {state === 'done' ? (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.35 }}
                            className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-amber/15 px-2 py-0.5 text-[10px] font-medium text-amber"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                            {lead.signals?.[0]?.label ?? 'Verified'}
                          </motion.span>
                        ) : state === 'enriching' ? (
                          <span className="block h-3.5 w-20 animate-pulse rounded-full bg-amber/15" />
                        ) : (
                          <span className="block h-3.5 w-16 rounded-full bg-white/[0.06]" />
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
