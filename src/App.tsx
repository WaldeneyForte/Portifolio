import { lazy, Suspense, useEffect, useRef, useState } from 'react'
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

const PortfolioMotion = lazy(() => import('./components/PortfolioMotion').catch(() => ({ default: () => null })))

export default function App() {
  const { copy } = useLanguage()
  const mainRef = useRef<HTMLElement>(null)
  const [motionRequested, requestMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: no-preference)').matches)

  useEffect(() => {
    if (motionRequested) return
    const preference = window.matchMedia('(prefers-reduced-motion: no-preference)')
    const enable = () => { if (preference.matches) requestMotion(true) }
    preference.addEventListener('change', enable)
    // Cover a preference change between render and subscription.
    queueMicrotask(enable)
    return () => preference.removeEventListener('change', enable)
  }, [motionRequested])
  return (
    <>
      <a className="skip-link" href="#conteudo">{copy.navigation.skipLink}</a>
      <Navbar />
      <main id="conteudo" tabIndex={-1} ref={mainRef}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
        {motionRequested && <Suspense fallback={null}><PortfolioMotion root={mainRef} /></Suspense>}
      </main>
      <Footer />
    </>
  )
}
