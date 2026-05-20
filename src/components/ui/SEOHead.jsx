import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function SEOHead({
  title,
  description,
  image = '/og-default.jpg',
  path = '',
}) {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://adjitelepathe.com'
  const fullTitle = title ? `${title} — Adji Télépathe` : 'Adji Télépathe — Site Officiel'
  const url = `${baseUrl}${path}`
  const altLang = lang === 'fr' ? 'en' : 'fr'
  const altUrl = `${baseUrl}/${altLang}${path}`

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* hreflang */}
      <link rel="alternate" hreflang={lang} href={url} />
      <link rel="alternate" hreflang={altLang} href={altUrl} />
      <link rel="alternate" hreflang="x-default" href={`${baseUrl}/fr${path}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:locale" content={lang === 'fr' ? 'fr_FR' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
    </Helmet>
  )
}
