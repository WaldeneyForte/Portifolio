import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { useLanguage } from '../i18n/context'

export function Projects() {
  const { content: { projects } } = useLanguage()
  return <Section id="projetos" rhythm="feature" width="wide"><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} position={index + 1} />)}</div></Section>
}
