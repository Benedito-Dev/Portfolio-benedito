import type { ReactNode } from 'react'
import { MeuBolsoVisual, PrumoVisual } from './CaseVisuals'
import { GithubIcon } from './icons'
import { cases, labProjects, type CaseData, type CaseVisualKey } from '../data/projects'

const visuals: Record<CaseVisualKey, ReactNode> = {
  prumo: <PrumoVisual />,
  meubolso: <MeuBolsoVisual />,
}

function CaseStudy({ data }: { data: CaseData }) {
  const cls = ['case', 'reveal', data.reverse ? 'reverse' : ''].filter(Boolean).join(' ')

  return (
    <article className={cls}>
      <div className="case-visual" data-parallax="0.05">{visuals[data.visual]}</div>

      <div className="case-body">
        <div className="case-eyebrow">
          <span className="idx">{data.idx}</span>
          <span className="txt">Estudo de Caso</span>
        </div>
        <h3>{data.title}</h3>

        <div className="case-block">
          <div className="lbl">Problema</div>
          <p>{data.problema}</p>
        </div>

        <div className="case-block">
          <div className="lbl">Solução</div>
          <p>{data.solucao}</p>
        </div>

        <div className="case-block">
          <div className="lbl">Funcionalidades</div>
          <ul>
            {data.funcionalidades.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="case-block">
          <div className="lbl">Impacto</div>
          <p>{data.impacto}</p>
        </div>

        <div className="case-tags">
          {data.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="case-links">
          {data.demo && (
            <a href={data.demo} target="_blank" rel="noreferrer">
              Acessar projeto <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {data.github && (
            <a href={data.github} target="_blank" rel="noreferrer" className="muted-link">
              <GithubIcon />
              GitHub
            </a>
          )}
          {data.privateNote && <span className="case-private">{data.privateNote}</span>}
        </div>
      </div>
    </article>
  )
}

function Lab() {
  return (
    <div className="lab">
      <div className="lab-head reveal">
        <span className="section-label">Laboratório</span>
        <h3>Onde eu testo ideias com agentes, MCP e automação.</h3>
      </div>
      <div className="lab-grid">
        {labProjects.map((p, i) => (
          <article className="lab-card reveal" data-delay={String(i + 1)} key={p.name}>
            <div className="lab-card-top">
              <h4>{p.name}</h4>
              <span className="lab-status">{p.status}</span>
            </div>
            <p>{p.text}</p>
            <div className="case-tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {p.github ? (
              <a className="lab-link" href={p.github} target="_blank" rel="noreferrer">
                <GithubIcon /> Ver no GitHub
              </a>
            ) : (
              <span className="lab-link is-private">Repositório privado</span>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projetos" className="container projects">
      <div className="projects-head reveal">
        <div>
          <span className="section-label">Projetos</span>
          <h2>Produtos que eu construo, coloco no ar e uso de verdade.</h2>
        </div>
        <p>
          Dois estudos de caso contados por inteiro e um laboratório onde
          experimento agentes, MCP e automação fora do trabalho.
        </p>
      </div>

      {cases.map((data) => (
        <CaseStudy data={data} key={data.idx} />
      ))}

      <Lab />
    </section>
  )
}
