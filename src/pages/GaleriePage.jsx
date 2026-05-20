import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SEOHead from '@/components/ui/SEOHead'
import { AnimatedSection, Skeleton } from '@/components/ui'
import { galleryAPI } from '@/lib/api'

const CATEGORIES = ['all', 'promo', 'concert', 'backstage']

export default function GaleriePage() {
  const { t } = useTranslation()
  const [photos, setPhotos] = useState([])
  const [category, setCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  useEffect(() => {
    setLoading(true)
    galleryAPI.getAll(category === 'all' ? '' : category)
      .then(r => setPhotos(r.data?.data || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [category])

  const slides = photos.map(p => ({ src: p.url, alt: p.alt_text || '' }))

  return (
    <>
      <SEOHead title={t('gallery.title')} description="Galerie photos d'Adji Télépathe." path="/galerie" />

      <section className="pt-28 pb-16 bg-dark-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-subtitle">{t('gallery.subtitle')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white">{t('gallery.title')}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 font-mono text-xs tracking-widest uppercase transition-all ${
                  category === cat
                    ? 'bg-gold text-dark'
                    : 'border border-dark-400 text-white/50 hover:border-gold hover:text-gold'
                }`}
              >
                {t(`gallery.${cat}`)}
              </button>
            ))}
          </div>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} className="aspect-square" />)}
            </div>
          ) : photos.length === 0 ? (
            <p className="text-white/30 font-body text-center py-24">Bientôt disponible…</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {photos.map((photo, i) => (
                <AnimatedSection key={photo.id} delay={i * 30}>
                  <button
                    onClick={() => setLightboxIndex(i)}
                    className="w-full aspect-square overflow-hidden bg-dark-300 block group relative"
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt_text || ''}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-2xl">⊕</span>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        styles={{ container: { backgroundColor: 'rgba(0,0,0,0.95)' } }}
      />
    </>
  )
}
