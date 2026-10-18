import { Section } from '../components/Section'
import { SkillsGroup } from '../components/SkillsGroup'
import { useLanguage } from '../i18n/context'

export function Skills() {
  const { copy, content: { skills } } = useLanguage()
  return <Section id="tecnologias" width="wide" description={copy.skills.description}><div className="skills-grid">{skills.map((group) => <SkillsGroup key={group.id} group={group} emphasis={['machine-learning', 'language', 'data'].includes(group.id)} />)}</div></Section>
}
