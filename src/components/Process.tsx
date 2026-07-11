const steps = [
  {
    num: '01',
    title: 'Entender o problema primeiro',
    text: 'Antes de escrever código, tento entender quem vai usar aquilo e o que realmente precisa acontecer. Construir para pessoas, não para o meu ego de dev.',
  },
  {
    num: '02',
    title: 'Desenhar antes de sair codando',
    text: 'Penso nas telas, no modelo de dados e nas fronteiras do sistema antes dos detalhes. É mais barato mudar um esboço do que refatorar depois.',
  },
  {
    num: '03',
    title: 'Construir de forma que dê pra manter',
    text: 'Código tipado, organizado e legível. Prefiro uma solução simples que a próxima pessoa entende a uma esperta que só eu decifro.',
  },
  {
    num: '04',
    title: 'Cuidar dos detalhes que importam',
    text: 'Estados vazios, mensagens de erro, o que acontece quando algo dá errado. É o que separa um trabalho de faculdade de algo pronto pra usar.',
  },
]

export function Process() {
  return (
    <section id="processo" className="container process">
      <span className="section-label reveal">Como eu trabalho</span>
      <h2 className="reveal" data-delay="1">Quatro passos que sigo em cada projeto.</h2>

      <ol className="process-steps">
        {steps.map((step, i) => (
          <li className="process-step reveal" data-delay={String(i + 1)} key={step.num}>
            <span className="num">{step.num}</span>
            <div className="process-step-body">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
