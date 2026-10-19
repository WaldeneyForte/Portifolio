import { Section } from '../components/Section'
import { TimelineItem } from '../components/TimelineItem'
import { SectionConnector } from '../components/SectionConnector'
import { useLanguage } from '../i18n/context'

export function Experience() {
  const { content: { experience } } = useLanguage()
  return <Section id="experiencia" className="transition-section">
    <SectionConnector scene="projects-experience" />
    <ol className="timeline">{experience.map((entry) => <TimelineItem key={entry.id} entry={entry} />)}</ol>
  </Section>
}
