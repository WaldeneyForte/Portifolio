import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { useLanguage } from './i18n/context'
import { About } from './sections/About'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  const { copy } = useLanguage()
  return (
    <>
      <a className="skip-link" href="#conteudo">{copy.navigation.skipLink}</a>
      <Navbar />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
