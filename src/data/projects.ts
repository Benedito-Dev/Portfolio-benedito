/** Chave do visual de cada estudo de caso — o componente fica em CaseVisuals. */
export type CaseVisualKey = 'prumo'

export type CaseData = {
  idx: string
  title: string
  /** resumo de uma linha, usado no terminal escondido */
  summary: string
  reverse?: boolean
  visual: CaseVisualKey
  problema: string
  solucao: string
  funcionalidades: string[]
  impacto: string
  tags: string[]
  demo?: string
  github?: string
}

export const cases: CaseData[] = [
  {
    idx: '01',
    title: 'Prumo — Gestão para depósitos',
    summary: 'gestão para depósitos de materiais de construção (React + Node.js + PostgreSQL)',
    visual: 'prumo',
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
