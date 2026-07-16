import { Link } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'

// Full-width promo strip pinned above the floating navbar. Dismissible.
export default function AnnouncementBar({ onClose }) {
  return (
    <div className="fixed inset-x-0 top-0 z-[90] flex h-9 items-center justify-center bg-brand-gradient px-10 text-center text-white">
      <Link to="/sales-nav-advanced" className="group inline-flex items-center gap-1.5 text-xs font-medium sm:text-[13px]">
        <span aria-hidden>🚀</span>
        <span className="sm:hidden">Sales Nav Advanced — <strong className="font-bold">$25/mo</strong>, 75% off</span>
        <span className="hidden sm:inline">
          Now offering LinkedIn Sales Navigator Advanced for <strong className="font-bold">$25/mo</strong> — 75% off.
        </span>
        <span className="font-semibold underline underline-offset-2">Check it out</span>
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
      </Link>
      <button
        onClick={onClose}
        aria-label="Dismiss announcement"
        className="absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white"
      >
        <X size={14} />
      </button>
    </div>
  )
}
