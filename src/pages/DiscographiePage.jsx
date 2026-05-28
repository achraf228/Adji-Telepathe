import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SEOHead from '@/components/ui/SEOHead'
import { SectionHeader, AnimatedSection, Skeleton, CyanButton } from '@/components/ui'
import { musicAPI } from '@/lib/api'

function MusicCard({ item }) {
  const { t } = useTranslation()
  return (
    <AnimatedSection>
      <div className="card-dark group">
        <div className="relative aspect-square overflow-hidden bg-dark-300">
          {item.cover_url ? (
            <img
              src={item.cover_url}
              alt={item.titre}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-5xl text-cyan/20">♪</span>
            </div>
          )}
          <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            {item.spotify_url && (
              <a href={item.spotify_url} target="_blank" rel="noopener noreferrer"
                className="bg-transparent border border-cyan text-cyan hover:bg-[#1DB954] hover:border-[#1DB954] hover:text-white transition-all duration-300 text-xs px-4 py-2 rounded font-semibold uppercase tracking-wider">
                Spotify
              </a>
            )}
            {item.youtube_url && ( 
              <a href={item.youtube_url} target="_blank" rel="noopener noreferrer"
                className="btn-outline text-xs px-4 py-2">
                YouTube
              </a>
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-display text-lg font-bold text-white mb-1">{item.titre}</h3>
          {item.date_sortie && (
            <p className="font-mono text-xs text-white/40 tracking-wider">
              {new Date(item.date_sortie).getFullYear()}
            </p>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function DiscographiePage() {
  const { t, i18n } = useTranslation()
  const [tab, setTab] = useState('albums')
  const [albums, setAlbums] = useState([])
  const [singles, setSingles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lang = i18n.language
    Promise.all([musicAPI.getAlbums(lang), musicAPI.getSingles(lang)])
      .then(([a, s]) => { setAlbums(a.data?.data || []); setSingles(s.data?.data || []) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [i18n.language])

  const items = tab === 'albums' ? albums : singles

  return (
    <>
      <SEOHead title={t('music.title')} description="Toute la discographie d'Adji Télépathe." path="/discographie" />

      <section className="pt-28 pb-16 bg-dark-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-subtitle">{t('music.subtitle')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white">{t('music.title')}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex gap-0 mb-12 border-b border-dark-400">
            {['albums', 'singles'].map((t_) => (
              <button
                key={t_}
                onClick={() => setTab(t_)}
                className={`px-8 py-4 font-mono text-xs tracking-widest uppercase transition-all ${
                  tab === t_ ? 'border-b-2 border-cyan text-cyan' : 'text-white/40 hover:text-white'
                }`}
              >
                {t(`music.${t_}`)}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i}><Skeleton className="aspect-square mb-2" /><Skeleton className="h-4 w-3/4 mb-1" /><Skeleton className="h-3 w-1/3" /></div>
              ))}
            </div>
          ) : items.length === 0 ? (
            <p className="text-white/30 font-body text-center py-24">Bientôt disponible…</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((item) => <MusicCard key={item.id} item={item} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
