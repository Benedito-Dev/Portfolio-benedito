/** Chave do visual de cada estudo de caso — o componente fica em CaseVisuals. */
export type CaseVisualKey = 'prumo' | 'meubolso'

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
  /** quando não há link público: explica o porquê */
  privateNote?: string
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
  {
    idx: '02',
    title: 'Meu Bolso — Finanças com o Claude como interface',
    summary: 'painel de finanças pessoais que o Claude opera via MCP (React + Node.js + PostgreSQL)',
    reverse: true,
    visual: 'meubolso',
    problema:
      'Planilha de dívida não diz quanto dá para gastar hoje, e abrir um app a cada gasto é o tipo de hábito que ninguém mantém.',
    solucao:
      'Um painel que trata a dívida como uma campanha de RPG, com HP e missões, e calcula o limite do dia. Um servidor MCP liga o app ao Claude: lanço gastos e consulto o mês conversando com ele.',
    funcionalidades: [
      'Servidor MCP com OAuth: o Claude lê e opera tudo o que o app faz',
      'Limite diário calculado a partir de renda, contas fixas e meta de quitação',
      'Notificações no iPhone (Web Push) para vencimentos e lembretes',
      'Resumo semanal por e-mail, montado por regras, com backup em anexo',
      'App instalável (PWA), com testes de ponta a ponta no navegador',
    ],
    impacto:
      'Uso no dia a dia para sair das dívidas, e é pelo Claude que mais mexo nas minhas finanças. O mesmo código de cálculo roda no app e no servidor, então os números nunca divergem.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MCP', 'OAuth', 'Web Push', 'PWA'],
    privateNote: 'Código privado: o app guarda meus dados financeiros.',
  },
]

export type LabProject = {
  name: string
  text: string
  status: string
  tags: string[]
  github?: string
}

/** Projetos menores, onde testo ideias com agentes, MCP e automação. */
export const labProjects: LabProject[] = [
  {
    name: 'LeadNexi',
    text: 'CRM com funis em Kanban e automações que transformam comentário e story do Instagram em conversa no direct, WhatsApp pelo QR code e ferramentas MCP para o Claude operar o CRM.',
    status: 'Em desenvolvimento',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'MCP'],
    github: 'https://github.com/Benedito-Dev/LeadNexi',
  },
  {
    name: 'Escritório de Agentes',
    text: 'Time de agentes do Claude Code que roda sozinho, em horário agendado: busca leads toda semana e produz um carrossel por dia para eu aprovar. Com vigia de falhas e limite de tempo por agente.',
    status: 'Rodando todo dia',
    tags: ['Claude Code', 'MCP', 'TypeScript', 'cron'],
  },
  {
    name: 'My-Jarvis',
    text: 'Assistente pessoal de desktop: desbloqueio por reconhecimento facial, conversa por voz e controle das janelas no Mac. Roda em macOS, Linux e Windows, com CI testando os três.',
    status: 'Em evolução',
    tags: ['Python', 'FastAPI', 'Tauri', 'React', 'OpenCV', 'Whisper'],
  },
]
