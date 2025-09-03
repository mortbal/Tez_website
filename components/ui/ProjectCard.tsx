'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-lg border border-primary bg-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`
              px-2 py-1 text-xs font-medium rounded-full
              ${project.status === 'completed' 
                ? 'bg-accent-cyan text-primary-900' 
                : project.status === 'in-progress'
                ? 'bg-accent-orange text-primary-900'
                : 'bg-accent-purple text-primary-100'
              }
            `}
          >
            {project.status.replace('-', ' ')}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent-red text-primary-100">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title and Year */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-primary group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-muted">
            {project.year}
          </span>
        </div>

        {/* Description */}
        <p className="text-secondary line-clamp-3">
          {project.description}
        </p>

        {/* TODO(human) - Technology badges need implementation */}
        <div className="flex flex-wrap gap-2">
          {/* Technology badges will go here */}
        </div>

        {/* Project Details */}
        <div className="flex items-center gap-4 text-sm text-muted">
          {project.role && (
            <span>Role: {project.role}</span>
          )}
          {project.teamSize && (
            <span>Team: {project.teamSize}</span>
          )}
        </div>

        {/* Action Links */}
        {project.links && (
          <div className="flex gap-2 pt-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                className="text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                className="text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
