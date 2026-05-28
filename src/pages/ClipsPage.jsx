import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import YouTube from 'react-youtube'
import SEOHead from '@/components/ui/SEOHead'
import { AnimatedSection, Skeleton } from '@/components/ui'
import { videoAPI } from '@/lib/api'

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)
  return (
    <AnimatedSection>
      <div className="card-dark overflow-hidden group">
        <div className="relative aspect-video bg-dark-300">
          {playing ? (
            <YouTube
              videoId={extractYTId(video.youtube_url)}
              className="absolute inset-0"
              iframeClassName="w-full h-full"
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                },
              }}
              onReady={(event) => event.target.playVideo()}
            />
          ) : (
            <>
              <img
                src={video.thumbnail_url || `https://img.youtube.com/vi/${extractYTId(video.youtube_url)}/maxresdefault.jpg`}
                alt={video.titre}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark/50 flex items-center justify-center">
                <button
                  onClick={() => setPlaying(true)} 
                  className="w-16 h-16 bg-cyan rounded-full flex items-center justify-center hover:bg-cyan-300 transition-colors"
                >
                  <span className="text-dark text-xl ml-1">▶</span>
                </button>
              </div>
            </>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-display text-base font-bold text-white">{video.titre}</h3>
          {video.date && (
            <p className="font-mono text-xs text-white/40 mt-1">
              {new Date(video.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}
            </p>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}

function extractYTId(url) {
  const match = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
  return match?.[1] || ''
}

export default function ClipsPage() {
  const { t } = useTranslation()
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    videoAPI.getAll().then(r => setVideos(r.data?.data || [])).catch(() => {}).finally(() => setLoading(false))
  }, [])

  return (
    <>
      <SEOHead title={t('videos.title')} description="Regardez tous les clips d'Adji Télépathe." path="/clips" />

      <section className="pt-28 pb-16 bg-dark-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-subtitle">{t('videos.subtitle')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white">{t('videos.title')}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="aspect-video" />)}
            </div>
          ) : videos.length === 0 ? (
            <p className="text-white/30 font-body text-center py-24">Bientôt disponible…</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map(v => <VideoCard key={v.id} video={v} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
