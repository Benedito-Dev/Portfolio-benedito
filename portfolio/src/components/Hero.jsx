import React from 'react';
import MatrixRain from './MatrixRain';

const Hero = () => {
  return (
    <section className="hero">
      <MatrixRain />
      <div className="container">
        <h1 className="hero-title">Transformando lógica em soluções reais.</h1>
        <p className="hero-subtitle">
          Desenvolvedor focado em arquitetura limpa e crescimento contínuo
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
            Ver Projetos
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
            Entrar em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;