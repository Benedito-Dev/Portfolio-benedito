export function Hero() {
  return (
    <section className="container hero">
      <div className="hero-text hero-anim" data-parallax="-0.04">
        <span className="badge"><span className="dot"></span> Desenvolvedor Full Stack</span>
        <h1>
          Desenvolvedor full stack.{' '}
          <span className="accent">Web e mobile, do banco à interface.</span>
        </h1>
        <p className="lead">
          Construo aplicações completas com foco em código limpo e em
          coisas que funcionam de verdade em produção.
        </p>
        <div className="cta-row">
          <a href="#projetos" className="btn btn-primary">Ver Projetos <span>&#8599;</span></a>
          <a href="#contato" className="btn btn-secondary">Entrar em Contato</a>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="num">1</div>
            <div className="label">Projeto no ar</div>
          </div>
          <div className="stat">
            <div className="num">SENAC</div>
            <div className="label">Técnico ADS</div>
          </div>
          <div className="stat">
            <div className="num">Eng.</div>
            <div className="label">de Software</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <img className="hero-bg" src="/fundo.png" alt="" aria-hidden="true" />
        <img
          className="hero-fg"
          src="/mentor-recorte.png"
          alt="Benedito Bittencourt apresentando no Hackathon Pague Menos"
        />
      </div>
    </section>
  )
}
