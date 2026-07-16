import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import BackgroundFX from './BackgroundFX'
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-gradient focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <ScrollManager />
      <BackgroundFX />
      <Grain />

      {/* Rounded "framed website" bezel */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70] rounded-[1.35rem] border-[7px] border-[#F7F4ED] shadow-[inset_0_0_0_1.5px_rgba(23,20,16,0.08)] sm:rounded-[2rem] sm:border-[10px]"
      />

      {showBar && <AnnouncementBar onClose={dismissBar} />}
      <Navbar barOffset={showBar} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
