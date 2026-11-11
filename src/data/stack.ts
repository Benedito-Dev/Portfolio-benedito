/** Chave do ícone da coluna — os SVGs ficam em Stack.tsx. */
export type StackIconKey = 'languages' | 'frontend' | 'mobile' | 'backend' | 'database' | 'tools'

export type StackColumn = {
  title: string
  icon: StackIconKey
  /** cada item precisa de um logo em components/techLogos.tsx */
  items: string[]
}

export const stackColumns: StackColumn[] = [
  { title: 'Linguagens', icon: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'] },
  { title: 'Frontend', icon: 'frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { title: 'Mobile', icon: 'mobile', items: ['React Native', 'Expo'] },
  { title: 'Backend', icon: 'backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { title: 'Banco de Dados', icon: 'database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
  { title: 'Ferramentas', icon: 'tools', items: ['Git', 'Docker', 'Swagger'] },
]
