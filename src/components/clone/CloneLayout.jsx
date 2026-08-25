import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CloneHeader from './CloneHeader'
import CloneFooter from './CloneFooter'

// Layout for the enrich-style clone routes (/ and /pricing). Everything renders
// inside <div class="cc"> so the scoped clone.css never touches the rest of the
// site, and body.cc-body paints the page ground stone while these routes mount.
export default function CloneLayout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.body.classList.add('cc-body')
    return () => document.body.classList.remove('cc-body')
  }, [])

  useEffect(() => {
    if (hash) {
      // getElementById (not querySelector) so a malformed fragment can't throw.
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="cc cc-root">
      <CloneHeader />
      <div className="rail">
        <main>
          <Outlet />
        </main>
        <CloneFooter />
      </div>
    </div>
  )
}
