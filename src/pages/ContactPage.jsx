import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import SEOHead from '@/components/ui/SEOHead'
import { AnimatedSection, CyanButton } from '@/components/ui'
import { contactAPI } from '@/lib/api'

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''

function loadRecaptcha() {
  return new Promise((resolve) => {
    if (window.grecaptcha) { resolve(window.grecaptcha); return }
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    script.onload = () => window.grecaptcha.ready(() => resolve(window.grecaptcha))
    document.head.appendChild(script)
  })
}

export default function ContactPage() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [loading, setLoading] = useState(false)

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      let recaptchaToken = ''
      if (RECAPTCHA_SITE_KEY) {
        const gc = await loadRecaptcha()
        recaptchaToken = await gc.execute(RECAPTCHA_SITE_KEY, { action: 'contact' })
      }
      await contactAPI.send({ ...form, recaptcha_token: recaptchaToken })
      toast.success(t('contact.success'))
      setForm({ nom: '', email: '', sujet: '', message: '' })
    } catch {
      toast.error(t('contact.error'))
    } finally {
      setLoading(false)
    }
  }

  const inputClass = `w-full bg-dark-200 border border-dark-400 focus:border-cyan outline-none px-5 py-3.5 font-body text-sm text-white placeholder:text-white/25 transition-colors`

  return (
    <>
      <SEOHead title={t('contact.title')} description="Contactez Adji Télépathe." path="/contact" />

      <section className="pt-28 pb-16 bg-dark-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-subtitle">{t('contact.subtitle')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white">{t('contact.title')}</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="space-y-10">
                <div>
                  <h3 className="font-mono text-xs tracking-widest text-cyan uppercase mb-4">{t('contact.booking')}</h3>
                  <div className="space-y-3 text-sm font-body text-white/60">
                    <p>booking@adjitelepathe.com</p>
                    <a 
                      href="https://wa.me/XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan/70 hover:text-cyan transition-colors"
                    >
                      <span>●</span> WhatsApp
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs tracking-widest text-cyan uppercase mb-4">Réseaux Sociaux</h3>
                  <div className="flex flex-col gap-3">
                    {['Instagram', 'Facebook', 'TikTok', 'YouTube', 'Spotify'].map(s => (
                      <a key={s} href="#" className="font-body text-sm text-white/50 hover:text-cyan transition-colors">
                        {s} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3" delay={200}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" placeholder={t('contact.name')} value={form.nom} onChange={set('nom')} required className={inputClass} />
                  <input type="email" placeholder={t('contact.email')} value={form.email} onChange={set('email')} required className={inputClass} />
                </div>
                <input type="text" placeholder={t('contact.subject')} value={form.sujet} onChange={set('sujet')} required className={inputClass} />
                <textarea
                  placeholder={t('contact.message')}
                  value={form.message}
                  onChange={set('message')}
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                />

                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-white/20">
                    Protégé par reCAPTCHA v3
                  </p>
                  <CyanButton onClick={handleSubmit} className={loading ? 'opacity-50 cursor-not-allowed' : ''}>
                    {loading ? '...' : t('contact.send')}
                  </CyanButton>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
