import { CertificationCard } from '../components/CertificationCard'
import { Section } from '../components/Section'
import { useLanguage } from '../i18n/context'

export function Certifications() {
  const { copy: { certifications: copy }, content: { certifications } } = useLanguage()
  const visible = certifications.filter((certification) => certification.display)
  const groups = [
    { kind: 'professional', title: copy.professional },
    { kind: 'course', title: copy.courses },
  ] as const

  return (
    <Section id="certificacoes" backdrop="quiet" rhythm="compact">
      <div className="certification-groups">
        {groups.map((group) => {
          const entries = visible.filter((certification) => certification.kind === group.kind)
          return entries.length > 0 && (
            <div className="certification-group" key={group.kind} role="group" aria-labelledby={`certifications-${group.kind}`}>
              <h3 id={`certifications-${group.kind}`} className="certification-groups__title">{group.title}</h3>
              <div className="content-grid">{entries.map((entry) => <CertificationCard key={entry.id} certification={entry} />)}</div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
