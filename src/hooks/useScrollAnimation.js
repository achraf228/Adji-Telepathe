import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export function useScrollAnimation(threshold = 0.15) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true })
  return { ref, inView }
}

export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const scrolled = window.scrollY
      const rate = scrolled * speed
      el.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}
