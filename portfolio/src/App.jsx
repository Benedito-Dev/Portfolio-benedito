import { useState, useEffect } from 'react'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Subtle particle effect
    const canvas = document.createElement('canvas')
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '-1'
    canvas.style.opacity = '0.05'
    document.body.appendChild(canvas)
    
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      })
    }
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#3b82f6'
      
      particles.forEach(particle => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        particle.x += particle.vx
        particle.y += particle.vy
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
      })
    }
    
    const interval = setInterval(draw, 50)
    return () => {
      clearInterval(interval)
      document.body.removeChild(canvas)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle cursor glow */}
      <div 
        className="fixed w-64 h-64 rounded-full pointer-events-none z-10 opacity-10"
        style={{
          background: `radial-gradient(circle, #3b82f6 0%, transparent 70%)`,
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          transition: 'all 0.2s ease-out'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900 bg-opacity-95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-blue-400">
              Benedito Bittencourt
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {['Sobre', 'Skills', 'Projetos', 'Experiência', 'Contato'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="text-center z-20 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Benedito Bittencourt
            </h1>
            <div className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
              Desenvolvedor Full Stack
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
          </div>
          
          <div className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            18 anos • 2 anos de experiência • Técnico ADS (1200h)
            <br />
            Especialista em React, Node.js e tecnologias modernas
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Ver Projetos
            </button>
            <button className="px-8 py-3 border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 font-medium rounded-lg transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-slate-800 bg-opacity-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Sobre Mim
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-800 bg-opacity-80 p-6 rounded-xl border border-slate-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300">
                <p className="text-slate-300 leading-relaxed mb-4">
                  Desenvolvedor Full Stack com <span className="text-blue-400 font-semibold">18 anos</span> e 
                  <span className="text-blue-400 font-semibold"> 2 anos de experiência</span> sólida no mercado.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Formado em <span className="text-cyan-400">Técnico em ADS (1200h)</span>, com participação 
                  destacada no <span className="text-green-400">Hackathon Pague Menos</span> e visita ao Lab Tech.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Apaixonado por criar soluções inovadoras que fazem a diferença no mundo digital.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '2+', label: 'Anos de Experiência', color: 'blue' },
                { number: '3', label: 'Projetos Principais', color: 'cyan' },
                { number: '1200h', label: 'Formação Técnica', color: 'green' },
                { number: '100%', label: 'Dedicação', color: 'purple' }
              ].map((stat, index) => (
                <div key={index} className="bg-slate-800 bg-opacity-80 p-6 rounded-xl text-center border border-slate-700 hover:border-slate-600 transition-all duration-300 group">
                  <div className={`text-2xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Tecnologias & Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend',
                skills: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+'],
                icon: '🎨'
              },
              {
                title: 'Backend',
                skills: ['Node.js', 'Express.js', 'JWT', 'PostgreSQL', 'MongoDB'],
                icon: '⚙️'
              },
              {
                title: 'Ferramentas',
                skills: ['Git & GitHub', 'Docker', 'Figma', 'Vite', 'VS Code'],
                icon: '🛠️'
              }
            ].map((category, index) => (
              <div key={index} className="bg-slate-800 bg-opacity-80 p-8 rounded-xl border border-slate-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300 group">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-slate-800 bg-opacity-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Projetos em Destaque
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Projeto Web Completo', tech: ['React', 'Node.js', 'PostgreSQL'] },
              { title: 'App Mobile', tech: ['React Native', 'TypeScript', 'Firebase'] },
              { title: 'Dashboard Admin', tech: ['React', 'Express', 'MongoDB'] }
            ].map((project, index) => (
              <div key={index} className="bg-slate-800 bg-opacity-80 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white opacity-80">
                      0{index + 1}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                    Aplicação desenvolvida com foco em performance, usabilidade e boas práticas de desenvolvimento.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-300 text-xs rounded-full border border-blue-600 border-opacity-30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 text-sm border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 rounded-lg">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiência" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Experiência
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Desenvolvedor Full Stack',
                company: 'Freelancer',
                period: '2022 - Presente',
                description: 'Desenvolvimento de aplicações web e mobile com React, Node.js e tecnologias modernas.'
              },
              {
                title: 'Participante Hackathon',
                company: 'Pague Menos',
                period: '2024',
                description: 'Projeto altamente elogiado e visita ao Lab Tech da empresa.'
              },
              {
                title: 'Técnico em ADS',
                company: 'Formação Técnica',
                period: '2023',
                description: 'Curso técnico completo com 1200 horas em desenvolvimento de sistemas.'
              }
            ].map((exp, index) => (
              <div key={index} className="bg-slate-800 bg-opacity-80 p-6 rounded-xl border border-slate-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-slate-800 bg-opacity-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Vamos Conversar?
          </h2>
          
          <p className="text-lg text-slate-400 mb-12 leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos desafiadores.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Email', value: 'benedito@email.com', icon: '📧' },
              { label: 'LinkedIn', value: '/benedito-bittencourt', icon: '💼' },
              { label: 'GitHub', value: '/benedito', icon: '💻' },
              { label: 'WhatsApp', value: '+55 11 99999-9999', icon: '📱' }
            ].map((contact, index) => (
              <div key={index} className="bg-slate-800 bg-opacity-80 p-6 rounded-xl border border-slate-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300 group cursor-pointer">
                <div className="text-2xl mb-3">{contact.icon}</div>
                <div className="text-white font-medium mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {contact.label}
                </div>
                <div className="text-slate-400 text-sm">{contact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500">
            © 2024 Benedito Bittencourt • Desenvolvido com React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App