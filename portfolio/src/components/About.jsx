import React from 'react';
import profileImage from '../assets/Profile.jpg';

const About = () => {
  return (
    <>
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-icon">👤</div>
      </div>
      <section className="about" id="about">
        <div className="container">
          <h2>Sobre Mim</h2>
          <div className="about-content">
            <div className="profile-section">
              <img src={profileImage} alt="Benedito" className="profile-image" />
              <div className="about-text">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default About;