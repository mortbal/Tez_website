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
      className={`group relative overflow-hidden rounded-lg border border-border-primary bg-bg-card hover:border-border-secondary hover:shadow-lg hover:shadow-accent-primary/10 ${className}`}
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
              px-2 py-1 text-xs font-medium rounded-full text-white
              ${
                project.status === 'completed'
                  ? 'bg-status-completed'
                  : project.status === 'in-progress'
                    ? 'bg-status-in-progress'
                    : 'bg-status-concept'
              }
            `}
          >
            {project.status.replace('-', ' ')}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-status-featured text-white">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title and Year */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-text-muted">{project.year}</span>
        </div>

        {/* Description */}
        <p className="text-text-muted line-clamp-3">{project.description}</p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => {
            return (
              <span
                key={tech}
                className="bg-bg-secondary text-text-muted hover:bg-bg-hover hover:text-text-primary px-2 py-1 text-xs rounded-full border border-border-primary transition-colors"
              >
                {' '}
                {tech}
              </span>
            )
          })}
        </div>

        {/* Platform Badges */}
        {project.platforms && project.platforms.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.platforms.map(platform => {
              return (
                <span
                  key={platform}
                  className="bg-accent-teal/20 text-accent-teal hover:bg-accent-teal hover:text-white px-2 py-1 text-xs rounded-full transition-colors"
                >
                  {platform.toUpperCase()}
                </span>
              )
            })}
          </div>
        )}

        {/* Project Details */}
        <div className="flex items-center gap-4 text-sm text-text-muted">
          {project.role && <span>Role: {project.role}</span>}
          {project.teamSize && <span>Team: {project.teamSize}</span>}
        </div>

        {/* Action Links */}
        {project.links && (
          <div className="flex gap-4 pt-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                className="text-accent-primary hover:text-accent-primary-hover transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                className="text-accent-primary hover:text-accent-primary-hover transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {project.links.caseStudy && (
              <a
                href={project.links.caseStudy}
                className="text-accent-primary hover:text-accent-primary-hover transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Case Study
              </a>
            )}
          </div>
        )}
      </div>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
