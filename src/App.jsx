import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import Layout from '@/components/layout/Layout'

// Lazy-loaded pages
const HomePage        = lazy(() => import('@/pages/HomePage'))
const BiographiePage  = lazy(() => import('@/pages/BiographiePage'))
const DiscographiePage = lazy(() => import('@/pages/DiscographiePage'))
const ClipsPage       = lazy(() => import('@/pages/ClipsPage'))
const GaleriePage     = lazy(() => import('@/pages/GaleriePage'))
const ActualitesPage  = lazy(() => import('@/pages/ActualitesPage'))
const EvenementsPage  = lazy(() => import('@/pages/EvenementsPage'))
const PressePage      = lazy(() => import('@/pages/PressePage'))
const MarketplacePage = lazy(() => import('@/pages/MarketplacePage'))
const ContactPage     = lazy(() => import('@/pages/ContactPage'))
const NotFoundPage    = lazy(() => import('@/pages/NotFoundPage'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="biographie" element={<BiographiePage />} />
          <Route path="discographie" element={<DiscographiePage />} />
          <Route path="clips" element={<ClipsPage />} />
          <Route path="galerie" element={<GaleriePage />} />
          <Route path="actualites" element={<ActualitesPage />} />
          <Route path="evenements" element={<EvenementsPage />} />
          <Route path="presse" element={<PressePage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
