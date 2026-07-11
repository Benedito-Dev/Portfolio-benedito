/**
 * Palco da dobra Stack: área abaixo da grade onde um objeto pseudo-3D
 * representa a categoria em hover.
 *
 * Transição (Etapa 2, Nível 1): ao mudar de categoria, o objeto atual
 * COLAPSA num ponto central (metáfora de buraco negro) e o próximo
 * RENASCE desse ponto. Feito com fases de estado + CSS transform.
 *
 * Cada categoria tem seu objeto (ver renderObject). Onde ainda não há
 * objeto próprio, cai no notebook como placeholder. Feito: Frontend
 * (notebook) e Mobile (celular).
 */
import { useEffect, useRef, useState } from 'react'

const COLLAPSE_MS = 340 // duração do colapso (implosão)
const BIRTH_MS = 460 // duração do renascimento

type StageProps = { activeIndex: number }

export function StackStage({ activeIndex }: StageProps) {
  // índice realmente exibido (troca no meio da transição)
  const [shownIndex, setShownIndex] = useState(activeIndex)
  // fase visual: 'idle' | 'collapsing' | 'birthing'
  const [phase, setPhase] = useState<'idle' | 'collapsing' | 'birthing'>('idle')
  const timers = useRef<number[]>([])

  useEffect(() => {
    if (activeIndex === shownIndex && phase === 'idle') return

    // limpa timers pendentes (se o usuário troca rápido)
    timers.current.forEach(clearTimeout)
    timers.current = []

    // 1. colapsa o objeto atual
    setPhase('collapsing')

    // 2. no fim do colapso, troca o objeto e inicia o renascimento
    timers.current.push(
      window.setTimeout(() => {
        setShownIndex(activeIndex)
        setPhase('birthing')
      }, COLLAPSE_MS),
    )

    // 3. fim do renascimento → repouso
    timers.current.push(
      window.setTimeout(() => {
        setPhase('idle')
      }, COLLAPSE_MS + BIRTH_MS),
    )

    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

  return (
    <div className="stack-stage">
      <div className={`stage-glow phase-${phase}`} aria-hidden="true" />
      <div className={`stage-object-wrap phase-${phase}`}>
        {renderObject(shownIndex)}
      </div>
    </div>
  )
}

/**
 * Escolhe o objeto pseudo-3D de cada categoria pelo índice.
 * Índices (ver Stack.tsx): 0 Linguagens · 1 Frontend · 2 Mobile ·
 * 3 Backend · 4 Banco de Dados · 5 Ferramentas.
 * Categorias ainda sem objeto próprio caem no notebook (placeholder).
 */
function renderObject(index: number) {
  switch (index) {
    case 2:
      return <PhoneObject />
    default:
      return <NotebookObject />
  }
}

/**
 * Notebook pseudo-3D em perspectiva 3/4, com volume real: tampa e base
 * em planos separados, teclado com teclas, dobradiça e luz direcional
 * (vindo de cima-esquerda). Paleta da marca.
 */
function NotebookObject() {
  return (
    <svg
      className="stage-object"
      viewBox="0 0 300 230"
      fill="none"
      role="img"
      aria-label="Notebook representando Frontend"
    >
      <defs>
        <linearGradient id="nb-screen" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#294a70" />
          <stop offset="55%" stopColor="#182838" />
          <stop offset="100%" stopColor="#0f1824" />
        </linearGradient>
        <linearGradient id="nb-lid" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#59657a" />
          <stop offset="100%" stopColor="#333c4a" />
        </linearGradient>
        <linearGradient id="nb-deck" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#4a5364" />
          <stop offset="100%" stopColor="#2c333f" />
        </linearGradient>
        <linearGradient id="nb-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a414f" />
          <stop offset="100%" stopColor="#1e232c" />
        </linearGradient>
      </defs>

      {/* sombra de contato no chão */}
      <ellipse cx="150" cy="204" rx="118" ry="18" fill="#000" opacity="0.34" />

      {/* ===== TAMPA (tela) ===== */}
      <path d="M78 26 L214 34 L206 150 L70 140 Z" fill="url(#nb-lid)" />
      <path d="M78 26 L214 34 L213 40 L78 32 Z" fill="#7b8ba6" opacity="0.55" />
      <path d="M86 36 L206 43 L199 143 L79 134 Z" fill="#11171f" />
      <path d="M91 41 L201 47.5 L195 138 L84 129.5 Z" fill="url(#nb-screen)" />
      <g stroke="#4d9fff" strokeWidth="3.4" strokeLinecap="round">
        <line x1="100" y1="58" x2="132" y2="59.5" opacity="0.95" />
        <line x1="138" y1="60" x2="160" y2="61" opacity="0.5" />
        <line x1="108" y1="72" x2="150" y2="74" opacity="0.75" />
        <line x1="108" y1="86" x2="138" y2="87.5" opacity="0.55" />
        <line x1="100" y1="100" x2="170" y2="102.5" opacity="0.65" />
        <line x1="108" y1="114" x2="146" y2="116" opacity="0.45" />
      </g>
      <path d="M91 41 L201 47.5 L120 132 Z" fill="#ffffff" opacity="0.05" />

      {/* dobradiça */}
      <path d="M70 140 L206 150 L206 154 L70 144 Z" fill="#20262f" />

      {/* ===== BASE (teclado) ===== */}
      <path d="M70 144 L206 154 L246 176 L44 176 Z" fill="url(#nb-deck)" />
      <path d="M44 176 L246 176 L240 188 L50 188 Z" fill="url(#nb-front)" />
      <g fill="#20262f" opacity="0.85">
        <rect x="86" y="150" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="102" y="151" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="118" y="152" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="134" y="153" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="150" y="154" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="166" y="155" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="84" y="159" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="100" y="160" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="116" y="161" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="132" y="162" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="148" y="163" width="10" height="5" rx="1.2" transform="skewX(-8)" />
        <rect x="164" y="164" width="10" height="5" rx="1.2" transform="skewX(-8)" />
      </g>
      <path d="M150 168 L182 168 L188 174 L152 174 Z" fill="#252c36" />
    </svg>
  )
}

/**
 * Celular pseudo-3D em perspectiva 3/4 (leve rotação p/ direita), com
 * volume real: corpo em plano frontal + borda lateral escura pro efeito
 * de espessura, tela com notch, câmera, e "cards" de UI na cor da marca
 * (equivalente às linhas de código do notebook). Luz de cima-esquerda.
 */
function PhoneObject() {
  return (
    <svg
      className="stage-object"
      viewBox="0 0 300 230"
      fill="none"
      role="img"
      aria-label="Celular representando Mobile"
    >
      <defs>
        <linearGradient id="ph-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#59657a" />
          <stop offset="100%" stopColor="#333c4a" />
        </linearGradient>
        <linearGradient id="ph-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a313c" />
          <stop offset="100%" stopColor="#171c23" />
        </linearGradient>
        <linearGradient id="ph-screen" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#294a70" />
          <stop offset="55%" stopColor="#182838" />
          <stop offset="100%" stopColor="#0f1824" />
        </linearGradient>
      </defs>

      {/* sombra de contato no chão */}
      <ellipse cx="150" cy="204" rx="72" ry="15" fill="#000" opacity="0.34" />

      {/* espessura lateral (borda direita, dá o volume 3/4) */}
      <path
        d="M186 40 L196 48 L188 190 L178 184 Z"
        fill="url(#ph-edge)"
      />

      {/* corpo do aparelho (plano frontal, levemente inclinado) */}
      <path
        d="M118 34 L186 40 L178 184 L110 178 Z"
        fill="url(#ph-body)"
      />
      {/* brilho superior da borda */}
      <path d="M118 34 L186 40 L185 45 L118 39 Z" fill="#7b8ba6" opacity="0.55" />

      {/* moldura preta da tela */}
      <path d="M124 42 L180 47 L172 176 L116 171 Z" fill="#11171f" />
      {/* tela */}
      <path d="M128 47 L176 51.5 L169 171 L120 166.5 Z" fill="url(#ph-screen)" />

      {/* notch / ilha de câmera no topo */}
      <rect x="140" y="50" width="20" height="6" rx="3" fill="#0b1017" transform="skewX(-4)" />
      <circle cx="163" cy="53" r="2" fill="#2a3648" />

      {/* "cards" e linhas de UI na cor da marca */}
      <g fill="#4d9fff">
        <rect x="132" y="66" width="40" height="12" rx="3" opacity="0.85" transform="skewX(-4)" />
        <rect x="132" y="86" width="18" height="18" rx="3" opacity="0.55" transform="skewX(-4)" />
        <rect x="154" y="87" width="18" height="18" rx="3" opacity="0.4" transform="skewX(-4)" />
      </g>
      <g stroke="#4d9fff" strokeWidth="3.2" strokeLinecap="round">
        <line x1="130" y1="118" x2="166" y2="121" opacity="0.7" />
        <line x1="130" y1="130" x2="156" y2="132.5" opacity="0.5" />
        <line x1="130" y1="142" x2="162" y2="145" opacity="0.6" />
        <line x1="130" y1="154" x2="150" y2="156" opacity="0.4" />
      </g>

      {/* reflexo diagonal suave */}
      <path d="M128 47 L176 51.5 L138 168 Z" fill="#ffffff" opacity="0.05" />

      {/* botão home / barra inferior */}
      <rect x="138" y="160" width="26" height="3" rx="1.5" fill="#4d9fff" opacity="0.5" transform="skewX(-4)" />
    </svg>
  )
}
