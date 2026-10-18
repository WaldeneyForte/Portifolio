import type { ComponentProps } from 'react'

type CardProps = ComponentProps<'article'> & { surface?: 'default' | 'raised' }

export function Card({ surface = 'default', className = '', ...props }: CardProps) {
  return <article {...props} className={`card ${surface === 'raised' ? 'card--raised' : ''} ${className}`} />
}
