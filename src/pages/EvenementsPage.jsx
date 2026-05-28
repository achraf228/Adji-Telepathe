import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SEOHead from '@/components/ui/SEOHead'
import { AnimatedSection, Skeleton, CyanButton } from '@/components/ui'
import { eventsAPI } from '@/lib/api'

function EventCard({ event, featured = false }) {
  const { t } = useTranslation()
  const date = new Date(event.date)
  const isPast = date < new Date()

  return (
    <AnimatedSection>
      <div className={`card-dark p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start ${featured ? 'border-cyan/50' : ''}`}>
        {/* Date block */}
        <div className="shrink-0 text-center md:text-left">
          <div className="font-display text-5xl font-black text-gradient leading-none">
            {date.getDate().toString().padStart(2, '0')}
          </div>
          <div className="font-mono text-xs tracking-widest text-white/50 uppercase mt-1">
            {date.toLocaleDateString('fr-FR', { month: 'short' })} {date.getFullYear()}
          </div>
        </div>

        <div className="w-px self-stretch bg-dark-400 hidden md:block" />

        {/* Info */}
        <div className="flex-1">
          {featured && (
            <span className="font-mono text-xs tracking-widest text-cyan uppercase mb-2 block">
              {t('events.next_concert')} 
            </span>
          )}
          <h3 className="font-display text-2xl font-bold text-white mb-2">{event.titre}</h3>
          <p className="font-body text-white/50 text-sm mb-1">📍 {event.lieu}</p>
          {event.heure && <p className="font-mono text-xs text-white/30">⏰ {event.heure}</p>}
          {event.description && (
            <p className="font-body text-sm text-white/40 mt-3 line-clamp-2">{event.description}</p>
          )}
        </div>

        {/* Status / CTA */}
        <div className="shrink-0">
          {isPast ? (
            <span className="font-mono text-xs tracking-widest text-white/20 uppercase border border-dark-400 px-4 py-2">
              Passé
            </span>
          ) : ( 
            <CyanButton href="#">{t('events.reserve')}</CyanButton>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function EvenementsPage() {
  const { t } = useTranslation()
  const [events, setEvents] = useState([])
  const [tab, setTab] = useState('upcoming')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    eventsAPI.getAll().then(r => setEvents(r.data?.data || [])).catch(() => {}).finally(() => setLoading(false))
  }, [])

  const now = new Date()
  const upcoming = events.filter(e => new Date(e.date) >= now).sort((a, b) => new Date(a.date) - new Date(b.date))
  const past = events.filter(e => new Date(e.date) < now).sort((a, b) => new Date(b.date) - new Date(a.date))
  const list = tab === 'upcoming' ? upcoming : past

  return (
    <>
      <SEOHead title={t('events.title')} description="Retrouvez Adji Télépathe en concert." path="/evenements" />

      <section className="pt-28 pb-16 bg-dark-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-subtitle">{t('events.subtitle')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white">{t('events.title')}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-0 mb-12 border-b border-dark-400">
            {['upcoming', 'past'].map(t_ => (
              <button
                key={t_}
                onClick={() => setTab(t_)}
                className={`px-8 py-4 font-mono text-xs tracking-widest uppercase transition-all ${
                  tab === t_ ? 'border-b-2 border-cyan text-cyan' : 'text-white/40 hover:text-white'
                }`}
              >
                {t(`events.${t_}`)}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-32" />)}
            </div>
          ) : list.length === 0 ? (
            <p className="text-white/30 text-center py-24 font-body">Aucun événement pour le moment…</p>
          ) : (
            <div className="space-y-4">
              {list.map((ev, i) => (
                <EventCard key={ev.id} event={ev} featured={tab === 'upcoming' && i === 0} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
