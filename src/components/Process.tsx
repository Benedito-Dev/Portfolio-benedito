import { useEffect, useRef, useState } from 'react'
import { ProcessVisual } from './ProcessVisual'

const steps = [
  {
    num: '01',
    title: 'Plano antes do código',
    text: 'O estrategista lê o código, compara ao menos duas abordagens e escreve o plano. Nada é implementado sem eu aprovar.',
  },
  {
    num: '02',
    title: 'Implementação com guarda-corpos',
    text: 'O implementador segue as skills do projeto, e hooks validam cada edição: lint, checagens e bloqueio de comandos perigosos.',
  },
  {
    num: '03',
    title: 'Revisão com nota e decisão',
    text: 'Um revisor separado, em outro modelo, dá nota e decide: aprovado ou volta. Quem escreve o código não é quem aprova.',
  },
  {
    num: '04',
    title: 'Registro e deploy com aval',
    text: 'O documentador faz commit, changelog e fecha a tarefa no board. Produção só recebe depois do meu "pode subir".',
  },
]

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const list = listRef.current
    if (!section || !content || !list) return
    const rows = Array.from(list.querySelectorAll<HTMLLIElement>('.process-step'))
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let pinned = false
    let distance = 0
    let current = -1
    const top = 96

    const highlight = (index: number) => {
      const row = rows[index]
      list.style.setProperty('--step-top', `${row.offsetTop}px`)
      list.style.setProperty('--step-height', `${row.offsetHeight}px`)
      if (index !== current) { current = index; setActive(index) }
    }
    const update = () => {
      frame = 0
      let index = 0
      if (pinned) {
        const start = section.getBoundingClientRect().top + parseFloat(getComputedStyle(section).paddingTop) - top
        index = Math.max(0, Math.min(steps.length - 1, Math.floor((-start / distance) * steps.length)))
      } else {
        // Se a lista não cabe na tela, mantém a rolagem natural.
        let nearest = Infinity
        rows.forEach((row, i) => {
          const rect = row.getBoundingClientRect()
          const gap = Math.abs(rect.top + rect.height / 2 - window.innerHeight * 0.45)
          if (gap < nearest) { nearest = gap; index = i }
        })
      }
      highlight(index)
    }
    const measure = () => {
      pinned = !reduced.matches && content.offsetHeight <= window.innerHeight - top - 24
      distance = pinned ? Math.max(180, window.innerHeight * 0.35) * steps.length : 0
      section.classList.toggle('process-pinned', pinned)
      section.style.setProperty('--process-travel', `${distance}px`)
      section.style.setProperty('--process-content-height', `${content.offsetHeight}px`)
      update()
    }
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    const observer = new ResizeObserver(measure)
    observer.observe(content)
    window.addEventListener('scroll', scroll, { passive: true })
    window.addEventListener('resize', measure)
    reduced.addEventListener('change', measure)
    measure()
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('resize', measure)
      reduced.removeEventListener('change', measure)
      section.classList.remove('process-pinned')
      section.style.removeProperty('--process-travel')
      section.style.removeProperty('--process-content-height')
    }
  }, [])
  return (
    <section ref={sectionRef} id="processo" className="container process">
      <div ref={contentRef} className="process-content">
      <div className="process-head">
        <div>
          <span className="section-label">Como eu trabalho com IA</span>
          <h2>Agentes fazem o trabalho pesado. As decisões continuam comigo.</h2>
        </div>
        <p>
          No dia a dia, cada tarefa passa por um time de agentes do Claude Code,
          cada um com um papel. Eu fico nos portões: aprovo o plano, homologo e
          autorizo o deploy.
        </p>
      </div>

      <div className="process-layout">
      <ol ref={listRef} className="process-steps">
        {steps.map((step, i) => (
          <li className={`process-step${active === i ? ' is-active' : ''}`} aria-current={active === i ? 'step' : undefined} key={step.num}>
            <span className="num">{step.num}</span>
            <div className="process-step-body">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <div className="process-mobile-visual"><ProcessVisual active={i} /></div>
            </div>
          </li>
        ))}
      </ol>
      <div className="process-desktop-visual"><ProcessVisual active={active} /></div>
      </div>
      </div>
    </section>
  )
}
