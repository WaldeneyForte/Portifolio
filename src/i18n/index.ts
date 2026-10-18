import { certifications } from '../data/certifications'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { en } from './en'
import { englishContent } from './en-content'
import { pt } from './pt'
import type { Dictionary, Locale, SiteContent } from './types'

export const dictionaries: Record<Locale, Dictionary> = { 'pt-BR': pt, en }

export const contentByLocale: Record<Locale, SiteContent> = {
  'pt-BR': { profile, projects, experience, education, skills, certifications },
  en: englishContent,
}
