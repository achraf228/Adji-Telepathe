import { useTranslation } from 'react-i18next'
import { AnimatedSection, GoldButton } from '@/components/ui'
import CoverAlbum from '@/images/CoverAlbum.jpg'

// Replace with real data from API
const LATEST = {
  title: 'Guérison',
  type: 'Album',
  date: '11 Septembre 2025',
  cover: CoverAlbum,
  spotifyUrl: 'https://open.spotify.com',
  youtubeUrl: 'https://youtube.com',
}

export default function LatestSection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-dark-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(201,168,76,0.06),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Cover */}
          <AnimatedSection>
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-4 border border-gold/20 z-0" />
              <div className="absolute -inset-8 border border-gold/10 z-0" />
              {LATEST.cover ? (
                <img
                  src={LATEST.cover}
                  alt={LATEST.title}
                  className="w-full h-full object-cover relative z-10 rounded-sm"
                />
              ) : (
                <div className="w-full h-full bg-dark-300 flex items-center justify-center relative z-10">
                  <span className="font-display text-6xl text-gold/20">♪</span>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={200}>
            <p className="section-subtitle">{t('home.latest')}</p>
            <p className="font-mono text-xs text-white/30 tracking-[0.3em] uppercase mb-2">
              {LATEST.type} · {LATEST.date}
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              {LATEST.title}
            </h2>
            <div className="gold-line" />
            <p className="font-body text-white/60 mb-8">{t('home.latest_sub')}</p>

            <div className="flex flex-wrap gap-4">
              <GoldButton 
                href={LATEST.spotifyUrl} 
                external 
                className="bg-transparent border border-gold text-gold hover:bg-[#1DB954] hover:border-[#1DB954] hover:text-white transition-all duration-300"
              >
                Spotify
              </GoldButton>
              <GoldButton href={LATEST.youtubeUrl} external className="bg-transparent border border-gold text-gold hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300">
                 YouTube
              </GoldButton>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
