import type { ReactNode } from 'react'
import { techLogos } from './techLogos'
import { stackColumns, type StackIconKey } from '../data/stack'

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const icons: Record<StackIconKey, ReactNode> = {
  languages: (
    <svg {...svgProps}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  frontend: (
    <svg {...svgProps}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  ai: (
    <svg {...svgProps}>
      <path d="M12 3l1.8 4.6L18.5 9.4l-4.7 1.8L12 16l-1.8-4.8L5.5 9.4l4.7-1.8L12 3z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
    </svg>
  ),
  backend: (
    <svg {...svgProps}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
    </svg>
  ),
  database: (
    <svg {...svgProps}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  tools: (
    <svg {...svgProps}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
}

export function Stack() {
  return (
    <section id="stack" className="container stack">
      <div className="stack-head reveal">
        <div>
          <span className="section-label">Stack Técnica</span>
          <h2>As ferramentas em que confio para construir software em produção.</h2>
        </div>
        <p>
          Escolhidas por confiabilidade, não por hype. Do Django do trabalho ao
          NestJS e ao Python dos meus projetos, com IA atravessando tudo.
        </p>
      </div>

      <div className="stack-grid reveal">
        {stackColumns.map((col) => (
          <div className="stack-col" key={col.title}>
            <span className="icon">{icons[col.icon]}</span>
            <h3>{col.title}</h3>
            <ul>
              {col.items.map((item) => (
                <li key={item}>
                  <span className="tech-logo" aria-hidden="true">
                    {techLogos[item]}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
