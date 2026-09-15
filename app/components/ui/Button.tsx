'use client'

import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & { href?: undefined }

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variantClasses = {
  primary:
    'bg-accent text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30',
  secondary:
    'bg-primary text-white hover:bg-secondary',
  ghost:
    'text-slate-800 dark:text-white border border-slate-300 dark:border-white/30 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/50',
  outline:
    'text-accent border border-accent hover:bg-accent-light',
}

export default function Button({ variant = 'primary', size = 'md', children, className = '', href, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-heading font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'

  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (href !== undefined) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
