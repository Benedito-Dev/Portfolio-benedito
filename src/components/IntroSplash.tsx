import { useEffect, useRef, useState } from 'react'
import { markIntroDone } from '../introGate'

/**
 * Assinatura de abertura: uma linha de código "digitando" antes do hero
 * aparecer. Puramente um overlay (position: fixed) por cima do conteúdo —
 * o Hero já está montado e pintado por baixo, então não atrasa o LCP.
 *
 * Mesmo gate de visibilidade do useScrollFX: se a aba carrega em segundo
 * plano, o relógio da animação só começa a contar quando ela fica visível.
 */
const TYPE_MS = 1000 // soma das duas linhas (0.6s + 0.4s) — ver index.css
const HOLD_MS = 350
const FADE_MS = 400

export function IntroSplash() {
  const [ready, setReady] = useState(false)
  const [phase, setPhase] = useState<'playing' | 'fading' | 'done'>('playing')
  const timers = useRef<number[]>([])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setPhase('done')
      markIntroDone()
      return
    }

    const schedule = () => {
      setReady(true)
      timers.current.push(
        // libera a entrada do hero já aqui: ela roda POR CIMA do fade-out
        // do splash, em vez de escondida atrás dele
        window.setTimeout(() => {
          setPhase('fading')
          markIntroDone()
        }, TYPE_MS + HOLD_MS),
        window.setTimeout(() => setPhase('done'), TYPE_MS + HOLD_MS + FADE_MS),
      )
    }

    if (document.visibilityState === 'visible') {
      schedule()
    } else {
      const onVisible = () => {
        if (document.visibilityState === 'visible') {
          document.removeEventListener('visibilitychange', onVisible)
          schedule()
        }
      }
      document.addEventListener('visibilitychange', onVisible)
      return () => document.removeEventListener('visibilitychange', onVisible)
    }

    return () => timers.current.forEach(clearTimeout)
  }, [])

  const skip = () => {
    timers.current.forEach(clearTimeout)
    markIntroDone()
    setPhase('done')
  }

  if (phase === 'done') return null

  return (
    <div
      className={`intro-splash ${phase === 'fading' ? 'is-fading' : ''}`}
      onClick={skip}
      role="presentation"
      aria-hidden="true"
    >
      <div className={`intro-code ${ready ? 'go' : ''}`}>
        <span className="intro-code-line line-1">const dev = new Benedito()</span>
        <span className="intro-code-line line-2 comment">// ainda em beta</span>
      </div>
    </div>
  )
}
