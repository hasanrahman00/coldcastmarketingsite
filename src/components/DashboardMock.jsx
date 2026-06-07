import {
  LayoutDashboard,
  ListChecks,
  KeyRound,
  Puzzle,
  Lock,
  Download,
  Search,
  TrendingUp,
} from 'lucide-react'
import Logo from './Logo'
import Counter from './Counter'
import { SAMPLE_LEADS } from '../lib/constants'

const SIDEBAR = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Jobs', icon: ListChecks },
  { label: 'API key', icon: KeyRound },
  { label: 'Extension', icon: Puzzle },
]

// A CSS/div mock of the Coldcast app dashboard — browser chrome, sidebar, and
// a live-looking leads table. No external image needed.
export default function DashboardMock() {
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
                <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-accent to-brand-light" />
              </div>
              <span className="text-[11px] tabular-nums text-muted">84%</span>
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
                {SAMPLE_LEADS.map((lead, i) => (
                  <tr key={lead.email} className={i % 2 ? 'bg-white/[0.015]' : ''}>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-light/15 text-[10px] font-semibold text-accent">
                          {lead.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </span>
                        <span className="font-medium text-ink">{lead.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-muted">{lead.company}</td>
                    <td className="hidden px-3 py-2.5 text-muted md:table-cell">{lead.email}</td>
                    <td className="px-3 py-2.5">
                      <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-amber/15 px-2 py-0.5 text-[10px] font-medium text-amber">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                        {lead.signals?.[0]?.label ?? 'Verified'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
