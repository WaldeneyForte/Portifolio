import type { Certification, Profile, Project, SkillGroupData, TimelineEntry } from '../data/types'
import type { pt } from './pt'

export type Locale = 'pt-BR' | 'en'

type Translated<T> = T extends string ? string : {
  [Key in keyof T]: Key extends 'id' ? T[Key] : Translated<T[Key]>
}

export type Dictionary = Translated<typeof pt>

export type SiteContent = {
  profile: Profile
  projects: readonly Project[]
  experience: readonly TimelineEntry[]
  education: readonly TimelineEntry[]
  skills: readonly SkillGroupData[]
  certifications: readonly Certification[]
}
