import { Section } from '../components/Section'
import { SectionConnector } from '../components/SectionConnector'
import { useLanguage } from '../i18n/context'

export function About() {
  const { copy, content: { profile } } = useLanguage()
  return (
    <Section id="sobre" className="about-section transition-section">
      <SectionConnector scene="hero-about" />
      <div className="about-layout">
        <div className="about-profile">
          <div className="about-portrait" data-transition-portrait="">
            <img className="about-photo" src={`${import.meta.env.BASE_URL}97138361.jpg`} alt={copy.about.photoAlt} width="460" height="460" loading="lazy" decoding="async" />
          </div>
          <p className="about-location">{profile.location}</p>
        </div>
        <div className="prose">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <SectionConnector scene="about-projects" end />
    </Section>
  )
}
