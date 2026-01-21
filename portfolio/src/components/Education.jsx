import React from 'react';

const Education = () => {
  return (
    <>
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-icon">🎓</div>
      </div>
      <section className="education" id="education">
        <div className="container">
          <h2>Formação Acadêmica</h2>
          <div className="education-timeline">
            <div className="timeline-item featured expandable-card" onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.currentTarget.classList.toggle('expanded');
              }
            }}>
              <div className="timeline-marker current"></div>
              <div className="timeline-content">
                <div className="card-header">
                  <div className="education-badge current">
                    <span className="badge-icon">🎓</span>
                    <span className="badge-text">Em Curso</span>
                  </div>
                  <div className="expand-icon">+</div>
                </div>
                <h3 className="education-title">Engenharia de Software</h3>
                <div className="education-meta">
                  <span className="institution">UniAteneu</span>
                  <span className="period">2026 - 2030</span>
                </div>
                <div className="expandable-content">
                  <p className="education-desc">
                    Graduação completa focada em desenvolvimento de software, arquitetura de sistemas, 
                    gestão de projetos e metodologias ágeis. Primeiro semestre em andamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item featured expandable-card" onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.currentTarget.classList.toggle('expanded');
              }
            }}>
              <div className="timeline-marker current"></div>
              <div className="timeline-content">
                <div className="card-header">
                  <div className="education-badge current">
                    <span className="badge-icon">⛓️</span>
                    <span className="badge-text">Especialização</span>
                  </div>
                  <div className="expand-icon">+</div>
                </div>
                <h3 className="education-title">Formação Web3 & Blockchain</h3>
                <div className="education-meta">
                  <span className="institution">iRede</span>
                  <span className="period">2026</span>
                </div>
                <div className="expandable-content">
                  <p className="education-desc">
                    Especialização avançada em tecnologias descentralizadas, desenvolvimento de smart contracts, 
                    metaverse e economia digital.
                  </p>
                  <div className="education-highlights">
                    <span className="highlight">Blockchain</span>
                    <span className="highlight">Smart Contracts</span>
                    <span className="highlight">Metaverse</span>
                    <span className="highlight">DeFi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item expandable-card" onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.currentTarget.classList.toggle('expanded');
              }
            }}>
              <div className="timeline-marker completed"></div>
              <div className="timeline-content">
                <div className="card-header">
                  <div className="education-badge completed">
                    <span className="badge-icon">✅</span>
                    <span className="badge-text">Concluído</span>
                  </div>
                  <div className="expand-icon">+</div>
                </div>
                <h3 className="education-title">Técnico em Análise e Desenvolvimento de Sistemas</h3>
                <div className="education-meta">
                  <span className="institution">SENAC</span>
                  <span className="period">2024 - 2025</span>
                  <span className="hours">1200 horas</span>
                </div>
                <div className="expandable-content">
                  <p className="education-desc">
                    Formação técnica intensiva com foco prático em programação, banco de dados, 
                    desenvolvimento web e mobile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;