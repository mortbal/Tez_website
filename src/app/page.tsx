'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
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
          <span className="text-accent-cyan">Game Dev</span>{' '}
          <span className="text-text-primary">Portfolio</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-text-secondary text-lg md:text-xl text-center mb-8 max-w-2xl"
        >
          Welcome to our Next.js 15 + TypeScript gaming portfolio. Built with Tailwind CSS v4, 
          MDX integration, and Framer Motion animations.
        </motion.p>

        {/* Phase 1 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {/* Next.js Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-bg-card p-6 rounded-lg border border-border-primary hover:border-accent-cyan transition-colors"
          >
            <h3 className="text-accent-cyan text-xl font-semibold mb-3">Next.js 15</h3>
            <p className="text-text-muted">
              Latest Next.js with App Router, TypeScript support, and Turbopack for lightning-fast builds.
            </p>
          </motion.div>

          {/* Tailwind Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-bg-card p-6 rounded-lg border border-border-primary hover:border-accent-teal transition-colors"
          >
            <h3 className="text-accent-teal text-xl font-semibold mb-3">Tailwind CSS v4</h3>
            <p className="text-text-muted">
              Custom gaming theme with dark colors, CSS variables, and responsive design system.
            </p>
          </motion.div>

          {/* MDX Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-bg-card p-6 rounded-lg border border-border-primary hover:border-accent-red transition-colors"
          >
            <h3 className="text-accent-red text-xl font-semibold mb-3">MDX Integration</h3>
            <p className="text-text-muted">
              Markdown + JSX for interactive documentation with syntax highlighting and components.
            </p>
          </motion.div>

          {/* Framer Motion Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="bg-bg-card p-6 rounded-lg border border-border-primary hover:border-accent-purple transition-colors"
          >
            <h3 className="text-accent-purple text-xl font-semibold mb-3">Framer Motion</h3>
            <p className="text-text-muted">
              Smooth animations, hover effects, and page transitions for enhanced user experience.
            </p>
          </motion.div>

          {/* ESLint/Prettier Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="bg-bg-card p-6 rounded-lg border border-border-primary hover:border-accent-orange transition-colors"
          >
            <h3 className="text-accent-orange text-xl font-semibold mb-3">Code Quality</h3>
            <p className="text-text-muted">
              ESLint with TypeScript strict mode and Prettier for consistent code formatting.
            </p>
          </motion.div>

          {/* Status Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="bg-primary-800 p-6 rounded-lg border border-accent-cyan"
          >
            <h3 className="text-accent-cyan text-xl font-semibold mb-3">Phase 1 Complete ✅</h3>
            <p className="text-text-muted">
              Foundation setup complete. Ready to move to Phase 2: Structure & Organization.
            </p>
          </motion.div>
        </div>

        {/* Interactive Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 bg-accent-cyan text-bg-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent-cyan-dark transition-colors"
          onClick={() => alert('Phase 1 Test Complete! 🎮')}
        >
          Test Phase 1 Setup
        </motion.button>
      </motion.div>
    </div>
  )
}