import { useEffect, useRef, useState } from 'react'
import { ProcessVisual } from './ProcessVisual'

const steps = [
  {
    num: '01',
    title: 'Entender o problema primeiro',
    text: 'Antes de escrever código, tento entender quem vai usar aquilo e o que realmente precisa acontecer. Construir para pessoas, não para o meu ego de dev.',
  },
  {
    num: '02',
    title: 'Desenhar antes de sair codando',
    text: 'Penso nas telas, no modelo de dados e nas fronteiras do sistema antes dos detalhes. É mais barato mudar um esboço do que refatorar depois.',
  },
  {
    num: '03',
    title: 'Construir de forma que dê pra manter',
    text: 'Código tipado, organizado e legível. Prefiro uma solução simples que a próxima pessoa entende a uma esperta que só eu decifro.',
  },
  {
    num: '04',
    title: 'Cuidar dos detalhes que importam',
    text: 'Estados vazios, mensagens de erro, o que acontece quando algo dá errado. É o que separa um trabalho de faculdade de algo pronto pra usar.',
  },
]

const clamp = (value: number) => Math.max(0, Math.min(1, value))
const sum = (values: number[]) => values.reduce((total, value) => total + value, 0)
const setVar = (el: HTMLElement, name: string, value: string) => {
  if (el.style.getPropertyValue(name) !== value) el.style.setProperty(name, value)
}

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
    const layout = content.querySelector<HTMLElement>('.process-layout')!
    const visual = content.querySelector<HTMLElement>('.process-desktop-visual')!
    const art = visual.querySelector('svg')!
    const rows = Array.from(list.querySelectorAll<HTMLLIElement>('.process-step'))
    const texts = rows.map(row => row.querySelector<HTMLElement>('.process-step-text')!)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const wide = window.matchMedia('(min-width: 1101px)')
    const top = 84 // logo abaixo da navbar compacta (64px)
    const bottom = 16
    let frame = 0
    let measureFrame = 0
    let pinned = false
    let compact = false
    let distance = 0
    let padding = 0
    let current = -1
    let base: number[] = [] // altura de cada passo sem o parágrafo
    let text: number[] = [] // altura do parágrafo de cada passo

    // Altura final de cada passo, e não a do meio da transição de abrir/fechar.
    const rowHeight = (i: number, index: number) => base[i] + (compact && i !== index ? 0 : text[i])

    const highlight = (index: number, force: boolean) => {
      if (index === current && !force) return
      let y = 0
      for (let i = 0; i < index; i++) y += rowHeight(i, index)
      setVar(list, '--step-top', `${y}px`)
      setVar(list, '--step-height', `${rowHeight(index, index)}px`)
      if (index !== current) { current = index; setActive(index) }
    }
    const update = (force = false) => {
      frame = 0
      let index = 0
      if (pinned) {
        const start = section.getBoundingClientRect().top + padding - top
        const progress = clamp(-start / distance) * steps.length
        index = Math.min(steps.length - 1, Math.floor(progress))
        rows.forEach((row, i) => setVar(row, '--step-progress', clamp(progress - i).toFixed(3)))
      } else {
        // Sem travar, a linha de leitura (45% da tela) marca o passo e o progresso.
        const line = window.innerHeight * 0.45
        rows.forEach((row, i) => {
          const rect = row.getBoundingClientRect()
          if (rect.top <= line) index = i
          setVar(row, '--step-progress', clamp((line - rect.top) / rect.height).toFixed(3))
        })
      }
      highlight(index, force)
    }
    const measure = () => {
      measureFrame = 0
      // Medido sem arredondar e pelo bloco inteiro do texto, para dar o mesmo
      // resultado com os passos parados ou no meio da animação de abrir/fechar.
      base = rows.map((row, i) => row.getBoundingClientRect().height - texts[i].getBoundingClientRect().height)
      text = texts.map(el => el.firstElementChild!.scrollHeight)
      const header = layout.getBoundingClientRect().top - content.getBoundingClientRect().top
      const room = window.innerHeight - top - bottom - header
      const chrome = visual.offsetHeight - art.clientHeight
      const { width, height } = art.viewBox.baseVal
      const natural = art.clientWidth * (height / width)
      const full = sum(base) + sum(text)
      const folded = sum(base) + Math.max(...text)
      // Trava sempre que cabe; se a lista inteira não couber, só o passo ativo mostra o texto.
      pinned = !reduced.matches && wide.matches && folded <= room && room - chrome >= 200
      compact = pinned && full > room
      const artHeight = pinned ? Math.min(natural, room - chrome) : natural
      distance = pinned ? Math.max(180, window.innerHeight * 0.35) * steps.length : 0
      padding = parseFloat(getComputedStyle(section).paddingTop)
      section.classList.toggle('process-pinned', pinned)
      section.classList.toggle('process-compact', compact)
      setVar(section, '--process-top', `${top}px`)
      setVar(section, '--process-travel', `${distance}px`)
      setVar(section, '--process-content-height', `${Math.ceil(header + Math.max(compact ? folded : full, chrome + artHeight))}px`)
      setVar(section, '--process-art-max', pinned ? `${Math.floor(artHeight)}px` : 'none')
      update(true)
    }
    const scroll = () => { if (!frame) frame = requestAnimationFrame(() => update()) }
    const remeasure = () => { if (!measureFrame) measureFrame = requestAnimationFrame(measure) }
    const observer = new ResizeObserver(remeasure)
    observer.observe(content)
    window.addEventListener('scroll', scroll, { passive: true })
    window.addEventListener('resize', remeasure)
    reduced.addEventListener('change', remeasure)
    measure()
    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(measureFrame)
      observer.disconnect()
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('resize', remeasure)
      reduced.removeEventListener('change', remeasure)
      section.classList.remove('process-pinned', 'process-compact')
      for (const name of ['--process-top', '--process-travel', '--process-content-height', '--process-art-max']) {
        section.style.removeProperty(name)
      }
    }
  }, [])
  return (
    <section ref={sectionRef} id="processo" className="container process">
      <div ref={contentRef} className="process-content">
      <span className="section-label">Como eu trabalho</span>
      <h2>Quatro passos que sigo em cada projeto.</h2>

      <div className="process-layout">
      <ol ref={listRef} className="process-steps">
        {steps.map((step, i) => (
          <li className={`process-step${active === i ? ' is-active' : ''}`} aria-current={active === i ? 'step' : undefined} key={step.num}>
            <span className="num">{step.num}</span>
            <div className="process-step-body">
              <h3>{step.title}</h3>
              <div className="process-step-text"><div><p>{step.text}</p></div></div>
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
