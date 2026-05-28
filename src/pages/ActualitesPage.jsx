import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEOHead from '@/components/ui/SEOHead'
import { AnimatedSection, Skeleton } from '@/components/ui'
import { newsAPI } from '@/lib/api'

function ArticleCard({ article }) {
  const { t } = useTranslation()
  return (
    <AnimatedSection>
      <Link to={`/actualites/${article.slug}`} className="card-dark block group overflow-hidden">
        <div className="aspect-video bg-dark-300 overflow-hidden relative">
          {article.image ? (
            <img src={article.image} alt={article.titre} loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> 
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-4xl text-cyan/10">♪</span>
            </div>
          )}
        </div>
        <div className="p-6">
          {article.tags && (
            <div className="flex gap-2 flex-wrap mb-3">
              {article.tags.split(',').map(tag => (
                <span key={tag} className="font-mono text-[10px] tracking-widest text-cyan uppercase">{tag.trim()}</span>
              ))}
            </div>
          )} 
          <h2 className="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors line-clamp-2">
            {article.titre}
          </h2>
          <p className="font-mono text-xs text-white/40 mb-4">
            {new Date(article.date_publication).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <span className="font-mono text-xs tracking-widest text-cyan uppercase">{t('news.read_more')} →</span>
        </div>
      </Link>
    </AnimatedSection>
  )
}

export default function ActualitesPage() {
  const { t, i18n } = useTranslation()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    newsAPI.getAll(i18n.language).then(r => setArticles(r.data?.data || [])).catch(() => {}).finally(() => setLoading(false))
  }, [i18n.language])

  return (
    <>
      <SEOHead title={t('news.title')} description="Actualités d'Adji Télépathe." path="/actualites" />

      <section className="pt-28 pb-16 bg-dark-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-subtitle">{t('news.subtitle')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white">{t('news.title')}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => <div key={i}><Skeleton className="aspect-video mb-4" /><Skeleton className="h-5 mb-2" /><Skeleton className="h-3 w-1/3" /></div>)}
            </div>
          ) : articles.length === 0 ? (
            <p className="text-white/30 text-center py-24 font-body">Bientôt disponible…</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(a => <ArticleCard key={a.id} article={a} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
