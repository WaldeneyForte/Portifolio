import type { ReactNode } from 'react'
import { useLanguage } from '../i18n/context'
import type { Dictionary } from '../i18n/types'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

type SectionProps = {
  id: keyof Dictionary['sections']
  children: ReactNode
  description?: string
  className?: string
  rhythm?: 'compact' | 'editorial' | 'feature'
  layout?: 'stacked' | 'aside'
  width?: 'standard' | 'wide'
}

export function Section({ id, children, description, className = '', rhythm = 'editorial', layout = 'stacked', width = 'standard' }: SectionProps) {
  const { copy: dictionary } = useLanguage()
  const copy = dictionary.sections[id]
  return (
    <section id={id} className={`page-section content-section section-rhythm--${rhythm} section-layout--${layout} ${className}`} aria-labelledby={`${id}-heading`} tabIndex={-1}>
      <Container width={width} className="section-layout">
        <SectionHeading title={copy.title} eyebrow={copy.eyebrow} description={description} headingId={`${id}-heading`} />
        <div className="section-body">{children}</div>
      </Container>
    </section>
  )
}
