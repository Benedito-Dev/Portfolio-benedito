import { useEffect } from 'react'

/**
 * Reveal-on-scroll + parallax effects.
 * Runs once after mount, reading these data attributes:
 *   - .reveal          -> fades/slides in when it enters the viewport
 *   - [data-parallax]  -> translates on scroll at the given speed
 *   - [data-glow]      -> translates on scroll at the given speed
 *
 * O parallax acompanha o scroll 1:1 (sem suavização) — ver comentário abaixo.
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

    /* ===== Parallax on scroll =====
       O deslocamento é função DIRETA da posição do scroll — sem easing, sem
       perseguição. O elemento chega na posição certa no mesmo frame em que a
       página rola e para exatamente quando o scroll para.

       (Antes havia um amortecedor: cada frame andava só 12% do caminho até o
       alvo. O efeito visual era o mesmo, mas o conteúdo chegava ~130ms atrasado
       e ainda deslizava ~600ms depois de você soltar o scroll — era isso que
       dava a sensação de página "travada/grudenta", e não perda de frames.) */

    type Item = {
      el: HTMLElement
      speed: number
      /** topo do elemento em coordenadas do documento, SEM o transform aplicado */
      docTop: number
      height: number
    }

    const collect = (attr: string): Item[] =>
      Array.from(document.querySelectorAll<HTMLElement>(`[${attr}]`)).map((el) => ({
        el,
        speed: parseFloat(el.getAttribute(attr) || '0') || 0,
        docTop: 0,
        height: 0,
      }))

    const parallaxEls = collect('data-parallax')
    const glowEls = collect('data-glow')

    let vh = window.innerHeight

    /* Mede a geometria de layout UMA vez (e a cada resize), não a cada frame.
       getBoundingClientRect() já inclui o transform aplicado, então zeramos o
       transform antes de medir — senão a leitura realimentaria a si mesma. */
    const measure = () => {
      vh = window.innerHeight
      const y = window.pageYOffset
      parallaxEls.forEach((item) => {
        item.el.style.transform = ''
        const rect = item.el.getBoundingClientRect()
        item.docTop = rect.top + y
        item.height = rect.height
      })
    }

    let rafId = 0
    let queued = false

    const render = () => {
      queued = false
      const y = window.pageYOffset

      parallaxEls.forEach((item) => {
        // distância do centro do elemento até o centro da viewport
        const center = item.docTop + item.height / 2 - y - vh / 2
        const offset = center * item.speed
        item.el.style.transform = `translate3d(0,${offset.toFixed(2)}px,0)`
      })

      glowEls.forEach((item) => {
        const offset = y * item.speed
        item.el.style.transform = `translate3d(0,${offset.toFixed(2)}px,0)`
      })
    }

    /* Um render por frame, no máximo. Nenhuma leitura de layout aqui dentro:
       o rAF só lê o scroll e escreve transforms. */
    const onScroll = () => {
      if (queued) return
      queued = true
      rafId = window.requestAnimationFrame(render)
    }

    const onResize = () => {
      measure()
      render()
    }

    measure()
    render()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    // fontes/imagens podem mudar o layout depois do mount → remede
    window.addEventListener('load', onResize)

    return () => {
      io?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', onResize)
      window.cancelAnimationFrame(rafId)
    }
  }, [])
}
