/**
 * Ponte entre o IntroSplash e o useScrollFX: a entrada em cascata do hero
 * (hero-ready) só deve começar quando o splash já estiver sumindo — senão
 * ela roda escondida atrás da tela preta e "já chega pronta" quando o
 * overlay desaparece.
 *
 * Sem splash (prefers-reduced-motion) markIntroDone() é chamado de imediato,
 * então o hero libera na hora, como antes.
 */
type Listener = () => void

let done = false
const listeners: Listener[] = []

export function markIntroDone() {
  if (done) return
  done = true
  listeners.forEach((cb) => cb())
  listeners.length = 0
}

export function onIntroDone(cb: Listener) {
  if (done) cb()
  else listeners.push(cb)
}
