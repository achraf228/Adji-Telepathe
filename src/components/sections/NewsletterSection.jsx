import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import { publicAPI } from '@/lib/api'
import { AnimatedSection } from '@/components/ui'

export default function NewsletterSection() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await publicAPI.subscribeNewsletter(email)
      toast.success(t('newsletter.success'))
      setEmail('')
    } catch {
      toast.error(t('newsletter.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark-200" />
      <div className="absolute inset-0 border-y border-cyan/10" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="section-subtitle">{t('newsletter.subtitle')}</p>
          <h2 className="section-title text-white mb-4">{t('newsletter.title')}</h2>
          <div className="cyan-line mx-auto" />
          <p className="text-white/50 font-body mb-10">
            {t('hero.tagline')}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              required
              className="flex-1 bg-dark-200 border border-dark-400 border-r-0 px-5 py-3.5 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-cyan hover:bg-cyan-300 text-dark font-mono text-xs tracking-widest uppercase px-8 py-3.5 transition-all duration-300 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '...' : t('newsletter.subscribe')}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
