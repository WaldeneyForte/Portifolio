import type { TimelineEntry } from '../data/types'
import { Badge } from './Badge'

export function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <li className="timeline-item" data-experience={entry.id}>
      <p className="timeline-item__period">{entry.period}</p>
      <article aria-labelledby={`${entry.id}-title`}>
        <h3 id={`${entry.id}-title`} className="content-title">{entry.title}</h3>
        <p className="timeline-item__organization">{entry.organization}</p>
        {entry.location && <p className="item-meta">{entry.location}</p>}
        {entry.status && <p className="timeline-item__status"><Badge tone="accent">{entry.status}</Badge></p>}
        <p className="timeline-item__summary">{entry.summary}</p>
        {entry.activityGroups && (
          <div className="experience-groups">
            {entry.activityGroups.map((group) => (
              <section className="experience-group" key={group.id} aria-labelledby={`${entry.id}-${group.id}-title`} data-experience-group={group.id}>
                <h4 id={`${entry.id}-${group.id}-title`} className="experience-group__title">{group.title}</h4>
                <ul className="content-list">{group.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
              </section>
            ))}
          </div>
        )}
      </article>
    </li>
  )
}
