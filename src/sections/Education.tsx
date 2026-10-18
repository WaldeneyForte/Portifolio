import { Section } from '../components/Section'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { useLanguage } from '../i18n/context'

export function Education() {
  const { content: { education } } = useLanguage()
  return (
    <Section id="formacao" rhythm="compact">
      <div className="education-grid">
        {education.map((entry) => (
          <Card key={entry.id} className="education-card" aria-labelledby={`${entry.id}-title`}>
            <p className="education-card__period">{entry.period}</p>
            <h3 id={`${entry.id}-title`} className="content-title">{entry.title}</h3>
            <p className="education-card__organization">{entry.organization}</p>
            {entry.location && <p className="item-meta">{entry.location}</p>}
            {entry.status && <p className="education-card__status"><Badge tone="accent">{entry.status}</Badge></p>}
            <p className="education-card__summary">{entry.summary}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
