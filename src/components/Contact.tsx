import { GithubIcon, LinkedinIcon, MailIcon } from './icons'
import { profile } from '../data/profile'

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
        <a href={`mailto:${profile.email}`} className="contact-email">
          <MailIcon />
          {profile.email}
        </a>
        <div className="contact-social">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
