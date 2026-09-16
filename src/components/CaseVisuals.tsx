/** Ilustração do produto baseada na identidade e nos recursos do Prumo. */
export function PrumoVisual() {
  return (
    <figure className="prumo-preview">
      <svg viewBox="0 0 560 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração do Prumo: vendas, fiado e indicadores, com o assistente Zé. Valores fictícios de uma venda de materiais de construção.">
        <rect width="560" height="440" rx="12" fill="#16191D" />
        <path d="M36 28v36" stroke="#FFC400" strokeWidth="3" />
        <path d="m30 60 6 10 6-10" fill="#FFC400" />
        <g fill="#E6E9EB" fontFamily="Arial, sans-serif">
          <text x="55" y="57" fontSize="27" fontWeight="900" letterSpacing="-1">PRUMO</text>
          <text x="524" y="53" textAnchor="end" fontSize="12" fill="#A8B0B8">Seu depósito no prumo.</text>
          <path d="M24 85h512" stroke="#343A40" />
          <text x="30" y="115" fontSize="13" fill="#FFC400">Vendas</text>
          <text x="110" y="115" fontSize="13" fill="#A8B0B8">Fiados</text>
          <text x="187" y="115" fontSize="13" fill="#A8B0B8">Indicadores</text>
          <rect x="26" y="132" width="508" height="214" rx="6" fill="#F4F5F6" />
          <g fill="#16191D">
            <text x="46" y="164" fontSize="17" fontWeight="700">Nova venda</text>
            <text x="46" y="188" fontSize="12" fill="#59636D">Consumidor · Venda avulsa</text>
            <path d="M46 204h468" stroke="#D4D9DE" />
            <text x="46" y="231" fontSize="14">Cimento · 2 sacos</text>
            <text x="514" y="231" textAnchor="end" fontSize="14" fontWeight="700">R$ 76,00</text>
            <text x="46" y="261" fontSize="14">Areia · 1 m³</text>
            <text x="514" y="261" textAnchor="end" fontSize="14" fontWeight="700">R$ 140,00</text>
            <path d="M46 278h468" stroke="#D4D9DE" />
            <text x="46" y="314" fontSize="12" fill="#59636D">TOTAL</text>
            <text x="107" y="315" fontSize="22" fontWeight="700">R$ 216,00</text>
            <rect x="409" y="293" width="105" height="33" rx="4" fill="#FFC400" />
            <text x="461" y="314" textAnchor="middle" fontSize="13" fontWeight="700">Pix</text>
          </g>
          <rect x="26" y="363" width="508" height="53" rx="6" fill="#23292F" />
          <circle cx="53" cy="389" r="14" fill="#FFC400" />
          <text x="53" y="394" textAnchor="middle" fontSize="13" fontWeight="700" fill="#16191D">Zé</text>
          <text x="78" y="385" fontSize="12" fontWeight="700">Assistente de IA</text>
          <text x="78" y="403" fontSize="12" fill="#A8B0B8">“Quais produtos mais saíram?”</text>
        </g>
      </svg>
      <figcaption>Prévia ilustrativa · dados de exemplo</figcaption>
    </figure>
  )
}
