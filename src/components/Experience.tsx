import { experiences } from '../data/experience'

export function Experience() {
  return (
    <section id="experiencia" className="container experience">
      <div className="experience-head reveal">
        <div>
          <span className="section-label">Experiência</span>
          <h2>Código em produção, todo dia, num produto com clientes reais.</h2>
        </div>
        <p>
          Desde fevereiro de 2026 na Devari, construindo o Rizar ao lado de um
          time — da modelagem do banco à tela, passando pela IA do produto.
        </p>
      </div>

      {experiences.map((exp) => (
        <article className="job reveal" data-delay="1" key={exp.company}>
          <header className="job-meta">
            <span className="job-period">{exp.period}</span>
            <h3>{exp.company}</h3>
            <span className="job-role">{exp.role}</span>
            <a className="job-link" href={exp.product.url} target="_blank" rel="noreferrer">
              {exp.product.name} <span aria-hidden="true">&#8599;</span>
            </a>
          </header>

          <div className="job-body">
            <p className="job-product">{exp.product.description}</p>
            <p className="job-context">{exp.context}</p>
            <ul>
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="case-tags">
              {exp.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
