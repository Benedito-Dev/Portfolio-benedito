import type { ReactNode } from 'react'
import { techLogos } from './techLogos'

type StackItem = {
  title: string
  items: string[]
  icon: ReactNode
}

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const columns: StackItem[] = [
  {
    title: 'Linguagens',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'],
    icon: (
      <svg {...svgProps}>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS'],
    icon: (
      <svg {...svgProps}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Expo'],
    icon: (
      <svg {...svgProps}>
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs'],
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="4" width="18" height="7" rx="1.5" />
        <rect x="3" y="13" width="18" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: 'Banco de Dados',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
    icon: (
      <svg {...svgProps}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: 'Ferramentas',
    items: ['Git', 'Docker', 'Swagger'],
    icon: (
      <svg {...svgProps}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

export function Stack() {
  return (
    <section id="stack" className="container stack">
      <div className="stack-head reveal">
        <div>
          <span className="section-label">Stack Técnica</span>
          <h2>As ferramentas em que confio para construir software em produção.</h2>
        </div>
        <p>
          Escolhidas por confiabilidade, não por hype. São as ferramentas
          que uso no dia a dia e que sustentam os projetos que coloco no ar.
        </p>
      </div>

      <div className="stack-grid reveal">
        {columns.map((col) => (
          <div className="stack-col" key={col.title}>
            <span className="icon">{col.icon}</span>
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
