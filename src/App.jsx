import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import RolesPage from './pages/RolesPage'
import FreeToolsPage from './pages/FreeToolsPage'
import SalesNavAdvancedPage from './pages/SalesNavAdvancedPage'
import ProductDetailPage from './components/ProductDetailPage'

export default function App() {
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
