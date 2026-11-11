/**
 * Fonte única dos dados pessoais. Componentes e o terminal escondido leem
 * daqui — trocar um link ou e-mail é uma mudança em um lugar só.
 */
export const profile = {
  name: 'Benedito Bittencourt',
  role: 'Desenvolvedor Full Stack',
  email: 'beneditobittencourtt@gmail.com',
  github: 'https://github.com/Benedito-Dev',
  linkedin: 'https://www.linkedin.com/in/benedito-bittencourt-13ab1b233/',
}

export type HeroStat = { num: string; label: string }

/** Números do hero. Atualizar quando mudarem de verdade. */
export const heroStats: HeroStat[] = [
  { num: '1.300+', label: 'Commits no Rizar' },
  { num: '10', label: 'Agentes de IA no meu fluxo' },
  { num: '3', label: 'Servidores MCP' },
]
