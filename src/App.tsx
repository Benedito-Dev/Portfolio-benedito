import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { Projects } from './components/Projects'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { DevTerminal } from './components/DevTerminal'
import { IntroSplash } from './components/IntroSplash'
import { useScrollFX } from './hooks/useScrollFX'

export default function App() {
  useScrollFX()

  return (
    <>
      <IntroSplash />
      <div className="glow glow-1" data-glow="0.22"></div>
      <div className="glow glow-2" data-glow="-0.16"></div>
      <div className="glow glow-3" data-glow="0.12"></div>

      <Navbar />

      <main id="conteudo">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Process />
        <Contact />
      </main>

      <Footer />
      <DevTerminal />
    </>
  )
}
