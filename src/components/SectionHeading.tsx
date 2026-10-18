import type { ComponentProps, ReactNode } from 'react'

type SectionHeadingProps = Omit<ComponentProps<'header'>, 'title'> & {
  title: ReactNode
  headingId: string
  eyebrow?: string
  description?: ReactNode
  level?: 2 | 3
}

export function SectionHeading({
  title,
  headingId,
  eyebrow,
  description,
  level = 2,
  className = '',
  ...props
}: SectionHeadingProps) {
  const Heading = level === 3 ? 'h3' : 'h2'

  return (
    <header {...props} className={`section-heading ${className}`}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <Heading id={headingId} className="section-heading__title">{title}</Heading>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  )
}
