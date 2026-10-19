import { ButtonLink } from '../components/ButtonLink'
import { Container } from '../components/Container'
import { NeuralGraph } from '../components/NeuralGraph'
import { SectionConnector } from '../components/SectionConnector'
import { useLanguage } from '../i18n/context'

export function Hero() {
  const { copy: { hero: copy }, content: { profile } } = useLanguage()

  return (
    <section id="inicio" className="hero transition-section" aria-labelledby="hero-heading" tabIndex={-1}>
      <Container width="wide" className="hero__layout">
        <div className="hero__identity" data-hero-part="identity">
          <p className="hero__eyebrow">{copy.eyebrow}</p>
          <h1 id="hero-heading" className="hero__name">{profile.name}<span className="hero__name-dot" aria-hidden="true">.</span></h1>
          <p className="hero__roles">{profile.title}</p>
        </div>
        <div className="hero__content" data-hero-part="copy">
          <p className="hero__headline">{copy.headline}</p>
          <p className="hero__description">{copy.description}</p>
          <div className="action-group hero__actions">
            <ButtonLink href="#projetos">{copy.projectsLink}</ButtonLink>
            <ButtonLink href="#contato" variant="secondary">{copy.contactLink}</ButtonLink>
          </div>
        </div>
        <div className="hero__visual" data-hero-part="visual" aria-hidden="true">
          <div data-transition-visual="">
            <NeuralGraph variant="hero" />
          </div>
        </div>
      </Container>
      <Container width="wide" className="hero__continuity">
        <a className="hero__about-link" href="#sobre">
          {copy.aboutLink}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 4v16m-6-6 6 6 6-6" /></svg>
        </a>
        <span className="hero__trail" aria-hidden="true" />
      </Container>
      <SectionConnector scene="hero-about" end />
    </section>
  )
}
