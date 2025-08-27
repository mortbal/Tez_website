'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type CodeLanguage = 'cpp' | 'blueprint'

export interface CodeToggleProps {
  defaultLanguage?: CodeLanguage
  onLanguageChange?: (language: CodeLanguage) => void
  className?: string
}

const languageLabels = {
  cpp: 'C++',
  blueprint: 'Blueprint',
}

export function CodeToggle({
  defaultLanguage = 'cpp',
  onLanguageChange,
  className,
}: CodeToggleProps) {
  const [activeLanguage, setActiveLanguage] =
    useState<CodeLanguage>(defaultLanguage)

  const handleLanguageChange = (language: CodeLanguage) => {
    setActiveLanguage(language)
    onLanguageChange?.(language)
  }

  return (
    <div
      className={cn(
        'flex rounded-lg border border-border-secondary bg-bg-tertiary/50 p-1',
        className
      )}
    >
      {(Object.keys(languageLabels) as CodeLanguage[]).map(language => (
        <button
          key={language}
          onClick={() => handleLanguageChange(language)}
          className={cn(
            'relative px-4 py-2 text-sm font-medium transition-colors duration-200',
            activeLanguage === language
              ? 'text-text-primary'
              : 'text-text-muted hover:text-text-secondary'
          )}
        >
          {activeLanguage === language && (
            <motion.div
              className="absolute inset-0 bg-theme-primary rounded-md"
              layoutId="activeTab"
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            />
          )}
          <span className="relative z-10">{languageLabels[language]}</span>
        </button>
      ))}
    </div>
  )
}
