import { forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface CardProps extends MotionProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { children, className, hover = true, gradient = false, ...motionProps },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl border border-border-primary bg-bg-secondary/50 backdrop-blur-sm',
          gradient &&
            'bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/50',
          hover &&
            'hover:border-border-secondary hover:shadow-lg hover:shadow-theme-primary/10',
          className
        )}
        whileHover={hover ? { y: -2, scale: 1.02 } : {}}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        {...motionProps}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pb-3', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

export const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('px-6 pb-6', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('px-6 py-3 border-t border-border-primary', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'
