import { useScrollAnimation } from '@/hooks/useScrollAnimation'

// ─── Section Header ───────────────────────────────────────────
export function SectionHeader({ sub, title, light = false }) {
  const { ref, inView } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <p className="section-subtitle">{sub}</p>
      <h2 className={`section-title ${light ? 'text-dark' : 'text-white'}`}>{title}</h2> 
      <div className="cyan-line" />
    </div>
  )
}

// ─── Cyan Button ──────────────────────────────────────────────
export function CyanButton({ children, onClick, href, external = false, className = '' }) {
  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`btn-cyan ${className}`}
      >
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={`btn-cyan ${className}`}>
      {children}
    </button>
  )
}

// ─── Outline Button ───────────────────────────────────────────
export function OutlineButton({ children, onClick, href, external = false, className = '' }) {
  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`btn-outline ${className}`}
      >
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={`btn-outline ${className}`}>
      {children}
    </button>
  )
}

// ─── Loading Skeleton ─────────────────────────────────────────
export function Skeleton({ className = '' }) {
  return (
    <div
      className={`bg-gradient-to-r from-dark-300 via-dark-400 to-dark-300 bg-[length:200%_100%] animate-shimmer ${className}`}
    />
  )
}

// ─── Animated Section Wrapper ─────────────────────────────────
export function AnimatedSection({ children, className = '', delay = 0 }) {
  const { ref, inView } = useScrollAnimation()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  )
}

// ─── Social Icon Button ───────────────────────────────────────
export function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 border border-dark-400 hover:border-cyan flex items-center justify-center text-white/50 hover:text-cyan transition-all duration-300"
    >
      {children}
    </a>
  )
}
