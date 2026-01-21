import React from 'react';

const Skills = () => {
  const skills = {
    languages: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', timeUsed: '3 anos', projects: '15+', level: 90 },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', timeUsed: '2 anos', projects: '8+', level: 85 },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', timeUsed: '1.5 anos', projects: '5+', level: 75 },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', timeUsed: '2 anos', projects: '10+', level: 80 }
    ],
    frameworks: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', timeUsed: '2.5 anos', projects: '12+', level: 90 },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', timeUsed: '2 anos', projects: '10+', level: 85 },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', timeUsed: '1.5 anos', projects: '8+', level: 80 },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', timeUsed: '1 ano', projects: '4+', level: 70 }
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', timeUsed: '3 anos', projects: '20+', level: 85 },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', timeUsed: '1 ano', projects: '6+', level: 70 },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', timeUsed: '2 anos', projects: '8+', level: 80 },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', timeUsed: '1.5 anos', projects: '6+', level: 75 }
    ],
    concepts: [
      { name: 'POO', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', timeUsed: '3 anos', projects: '15+', level: 90 },
      { name: 'APIs REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', timeUsed: '2 anos', projects: '12+', level: 85 },
      { name: 'Arquitetura Limpa', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', timeUsed: '1.5 anos', projects: '8+', level: 75 },
      { name: 'TDD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', timeUsed: '1 ano', projects: '5+', level: 70 }
    ]
  };

  return (
    <>
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-icon">⚙️</div>
      </div>
      <section className="skills" id="skills">
        <div className="container">
          <h2>Stack Técnica</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Linguagens</h3>
              <div className="skill-items">
                {skills.languages.map(skill => (
                  <div key={skill.name} className="skill-item" onClick={(e) => {
                    e.currentTarget.classList.toggle('expanded');
                  }}>
                    <div className="skill-header">
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      {skill.name}
                    </div>
                    <div className="skill-details">
                      <div className="skill-info">
                        <span>Tempo de Uso: {skill.timeUsed}</span>
                        <span>Projetos Trabalhados: {skill.projects}</span>
                      </div>
                      <div className="skill-progress">
                        <div className="progress-bar" style={{width: `${skill.level}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks</h3>
              <div className="skill-items">
                {skills.frameworks.map(skill => (
                  <div key={skill.name} className="skill-item" onClick={(e) => {
                    e.currentTarget.classList.toggle('expanded');
                  }}>
                    <div className="skill-header">
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      {skill.name}
                    </div>
                    <div className="skill-details">
                      <div className="skill-info">
                        <span>Tempo de Uso: {skill.timeUsed}</span>
                        <span>Projetos Trabalhados: {skill.projects}</span>
                      </div>
                      <div className="skill-progress">
                        <div className="progress-bar" style={{width: `${skill.level}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Ferramentas</h3>
              <div className="skill-items">
                {skills.tools.map(skill => (
                  <div key={skill.name} className="skill-item" onClick={(e) => {
                    e.currentTarget.classList.toggle('expanded');
                  }}>
                    <div className="skill-header">
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      {skill.name}
                    </div>
                    <div className="skill-details">
                      <div className="skill-info">
                        <span>Tempo de Uso: {skill.timeUsed}</span>
                        <span>Projetos Trabalhados: {skill.projects}</span>
                      </div>
                      <div className="skill-progress">
                        <div className="progress-bar" style={{width: `${skill.level}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Conceitos</h3>
              <div className="skill-items">
                {skills.concepts.map(skill => (
                  <div key={skill.name} className="skill-item" onClick={(e) => {
                    e.currentTarget.classList.toggle('expanded');
                  }}>
                    <div className="skill-header">
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      {skill.name}
                    </div>
                    <div className="skill-details">
                      <div className="skill-info">
                        <span>Tempo de Uso: {skill.timeUsed}</span>
                        <span>Projetos Trabalhados: {skill.projects}</span>
                      </div>
                      <div className="skill-progress">
                        <div className="progress-bar" style={{width: `${skill.level}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;