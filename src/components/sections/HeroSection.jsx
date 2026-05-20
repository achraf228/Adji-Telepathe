import { useTranslation } from 'react-i18next'
import { GoldButton, OutlineButton } from '@/components/ui'
import HeroBg from '@/images/SectionHero.jpg'

const SPOTIFY_URL = 'https://open.spotify.com'
const YOUTUBE_URL = 'https://youtube.com'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-dark z-10" />
        <img 
          src={HeroBg} 
          alt="Adji Télépathe" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(201,168,76,0.15),transparent_60%)]" />
      </div>

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent z-20" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent z-20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="font-mono text-gold text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase mb-8 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            {t('hero.welcome', "Bienvenue sur le site officiel d'Adji Télépathe")}
          </p>

          {/* Title */}
          <h1
            className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] mb-8 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <span className="block text-white">Adji</span>
            <span className="block text-gradient">Télépathe</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <div className="w-12 h-px bg-gold" />
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase">Adji Telepathe Official</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            <GoldButton 
              href={YOUTUBE_URL} 
              external 
              className="min-w-[220px] px-12 py-4 flex justify-center items-center bg-transparent border border-gold text-gold hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
            >
               {t('music.youtube')}
            </GoldButton>
            <OutlineButton href="/discographie" className="min-w-[220px] px-12 py-4 flex justify-center items-center">
              {t('music.title')}
            </OutlineButton>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 mt-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
            {['Instagram', 'Facebook', 'TikTok', 'YouTube'].map((s) => (
              <a
                key={s}
                href="#"
                className="font-mono text-xs text-white/30 hover:text-gold transition-colors tracking-widest uppercase"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold/60" />
        <span className="font-mono text-xs text-white/30 tracking-widest">CLIQUEZ</span>
      </div>
    </section>
  )
}
