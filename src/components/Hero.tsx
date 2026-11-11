import { heroStats } from '../data/profile'

export function Hero() {
  return (
    <section className="container hero">
      <div className="hero-text hero-anim" data-parallax="-0.04">
        <span className="badge"><span className="dot"></span> Desenvolvedor Full Stack · Devari</span>
        <h1>
          Desenvolvedor full stack.{' '}
          <span className="accent">Construo software com agentes de IA no dia a dia.</span>
        </h1>
        <p className="lead">
          Trabalho no Rizar, uma plataforma SaaS de marketing da Devari, entregando
          do banco à interface, e uso agentes do Claude Code para planejar,
          implementar e revisar código.
        </p>
        <div className="cta-row">
          <a href="#projetos" className="btn btn-primary">Ver Projetos <span>&#8599;</span></a>
          <a href="#contato" className="btn btn-secondary">Entrar em Contato</a>
        </div>
        <div className="stats">
          {heroStats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <img
          className="hero-bg"
          src="/fundo.webp"
          alt=""
          aria-hidden="true"
          width={1400}
          height={927}
          decoding="async"
        />
        <img
          className="hero-fg"
          src="/mentor-recorte.webp"
          alt="Benedito Bittencourt apresentando no Hackathon Pague Menos"
          width={1400}
          height={926}
          decoding="async"
        />
      </div>
    </section>
  )
}
