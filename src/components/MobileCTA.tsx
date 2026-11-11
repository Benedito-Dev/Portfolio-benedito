import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { LinkedinIcon, MailIcon } from './icons'

/**
 * Barra de contato fixa no rodapé da tela, só no celular (CSS).
 * Aparece depois que o topo sai da tela (lá já há botões de contato) e some
 * quando a seção Contato está visível, para não duplicar.
 */
export function MobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    const contact = document.getElementById('contato')
    if (!hero || !contact || !('IntersectionObserver' in window)) return

    let pastHero = false
    let atContact = false
    const sync = () => setVisible(pastHero && !atContact)

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === hero) pastHero = !e.isIntersecting
        if (e.target === contact) atContact = e.isIntersecting
      })
      sync()
    })
    io.observe(hero)
    io.observe(contact)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`mobile-cta${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <a href={`mailto:${profile.email}`} className="mobile-cta-primary" tabIndex={visible ? 0 : -1}>
        <MailIcon /> Falar comigo
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" tabIndex={visible ? 0 : -1} aria-label="LinkedIn">
        <LinkedinIcon />
      </a>
    </div>
  )
}
