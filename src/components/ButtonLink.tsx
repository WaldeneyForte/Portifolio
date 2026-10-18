import type { ComponentProps } from 'react'
import type { ButtonProps } from './Button'
import { getLinkRel } from './linkAttributes'

type ButtonLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  href: string
  variant?: ButtonProps['variant']
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  target,
  rel,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...props}
      target={target}
      rel={getLinkRel(target, rel)}
      className={`action action--${variant} ${className}`}
    />
  )
}
