import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NAV_ITEMS = [
  { key: 'home', path: '/' },
  { key: 'bio', path: '/biographie' },
  { key: 'music', path: '/discographie' },
  { key: 'videos', path: '/clips' },
  { key: 'gallery', path: '/galerie' },
  { key: 'news', path: '/actualites' },
  { key: 'events', path: '/evenements' },
  { key: 'press', path: '/presse' },
  { key: 'contact', path: '/contact' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')
  const opaqueHeader = scrolled || location.pathname !== '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        opaqueHeader ? 'bg-dark/95 backdrop-blur-md border-b border-dark-400' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="font-display text-xl font-bold tracking-wide">
          <span className="text-gradient">Adji Télépathe</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {NAV_ITEMS.map(({ key, path }) => (
            <Link
              key={key}
              to={path}
              className={`nav-link ${location.pathname === path ? 'text-gold after:w-full' : ''}`}
            >
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>

        {/* Lang switcher + burger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="font-mono text-xs tracking-widest text-white/60 hover:text-gold transition-colors border border-dark-400 hover:border-gold px-3 py-1.5"
          >
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-screen bg-dark-100 border-b border-dark-400' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {NAV_ITEMS.map(({ key, path }) => (
            <Link
              key={key}
              to={path}
              className={`font-body text-sm tracking-wider uppercase ${
                location.pathname === path ? 'text-gold' : 'text-white/70'
              }`}
            >
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
