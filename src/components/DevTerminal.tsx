import { useEffect, useRef, useState } from 'react'

/**
 * Easter egg: terminal falso escondido no site.
 * Abre com Cmd+K / Ctrl+K, fecha com Escape ou clique fora.
 */

type Line = { type: 'input' | 'output'; text: string }

const WELCOME: Line[] = [
  { type: 'output', text: 'Terminal escondido. Digite "help" para ver os comandos.' },
]

const COMMANDS: Record<string, string[]> = {
  whoami: [
    'Benedito Bittencourt — Desenvolvedor Full Stack',
    'Técnico em ADS (SENAC), graduando em Engenharia de Software.',
    'Curioso o suficiente pra abrir um terminal escondido num portfólio.',
  ],
  stack: [
    'TypeScript · JavaScript · React · Node.js · React Native',
    'PostgreSQL · MongoDB · Firebase · Docker · Git',
  ],
  projetos: [
    'TecSIM — assistente de enfermagem mobile (React Native + Node.js + Firestore)',
    'demo: https://tec-sim-web.vercel.app/',
    'github: https://github.com/Benedito-Dev/TecSIM',
  ],
  contato: [
    'email: beneditobittencourtt@gmail.com',
    'github: https://github.com/Benedito-Dev',
    'linkedin: https://www.linkedin.com/in/benedito-bittencourt-13ab1b233/',
  ],
}

const HELP_LINES = [
  'Comandos disponíveis:',
  '  help       — mostra esta lista',
  '  whoami     — quem sou eu',
  '  stack      — tecnologias que uso',
  '  projetos   — projetos em destaque',
  '  contato    — como falar comigo',
  '  clear      — limpa o terminal',
]

export function DevTerminal() {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState<Line[]>(WELCOME)
  const [input, setInput] = useState('')
  const [historyIdx, setHistoryIdx] = useState<number | null>(null)
  const cmdHistory = useRef<string[]>([])
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  /* pista pra quem abre o console: sem ela, ninguém acha o terminal escondido */
  const loggedHint = useRef(false)
  useEffect(() => {
    if (loggedHint.current) return
    loggedHint.current = true

    console.log(
      '%cProcurando algo? 👀',
      'font-size:16px; font-weight:700; color:#4d9fff;',
    )
    console.log(
      '%cAperte Cmd+K (ou Ctrl+K) em qualquer lugar da página.',
      'font-size:13px; color:#8b909a;',
    )
  }, [])

  /* abre com Cmd+K (Mac) / Ctrl+K (Windows/Linux) */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const typing = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA'
      const isShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'

      if (isShortcut && !open && !typing) {
        e.preventDefault()
        setOpen(true)
      } else if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  /* clique fora fecha */
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'end' })
  }, [lines])

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    cmdHistory.current.push(raw)
    setHistoryIdx(null)

    setLines((prev) => {
      const withInput: Line[] = [...prev, { type: 'input', text: raw }]

      if (cmd === 'clear') return WELCOME
      if (cmd === 'help') {
        return [...withInput, ...HELP_LINES.map((text) => ({ type: 'output' as const, text }))]
      }
      if (COMMANDS[cmd]) {
        return [...withInput, ...COMMANDS[cmd].map((text) => ({ type: 'output' as const, text }))]
      }
      return [...withInput, { type: 'output', text: `command not found: ${cmd} (digite "help")` }]
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    run(input)
    setInput('')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const hist = cmdHistory.current
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!hist.length) return
      const idx = historyIdx === null ? hist.length - 1 : Math.max(0, historyIdx - 1)
      setHistoryIdx(idx)
      setInput(hist[idx])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx === null) return
      const idx = historyIdx + 1
      if (idx >= hist.length) {
        setHistoryIdx(null)
        setInput('')
      } else {
        setHistoryIdx(idx)
        setInput(hist[idx])
      }
    }
  }

  if (!open) return null

  return (
    <div className="dev-terminal" ref={panelRef} role="dialog" aria-label="Terminal escondido">
      <div className="dev-terminal-head">
        <span className="dev-terminal-dot" aria-hidden="true"></span>
        <span className="dev-terminal-dot" aria-hidden="true"></span>
        <span className="dev-terminal-dot" aria-hidden="true"></span>
        <span className="dev-terminal-title">benedito@portfolio</span>
      </div>

      <div className="dev-terminal-body">
        {lines.map((l, i) => (
          <div className={`dev-terminal-line ${l.type}`} key={i}>
            {l.type === 'input' && <span className="prompt">visitante@site:~$</span>}
            <span>{l.text}</span>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <form className="dev-terminal-input-row" onSubmit={onSubmit}>
        <span className="prompt">visitante@site:~$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          spellCheck={false}
          aria-label="Comando do terminal"
        />
      </form>
    </div>
  )
}
