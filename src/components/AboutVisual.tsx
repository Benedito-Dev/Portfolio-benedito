/**
 * Visual da dobra "Sobre": o personagem cartoon (vídeo) olhando para o
 * canto superior direito, de onde surge um balão de pensamento com "?".
 *
 * O vídeo (/public/cartoon.mp4) exibe o primeiro frame (#t=0.001) como
 * estado parado e toca uma vez quando a seção entra na viewport.
 *
 * O balão é 100% SVG/CSS — nítido, na paleta da marca — e "acende"
 * quando a seção entra na viewport (classe .in-view via useScrollFX).
 */
import { useEffect, useRef } from 'react'

/** Velocidade de reprodução do vídeo (1 = normal, 1.5 = 50% mais rápido). */
const PLAYBACK_RATE = 1.5

export function AboutVisual() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    v.playbackRate = PLAYBACK_RATE
    // reforça a velocidade (alguns navegadores resetam ao dar play)
    const applyRate = () => { v.playbackRate = PLAYBACK_RATE }
    v.addEventListener('loadedmetadata', applyRate)
    v.addEventListener('play', applyRate)

    // toca uma única vez, assim que o vídeo entra na viewport (chega na dobra)
    let played = false
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !played) {
            played = true
            v.play().catch(() => { /* autoplay bloqueado: ignora */ })
            io.disconnect()
          }
        }
      },
      { threshold: 0.5 },
    )
    io.observe(v)

    return () => {
      v.removeEventListener('loadedmetadata', applyRate)
      v.removeEventListener('play', applyRate)
      io.disconnect()
    }
  }, [])

  return (
    <div className="about-visual reveal">
      <div className="cartoon-frame">
        <video
          ref={videoRef}
          className="cartoon-video"
          src="/cartoon.mp4#t=0.001"
          muted
          playsInline
          preload="auto"
        />
      </div>

      <ThoughtBubble />
    </div>
  )
}

function ThoughtBubble() {
  return (
    <svg
      className="thought-bubble"
      viewBox="0 0 120 110"
      fill="none"
      aria-hidden="true"
    >
      {/* bolhas pequenas subindo até o balão */}
      <circle className="tb-dot tb-dot-1" cx="30" cy="92" r="5" />
      <circle className="tb-dot tb-dot-2" cx="44" cy="74" r="8" />

      {/* balão principal */}
      <ellipse className="tb-cloud" cx="78" cy="40" rx="40" ry="32" />

      {/* ponto de interrogação */}
      <text
        className="tb-mark"
        x="78"
        y="40"
        textAnchor="middle"
        dominantBaseline="central"
      >
        ?
      </text>
    </svg>
  )
}
