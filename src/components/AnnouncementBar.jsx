import { Link } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'

// Ink strip above the nav — mono ticker style, one cobalt link.
export default function AnnouncementBar({ onClose }) {
  return (
    <div className="fixed inset-x-0 top-0 z-[90] flex h-9 items-center justify-center bg-ink px-10 text-center">
      <Link
        to="/sales-nav-advanced"
        className="group inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-bg/85 hover:text-bg"
      >
        <span className="hidden sm:inline">LinkedIn Sales Navigator Advanced —</span>
        <span className="font-bold text-white">$25/mo · 75% off</span>
        <span className="link-draw font-semibold text-[#8FA3F5]">Claim it</span>
        <ArrowRight size={12} className="text-bg/60 transition-transform group-hover:translate-x-0.5" />
      </Link>
      <button
        onClick={onClose}
        aria-label="Dismiss announcement"
        className="absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-full text-bg/50 transition-colors hover:bg-white/10 hover:text-bg"
      >
        <X size={13} />
      </button>
    </div>
  )
}
