'use client'

import { useTheme } from '@/lib/hooks/useTheme'
import { SunIcon } from '@/components/icons/SunIcon'
import { MoonIcon } from '@/components/icons/MoonIcon'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { toggleTheme, isDark } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        inline-flex items-center justify-center w-6 h-6
        bg-secondary hover:bg-hover rounded-full 
        border border-border-primary transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-opacity-50
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  )
}
