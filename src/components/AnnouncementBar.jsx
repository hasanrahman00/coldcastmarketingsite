import { Link } from 'react-router-dom'
import { ArrowRight, Tag, X } from 'lucide-react'

// Promo strip sitting above the navbar. Dismissible.
// In-flow first child of the app frame — spans the frame (not the viewport)
// and rounds its own top corners to match it, so it scrolls away with the page.
//
// This is the ONE lime fill on the site, and the deliberate exception to
// "no large flat lime": a 36px band is the one surface whose entire job is to
// be seen first, and it scrolls away rather than sitting under you. Everything
// on it is lime-ink (#131a00) — a lime-on-lime link would be invisible.
export default function AnnouncementBar({ onClose }) {
  return (
    <div className="relative z-[90] flex h-9 items-center justify-center rounded-t-none bg-lime-gradient px-10 text-center text-lime-ink shadow-[inset_0_-1px_0_rgba(19,26,0,0.18)] sm:rounded-t-[24px]">
      <Link
        to="/sales-nav-advanced"
        className="group inline-flex items-center gap-1.5 text-xs font-medium sm:text-[13px]"
      >
        <Tag size={13} className="shrink-0" aria-hidden />
        <span className="sm:hidden">
          Sales Nav Advanced — <strong className="font-bold">$25/mo</strong>, 75% off
        </span>
        <span className="hidden sm:inline">
          Now offering LinkedIn Sales Navigator Advanced for <strong className="font-bold">$25/mo</strong> — 75% off.
        </span>
        <span className="font-bold underline decoration-lime-ink/40 underline-offset-2 transition-colors group-hover:decoration-lime-ink">
          Check it out
        </span>
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
      </Link>
      <button
        onClick={onClose}
        aria-label="Dismiss announcement"
        className="absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-full text-lime-ink/70 transition-colors hover:bg-lime-ink/10 hover:text-lime-ink"
      >
        <X size={14} />
      </button>
    </div>
  )
}
