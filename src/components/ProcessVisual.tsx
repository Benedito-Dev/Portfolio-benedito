/**
 * Pipeline de agentes: os 4 papéis em linha e, embaixo, o artefato que cada
 * etapa produz. Conteúdo ilustrativo — não reproduz código nem dados reais.
 */
const agents = ['Estrategista', 'Implementador', 'Revisor', 'Documentador']

function Check() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 5 5 9-10" />
    </svg>
  )
}

function Plan() {
  return (
    <div className="ai-artifact">
      <div className="ai-file">plans/plan-automacao-palavra-chave.md</div>
      <div className="ai-doc">
        <p className="ai-h">## Alternativas</p>
        <p><span className="ai-tag">A</span> webhook síncrono · simples, mas trava em pico</p>
        <p><span className="ai-tag is-on">B</span> fila assíncrona · reprocessa se falhar</p>
        <p className="ai-h">## Decisão</p>
        <p>B, registrada em <span className="ai-accent">ADR-031</span></p>
      </div>
      <div className="ai-gate is-ok">
        <Check /> Plano aprovado por mim
      </div>
    </div>
  )
}

function Implement() {
  return (
    <div className="ai-artifact ai-terminal">
      <p className="ai-dim">$ implementer-backend</p>
      <p>✎ social/flows/engine.py</p>
      <p>✎ social/tests/test_engine.py</p>
      <p className="ai-ok">✓ hook · lint</p>
      <p className="ai-ok">✓ hook · system check</p>
      <p className="ai-ok">✓ hook · testes (24 passaram)</p>
      <p className="ai-bad">✗ hook · comando perigoso bloqueado</p>
    </div>
  )
}

function Review() {
  return (
    <div className="ai-artifact">
      <div className="ai-file">reviews/review-automacao.md</div>
      <div className="ai-score">
        <span className="ai-score-num">9<small>/10</small></span>
        <span className="ai-decision">APPROVED</span>
      </div>
      <div className="ai-doc">
        <p><span className="ai-ok">✓</span> sem N+1 nas consultas</p>
        <p><span className="ai-ok">✓</span> testes cobrem palavra-chave vazia</p>
        <p><span className="ai-warn">△</span> sugestão: extrair constante de limite</p>
      </div>
    </div>
  )
}

function Ship() {
  return (
    <div className="ai-artifact">
      <div className="ai-commit">
        <p><span className="ai-dim">commit</span> a41f9c2</p>
        <p>feat(social): dispara automação por palavra-chave</p>
        <p className="ai-dim">Refs: DEV-742</p>
      </div>
      <div className="ai-board">
        <span className="ai-dim">board</span>
        <span className="ai-col">EXECUTING</span>
        <span className="ai-arrow">→</span>
        <span className="ai-col is-done">DONE</span>
      </div>
      <div className="ai-gate">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
        Deploy aguardando meu “pode subir”
      </div>
    </div>
  )
}

const scenes = [Plan, Implement, Review, Ship]

export function ProcessVisual({ active }: { active: number }) {
  return (
    <figure className="process-visual ai-visual">
      <div className="process-visual-heading">
        <span>PIPELINE DE AGENTES</span>
        <span>{String(active + 1).padStart(2, '0')} / 04</span>
      </div>

      <ol className="ai-pipeline" aria-hidden="true">
        {agents.map((name, i) => (
          <li
            key={name}
            className={`ai-node${i === active ? ' is-active' : ''}${i < active ? ' is-done' : ''}`}
          >
            <span className="ai-node-dot">{i < active ? <Check /> : i + 1}</span>
            <span className="ai-node-name">{name}</span>
          </li>
        ))}
      </ol>

      <div className="process-scenes">
        {scenes.map((Scene, i) => (
          <div
            className={`process-scene${active === i ? ' is-active' : ''}`}
            aria-hidden={active !== i}
            key={agents[i]}
          >
            <Scene />
          </div>
        ))}
      </div>

      <figcaption>Exemplo ilustrativo do fluxo, sem código ou dados reais.</figcaption>
    </figure>
  )
}
