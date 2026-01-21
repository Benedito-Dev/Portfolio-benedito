import React from 'react';

const Philosophy = () => {
  return (
    <>
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-icon">💡</div>
      </div>
      <section className="philosophy" id="philosophy">
        <div className="container">
          <h2>Filosofia de Desenvolvimento</h2>
          <div className="philosophy-content">
            <div className="philosophy-item">
              <h3>Código como Comunicação</h3>
              <p>Escrevo código pensando na pessoa que vai mantê-lo amanhã. Clareza sempre vence cleverness.</p>
            </div>
            <div className="philosophy-item">
              <h3>Fundamentos Sólidos</h3>
              <p>Antes de usar uma ferramenta, entendo o problema que ela resolve. Tecnologia muda, princípios permanecem.</p>
            </div>
            <div className="philosophy-item">
              <h3>Crescimento Contínuo</h3>
              <p>Cada projeto é uma oportunidade de aprender algo novo. Erro faz parte do processo, estagnação não.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Philosophy;