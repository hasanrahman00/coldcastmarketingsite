import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Crisp } from 'crisp-sdk-web'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import RolesPage from './pages/RolesPage'
import FreeToolsPage from './pages/FreeToolsPage'
import SalesNavAdvancedPage from './pages/SalesNavAdvancedPage'
import ProductDetailPage from './components/ProductDetailPage'
import { CRISP_WEBSITE_ID } from './lib/constants'

export default function App() {
  // Load the Crisp chatbox once, on every route. `teal` is the closest preset to
  // the brand mint, so the launcher doesn't clash with Crisp's default blue.
  useEffect(() => {
    Crisp.configure(CRISP_WEBSITE_ID)
    Crisp.setColorTheme('teal')
  }, [])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/coldcast-agent" element={<ProductDetailPage slug="coldcast-agent" />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/roles/:slug" element={<ProductDetailPage />} />
        <Route path="/tools" element={<FreeToolsPage />} />
        <Route path="/sales-nav-advanced" element={<SalesNavAdvancedPage />} />
      </Route>
    </Routes>
  )
}
