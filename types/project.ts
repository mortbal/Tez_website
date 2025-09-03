export interface Project {
  id: string
  title: string
  description: string
  image: string // Thumbnail/screenshot URL
  technologies: ProjectTechnology[] // Array of tech used
  status: ProjectStatus // Current project state
  year: number // When it was created
  role?: string // Your role (optional)
  teamSize?: number // How many people worked on it (optional)
  platforms?: ProjectPlatform[] // PC, Mobile, Console (optional)
  links?: {   // External links (optional)
    demo?: string
    github?: string
    caseStudy?: string
  }
  featured?: boolean // Is this a featured project? (optional)
}

export type ProjectStatus = 'completed' | 'in-progress' | 'concept'
export type ProjectTechnology =
  | 'unity'
  | 'unreal'
  | 'react'
  | 'typescript'
  | 'plugin'
export type ProjectPlatform = 'pc' | 'android' | 'ios' | 'xbox' | 'ps' | 'web'
