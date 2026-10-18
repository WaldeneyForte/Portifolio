import type { HTMLAttributeAnchorTarget } from 'react'

export function getLinkRel(target: HTMLAttributeAnchorTarget | undefined, rel?: string) {
  if (target !== '_blank') return rel

  return [...new Set([...(rel?.split(/\s+/).filter(Boolean) ?? []), 'noopener', 'noreferrer'])].join(' ')
}
