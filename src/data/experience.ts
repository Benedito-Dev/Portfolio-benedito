export type Experience = {
  company: string
  role: string
  period: string
  product: { name: string; url: string; description: string }
  context: string
  highlights: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Devari Tecnologia',
    role: 'Desenvolvedor Full Stack',
    period: 'fev/2026 — atual',
    product: {
      name: 'Rizar',
      url: 'https://rizar.com.br',
      description:
        'Plataforma SaaS de inteligência de marketing: do público-alvo ao criativo gerado por IA, à campanha de tráfego e à conversa com o lead depois do clique.',
    },
    context:
      'Comecei no Mutase, produto da Devari que deu origem ao Rizar em maio de 2026, e sigo no time desde então.',
    highlights: [
      'Desenvolvimento de ponta a ponta em Django + React: tráfego pago, automações do Instagram com motor de fluxos, CRM, mentoria e landing pages.',
      'Servidor MCP do Rizar, com trilha de auditoria, limite de uso e revisão de conformidade com a LGPD.',
      'Bússola IA: assistente com Claude dentro do produto, com tool use e streaming via Anthropic SDK.',
      'Estrutura de agentes do Claude Code no monorepo: 10 agentes por função (estrategista, implementador, revisor, documentador), skills, hooks de validação e ADRs como memória do projeto.',
    ],
    tags: ['Django', 'React', 'PostgreSQL', 'Docker', 'Anthropic SDK', 'MCP', 'Claude Code'],
  },
]
