import React, { forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ButtonProps extends MotionProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

type ButtonPropsWithHTML = ButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps>

const buttonVariants = {
  primary:
    'bg-theme-primary hover:bg-theme-primary-hover text-text-primary shadow-lg hover:shadow-theme-primary/25',
  secondary:
    'bg-theme-secondary hover:bg-theme-secondary-hover text-text-primary',
  outline:
    'border-2 border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-text-primary',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-interactive-hover',
}

const sizeVariants = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonPropsWithHTML>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      children,
      className,
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-interactive-focus focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed',
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        disabled={disabled}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        {...motionProps}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
