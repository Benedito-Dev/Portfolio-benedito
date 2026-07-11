import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { Projects } from './components/Projects'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollFX } from './hooks/useScrollFX'

export default function App() {
  useScrollFX()

  return (
    <>
      <div className="glow glow-1" data-glow="0.22"></div>
      <div className="glow glow-2" data-glow="-0.16"></div>
      <div className="glow glow-3" data-glow="0.12"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
