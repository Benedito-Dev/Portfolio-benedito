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
    let running = false
    // easing factor for the smoothing (0..1) — lower = smoother/laggier
    const ease = 0.12
    // below this distance (px) the easing is visually settled → stop the loop
    const EPSILON = 0.1

    const tick = () => {
      const y = window.pageYOffset
      const vh = window.innerHeight

      /* FASE 1 — LEITURA: mede tudo de uma vez.
         Ler geometria depois de escrever style força reflow síncrono. Por isso
         todos os getBoundingClientRect() acontecem ANTES de qualquer escrita. */
      const targets = parallaxEls.map((item) => {
        const rect = item.el.getBoundingClientRect()
        // distance of the element's center from the viewport center
        const center = rect.top + rect.height / 2 - vh / 2
        return center * item.speed
      })

      /* FASE 2 — ESCRITA: nenhuma leitura de layout daqui pra baixo. */
      let settled = true

      parallaxEls.forEach((item, i) => {
        const target = targets[i]
        if (Math.abs(target - item.current) > EPSILON) settled = false
        item.current += (target - item.current) * ease
        item.el.style.transform = `translate3d(0,${item.current.toFixed(2)}px,0)`
      })

      glowEls.forEach((item) => {
        const target = y * item.speed
        if (Math.abs(target - item.current) > EPSILON) settled = false
        item.current += (target - item.current) * ease
        item.el.style.transform = `translate3d(0,${item.current.toFixed(2)}px,0)`
      })

      /* Assentou? Dorme. O loop volta a rodar no próximo scroll/resize.
         (Antes ele girava a 60fps para sempre, mesmo com a página parada.) */
      if (settled) {
        running = false
        return
      }

      rafId = window.requestAnimationFrame(tick)
    }

    const wake = () => {
      if (running) return
      running = true
      rafId = window.requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', wake, { passive: true })
    window.addEventListener('resize', wake)
    wake() // posiciona os elementos no load

    return () => {
      io?.disconnect()
      window.removeEventListener('scroll', wake)
      window.removeEventListener('resize', wake)
      window.cancelAnimationFrame(rafId)
    }
  }, [])
}
