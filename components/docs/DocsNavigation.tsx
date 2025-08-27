'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface NavItem {
  id: string
  title: string
  href?: string
  children?: NavItem[]
  isActive?: boolean
}

export interface DocsNavigationProps {
  items: NavItem[]
  className?: string
}

function NavItemComponent({
  item,
  level = 0,
}: {
  item: NavItem
  level?: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div className="w-full">
      <div
        className={cn(
          'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors',
          'hover:bg-slate-800',
          item.isActive &&
            'bg-blue-600/10 text-blue-400 border-r-2 border-r-blue-500',
          level > 0 && 'ml-4'
        )}
      >
        {hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-0.5 rounded hover:bg-slate-700"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-slate-500"
            >
              ▶
            </motion.div>
          </button>
        )}

        {item.href ? (
          <a
            href={item.href}
            className={cn(
              'flex-1 text-left hover:text-slate-300',
              item.isActive ? 'text-blue-400' : 'text-slate-400'
            )}
          >
            {item.title}
          </a>
        ) : (
          <span
            className={cn(
              'flex-1 cursor-pointer',
              hasChildren && 'font-medium',
              item.isActive ? 'text-blue-400' : 'text-slate-400'
            )}
            onClick={() => hasChildren && setIsExpanded(!isExpanded)}
          >
            {item.title}
          </span>
        )}
      </div>

      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="py-1">
              {item.children!.map(child => (
                <NavItemComponent
                  key={child.id}
                  item={child}
                  level={level + 1}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function DocsNavigation({ items, className }: DocsNavigationProps) {
  return (
    <nav className={cn('space-y-1', className)}>
      {items.map(item => (
        <NavItemComponent key={item.id} item={item} />
      ))}
    </nav>
  )
}
