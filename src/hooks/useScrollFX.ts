import { useEffect } from 'react'

/**
 * Reveal-on-scroll + parallax effects.
 * Runs once after mount, reading these data attributes:
 *   - .reveal          -> fades/slides in when it enters the viewport
 *   - [data-parallax]  -> translates on scroll at the given speed
 *   - [data-glow]      -> translates on scroll at the given speed
 */
export function useScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    /* ===== Gate de visibilidade do hero =====
       O Chrome renderiza abas pré-carregadas / em background antes de
       ficarem visíveis. As animações CSS do hero começam pausadas e só
       "rodam" quando a página está de fato visível, senão o clock corre
       escondido e o hero "só aparece" quando você olha a aba. */
    const root = document.documentElement
    const releaseHero = () => root.classList.add('hero-ready')
    if (document.visibilityState === 'visible') {
      releaseHero()
    } else {
      const onVisible = () => {
        if (document.visibilityState === 'visible') {
          releaseHero()
          document.removeEventListener('visibilitychange', onVisible)
        }
      }
      document.addEventListener('visibilitychange', onVisible)
    }

    /* ===== Reveal on scroll ===== */
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')
    let io: IntersectionObserver | undefined

    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('in-view'))
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              io!.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -12% 0px' },
      )
      reveals.forEach((el) => io!.observe(el))
    }

    if (reduce) {
      return () => io?.disconnect()
    }

    /* ===== Parallax on scroll (smoothed with a continuous rAF loop) ===== */
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]'),
    ).map((el) => ({
      el,
      speed: parseFloat(el.getAttribute('data-parallax') || '0') || 0,
      current: 0,
    }))

    const glowEls = Array.from(
      document.querySelectorAll<HTMLElement>('[data-glow]'),
    ).map((el) => ({
      el,
      speed: parseFloat(el.getAttribute('data-glow') || '0') || 0,
      current: 0,
    }))

    let rafId = 0
    // easing factor for the smoothing (0..1) — lower = smoother/laggier
    const ease = 0.12

    const tick = () => {
      const y = window.pageYOffset
      const vh = window.innerHeight

      parallaxEls.forEach((item) => {
        const rect = item.el.getBoundingClientRect()
        // distance of the element's center from the viewport center
        const center = rect.top + rect.height / 2 - vh / 2
        const target = center * item.speed
        item.current += (target - item.current) * ease
        item.el.style.transform = `translate3d(0,${item.current.toFixed(2)}px,0)`
      })

      glowEls.forEach((item) => {
        const target = y * item.speed
        item.current += (target - item.current) * ease
        item.el.style.transform = `translate3d(0,${item.current.toFixed(2)}px,0)`
      })

      rafId = window.requestAnimationFrame(tick)
    }

    rafId = window.requestAnimationFrame(tick)

    return () => {
      io?.disconnect()
      window.cancelAnimationFrame(rafId)
    }
  }, [])
}
