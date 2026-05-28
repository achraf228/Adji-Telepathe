import { useTranslation } from 'react-i18next'
import SEOHead from '@/components/ui/SEOHead'
import { SectionHeader, AnimatedSection } from '@/components/ui'
import AdjiPhoto from '@/images/AdjiTelepathe.jpg'

export default function BiographiePage() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead title={t('bio.title')} description="Découvrez le parcours d'Adji Télépathe." path="/biographie" />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-dark-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-subtitle">{t('bio.subtitle')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white">
            {t('bio.title')}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Photo */}
            <AnimatedSection className="lg:col-span-2">
              <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border border-cyan-400/20 z-0" />
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={AdjiPhoto}
                      alt="Adji Télépathe"
                      className="absolute inset-0 w-full h-full object-cover z-10 rounded-sm"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-300/20 to-transparent z-20" />
                  </div>
                </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection className="lg:col-span-3" delay={200}>
              <div className="space-y-6">
                <p className="font-body text-lg text-white/80 leading-relaxed">{t('bio.text1')}</p>
                <div className="w-12 h-px bg-cyan-400" />
                <p className="font-body text-base text-white/60 leading-relaxed">{t('bio.text2')}</p>
                <p className="font-body text-base text-white/60 leading-relaxed">{t('bio.text3')}</p>
              </div>

              {/* Stats / highlights */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-dark-400">
                {[ 
                  { num: '4+', label: 'Années de carrière' },
                  { num: '40+', label: 'Albums & Singles' },
                  { num: '∞', label: 'AVENIR MUSIC' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="font-display text-3xl font-bold text-gradient mb-1">{item.num}</div>
                    <div className="font-mono text-xs text-white/40 tracking-wider uppercase">{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
