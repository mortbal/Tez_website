'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { Project } from '@/types/project'

interface ProjectGridProps {
  projects: Project[]
  className?: string
  columns?: 1 | 2 | 3 | 4
  animationDelay?: number
}

export function ProjectGrid({
  projects,
  className = '',
  columns = 3,
  animationDelay = 0,
}: ProjectGridProps) {
  // Generate responsive grid classes based on columns prop
  const getGridClasses = () => {
    const baseClasses = 'grid gap-6'
    const columnClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    }
    return `${baseClasses} ${columnClasses[columns]}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.8 }}
      className={`${getGridClasses()} ${className}`}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: animationDelay + 0.1 + index * 0.1,
            duration: 0.5,
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  )
}
