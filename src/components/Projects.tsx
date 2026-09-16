import type { ReactNode } from 'react'
import { PrumoVisual } from './CaseVisuals'
import { GithubIcon } from './icons'

type CaseData = {
  idx: string
  title: string
  reverse?: boolean
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
    title: 'Prumo — Gestão para depósitos',
    visual: <PrumoVisual />,
    problema:
      'No ritmo do balcão, registrar vendas em cadernos dificulta acompanhar o faturamento, saber quem está devendo e entender quais produtos mais saem.',
    solucao:
      'Um sistema web para depósitos de materiais de construção, que reúne a operação de vendas e a visão do negócio em uma interface adaptada ao celular e ao desktop.',
    funcionalidades: [
      'Vendas com descontos, diferentes pagamentos e recibos',
      'Controle de fiado, recebimentos parciais e cobrança por WhatsApp',
      'Indicadores de faturamento, clientes e produtos mais vendidos',
      'Zé: assistente de IA para consultas e operações em linguagem natural',
      'Acessos de dono e vendedor, com permissões e auditoria',
    ],
    impacto:
      'Centraliza vendas, valores a receber e indicadores para apoiar as decisões do dono. Aplicação publicada, com frontend, API própria e PostgreSQL, além de código aberto no GitHub.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'OpenRouter'],
    demo: 'https://prumo-omega.vercel.app/',
    github: 'https://github.com/Benedito-Dev/Prumo',
  },
]

function CaseStudy({ data }: { data: CaseData }) {
  const cls = ['case', 'reveal', data.reverse ? 'reverse' : ''].filter(Boolean).join(' ')

  return (
    <article className={cls}>
      <div className="case-visual" data-parallax="0.05">{data.visual}</div>

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
