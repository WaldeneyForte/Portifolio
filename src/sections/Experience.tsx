import { Section } from '../components/Section'
import { TimelineItem } from '../components/TimelineItem'
import { useLanguage } from '../i18n/context'

export function Experience() {
  const { content: { experience } } = useLanguage()
  return <Section id="experiencia"><ol className="timeline">{experience.map((entry) => <TimelineItem key={entry.id} entry={entry} />)}</ol></Section>
}
