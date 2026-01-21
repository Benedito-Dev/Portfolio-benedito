import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Philosophy />
      <Contact />
    </div>
  );
}

export default App;