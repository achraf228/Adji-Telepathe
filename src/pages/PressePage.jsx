import { useTranslation } from 'react-i18next'
import SEOHead from '@/components/ui/SEOHead'
import { AnimatedSection, CyanButton, OutlineButton } from '@/components/ui'

const PRESS_KIT_URL = '/api/press/download'
const PRESS_PHOTOS_URL = '/api/press/photos'
const PRESS_EMAIL = 'presse@adjitelepathe.com'

export default function PressePage() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead title={t('press.title')} description="Espace presse officiel d'Adji Télépathe." path="/presse" />

      <section className="pt-28 pb-16 bg-dark-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-subtitle">{t('press.subtitle')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white">{t('press.title')}</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Press Kit Download */}
            <AnimatedSection>
              <div className="card-dark p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -translate-y-16 translate-x-16" />
                <div className="font-display text-5xl text-cyan/20 mb-4">PDF</div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">{t('press.download_kit')}</h2>
                <p className="font-body text-sm text-white/50 mb-6">
                  Dossier complet avec biographie, discographie, contacts et visuels.
                </p>
                <CyanButton href={PRESS_KIT_URL} external className="rounded-full">
                  ↓ {t('press.download_kit')}
                </CyanButton>
              </div>
            </AnimatedSection>

            {/* HD Photos */}
            <AnimatedSection delay={100}>
              <div className="card-dark p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -translate-y-16 translate-x-16" />
                <div className="font-display text-5xl text-cyan/20 mb-4">IMG</div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">{t('press.photos_hd')}</h2>
                <p className="font-body text-sm text-white/50 mb-6">
                  Pack de photos haute résolution pour publication presse et web.
                </p>
                <OutlineButton href={PRESS_PHOTOS_URL} external className="rounded-full">
                  ↓ {t('press.download_photos')}
                </OutlineButton>
              </div>
            </AnimatedSection>
          </div>

          {/* Bios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection> 
              <div className="border-l-2 border-cyan pl-6">
                <h3 className="font-mono text-xs tracking-widest text-cyan uppercase mb-4">{t('press.bio_short')}</h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  Adji Télépathe est un artiste chanteur dont l'univers musical mêle afro, R&B et soul contemporaine.
                  Reconnu pour ses textes sincères et ses performances scéniques captivantes, il s'impose comme
                  une voix singulière de la scène musicale actuelle.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="border-l-2 border-dark-400 pl-6">
                <h3 className="font-mono text-xs tracking-widest text-cyan uppercase mb-4">{t('press.bio_long')}</h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  Adji Télépathe est un artiste aux multiples facettes dont le parcours musical s'étend sur plusieurs
                  années de création et de performances. Ses influences artistiques, allant de la soul africaine aux
                  sonorités R&B contemporaines, forge une identité musicale profondément originale. À travers ses
                  albums et ses concerts, il tisse un lien unique avec son public, portant des messages d'authenticité
                  et d'émotion pure.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Press Contact */}
          <AnimatedSection>
            <div className="bg-dark-200 border border-cyan/20 p-8 text-center">
              <h3 className="font-mono text-xs tracking-widest text-cyan uppercase mb-6">{t('press.contact_press')}</h3>
              <p className="font-display text-2xl text-white mb-2">{PRESS_EMAIL}</p>
              <p className="font-body text-sm text-white/40">
                Pour toute demande d'interview, partenariat presse ou accréditation concert.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
