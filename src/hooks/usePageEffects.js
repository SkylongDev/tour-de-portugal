import { useEffect } from 'react'

export default function usePageEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return

    document.body.classList.add('motion-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )

    document
      .querySelectorAll('.reveal')
      .forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.body.classList.remove('motion-ready')
    }
  }, [])
}
