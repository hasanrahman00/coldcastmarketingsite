import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CloneLayout from './components/clone/CloneLayout'
import CloneHome from './pages/clone/CloneHome'
import ClonePricing from './pages/clone/ClonePricing'
import ProductsPage from './pages/ProductsPage'
import RolesPage from './pages/RolesPage'
import FreeToolsPage from './pages/FreeToolsPage'
import SalesNavAdvancedPage from './pages/SalesNavAdvancedPage'
import BlogIndexPage from './pages/BlogIndexPage'
import BlogPostPage from './pages/BlogPostPage'
import NotFound from './pages/NotFound'
import ProductDetailPage from './components/ProductDetailPage'
import { CRISP_WEBSITE_ID } from './lib/constants'

export default function App() {
  // Load the Crisp chatbox once, on every route. `teal` is the closest preset to
  // the brand mint, so the launcher doesn't clash with Crisp's default blue.
  // Dynamically imported (not a top-level import) so the build-time SSR pass —
  // which has no `window` — never evaluates the Crisp SDK. See entry-server.jsx.
  useEffect(() => {
    let timer
    import('crisp-sdk-web').then(({ Crisp }) => {
      Crisp.configure(CRISP_WEBSITE_ID)
      Crisp.setColorTheme('teal')

      // Auto-open the chat shortly after a visitor lands — but only ONCE per
      // browser session, so someone who closes it (or navigates around) isn't
      // repeatedly interrupted. The 1.2s delay lets the page paint first.
      if (!sessionStorage.getItem('cc-crisp-opened')) {
        sessionStorage.setItem('cc-crisp-opened', '1')
        timer = setTimeout(() => Crisp.chat.open(), 1200)
      }
    })
    return () => clearTimeout(timer)
  }, [])

  return (
    <Routes>
      {/* Enrich-style clone pages (own header/footer + stone/indigo theme). */}
      <Route element={<CloneLayout />}>
        <Route path="/" element={<CloneHome />} />
        <Route path="/pricing" element={<ClonePricing />} />
      </Route>

      <Route element={<Layout />}>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/coldcast-agent" element={<ProductDetailPage slug="coldcast-agent" />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/roles/:slug" element={<ProductDetailPage />} />
        <Route path="/tools" element={<FreeToolsPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/sales-nav-advanced" element={<SalesNavAdvancedPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
