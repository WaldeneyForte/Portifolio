import type { ComponentProps } from 'react'

type BadgeProps = ComponentProps<'span'> & { tone?: 'neutral' | 'accent' }

export function Badge({ tone = 'neutral', className = '', ...props }: BadgeProps) {
  return <span {...props} className={`badge ${tone === 'accent' ? 'badge--accent' : ''} ${className}`} />
}
