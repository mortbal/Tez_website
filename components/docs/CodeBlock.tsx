'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface CodeBlockProps {
  code: string
  language: 'cpp' | 'blueprint' | 'javascript' | 'typescript'
  title?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
  className?: string
}

export function CodeBlock({
  code,
  language,
  title,
  showLineNumbers = true,
  highlightLines = [],
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy code:', error)
    }
  }

  const lines = code.split('\n')

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-slate-700 bg-slate-900',
        className
      )}
    >
      {/* Header */}
      {(title || true) && (
        <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800/50 px-4 py-2">
          <div className="flex items-center gap-2">
            {title && (
              <span className="text-sm font-medium text-slate-300">
                {title}
              </span>
            )}
            <span className="rounded bg-slate-700 px-2 py-1 text-xs text-slate-400">
              {language.toUpperCase()}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded px-2 py-1 text-xs text-slate-400 hover:text-slate-300 hover:bg-slate-700"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      )}

      {/* Code Content */}
      <div className="relative overflow-x-auto">
        <pre className="p-4 text-sm">
          <code className={cn('block', `language-${language}`)}>
            {lines.map((line, index) => (
              <div
                key={index}
                className={cn(
                  'flex',
                  highlightLines.includes(index + 1) &&
                    'bg-blue-500/10 border-l-2 border-l-blue-500 pl-2 -ml-2'
                )}
              >
                {showLineNumbers && (
                  <span className="mr-4 select-none text-slate-500 text-right w-8">
                    {index + 1}
                  </span>
                )}
                <span className="text-slate-300">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}

export function InlineCode({
  children,
  crossLink,
}: {
  children: React.ReactNode
  crossLink?: string
}) {
  if (crossLink) {
    return (
      <motion.a
        href={crossLink}
        className="inline-block rounded bg-slate-800 px-1.5 py-0.5 text-sm font-mono text-blue-400 hover:text-blue-300 hover:bg-slate-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sm font-mono text-slate-300">
      {children}
    </code>
  )
}
