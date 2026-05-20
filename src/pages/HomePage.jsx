import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import LatestSection from '@/components/sections/LatestSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()
  return (
    <>
      <SEOHead
        description="Site officiel d'Adji Télépathe — Musique, concerts, clips et actualités."
        path="/"
      />
      <HeroSection />
      <LatestSection />
      <NewsletterSection />
    </>
  )
}
