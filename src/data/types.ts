export type Profile = {
  name: string
  title: string
  location: string
  email: string
  about: readonly string[]
  links: { github: string; linkedin: string }
}

export type Project = {
  id: string
  title: string
  category: 'research' | 'personal'
  artwork: 'clinical' | 'speech' | 'network'
  period?: string
  summary: string
  technologies: readonly string[]
  details: readonly string[]
  repositoryUrl?: string
}

export type TimelineEntry = {
  id: string
  title: string
  organization: string
  period: string
  location?: string
  status?: string
  summary: string
  activityGroups?: readonly {
    id: string
    title: string
    activities: readonly string[]
  }[]
}

export type SkillGroupData = {
  id: string
  title: string
  items: readonly string[]
}

export type Certification = {
  id: string
  title: string
  issuer: string
  kind: 'professional' | 'course'
  display: boolean
  issuedOn?: string
  issuedLabel: string
  expiresOn?: string
  expiresLabel?: string
  credentialUrl?: string
}
