/** Reprodução simplificada de NovaVenda + LayoutApp, com dados fictícios. */
export function PrumoVisual() {
  return (
    <figure className="prumo-preview">
      <svg viewBox="0 0 900 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tela Nova venda do Prumo: menu lateral, cliente e itens à esquerda, resumo e pagamento à direita. Reprodução simplificada com dados de exemplo.">
        <rect width="900" height="620" fill="#dde1e4" />
        <rect width="176" height="620" fill="#16191d" />
        <g fontFamily="Inter, sans-serif" fontSize="14" fill="#16191d">
          <path d="M23 17v25" stroke="#fff" strokeWidth="3" />
          <path d="m18 39 5 8 5-8" fill="#fff" />
          <text x="40" y="38" fill="#fff" fontFamily="'Archivo Black', Inter, sans-serif" fontSize="23">PRUMO</text>
          <path d="M0 58h176" stroke="#343a40" />
          <rect x="10" y="110" width="156" height="38" rx="5" fill="#2d3034" />
          <path d="M11 114v30" stroke="#0e7c86" strokeWidth="3" />
          {['Painel', 'Vendas', 'Fiados', 'Clientes', 'Produtos', 'Zé'].map((label, i) => (
            <g key={label} transform={`translate(24 ${88 + i * 41})`} fill={label === 'Vendas' ? '#fff' : '#a8b0b8'}>
              <text>{label}</text>
            </g>
          ))}
          <path d="M0 476h176" stroke="#343a40" />
          <g fill="#a8b0b8" fontSize="13">
            <text x="24" y="508">Usuários</text><text x="24" y="537">Histórico</text>
            <text x="24" y="566">Trocar senha</text><text x="24" y="595">Sair</text>
          </g>
          <rect x="176" width="724" height="58" fill="#fff" />
          <path d="M176 58h724" stroke="#c7cdd1" />
          <text x="196" y="35" fontSize="17" fontWeight="700">Nova venda</text>
          <text x="867" y="35" textAnchor="end" fontSize="12" fill="#565d66">← Voltar ao painel</text>
          <g fill="#fff" stroke="#c7cdd1">
            <rect x="192" y="76" width="400" height="112" rx="7" />
            <rect x="192" y="204" width="400" height="396" rx="7" />
            <rect x="608" y="76" width="276" height="524" rx="7" />
          </g>
          <g fill="#565d66" fontSize="11" fontWeight="700" letterSpacing="1">
            <text x="210" y="102">CLIENTE</text><text x="210" y="232">ITENS DA VENDA</text>
            <text x="626" y="103">RESUMO DA VENDA</text>
          </g>
          <rect x="210" y="117" width="364" height="36" rx="5" fill="#fff" stroke="#c7cdd1" />
          <text x="222" y="140" fill="#565d66" fontSize="12">Buscar cliente...</text>
          <text x="210" y="173" fill="#565d66" fontSize="11">Sem cliente = Consumidor (venda avulsa)</text>
          <text x="574" y="232" textAnchor="end" fontSize="11" fill="#565d66">2 item(ns)</text>
          <rect x="210" y="248" width="364" height="37" rx="5" fill="#fff" stroke="#c7cdd1" />
          <text x="222" y="272" fill="#565d66" fontSize="12">Buscar produto para adicionar...</text>
          {[
            { name: 'Cimento', quantity: '2', price: '38,00', total: '76,00' },
            { name: 'Areia', quantity: '1', price: '140,00', total: '140,00' },
          ].map((item, i) => (
            <g key={item.name} transform={`translate(210 ${315 + i * 115})`}>
              <text fontWeight="600">{item.name}</text>
              <text x="364" textAnchor="end" fontWeight="700">R$ {item.total}</text>
              <g fontSize="10" fill="#565d66"><text y="24">Quantidade</text><text x="135" y="24">Preço unitário</text></g>
              <rect y="32" width="115" height="32" rx="4" fill="#fff" stroke="#c7cdd1" />
              <rect x="135" y="32" width="145" height="32" rx="4" fill="#fff" stroke="#c7cdd1" />
              <text x="57" y="53" textAnchor="middle" fontSize="12">{item.quantity}</text>
              <text x="147" y="53" fontSize="12">R$ {item.price}</text>
              <path d="M0 82h364" stroke="#c7cdd1" />
            </g>
          ))}
          <g fontSize="12">
            <text x="626" y="141" fill="#565d66">Cliente</text><text x="866" y="141" textAnchor="end" fontWeight="600">Consumidor</text>
            <path d="M626 157h240" stroke="#c7cdd1" />
            <text x="626" y="181" fill="#565d66">Itens (2)</text><text x="866" y="181" textAnchor="end">3 un.</text>
            <text x="626" y="207" fill="#565d66">Subtotal</text><text x="866" y="207" textAnchor="end" fontWeight="600">R$ 216,00</text>
            <path d="M626 222h240" stroke="#c7cdd1" />
            <text x="626" y="250" fill="#565d66">Desconto</text>
            <rect x="798" y="233" width="68" height="25" rx="4" fill="#e6e9eb" />
            <rect x="801" y="236" width="31" height="19" rx="3" fill="#fff" />
            <text x="816" y="250" textAnchor="middle" fontSize="10">R$</text><text x="849" y="250" textAnchor="middle" fontSize="10">%</text>
            <rect x="626" y="270" width="240" height="36" rx="5" fill="#fff" stroke="#c7cdd1" />
            <text x="638" y="293" fill="#565d66">R$</text><text x="854" y="293" textAnchor="end">0</text>
            <text x="626" y="347" fontWeight="600">Total</text>
            <text x="866" y="350" textAnchor="end" fontSize="26" fontWeight="700" fill="#1b7a46">R$ 216,00</text>
            <text x="626" y="388" fill="#565d66">Forma de pagamento</text>
          </g>
          {['Dinheiro', 'Pix', 'Cartão', 'Fiado'].map((label, i) => (
            <g key={label} transform={`translate(${626 + (i % 2) * 124} ${403 + Math.floor(i / 2) * 44})`}>
              <rect width="116" height="36" rx="5" fill={label === 'Pix' ? '#0e7c86' : '#fff'} stroke={label === 'Pix' ? '#0e7c86' : '#c7cdd1'} />
              <text x="58" y="23" textAnchor="middle" fontSize="12" fontWeight="600" fill={label === 'Pix' ? '#fff' : '#16191d'}>{label}</text>
            </g>
          ))}
          <rect x="626" y="526" width="240" height="52" rx="6" fill="#0e7c86" />
          <text x="746" y="558" textAnchor="middle" fill="#fff" fontWeight="700">✓ Salvar venda</text>
        </g>
      </svg>
      <figcaption>Nova venda · reprodução simplificada com dados de exemplo</figcaption>
    </figure>
  )
}
