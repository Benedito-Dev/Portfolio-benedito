import { useEffect, useRef, useState } from 'react'

/** Seções observadas pelo scroll spy, na ordem em que aparecem na página. */
const SECTIONS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'stack', label: 'Stack' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'processo', label: 'Processo' },
] as const

export function Navbar() {
  /** true assim que a página sai do topo → barra ganha o vidro e encolhe */
  const [scrolled, setScrolled] = useState(false)
  /** id da seção atualmente visível (scroll spy) */
  const [active, setActive] = useState<string>('')
  /** menu mobile aberto */
  const [open, setOpen] = useState(false)

  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  /* ===== Barra reage ao scroll ===== */
  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ===== Scroll spy =====
     A faixa de deteccao fica no terco superior da viewport: a secao "vale"
     quando cruza essa altura, e nao quando encosta na borda de baixo. */
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el,
    )
    if (!els.length) return

    const visible = new Map<string, number>()

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio)
          else visible.delete(e.target.id)
        })

        // vence a seção com maior area visivel dentro da faixa
        let best = ''
        let bestRatio = 0
        visible.forEach((ratio, id) => {
          if (ratio >= bestRatio) {
            bestRatio = ratio
            best = id
          }
        })
        setActive(best)
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* ===== Menu mobile: ESC, clique fora e trava do scroll do fundo ===== */
  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (!panelRef.current?.contains(t) && !toggleRef.current?.contains(t)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)

    // impede a pagina de rolar por tras do menu aberto
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
      document.body.style.overflow = prev
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <header className={scrolled ? 'is-scrolled' : ''}>
        <div className="container nav">
          <a href="#" className="brand" aria-label="Benedito Bittencourt — início">
            <span className="dot" aria-hidden="true"></span>
            Benedito Bittencourt
          </a>

          <nav aria-label="Navegação principal">
            <ul className="nav-links">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={active === s.id ? 'is-active' : ''}
                    aria-current={active === s.id ? 'true' : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contato" className="btn-contact">
            Contato <span aria-hidden="true">&#8599;</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bar" aria-hidden="true"></span>
            <span className="bar" aria-hidden="true"></span>
          </button>
        </div>

        {/* ===== Menu mobile ===== */}
        <div
          id="menu-mobile"
          ref={panelRef}
          className={`nav-panel ${open ? 'is-open' : ''}`}
          hidden={!open}
        >
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={close}
                  className={active === s.id ? 'is-active' : ''}
                  aria-current={active === s.id ? 'true' : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contato" onClick={close} className="panel-cta">
                Contato <span aria-hidden="true">&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
