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
    // Matrix rain effect
    const canvas = document.createElement('canvas')
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '-1'
    canvas.style.opacity = '0.1'
    document.body.appendChild(canvas)
    
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const matrix = chars.split('')
    const drops = []
    
    for (let x = 0; x < canvas.width / 20; x++) {
      drops[x] = 1
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#00ff88'
      ctx.font = '15px JetBrains Mono'
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * 20, drops[i] * 20)
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }
    
    const interval = setInterval(draw, 35)
    return () => {
      clearInterval(interval)
      document.body.removeChild(canvas)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden font-mono">
      {/* Cursor glow effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 opacity-20"
        style={{
          background: `radial-gradient(circle, #00ff88 0%, transparent 70%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.1s ease-out',
          mixBlendMode: 'screen'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md border-b border-green-400 border-opacity-20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-green-400 glitch" data-text="BENEDITO.DEV">
              BENEDITO.DEV
            </div>
            <div className="hidden md:flex space-x-8">
              {['SOBRE', 'SKILLS', 'PROJETOS', 'CONTATO'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 relative group"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-green-400 bg-opacity-10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative cyber-grid">
        <div className="text-center z-20 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 glitch" data-text="BENEDITO">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                BENEDITO
              </span>
            </h1>
            <div className="text-2xl md:text-4xl text-gray-300 mb-6 overflow-hidden whitespace-nowrap border-r-4 border-green-400 animate-typing">
              FULL STACK DEVELOPER
            </div>
          </div>
          
          <div className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="text-green-400">&gt;</span> 18 anos, 2 anos de experiência
            <br />
            <span className="text-green-400">&gt;</span> Hackathon Pague Menos Winner
            <br />
            <span className="text-green-400">&gt;</span> 1200h Técnico ADS
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-green-400 hover:shadow-opacity-50 transition-all duration-300 transform hover:scale-105">
              EXPLORAR PROJETOS
            </button>
            <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 neon-border">
              DOWNLOAD CV
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-green-400">
            &lt;SOBRE /&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-green-400 border-opacity-20 hologram">
                <p className="text-lg leading-relaxed text-gray-300">
                  <span className="text-green-400">const</span> <span className="text-blue-400">benedito</span> = {'{'}
                  <br />
                  <span className="ml-4 text-gray-400">idade: <span className="text-pink-400">18</span>,</span>
                  <br />
                  <span className="ml-4 text-gray-400">experiencia: <span className="text-pink-400">'2 anos'</span>,</span>
                  <br />
                  <span className="ml-4 text-gray-400">paixao: <span className="text-pink-400">'inovação'</span>,</span>
                  <br />
                  <span className="ml-4 text-gray-400">objetivo: <span className="text-pink-400">'revolucionar'</span></span>
                  <br />
                  {'}'}
                </p>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                Desenvolvedor que começou cedo e já conquistou reconhecimento no 
                <span className="text-green-400"> Hackathon Pague Menos</span>. 
                Apaixonado por criar experiências digitais que fazem a diferença.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '2+', label: 'Anos Exp', color: 'green-400' },
                { number: '3', label: 'Projetos', color: 'blue-400' },
                { number: '1200h', label: 'Formação', color: 'purple-400' },
                { number: '∞', label: 'Ideias', color: 'pink-400' }
              ].map((stat, index) => (
                <div key={index} className={`bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center border border-${stat.color} border-opacity-20 hover:border-opacity-50 transition-all duration-300 group`}>
                  <div className={`text-3xl font-bold text-${stat.color} group-hover:animate-glow`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800 bg-opacity-30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-blue-400">
            &lt;SKILLS /&gt;
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'FRONTEND',
                skills: ['React', 'React Native', 'TypeScript', 'Tailwind'],
                color: 'green-400'
              },
              {
                title: 'BACKEND',
                skills: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
                color: 'blue-400'
              },
              {
                title: 'TOOLS',
                skills: ['Git', 'Docker', 'Figma', 'Vite'],
                color: 'purple-400'
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-gray-700 hover:border-green-400 hover:border-opacity-50 transition-all duration-300 group">
                <h3 className={`text-2xl font-bold mb-6 text-${category.color} group-hover:animate-glow`}>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${category.color} rounded-full animate-pulse`}></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-purple-400">
            &lt;PROJETOS /&gt;
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400 hover:border-opacity-50 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-green-400 from-opacity-20 to-blue-400 to-opacity-20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-6xl text-green-400 opacity-50 group-hover:animate-glow">
                      {project < 10 ? `0${project}` : project}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-green-400">
                    PROJETO_{project < 10 ? `0${project}` : project}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Aplicação inovadora desenvolvida com tecnologias modernas, 
                    focada em performance e experiência do usuário.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['React', 'Node.js', 'JWT'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-green-400 bg-opacity-10 text-green-400 text-sm rounded border border-green-400 border-opacity-20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300">
                    EXPLORAR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-800 bg-opacity-30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-pink-400">
            &lt;CONTATO /&gt;
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Pronto para criar algo <span className="text-green-400">extraordinário</span> juntos?
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'EMAIL', value: 'benedito@dev.com', color: 'green-400' },
              { label: 'LINKEDIN', value: '/benedito', color: 'blue-400' },
              { label: 'GITHUB', value: '/benedito', color: 'purple-400' },
              { label: 'WHATSAPP', value: '+55 11 9999', color: 'pink-400' }
            ].map((contact, index) => (
              <div key={index} className={`bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-${contact.color} border-opacity-20 hover:border-opacity-50 transition-all duration-300 group cursor-pointer`}>
                <div className={`text-${contact.color} font-bold mb-2 group-hover:animate-glow`}>
                  {contact.label}
                </div>
                <div className="text-gray-400 text-sm">{contact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            <span className="text-green-400">&copy; 2024</span> BENEDITO.DEV - 
            <span className="text-blue-400"> CRAFTED WITH </span>
            <span className="text-pink-400 animate-pulse">♥</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App