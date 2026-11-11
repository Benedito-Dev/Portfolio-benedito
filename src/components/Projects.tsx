import type { ReactNode } from 'react'
import { PrumoVisual } from './CaseVisuals'
import { GithubIcon } from './icons'
import { cases, type CaseData, type CaseVisualKey } from '../data/projects'

const visuals: Record<CaseVisualKey, ReactNode> = {
  prumo: <PrumoVisual />,
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
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projetos" className="container projects">
      <div className="projects-head reveal">
        <div>
          <span className="section-label">Projeto em Destaque</span>
          <h2>Um projeto real no ar, contado por inteiro.</h2>
        </div>
        <p>
          Prefiro mostrar um produto que existe, com código aberto e
          demo funcionando, a listar dezenas de ideias pela metade. Novos
          projetos estão a caminho.
        </p>
      </div>

      {cases.map((data) => (
        <CaseStudy data={data} key={data.idx} />
      ))}
    </section>
  )
}
