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
              ${
                project.status === 'completed'
                  ? 'bg-card-badge-completed text-card-badge-text-dark'
                  : project.status === 'in-progress'
                    ? 'bg-card-badge-in-progress text-card-badge-text-dark'
                    : 'bg-card-badge-concept text-card-badge-text-light'
              }
            `}
          >
            {project.status.replace('-', ' ')}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-card-badge-featured text-card-badge-text-light">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title and Year */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-primary group-hover:text-card-title-hover transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-muted">{project.year}</span>
        </div>

        {/* Description */}
        <p className="text-secondary line-clamp-3">{project.description}</p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => {
            return (
              <span
                key={tech}
                className="bg-card-tech-badge text-card-tech-badge-text hover:bg-card-tech-badge-hover px-2 py-1 text-xs rounded-full"
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
                  className="bg-card-platform-badge text-card-platform-badge-text hover:bg-card-platform-badge-hover px-2 py-1 text-xs rounded-full"
                >
                  {platform.toUpperCase()}
                </span>
              )
            })}
          </div>
        )}

        {/* Project Details */}
        <div className="flex items-center gap-4 text-sm text-muted">
          {project.role && <span>Role: {project.role}</span>}
          {project.teamSize && <span>Team: {project.teamSize}</span>}
        </div>

        {/* Action Links */}
        {project.links && (
          <div className="flex gap-4 pt-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                className="text-card-link hover:text-card-link-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                className="text-card-link hover:text-card-link-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {project.links.caseStudy && (
              <a
                href={project.links.caseStudy}
                className="text-card-link hover:text-card-link-hover transition-colors"
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
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
