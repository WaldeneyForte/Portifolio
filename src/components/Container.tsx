import type { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'div'> & {
  width?: 'standard' | 'wide'
}

export function Container({ width = 'standard', className = '', ...props }: ContainerProps) {
  return <div {...props} className={`site-container${width === 'wide' ? ' site-container--wide' : ''} ${className}`} />
}
