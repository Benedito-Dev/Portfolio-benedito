import { GithubIcon, LinkedinIcon, MailIcon } from './icons'

export function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container reveal">
        <span className="section-label">Contato</span>
        <h2>Vamos trocar uma<br />ideia sobre código.</h2>
        <p>
          Aberto a oportunidades e novos projetos. Manda uma mensagem contando o
          que você está construindo — respondo rápido.
        </p>
        <a href="mailto:beneditobittencourtt@gmail.com" className="contact-email">
          <MailIcon />
          beneditobittencourtt@gmail.com
        </a>
        <div className="contact-social">
          <a href="https://github.com/Benedito-Dev" target="_blank" rel="noreferrer">
            <GithubIcon />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/benedito-bittencourt-13ab1b233/" target="_blank" rel="noreferrer">
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
