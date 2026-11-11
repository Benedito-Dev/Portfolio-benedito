import { useRef } from 'react'
import { useDeviceStage } from '../hooks/useDeviceStage'

/** Composição das telas Painel e NovaVenda; todos os valores são ilustrativos. */
export function PrumoVisual() {
  const stageRef = useRef<HTMLDivElement>(null)
  useDeviceStage(stageRef)

  return (
    <figure className="device-preview">
      <div ref={stageRef} className="device-stage" role="img" aria-label="Prumo no desktop e no celular: painel de faturamento, indicadores e produtos mais vendidos ao fundo; tela de nova venda no celular em primeiro plano. Dados fictícios.">
        <div className="device-frame device-monitor"><div className="device-tilt">
        <svg viewBox="0 0 900 700" aria-hidden="true" focusable="false">
        <g fontFamily="Inter, sans-serif">
          {/* Monitor: o painel mantém navegação lateral e a hierarquia do produto. */}
          <ellipse cx="418" cy="587" rx="350" ry="23" fill="#000" opacity="0.22" />
          <path d="M335 480h135l18 88H317z" fill="#262d34" />
          <rect x="276" y="563" width="253" height="12" rx="6" fill="#39424b" />
          <rect x="20" y="55" width="804" height="462" rx="15" fill="#272f37" stroke="#46515b" />
          <rect x="31" y="67" width="782" height="427" rx="5" fill="#dde1e4" />
          <path d="M36 67h127v427H36a5 5 0 0 1-5-5V72a5 5 0 0 1 5-5" fill="#16191d" />
          <path d="M48 83v21m-4-3 4 7 4-7" stroke="#fff" fill="#fff" strokeWidth="2" />
          <text x="62" y="102" fontFamily="'Archivo Black', Inter, sans-serif" fontSize="18" fill="#fff">PRUMO</text>
          <rect x="40" y="126" width="114" height="30" rx="4" fill="#2d3034" />
          <path d="M41 130v22" stroke="#0e7c86" strokeWidth="3" />
          {['Painel', 'Vendas', 'Fiados', 'Clientes', 'Produtos', 'Zé'].map((label, i) => (
            <text key={label} x="53" y={146 + i * 35} fontSize="12" fill={i === 0 ? '#fff' : '#a8b0b8'}>{label}</text>
          ))}
          <rect x="163" y="67" width="650" height="48" fill="#fff" />
          <text x="180" y="96" fontSize="16" fontWeight="700" fill="#16191d">Painel</text>
          <text x="241" y="96" fontSize="10" fill="#565d66">ESTE MÊS</text>
          <rect x="693" y="78" width="101" height="27" rx="4" fill="#0e7c86" />
          <text x="743" y="96" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">+ Nova venda</text>
          {[
            ['Faturamento', 'R$ 24.580'], ['Ticket médio', 'R$ 245,80'],
            ['Vendas realizadas', '100'], ['Clientes distintos', '42'],
          ].map(([label, value], i) => (
            <g key={label} transform={`translate(${178 + i * 156} 132)`}>
              <rect width="145" height="73" rx="5" fill={i === 0 ? '#16191d' : '#fff'} />
              <text x="12" y="22" fontSize="10" fill={i === 0 ? '#a8b0b8' : '#565d66'}>{label}</text>
              <text x="12" y="52" fontSize="20" fontWeight="700" fill={i === 0 ? '#fff' : '#16191d'}>{value}</text>
            </g>
          ))}
          <rect x="178" y="218" width="383" height="180" rx="5" fill="#fff" />
          <text x="192" y="243" fontSize="12" fontWeight="600" fill="#16191d">Faturamento por dia</text>
          <g stroke="#e6e9eb"><path d="M198 272h342M198 310h342M198 348h342" /></g>
          <path d="M198 347 231 330 264 340 299 293 333 309 367 279 400 291 436 268 470 284 505 254 540 265V367H198Z" fill="#0e7c86" opacity="0.12" />
          <path className="device-chart-line" pathLength="1" d="m198 347 33-17 33 10 35-47 34 16 34-30 33 12 36-23 34 16 35-30 35 11" fill="none" stroke="#0e7c86" strokeWidth="3" strokeLinejoin="round" />
          <g fontSize="9" fill="#565d66"><text x="198" y="384">01 set</text><text x="350" y="384">15 set</text><text x="508" y="384">30 set</text></g>
          <rect x="574" y="218" width="228" height="180" rx="5" fill="#fff" />
          <text x="588" y="243" fontSize="11" fontWeight="600" fill="#16191d">Recebimento por pagamento</text>
          {['Pix', 'Dinheiro', 'Cartão', 'Fiado'].map((label, i) => (
            <g key={label} transform={`translate(588 ${268 + i * 30})`}>
              <text fontSize="10" fill="#565d66">{label}</text>
              <rect y="7" width="193" height="4" rx="2" fill="#e6e9eb" />
              <rect y="7" width={145 - i * 30} height="4" rx="2" fill="#0e7c86" />
            </g>
          ))}
          <rect x="178" y="411" width="383" height="68" rx="5" fill="#fff" />
          <text x="192" y="434" fontSize="12" fontWeight="600" fill="#16191d">Produtos mais vendidos</text>
          <text x="192" y="460" fontSize="11" fill="#565d66">Cimento</text>
          <rect x="275" y="452" width="209" height="5" rx="2" fill="#e6e9eb" />
          <rect x="275" y="452" width="161" height="5" rx="2" fill="#0e7c86" />
          <text x="541" y="460" textAnchor="end" fontSize="11" fill="#16191d">120 un.</text>

        </g>
        </svg>
        </div></div>
        <div className="device-frame device-phone"><div className="device-tilt">
        <svg viewBox="0 0 900 700" aria-hidden="true" focusable="false">
        <g fontFamily="Inter, sans-serif">
          {/* Celular: formulário em coluna e ação fixa, como no layout mobile. */}
          <rect x="616" y="255" width="236" height="412" rx="32" fill="#000" opacity="0.28" />
          <rect x="603" y="240" width="238" height="414" rx="30" fill="#16191d" stroke="#53606b" strokeWidth="2" />
          <rect x="611" y="248" width="222" height="398" rx="24" fill="#dde1e4" />
          <path d="M635 248h174a24 24 0 0 1 24 24v52H611v-52a24 24 0 0 1 24-24" fill="#fff" />
          <rect x="688" y="256" width="68" height="13" rx="7" fill="#16191d" />
          <path d="M626 294h13m-13 5h13m-13 5h13" stroke="#565d66" strokeWidth="1.5" />
          <text x="650" y="304" fontSize="14" fontWeight="700" fill="#16191d">Nova venda</text>
          <rect x="621" y="335" width="202" height="59" rx="5" fill="#fff" />
          <text x="633" y="351" fontSize="8" fontWeight="700" fill="#565d66">CLIENTE</text>
          <text x="633" y="373" fontSize="12" fill="#16191d">Consumidor</text>
          <rect x="621" y="404" width="202" height="109" rx="5" fill="#fff" />
          <text x="633" y="422" fontSize="8" fontWeight="700" fill="#565d66">ITENS DA VENDA</text>
          <text x="633" y="446" fontSize="12" fontWeight="600" fill="#16191d">Cimento</text>
          <text x="811" y="446" textAnchor="end" fontSize="12" fontWeight="700" fill="#16191d">R$ 76,00</text>
          <text x="633" y="467" fontSize="10" fill="#565d66">2 sacos × R$ 38,00</text>
          <path d="M633 479h178" stroke="#e6e9eb" />
          <text x="633" y="499" fontSize="10" fill="#0e7c86">+ Buscar produto</text>
          <rect x="621" y="523" width="202" height="48" rx="5" fill="#fff" />
          <text x="633" y="542" fontSize="9" fill="#565d66">Forma de pagamento</text>
          <text x="633" y="559" fontSize="11" fontWeight="600" fill="#0e7c86">Pix</text>
          <path d="M611 580h222v42a24 24 0 0 1-24 24H635a24 24 0 0 1-24-24Z" fill="#fff" />
          <text x="626" y="596" fontSize="8" fill="#565d66">TOTAL</text>
          <text x="626" y="616" fontSize="17" fontWeight="700" fill="#1b7a46">R$ 76,00</text>
          <rect x="721" y="589" width="98" height="34" rx="5" fill="#0e7c86" />
          <text x="770" y="610" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">Salvar venda</text>
          <rect x="689" y="635" width="66" height="4" rx="2" fill="#16191d" />
        </g>
      </svg>
      </div></div>
      </div>
      <figcaption>Painel e venda no celular · telas simplificadas com dados de exemplo</figcaption>
    </figure>
  )
}

/* Paleta do Meu Bolso (tema escuro do app) */
const mb = {
  bg: '#0e0e11', side: '#141418', card: '#17171c', line: '#26262d',
  fg: '#ededf0', muted: '#9c9ca8', green: '#22c55e', greenSoft: '#12301f',
  hp: '#ff6b6f', hpSoft: '#361c1f', gold: '#f5a524', mana: '#6ea0ff',
}
/* Paleta do Claude (app no celular) */
const cl = { bg: '#262624', bubble: '#3a3936', panel: '#1f1e1d', fg: '#ece8e1', muted: '#b5afa6', accent: '#d97757' }

/**
 * Meu Bolso: painel do app no monitor e o Claude lançando um gasto pelo MCP
 * no celular. Valores fictícios — o app real guarda dados pessoais.
 */
export function MeuBolsoVisual() {
  const stageRef = useRef<HTMLDivElement>(null)
  useDeviceStage(stageRef)

  return (
    <figure className="device-preview">
      <div ref={stageRef} className="device-stage" role="img" aria-label="Meu Bolso no desktop e o Claude no celular: ao fundo, o painel com dívida restante, limite do dia e próximas contas; em primeiro plano, o Claude lançando um gasto pelo servidor MCP. Dados fictícios.">
        <div className="device-frame device-monitor"><div className="device-tilt">
        <svg viewBox="0 0 900 700" aria-hidden="true" focusable="false">
        <g fontFamily="Inter, sans-serif">
          {/* Monitor: painel do app, com a navegação lateral real. */}
          <ellipse cx="418" cy="587" rx="350" ry="23" fill="#000" opacity="0.22" />
          <path d="M335 480h135l18 88H317z" fill="#262d34" />
          <rect x="276" y="563" width="253" height="12" rx="6" fill="#39424b" />
          <rect x="20" y="55" width="804" height="462" rx="15" fill="#272f37" stroke="#46515b" />
          <rect x="31" y="67" width="782" height="427" rx="5" fill={mb.bg} />
          <path d="M36 67h127v427H36a5 5 0 0 1-5-5V72a5 5 0 0 1 5-5" fill={mb.side} />
          <path d="M163 67v427" stroke={mb.line} />
          <rect x="44" y="83" width="22" height="22" rx="6" fill={mb.green} />
          <text x="55" y="99" textAnchor="middle" fontSize="13" fontWeight="800" fill="#06130b">$</text>
          <text x="74" y="99" fontSize="13" fontWeight="700" fill={mb.fg}>Meu Bolso</text>
          <rect x="40" y="126" width="114" height="30" rx="4" fill="#1d1d23" />
          <path d="M41 130v22" stroke={mb.green} strokeWidth="3" />
          {['Visão geral', 'Gastos', 'Missões', 'Baú', 'Relatórios', 'Ajustes'].map((label, i) => (
            <text key={label} x="53" y={146 + i * 35} fontSize="12" fill={i === 0 ? mb.fg : mb.muted}>{label}</text>
          ))}

          <path d="M163 115h650" stroke={mb.line} />
          <text x="180" y="96" fontSize="16" fontWeight="700" fill={mb.fg}>Visão geral</text>
          <text x="279" y="96" fontSize="10" fill={mb.muted}>NOVEMBRO</text>
          <rect x="713" y="78" width="81" height="27" rx="4" fill={mb.green} />
          <text x="753" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="#06130b">+ Gasto</text>

          {/* Indicadores */}
          <g transform="translate(178 132)">
            <rect width="145" height="73" rx="5" fill={mb.card} stroke={mb.line} />
            <text x="12" y="20" fontSize="10" fill={mb.muted}>Dívida restante</text>
            <text x="12" y="45" fontSize="19" fontWeight="700" fill={mb.fg}>R$ 3.480</text>
            <rect x="12" y="55" width="121" height="6" rx="3" fill={mb.hpSoft} />
            <rect x="12" y="55" width="46" height="6" rx="3" fill={mb.hp} />
          </g>
          <g transform="translate(334 132)">
            <rect width="145" height="73" rx="5" fill={mb.greenSoft} stroke="#22c55e55" />
            <text x="12" y="20" fontSize="10" fill={mb.muted}>Pode gastar hoje</text>
            <text x="12" y="50" fontSize="20" fontWeight="700" fill={mb.green}>R$ 42,00</text>
          </g>
          <g transform="translate(490 132)">
            <rect width="145" height="73" rx="5" fill={mb.card} stroke={mb.line} />
            <text x="12" y="20" fontSize="10" fill={mb.muted}>Saldo do mês</text>
            <text x="12" y="50" fontSize="20" fontWeight="700" fill={mb.fg}>R$ 1.240</text>
          </g>
          <g transform="translate(646 132)">
            <rect width="145" height="73" rx="5" fill={mb.card} stroke={mb.line} />
            <text x="12" y="20" fontSize="10" fill={mb.muted}>Sequência</text>
            <text x="12" y="50" fontSize="20" fontWeight="700" fill={mb.gold}>12 dias</text>
          </g>

          {/* Gastos por dia x limite */}
          <rect x="178" y="218" width="383" height="180" rx="5" fill={mb.card} stroke={mb.line} />
          <text x="192" y="243" fontSize="12" fontWeight="600" fill={mb.fg}>Gastos por dia</text>
          <text x="547" y="243" textAnchor="end" fontSize="9" fill={mb.green}>— limite do dia</text>
          <g stroke={mb.line}><path d="M198 272h342M198 310h342M198 348h342" /></g>
          <path d="M198 300h342" stroke={mb.green} strokeDasharray="5 5" opacity="0.8" />
          <path d="M198 340 231 322 264 331 299 296 333 318 367 309 400 326 436 302 470 315 505 290 540 312V367H198Z" fill={mb.mana} opacity="0.12" />
          <path className="device-chart-line" pathLength="1" d="m198 340 33-18 33 9 35-35 34 22 34-9 33 17 36-24 34 13 35-25 35 22" fill="none" stroke={mb.mana} strokeWidth="3" strokeLinejoin="round" />
          <g fontSize="9" fill={mb.muted}><text x="198" y="384">01 nov</text><text x="350" y="384">15 nov</text><text x="508" y="384">30 nov</text></g>

          {/* Próximas contas */}
          <rect x="574" y="218" width="228" height="180" rx="5" fill={mb.card} stroke={mb.line} />
          <text x="588" y="243" fontSize="12" fontWeight="600" fill={mb.fg}>Próximas contas</text>
          {[
            ['Internet', 'amanhã', 'R$ 99,90', true],
            ['Luz', 'em 5 dias', 'R$ 140,00', false],
            ['Cartão', 'em 12 dias', 'R$ 380,00', false],
            ['Academia', 'dia 28', 'R$ 89,90', false],
          ].map(([name, when, value, soon], i) => (
            <g key={String(name)} transform={`translate(588 ${266 + i * 33})`}>
              <text y="4" fontSize="11" fill={mb.fg}>{name}</text>
              <text y="17" fontSize="9" fill={soon ? mb.gold : mb.muted}>{when}</text>
              <text x="200" y="9" textAnchor="end" fontSize="11" fontWeight="600" fill={mb.fg}>{value}</text>
              {i < 3 && <path d="M0 25h200" stroke={mb.line} />}
            </g>
          ))}

          {/* Missões */}
          <rect x="178" y="411" width="383" height="68" rx="5" fill={mb.card} stroke={mb.line} />
          <text x="192" y="434" fontSize="12" fontWeight="600" fill={mb.fg}>Missões</text>
          <rect x="192" y="448" width="12" height="12" rx="3" fill={mb.gold} />
          <path d="m195 454 2 2 4-5" stroke="#1a1206" strokeWidth="1.6" fill="none" />
          <text x="211" y="458" fontSize="11" fill={mb.muted} textDecoration="line-through">Pagar fatura</text>
          <rect x="330" y="448" width="12" height="12" rx="3" fill="none" stroke={mb.gold} strokeWidth="1.5" />
          <text x="349" y="458" fontSize="11" fill={mb.fg}>Guardar R$ 50 no cofre</text>

          {/* Baú */}
          <rect x="574" y="411" width="228" height="68" rx="5" fill={mb.card} stroke={mb.line} />
          <text x="588" y="434" fontSize="12" fontWeight="600" fill={mb.fg}>Baú de tesouros</text>
          <text x="588" y="460" fontSize="11" fill={mb.gold}>3 recompensas liberadas</text>
        </g>
        </svg>
        </div></div>

        <div className="device-frame device-phone"><div className="device-tilt">
        <svg viewBox="0 0 900 700" aria-hidden="true" focusable="false">
        <g fontFamily="Inter, sans-serif">
          {/* Celular: o Claude lançando o gasto pelo MCP do Meu Bolso. */}
          <rect x="616" y="255" width="236" height="412" rx="32" fill="#000" opacity="0.28" />
          <rect x="603" y="240" width="238" height="414" rx="30" fill="#16191d" stroke="#53606b" strokeWidth="2" />
          <rect x="611" y="248" width="222" height="398" rx="24" fill={cl.bg} />
          <rect x="688" y="256" width="68" height="13" rx="7" fill="#000" />
          <path d="M711 296l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill={cl.accent} />
          <text x="728" y="311" fontSize="13" fontWeight="700" fill={cl.fg}>Claude</text>
          <path d="M611 325h222" stroke="#34332f" />

          <rect x="693" y="337" width="128" height="28" rx="12" fill={cl.bubble} />
          <text x="757" y="355" textAnchor="middle" fontSize="11" fill={cl.fg}>Gastei 18 no almoço</text>

          <rect x="621" y="376" width="200" height="40" rx="8" fill={cl.panel} stroke="#3d3a36" />
          <text x="633" y="392" fontSize="9" fontWeight="700" fill={cl.accent}>⚙ meubolso · lancar_gasto</text>
          <text x="633" y="407" fontSize="9" fill={cl.muted}>Alimentação · R$ 18,00</text>

          <g fontSize="11" fill={cl.fg}>
            <text x="623" y="440">Lançado em Alimentação.</text>
            <text x="623" y="456">Hoje ainda dá <tspan fill={mb.green} fontWeight="700">R$ 24</tspan>, você</text>
            <text x="623" y="472">segue dentro do limite.</text>
          </g>

          <rect x="667" y="490" width="154" height="28" rx="12" fill={cl.bubble} />
          <text x="744" y="508" textAnchor="middle" fontSize="11" fill={cl.fg}>Quanto falta da dívida?</text>

          <g fontSize="11" fill={cl.fg}>
            <text x="623" y="541"><tspan fontWeight="700">R$ 3.480.</tspan> No ritmo atual,</text>
            <text x="623" y="557">quita em 7 meses.</text>
          </g>

          <rect x="621" y="588" width="202" height="34" rx="17" fill={cl.panel} stroke="#3d3a36" />
          <text x="637" y="609" fontSize="10" fill={cl.muted}>Responder ao Claude…</text>
          <circle cx="806" cy="605" r="11" fill={cl.accent} />
          <path d="M806 610v-10m-4 4 4-4 4 4" stroke="#fff" strokeWidth="1.6" fill="none" />
          <rect x="689" y="635" width="66" height="4" rx="2" fill="#5a5853" />
        </g>
        </svg>
        </div></div>
      </div>
      <figcaption>Painel do app e o Claude lançando um gasto pelo MCP · dados de exemplo</figcaption>
    </figure>
  )
}
