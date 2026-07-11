import type { ReactNode } from 'react'
import { PhoneVisual } from './CaseVisuals'
import { GithubIcon } from './icons'

type CaseData = {
  idx: string
  title: string
  reverse?: boolean
  phone?: boolean
  visual: ReactNode
  problema: string
  solucao: string
  funcionalidades: string[]
  impacto: string
  tags: string[]
  demo?: string
  github?: string
}

const cases: CaseData[] = [
  {
    idx: '01',
    title: 'TecSIM — Assistente de Enfermagem',
    phone: true,
    visual: <PhoneVisual />,
    problema:
      'Muita gente toma remédio sem informação confiável sobre dosagem e cuidados, e nem sempre tem um profissional por perto para tirar dúvidas simples.',
    solucao:
      'Um aplicativo mobile que reúne orientações sobre medicamentos, dosagens seguras e cuidados caseiros, consultando dados oficiais da base OpenFDA.',
    funcionalidades: [
      'Consulta de medicamentos com dados da OpenFDA',
      'Orientações de dosagem e cuidados',
      'Backend próprio em Node.js com Firestore',
    ],
    impacto:
      'Aproxima informação de saúde confiável de quem não tem acesso fácil a um profissional. Projeto finalizado, com demo web e código aberto.',
    tags: ['React Native', 'Node.js', 'Firestore', 'OpenFDA API'],
    demo: 'https://tec-sim-web.vercel.app/',
    github: 'https://github.com/Benedito-Dev/TecSIM',
  },
]

function CaseStudy({ data }: { data: CaseData }) {
  const cls = ['case', 'reveal', data.reverse ? 'reverse' : ''].filter(Boolean).join(' ')
  const visualCls = ['case-visual', data.phone ? 'phone' : ''].filter(Boolean).join(' ')

  return (
    <article className={cls}>
      <div className={visualCls} data-parallax="0.05">{data.visual}</div>

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
              Demo ao vivo <span>&#8599;</span>
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

      {cases.map((data, i) => (
        <CaseStudy data={data} key={i} />
      ))}
    </section>
  )
}
