import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: '🩺 TecSim – Assistente de Enfermagem',
      description: 'Aplicativo mobile que oferece orientações básicas sobre medicamentos, dosagens seguras e cuidados caseiros. Democratiza o acesso à informação médica confiável.',
      tech: ['React Native', 'Node.js', 'Firestore', 'OpenFDA API'],
      status: 'Finalizado',
      github: 'https://github.com/Benedito-Dev/TecSIM',
      demo: 'https://tec-sim-web.vercel.app/',
      loginInfo: {
        email: 'farmaceutico@tecsim.com',
        senha: 'TecSim123',
        tipo: 'farmaceutico'
      }
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
    <>
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-icon">💼</div>
      </div>
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
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    Ver no GitHub →
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      Ver Demo →
                    </a>
                  )}
                </div>
                {project.loginInfo && (
                  <div className="login-info">
                    <small>Login: {project.loginInfo.email} | Senha: {project.loginInfo.senha}</small>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;