/** Chave do ícone da coluna — os SVGs ficam em Stack.tsx. */
export type StackIconKey = 'languages' | 'frontend' | 'ai' | 'backend' | 'database' | 'tools'

export type StackColumn = {
  title: string
  icon: StackIconKey
  /** cada item precisa de um logo em components/techLogos.tsx */
  items: string[]
}

export const stackColumns: StackColumn[] = [
  { title: 'Linguagens', icon: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'] },
  { title: 'Front e Mobile', icon: 'frontend', items: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS'] },
  { title: 'Backend', icon: 'backend', items: ['Node.js', 'Express', 'NestJS', 'Django', 'FastAPI'] },
  { title: 'Banco de Dados', icon: 'database', items: ['PostgreSQL', 'Prisma', 'MongoDB', 'Redis', 'Firebase'] },
  { title: 'IA', icon: 'ai', items: ['Claude Code', 'Anthropic SDK', 'MCP', 'Agentes de IA'] },
  { title: 'Ferramentas', icon: 'tools', items: ['Git', 'Docker', 'Vercel', 'Tauri', 'Swagger'] },
]

/** Versão do celular: as tecnologias principais numa nuvem só, sem categorias. */
export const stackHighlights: string[] = [
  'TypeScript', 'Python', 'React', 'React Native', 'Next.js', 'Node.js', 'NestJS',
  'Django', 'PostgreSQL', 'Prisma', 'Docker', 'Claude Code', 'Anthropic SDK', 'MCP',
]
