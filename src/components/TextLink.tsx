import type { ComponentProps } from 'react'
import { getLinkRel } from './linkAttributes'

type TextLinkProps = Omit<ComponentProps<'a'>, 'href'> & { href: string }

export function TextLink({ className = '', target, rel, ...props }: TextLinkProps) {
  return (
    <a
      {...props}
      target={target}
      rel={getLinkRel(target, rel)}
      className={`text-link ${className}`}
    />
  )
}
