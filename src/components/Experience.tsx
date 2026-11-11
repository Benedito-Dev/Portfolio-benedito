import { useEffect, useRef, type ReactNode } from 'react'
import { journey, type JourneyItem, type JourneyKind } from '../data/experience'

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const kindIcons: Record<JourneyKind, ReactNode> = {
  work: (
    <svg {...svgProps}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  ),
  education: (
    <svg {...svgProps}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
    </svg>
  ),
  event: (
    <svg {...svgProps}>
      <path d="M8 21h8M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 6h3a3 3 0 0 1-3 4M7 6H4a3 3 0 0 0 3 4" />
    </svg>
  ),
}

const kindLabel: Record<JourneyKind, string> = {
  work: 'Trabalho',
  education: 'Formação',
  event: 'Evento',
}

/** Fração do curso já cursada (0–1) e o ano atual dele. */
function courseProgress({ start, end }: { start: string; end: string }) {
  const s = new Date(start).getTime()
  const e = new Date(end).getTime()
  const ratio = Math.min(1, Math.max(0, (Date.now() - s) / (e - s)))
  const totalYears = Math.round((e - s) / (365.25 * 864e5))
  const year = Math.min(totalYears, Math.floor((Date.now() - s) / (365.25 * 864e5)) + 1)
  return { ratio, year, totalYears }
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="case-tags">
      {tags.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  )
}

function Meta({ item }: { item: JourneyItem }) {
  return (
    <div className="journey-meta">
      <div className="journey-topline">
        <span className="journey-kind">{kindLabel[item.kind]}</span>
        <span className="journey-period">{item.period}</span>
        {item.badge && (
          <span className={`journey-badge${item.badge === 'Concluído' ? ' is-done' : ''}`}>
            {item.badge === 'Concluído' && (
              <svg {...svgProps} strokeWidth={2.4} aria-hidden="true">
                <path d="m5 12 5 5 9-10" />
              </svg>
            )}
            {item.badge}
          </span>
        )}
      </div>
      <h3>{item.title}</h3>
      <span className="journey-subtitle">
        {item.subtitle}
        {item.link && (
          <>
            {' · '}
            <a href={item.link.url} target="_blank" rel="noreferrer">
              {item.link.label} <span aria-hidden="true">&#8599;</span>
            </a>
          </>
        )}
      </span>
    </div>
  )
}

function Progress({ range }: { range: { start: string; end: string } }) {
  const { ratio, year, totalYears } = courseProgress(range)
  const pct = Math.round(ratio * 100)
  return (
    <div className="journey-progress">
      <div className="journey-progress-head">
        <span>Ano {year} de {totalYears}</span>
        <span>{pct}%</span>
      </div>
      <div
        className="journey-progress-bar"
        role="progressbar"
        aria-label="Progresso do curso"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={{ width: `${Math.max(pct, 3)}%` }}></span>
      </div>
    </div>
  )
}

/** Item atual (trabalho): aberto, sem card, com os destaques em grade. */
function CurrentItem({ item }: { item: JourneyItem }) {
  return (
    <>
      <Meta item={item} />
      {item.description && (
        <p className={`journey-desc${item.descriptionShort ? ' desc-full' : ''}`}>{item.description}</p>
      )}
      {item.descriptionShort && <p className="journey-desc desc-short">{item.descriptionShort}</p>}
      {item.highlights && (
        <ul className="journey-highlights">
          {item.highlights.map((h) => (
            <li key={h.title}>
              <h4>{h.title}</h4>
              <p>{h.text}</p>
            </li>
          ))}
        </ul>
      )}
      {item.tags && <Tags tags={item.tags} />}
    </>
  )
}

/** Itens anteriores: card compacto, com foto quando houver. */
function PastItem({ item }: { item: JourneyItem }) {
  return (
    <div className={`journey-card${item.image ? ' has-image' : ''}`}>
      <div className="journey-card-body">
        <Meta item={item} />
        {item.description && <p className="journey-desc">{item.description}</p>}
        {item.progress && <Progress range={item.progress} />}
        {item.tags && <Tags tags={item.tags} />}
      </div>
      {item.image && (
        <figure className="journey-photo">
          <img src={item.image.src} alt={item.image.alt} loading="lazy" decoding="async" />
        </figure>
      )}
    </div>
  )
}

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null)

  /* O trilho se preenche conforme a rolagem: o progresso é a posição do
     centro da tela dentro da lista. Um cálculo por frame, no máximo. */
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      list.style.setProperty('--journey-fill', '1')
      return
    }
    let frame = 0
    const update = () => {
      frame = 0
      const rect = list.getBoundingClientRect()
      const anchor = window.innerHeight * 0.8
      const fill = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height))
      list.style.setProperty('--journey-fill', fill.toFixed(3))
      list.querySelectorAll<HTMLElement>('.journey-item').forEach((el) => {
        const dot = el.querySelector<HTMLElement>('.journey-dot')
        if (dot) el.classList.toggle('is-lit', dot.getBoundingClientRect().top < anchor)
      })
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="trajetoria" className="container experience">
      <div className="experience-head reveal">
        <div>
          <span className="section-label">Trajetória</span>
          <h2>Do curso técnico ao código em produção.</h2>
        </div>
        <p>
          Formação, eventos e o trabalho de hoje: o caminho que me trouxe até
          aqui, do mais recente para o começo.
        </p>
      </div>

      <ol ref={listRef} className="journey">
        {journey.map((item) => (
          <li
            className={`journey-item reveal${item.current ? ' is-current' : ''}`}
            key={item.title}
          >
            <span className="journey-dot" aria-hidden="true">
              {kindIcons[item.kind]}
            </span>
            {item.current ? <CurrentItem item={item} /> : <PastItem item={item} />}
          </li>
        ))}
      </ol>
    </section>
  )
}
