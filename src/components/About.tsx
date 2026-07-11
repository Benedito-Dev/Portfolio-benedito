import { AboutVisual } from './AboutVisual'

export function About() {
  return (
    <section id="sobre" className="container about">
      <div className="about-heading">
        <span className="section-label reveal">Sobre</span>
        <h2 className="reveal" data-delay="1">Comecei querendo entender o<br /><span className="accent">que acontece</span> atrás da tela.</h2>
        <AboutVisual />
      </div>
      <div className="about-text reveal" data-delay="1">
        <p>
          Tudo começou com uma pergunta que eu não conseguia largar: como é que
          aquilo tudo funciona por trás da tela? Fui atrás da resposta abrindo o
          código, quebrando as coisas e remontando até entender — e nunca mais
          parei de perguntar.
        </p>
        <p>
          Essa curiosidade me levou do primeiro "olá mundo" a construir
          aplicações completas, do banco de dados até o último pixel da
          interface. Passei pela formação técnica no SENAC, sigo na graduação de
          Engenharia de Software, e cada projeto no caminho me ensinou algo que
          nenhum tutorial ensinaria sozinho.
        </p>
        <p>
          Hoje construo coisas que pessoas de fato usam. Me importo com código
          que a próxima pessoa consegue ler e manter — porque já fui essa próxima
          pessoa mais de uma vez, tentando entender o que alguém deixou pra trás.
          Antes de escolher uma ferramenta, procuro entender o problema que ela
          resolve.
        </p>
        <p className="emphasis">
          Estou no começo da carreira, e é justamente isso que me move: a pressa
          de construir, a vontade de aprender e a certeza de que o melhor projeto
          ainda é o próximo.
        </p>
      </div>
    </section>
  )
}
