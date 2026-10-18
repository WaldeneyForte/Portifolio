import type { Project } from '../data/types'
import { useLanguage } from '../i18n/context'
import { Badge } from './Badge'
import { Card } from './Card'
import { ProjectArtwork } from './ProjectArtwork'
import { TextLink } from './TextLink'

export function ProjectCard({ project, position }: { project: Project; position: number }) {
  const { copy: { projects: copy } } = useLanguage()
  const research = project.category === 'research'
  const additionalTechnologies = project.technologies.slice(4)
  return (
    <Card className="project-card" aria-labelledby={`${project.id}-title`} data-project={project.id}>
      <ProjectArtwork kind={project.artwork} />
      <div className="project-card__content" data-project-part="content">
      <div className="project-card__meta">
        <Badge tone={research ? 'accent' : 'neutral'}>{research ? copy.research : copy.personal}</Badge>
        {research && <span className="item-meta">{copy.affiliation}</span>}
        <span className="project-card__number" aria-hidden="true">{String(position).padStart(2, '0')}</span>
      </div>
      <h3 id={`${project.id}-title`} className="content-title project-card__title">{project.title}</h3>
      {project.period && <p className="item-meta">{project.period}</p>}
      <p className="project-card__summary">{project.summary}</p>
      <ul className="badge-group" aria-label={copy.technologies}>
        {project.technologies.slice(0, 4).map((technology) => <li key={technology}><Badge>{technology}</Badge></li>)}
      </ul>
      <p className="item-meta project-card__status">{research ? copy.researchStatus : copy.developmentStatus}</p>
      <details className="project-details">
        <summary>
          {copy.details}<span className="sr-only"> — {project.title}</span>
          <span className="project-details__indicator" aria-hidden="true">+</span>
        </summary>
        <div className="project-details__content">
          <ul className="content-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          {additionalTechnologies.length > 0 && <>
            <h4 className="project-details__heading">{copy.additionalTechnologies}</h4>
            <ul className="badge-group">
              {additionalTechnologies.map((technology) => <li key={technology}><Badge>{technology}</Badge></li>)}
            </ul>
          </>}
        </div>
      </details>
      {project.repositoryUrl && <p className="project-card__repository"><TextLink href={project.repositoryUrl} target="_blank">{copy.repository}</TextLink></p>}
      </div>
    </Card>
  )
}
