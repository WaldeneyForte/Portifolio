import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { SectionConnector } from '../components/SectionConnector'
import { useLanguage } from '../i18n/context'

export function Projects() {
  const { content: { projects } } = useLanguage()
  return <Section id="projetos" backdrop="technical" rhythm="feature" width="wide" className="transition-section">
    <SectionConnector scene="about-projects" />
    <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} position={index + 1} />)}</div>
    <SectionConnector scene="projects-experience" end />
  </Section>
}
