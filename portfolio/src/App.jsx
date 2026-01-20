import React from 'react';
import './App.css';

function App() {
  const skills = {
    languages: ['JavaScript', 'Python', 'Java', 'TypeScript'],
    frameworks: ['React', 'Node.js', 'Express', 'Django'],
    tools: ['Git', 'Docker', 'PostgreSQL', 'MongoDB'],
    concepts: ['POO', 'APIs REST', 'Arquitetura Limpa', 'TDD']
  };

  const projects = [
    {
      name: 'Sistema de Gestão',
      description: 'Solução completa para controle de estoque e vendas',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      status: 'Finalizado',
      github: '#'
    },
    {
      name: 'API de Autenticação',
      description: 'Sistema robusto de auth com JWT e refresh tokens',
      tech: ['Express', 'MongoDB', 'JWT'],
      status: 'Finalizado',
      github: '#'
    },
    {
      name: 'Dashboard Analytics',
      description: 'Interface para visualização de dados em tempo real',
      tech: ['React', 'D3.js', 'WebSocket'],
      status: 'Em desenvolvimento',
      github: '#'
    }
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Benedito</div>
          <div className="nav-links">
            <a href="#about">Sobre</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
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

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>Sobre Mim</h2>
          <div className="about-content">
            <p>
              Desenvolvedor apaixonado por resolver problemas complexos através de código limpo e bem estruturado. 
              Minha jornada começou com curiosidade sobre como as coisas funcionam por trás das telas, 
              e hoje foco em construir soluções que fazem diferença real.
            </p>
            <p>
              Acredito que bom código é aquele que outros desenvolvedores conseguem entender e manter. 
              Por isso, invisto tempo estudando arquitetura, padrões de design e sempre busco 
              aprender com a comunidade e compartilhar conhecimento.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <h2>Stack Técnica</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Linguagens</h3>
              <div className="skill-items">
                {skills.languages.map(skill => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks</h3>
              <div className="skill-items">
                {skills.frameworks.map(skill => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Ferramentas</h3>
              <div className="skill-items">
                {skills.tools.map(skill => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Conceitos</h3>
              <div className="skill-items">
                {skills.concepts.map(skill => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h2>Projetos</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  Ver no GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Vamos Conversar</h2>
          <p className="contact-text">
            Interessado em colaborar ou trocar ideias sobre desenvolvimento? 
            Estou sempre aberto a novas oportunidades e conexões.
          </p>
          <div className="contact-buttons">
            <a href="https://github.com" className="contact-btn" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" className="contact-btn" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:contato@email.com" className="contact-btn">
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;