import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Benedito</div>
        <button className="nav-toggle" onClick={() => {
          const navLinks = document.querySelector('.nav-links');
          const navToggle = document.querySelector('.nav-toggle');
          navLinks.classList.toggle('active');
          navToggle.classList.toggle('active');
        }}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-links">
          <a href="#about" onClick={() => {
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.nav-toggle').classList.remove('active');
          }}>Sobre</a>
          <a href="#education" onClick={() => {
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.nav-toggle').classList.remove('active');
          }}>Formação</a>
          <a href="#skills" onClick={() => {
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.nav-toggle').classList.remove('active');
          }}>Skills</a>
          <a href="#projects" onClick={() => {
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.nav-toggle').classList.remove('active');
          }}>Projetos</a>
          <a href="#contact" onClick={() => {
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.nav-toggle').classList.remove('active');
          }}>Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;