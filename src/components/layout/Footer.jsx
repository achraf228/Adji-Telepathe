import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SOCIALS = [
  { name: 'Instagram', href: '#', icon: 'IG' },
  { name: 'Facebook', href: '#', icon: 'FB' },
  { name: 'TikTok', href: '#', icon: 'TK' },
  { name: 'YouTube', href: '#', icon: 'YT' },
  { name: 'Spotify', href: '#', icon: 'SP' },
]

const LINKS = [
  { key: 'bio', path: '/biographie' },
  { key: 'music', path: '/discographie' },
  { key: 'events', path: '/evenements' },
  { key: 'press', path: '/presse' },
  { key: 'contact', path: '/contact' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-dark-100 border-t border-dark-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient mb-4">Adji Télépathe</h3>
            <div className="flex gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white/40 hover:text-gold transition-colors"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {LINKS.map(({ key, path }) => (
                <li key={key}>
                  <Link
                    to={path}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6">
              {t('contact.booking')}
            </h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>avenirmusic666@gmail.com</p>
              <p>+228 92 25 99 61</p>
              <a
                href="https://wa.me/22892259961"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold/70 hover:text-gold transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-400 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30 tracking-wider">
            © {new Date().getFullYear()} Adji Télépathe. {t('footer.rights')}
          </p>
          <p className="font-mono text-xs text-white/20">{t('footer.made_with')} ♪</p>
        </div>
      </div>
    </footer>
  )
}
