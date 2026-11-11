export type Highlight = { title: string; text: string }

export type JourneyKind = 'work' | 'education' | 'event'

export type JourneyItem = {
  kind: JourneyKind
  period: string
  title: string
  subtitle: string
  /** item atual: bolinha preenchida e conteúdo expandido */
  current?: boolean
  link?: { label: string; url: string }
  description?: string
  highlights?: Highlight[]
  tags?: string[]
  /** selo curto ao lado do período, ex.: "Concluído", "Tech lead" */
  badge?: string
  /** curso em andamento: barra de progresso calculada pela data de hoje */
  progress?: { start: string; end: string }
  image?: { src: string; alt: string }
}

/** Trajetória, do mais recente para o mais antigo. */
export const journey: JourneyItem[] = [
  {
    kind: 'work',
    period: 'fev/2026 — atual',
    title: 'Devari Tecnologia',
    subtitle: 'Desenvolvedor Full Stack',
    current: true,
    link: { label: 'Rizar', url: 'https://rizar.com.br' },
    description:
      'Construo o Rizar, plataforma SaaS de inteligência de marketing: do público-alvo ao criativo gerado por IA, à campanha de tráfego e à conversa com o lead depois do clique. Comecei no Mutase, produto que deu origem ao Rizar.',
    highlights: [
      {
        title: 'Servidor MCP',
        text: 'Permite que o Claude opere o Rizar, com trilha de auditoria, limite de uso e revisão de LGPD.',
      },
      {
        title: 'Bússola IA',
        text: 'Assistente com Claude dentro do produto, com tool use e streaming via Anthropic SDK.',
      },
      {
        title: 'Automações do Instagram',
        text: 'Motor de fluxos que transforma um comentário no post em conversa e lead no WhatsApp.',
      },
      {
        title: 'Time de agentes',
        text: '10 agentes do Claude Code por função, com skills, hooks de validação e ADRs como memória.',
      },
    ],
    tags: ['Django', 'React', 'PostgreSQL', 'Docker', 'Anthropic SDK', 'MCP', 'Claude Code'],
  },
  {
    kind: 'education',
    period: 'jan/2026 — jan/2030 (previsão)',
    title: 'Engenharia de Software',
    subtitle: 'UniAteneu · bacharelado',
    badge: 'Em andamento',
    progress: { start: '2026-01-01', end: '2030-01-01' },
  },
  {
    kind: 'event',
    period: 'out/2025',
    title: 'Hackathon Pague Menos + AWS',
    subtitle: 'Tech lead do time',
    link: { label: 'TecSIM', url: 'https://github.com/Benedito-Dev/TecSIM' },
    description:
      'Em três dias, liderei o time na construção do TecSIM, um assistente de saúde com IA personalizado: orientações sobre medicamentos, dosagens seguras por idade e peso e checagem de interações.',
    tags: ['React Native', 'Expo', 'React', 'Node.js', 'PostgreSQL', 'Gemini'],
    image: { src: '/hackathon.webp', alt: 'Benedito apresentando o TecSIM no Hackathon Pague Menos' },
  },
  {
    kind: 'education',
    period: 'mar/2024 — dez/2025',
    title: 'Técnico em Análise e Desenvolvimento de Sistemas',
    subtitle: 'SENAC',
    badge: 'Concluído',
    description:
      'A base de tudo: lógica, banco de dados, orientação a objetos e os primeiros sistemas completos, do backend à interface.',
  },
]
