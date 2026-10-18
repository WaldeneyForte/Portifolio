import type { SkillGroupData } from '../data/types'
import { Badge } from './Badge'
import { Card } from './Card'

export function SkillsGroup({ group, emphasis = false }: { group: SkillGroupData; emphasis?: boolean }) {
  return (
    <Card className={`skills-group${emphasis ? ' skills-group--featured' : ''}`} aria-labelledby={`${group.id}-skills-title`}>
      <h3 id={`${group.id}-skills-title`} className="content-title">{group.title}</h3>
      <ul className="badge-group">{group.items.map((item) => <li key={item}><Badge>{item}</Badge></li>)}</ul>
    </Card>
  )
}
