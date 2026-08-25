import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Grain from './Grain'
import CloneHeader from './clone/CloneHeader'
import CloneFooter from './clone/CloneFooter'

// On navigation: jump to the hash target if present, else scroll to top.
// getElementById (not querySelector) so a malformed fragment can't throw.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-lime-gradient focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-lime-ink"
      >
        Skip to content
      </a>

      <ScrollManager />
      <Grain />

      {/* Drifting mint/teal orbs behind the frame */}
      <div aria-hidden className="backdrop">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
      </div>

      {/* Legacy pages keep their own body styling but wear the new clone chrome
          (header + footer) so navigation is consistent site-wide. Header and
          footer are each wrapped in a bare `.cc` so the scoped clone styles apply
          WITHOUT the base resets reaching the legacy page body in <main>. */}
      <div className="app-frame">
        <div className="cc"><CloneHeader /></div>
        <main id="main">
          <Outlet />
        </main>
        <div className="cc"><CloneFooter /></div>
      </div>
    </>
  )
}
