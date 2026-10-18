import type { Certification } from './types'

export const certifications = [
  {
    id: 'aws-ai-practitioner',
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    kind: 'professional',
    display: true,
    issuedOn: '2026-09',
    issuedLabel: 'setembro de 2026',
    expiresOn: '2029-09',
    expiresLabel: 'setembro de 2029',
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    kind: 'professional',
    display: false,
    issuedLabel: '2026',
  },
  {
    id: 'kubernetes-lfs158',
    title: 'Introduction to Kubernetes (LFS158)',
    issuer: 'The Linux Foundation',
    kind: 'course',
    display: true,
    issuedOn: '2026-10',
    issuedLabel: 'outubro de 2026',
  },
] as const satisfies readonly Certification[]
