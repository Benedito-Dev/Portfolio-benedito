/** Composição das telas Painel e NovaVenda; todos os valores são ilustrativos. */
export function PrumoVisual() {
  return (
    <figure className="prumo-preview">
      <svg viewBox="0 0 900 700" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prumo no desktop e no celular: painel de faturamento, indicadores e produtos mais vendidos ao fundo; tela de nova venda no celular em primeiro plano. Dados fictícios.">
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
          <path d="m198 347 33-17 33 10 35-47 34 16 34-30 33 12 36-23 34 16 35-30 35 11" fill="none" stroke="#0e7c86" strokeWidth="3" strokeLinejoin="round" />
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
      <figcaption>Painel e venda no celular · telas simplificadas com dados de exemplo</figcaption>
    </figure>
  )
}
