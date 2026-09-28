const scenes = [
  { title: 'Uma necessidade vira direção.', caption: 'Primeiro, entender quem está do outro lado.' },
  { title: 'A direção ganha forma.', caption: 'Organizar o fluxo antes de construir a interface.' },
  { title: 'O desenho começa a funcionar.', caption: 'Partes pequenas, responsabilidades claras.' },
  { title: 'Os detalhes completam a experiência.', caption: 'Orientar também quando algo foge do esperado.' },
]

/**
 * Exemplo conceitual de uma lista de tarefas evoluindo ao longo do processo.
 * No celular cada passo mostra só a sua cena, com o texto do desenho maior
 * para continuar legível na largura da tela.
 */
export function ProcessVisual({ active, variant = 'desktop' }: { active: number; variant?: 'desktop' | 'mobile' }) {
  const mobile = variant === 'mobile'
  const fs = (size: number) => (mobile ? size * 1.35 : size)
  return (
    <figure className="process-visual">
      <div className="process-visual-heading">
        <span>DA IDEIA AO PRODUTO</span><span>{String(active + 1).padStart(2, '0')} / 04</span>
      </div>
      <div className="process-scenes">
        {scenes.map((scene, i) => mobile && i !== active ? null : (
          <div className={`process-scene${active === i ? ' is-active' : ''}`} aria-hidden={active !== i} key={scene.title}>
            <svg viewBox="26 16 468 342" role="img" aria-label={scene.title}>
              <g fontFamily="Inter, sans-serif" fill="#dfe8f5">
                {i === 0 && <>
                  <path d="M260 115v38m0 76v32" stroke="#4d9fff" strokeWidth="2" strokeDasharray="4 6" />
                  <circle cx="260" cy="40" r="18" fill="#243b56" stroke="#4d9fff" />
                  <circle cx="260" cy="36" r="5" fill="none" stroke="#b7d6ff" />
                  <path d="M251 49q9-13 18 0" fill="none" stroke="#b7d6ff" />
                  {[
                    ['PESSOA', 'Quem precisa organizar o dia?'],
                    ['PROBLEMA', 'Tarefas espalhadas, prazos esquecidos.'],
                    ['OBJETIVO', 'Saber o que fazer agora.'],
                  ].map(([label, text], n) => <g key={label} transform={`translate(45 ${66 + n * 101})`}>
                    <rect width="430" height="76" rx="10" fill={n === 2 ? '#20364d' : '#202731'} stroke={n === 2 ? '#4d9fff' : '#354253'} />
                    <text x="20" y="26" fontSize={fs(10)} letterSpacing="2" fill="#82baff">{label}</text>
                    <text x="20" y="53" fontSize={fs(15)}>{text}</text>
                  </g>)}
                </>}
                {i === 1 && <>
                  <rect x="36" y="34" width="448" height="306" rx="10" fill="#1b222c" stroke="#64768c" strokeDasharray="5 5" />
                  <path d="M36 78h448M137 78v262" stroke="#45556a" />
                  <text x="54" y="62" fontSize={fs(13)} fill="#9eacc0">Esboço / Minhas tarefas</text>
                  <rect x="54" y="104" width="64" height="9" rx="4" fill="#45556a" />
                  <rect x="54" y="132" width="47" height="7" rx="3" fill="#334154" />
                  <rect x="54" y="155" width="54" height="7" rx="3" fill="#334154" />
                  {[0, 1, 2].map(n => <g key={n} transform={`translate(159 ${110 + n * 62})`}>
                    <rect width="301" height="45" rx="5" fill="none" stroke="#64768c" />
                    <rect x="13" y="14" width="16" height="16" rx="3" fill="none" stroke="#64768c" />
                    <path d="M43 22h170" stroke="#45556a" strokeWidth="7" strokeLinecap="round" />
                  </g>)}
                  {/* Cada palavra do fluxo tem posição fixa, com a seta no vão entre elas. */}
                  <g fontSize={fs(11)} fill="#82baff" textAnchor="middle">
                    <text x="190" y="314">Listar</text>
                    <text x="310" y="314">escolher</text>
                    <text x="430" y="314">concluir</text>
                  </g>
                  <path d="M220 310h50m-5-4 5 4-5 4M350 310h42m-5-4 5 4-5 4" fill="none" stroke="#4d9fff" strokeLinecap="round" strokeLinejoin="round" />
                </>}
                {i === 2 && <>
                  <rect x="36" y="34" width="448" height="211" rx="10" fill="#202731" stroke="#3c526c" />
                  <path d="M36 78h448" stroke="#354253" />
                  <text x="54" y="62" fontSize={fs(16)} fontWeight="600">Minhas tarefas</text>
                  <rect x="358" y="45" width="108" height="26" rx="5" fill="#315c8b" />
                  <text x="412" y="62" textAnchor="middle" fontSize={fs(10)}>+ Nova tarefa</text>
                  {['Definir prioridades', 'Desenhar o fluxo', 'Construir a primeira versão'].map((text, n) => <g key={text} transform={`translate(55 ${103 + n * 45})`}>
                    <rect width="18" height="18" rx="4" fill={n === 0 ? '#4d9fff' : 'none'} stroke="#4d9fff" />
                    {n === 0 && <path d="m4 9 4 4 6-8" stroke="#132336" fill="none" strokeWidth="2" />}
                    <text x="31" y="14" fontSize={fs(13)} fill={n === 0 ? '#8b9bb0' : '#dfe8f5'}>{text}</text>
                  </g>)}
                  <rect x="36" y="260" width="448" height="88" rx="9" fill="#101820" stroke="#34485f" />
                  <g fontFamily="monospace" fontSize={fs(13)}>
                    <text x="56" y="285" fill="#82baff">function concluir(tarefa: Tarefa) {'{'}</text>
                    <text x="71" y="307">return {'{'} ...tarefa, concluida: true {'}'}</text>
                    <text x="56" y="330" fill="#82baff">{'}'}</text>
                  </g>
                </>}
                {i === 3 && <>
                  <rect x="36" y="34" width="448" height="306" rx="10" fill="#202731" stroke="#3c526c" />
                  <text x="56" y="66" fontSize={fs(16)} fontWeight="600">Minhas tarefas</text>
                  <rect x="55" y="88" width="410" height="44" rx="7" fill="#203c37" stroke="#467d6b" />
                  <text x="73" y="115" fontSize={fs(13)} fill="#a1ddc4">✓ Tarefa concluída. Uma coisa a menos!</text>
                  <text x="56" y="161" fontSize={fs(11)} fill="#a6b4c6">NOVA TAREFA</text>
                  <rect x="55" y="172" width="410" height="37" rx="6" fill="#1a2029" stroke="#ca9292" />
                  <text x="70" y="196" fontSize={fs(12)} fill="#a6b4c6">O que você precisa fazer?</text>
                  <text x="56" y="229" fontSize={fs(11)} fill="#e1a6a6">Dê um nome à tarefa para continuar.</text>
                  <path d="M55 247h410" stroke="#354253" />
                  <text x="260" y="281" textAnchor="middle" fontSize={fs(14)}>Tudo em dia por aqui.</text>
                  <text x="260" y="305" textAnchor="middle" fontSize={fs(11)} fill="#a6b4c6">Quando surgir algo novo, adicione uma tarefa.</text>
                </>}
              </g>
            </svg>
            <p className="process-scene-title">{scene.title}</p>
            <p className="process-scene-caption">{scene.caption}</p>
          </div>
        ))}
      </div>
      {!mobile && <figcaption>Uma mesma ideia, em quatro momentos.</figcaption>}
    </figure>
  )
}
