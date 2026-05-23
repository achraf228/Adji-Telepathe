import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import AlbumsSection from '@/components/sections/AlbumsSection'
import MerchandiseSection from '@/components/sections/MerchandiseSection'

export default function MarketplacePage() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('nav.marketplace')} - Adji Télépathe</title>
        <meta name="description" content={t('meta.marketplace')} />
      </Helmet>

      <main className="min-h-screen bg-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient">{t('nav.marketplace')}</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              {t('marketplace.description')}
            </p>
          </div>

          {/* Albums Section */}
          <AlbumsSection />

          {/* Merchandise Section */}
          <MerchandiseSection />
        </div>
      </main>
    </>
  )
}
