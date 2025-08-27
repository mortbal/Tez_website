'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface SearchResult {
  id: string
  title: string
  description: string
  href: string
  type: 'page' | 'method' | 'class' | 'property'
}

export interface SearchBarProps {
  onSearch?: (query: string) => void
  results?: SearchResult[]
  placeholder?: string
  className?: string
}

const typeIcons = {
  page: '📄',
  method: '⚙️',
  class: '🏗️',
  property: '🔧',
}

export function SearchBar({
  onSearch,
  results = [],
  placeholder = 'Search documentation...',
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === '/') {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleInputChange = (value: string) => {
    setQuery(value)
    setSelectedIndex(-1)
    setIsOpen(value.length > 0)
    onSearch?.(value)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
      inputRef.current?.blur()
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, -1))
    } else if (event.key === 'Enter' && selectedIndex >= 0) {
      event.preventDefault()
      const result = results[selectedIndex]
      if (result) {
        window.location.href = result.href
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full max-w-md', className)}
    >
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-border-secondary bg-bg-tertiary px-4 py-2.5 pr-10 text-sm text-text-primary placeholder-text-muted focus:border-theme-primary focus:outline-none focus:ring-2 focus:ring-theme-primary/20"
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {query.length === 0 && (
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-xs text-slate-400">
              /
            </kbd>
          )}
          <div className="text-slate-500">🔍</div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 z-50 mt-2 rounded-lg border border-border-secondary bg-bg-tertiary shadow-2xl"
          >
            <div className="max-h-96 overflow-y-auto p-2">
              {results.map((result, index) => (
                <motion.a
                  key={result.id}
                  href={result.href}
                  className={cn(
                    'flex items-start gap-3 rounded-md p-3 transition-colors',
                    selectedIndex === index
                      ? 'bg-blue-600/20 text-blue-300'
                      : 'hover:bg-slate-700 text-slate-300'
                  )}
                  onMouseEnter={() => setSelectedIndex(index)}
                  whileHover={{ x: 2 }}
                >
                  <span className="text-lg">{typeIcons[result.type]}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{result.title}</div>
                    <div className="text-xs text-slate-400 truncate">
                      {result.description}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
