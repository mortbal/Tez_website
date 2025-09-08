'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { ProjectGrid } from '@/components/ui/ProjectGrid'
import { Layout } from '@/components/ui/Layout'
import { Project } from '@/types/project'

export default function Home() {
  // Sample project data for testing ProjectCard
  const sampleProjects: Project[] = [
    {
      id: 'unity-rpg-2024',
      title: 'Epic Fantasy RPG',
      description:
        'A 3D fantasy RPG built with Unity featuring complex quest systems, character progression, and immersive world design. Players explore vast landscapes while battling mythical creatures.',
      image:
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=450&fit=crop',
      technologies: ['unity', 'plugin'],
      status: 'completed',
      year: 2024,
      role: 'Lead Developer',
      teamSize: 4,
      platforms: ['pc', 'xbox', 'ps'],
      links: {
        demo: 'https://demo.example.com',
        github: 'https://github.com/example/unity-rpg',
        caseStudy: 'https://case-study.example.com',
      },
      featured: true,
    },
    {
      id: 'react-portfolio-2024',
      title: 'Interactive Portfolio Website',
      description:
        'Modern portfolio site built with React and TypeScript, featuring smooth animations and responsive design for showcasing development projects.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      technologies: ['react', 'typescript'],
      status: 'in-progress',
      year: 2024,
      role: 'Full Stack Developer',
      teamSize: 1,
      platforms: ['web'],
      links: {
        github: 'https://github.com/example/portfolio',
      },
    },
    {
      id: 'unreal-concept-2025',
      title: 'VR Adventure Concept',
      description:
        'Early concept for a virtual reality adventure game using Unreal Engine, focusing on immersive storytelling and innovative VR interactions.',
      image:
        'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=450&fit=crop',
      technologies: ['unreal'],
      status: 'concept',
      year: 2025,
      platforms: ['pc'],
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-bg-primary text-text-primary">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-screen px-4"
        >
          {/* Title with Gaming Colors */}
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            <span className="text-theme-primary">Game Dev</span>{' '}
            <span className="text-text-primary">Portfolio</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-text-secondary text-lg md:text-xl text-center mb-8 max-w-2xl"
          >
            Welcome to our Next.js 15 + TypeScript gaming portfolio. Built with
            Tailwind CSS v4, MDX integration, and Framer Motion animations.
          </motion.p>

          {/* Phase 1 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {/* Next.js Card - hover animation built into Card component */}
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
            >
              <CardHeader>
                <h3 className="text-theme-primary text-xl font-semibold">
                  Next.js 15
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted">
                  Latest Next.js with App Router, TypeScript support, and
                  Turbopack for lightning-fast builds.
                </p>
              </CardContent>
            </Card>

            {/* Tailwind Card */}
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7, duration: 0.5 },
              }}
            >
              <CardHeader>
                <h3 className="text-theme-accent text-xl font-semibold">
                  Tailwind CSS v4
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted">
                  Custom gaming theme with dark colors, CSS variables, and
                  responsive design system.
                </p>
              </CardContent>
            </Card>

            {/* MDX Card */}
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.1, duration: 0.5 },
              }}
            >
              <CardHeader>
                <h3 className="text-theme-danger text-xl font-semibold">
                  MDX Integration
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted">
                  Markdown + JSX for interactive documentation with syntax
                  highlighting and components.
                </p>
              </CardContent>
            </Card>

            {/* Framer Motion Card */}
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9, duration: 0.5 },
              }}
            >
              <CardHeader>
                <h3 className="text-theme-secondary text-xl font-semibold">
                  Framer Motion
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted">
                  Smooth animations, hover effects, and page transitions for
                  enhanced user experience.
                </p>
              </CardContent>
            </Card>

            {/* ESLint/Prettier Card */}
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.0, duration: 0.5 },
              }}
            >
              <CardHeader>
                <h3 className="text-theme-accent text-xl font-semibold">
                  Code Quality
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted">
                  ESLint with TypeScript strict mode and Prettier for consistent
                  code formatting.
                </p>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.1, duration: 0.5 },
              }}
              className="bg-primary-800 border-theme-primary"
            >
              <CardHeader>
                <h3 className="text-theme-primary text-xl font-semibold">
                  Phase 1 Complete ✅
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted">
                  Foundation setup complete. Ready to move to Phase 2: Structure
                  & Organization.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Button */}
          <Button
            size="lg"
            variant="primary"
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            onClick={() => alert('Phase 1 Test Complete! 🎮')}
          >
            Test Phase 1 Setup
          </Button>
        </motion.div>

        {/* ProjectCard Testing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="py-16 px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-theme-primary">
            ProjectCard Component Test
          </h2>

          <div className="max-w-7xl mx-auto">
            <ProjectGrid
              projects={sampleProjects}
              columns={3}
              animationDelay={1.6}
            />
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
