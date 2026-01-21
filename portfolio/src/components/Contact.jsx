import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-icon">💬</div>
      </div>
      <section className="contact" id="contact">
        <div className="container">
          <h2>Vamos Conversar</h2>
          <p className="contact-text">
            Interessado em colaborar ou trocar ideias sobre desenvolvimento? 
            Estou sempre aberto a novas oportunidades e conexões.
          </p>
          <div className="contact-buttons">
            <a href="https://github.com/Benedito-Dev" className="contact-btn" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="contact-icon" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/benedito-bittencourt-13ab1b233/" className="contact-btn" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="contact-icon" />
              LinkedIn
            </a>
            <a href="mailto:beneditobittencourtt@gmail.com" className="contact-btn">
              <span className="contact-icon email-icon">✉️</span>
              Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;