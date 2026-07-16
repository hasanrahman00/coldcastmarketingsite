import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Grain from './Grain'
import Navbar from './Navbar'
import Footer from './Footer'
import AnnouncementBar from './AnnouncementBar'

// On navigation: jump to the hash target if present, else scroll to top.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
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
  const [showBar, setShowBar] = useState(() => {
    try { return localStorage.getItem('cc_bar_dismissed') !== '1' } catch { return true }
  })
  const dismissBar = () => {
    setShowBar(false)
    try { localStorage.setItem('cc_bar_dismissed', '1') } catch { /* ignore */ }
  }

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

      {/* The whole site is one graphite card floating on the backdrop.
          No overflow-hidden here — it would break the sticky navbar; the
          nav and footer round their own outer corners to match the frame. */}
      <div className="app-frame">
        {showBar && <AnnouncementBar onClose={dismissBar} />}
        <Navbar />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
