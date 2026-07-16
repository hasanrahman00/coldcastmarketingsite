import { Link } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'

// Promo strip sitting above the navbar. Dismissible.
// In-flow first child of the app frame — spans the frame (not the viewport)
// and rounds its own top corners to match it, so it scrolls away with the page.
export default function AnnouncementBar({ onClose }) {
  return (
    <div className="relative z-[90] flex h-9 items-center justify-center rounded-t-none border-b border-hairline bg-panel2 px-10 text-center text-muted sm:rounded-t-[24px]">
      <Link to="/sales-nav-advanced" className="group inline-flex items-center gap-1.5 text-xs font-medium sm:text-[13px]">
        <span aria-hidden>🚀</span>
        <span className="sm:hidden">Sales Nav Advanced — <strong className="font-bold text-ink">$25/mo</strong>, 75% off</span>
        <span className="hidden sm:inline">
          Now offering LinkedIn Sales Navigator Advanced for <strong className="font-bold text-ink">$25/mo</strong> — 75% off.
        </span>
        <span className="font-semibold text-brand underline decoration-brand/40 underline-offset-2 transition-colors group-hover:text-accent">Check it out</span>
        <ArrowRight size={13} className="text-brand transition-transform group-hover:translate-x-0.5" />
      </Link>
      <button
        onClick={onClose}
        aria-label="Dismiss announcement"
        className="absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-full text-faint transition-colors hover:bg-white/[0.06] hover:text-ink"
      >
        <X size={14} />
      </button>
    </div>
  )
}
