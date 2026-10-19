import { Section } from '../components/Section'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { useLanguage } from '../i18n/context'

export function Education() {
  const { content: { education } } = useLanguage()
  return (
    <Section id="formacao" backdrop="quiet" rhythm="compact">
      <div className="education-timeline" data-education-timeline="">
        <div className="education-timeline__rail" aria-hidden="true">
          <span className="education-timeline__progress" data-education-progress="" />
        </div>
        <ol className="education-timeline__entries" role="list">
          {education.map((entry) => (
            <li key={entry.id} className="education-timeline__entry" data-education-entry={entry.id}>
              <span className="education-timeline__marker" data-education-marker="" aria-hidden="true" />
              <Card className={`education-card${entry.id === 'uece' ? ' education-card--featured' : ''}`} data-education-card="" aria-labelledby={`${entry.id}-title`}>
                <p className="education-card__period">{entry.period}</p>
                <h3 id={`${entry.id}-title`} className="content-title">{entry.title}</h3>
                <p className="education-card__organization">{entry.organization}</p>
                {entry.location && <p className="item-meta">{entry.location}</p>}
                {entry.status && <p className="education-card__status"><Badge tone="accent">{entry.status}</Badge></p>}
                <p className="education-card__summary">{entry.summary}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
