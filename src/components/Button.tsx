import type { ComponentProps } from 'react'

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  return <button {...props} type={type} className={`action action--${variant} ${className}`} />
}
