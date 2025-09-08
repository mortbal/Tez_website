'use client'

import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm border-b border-border-primary z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-accent-primary">
              GameDev
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/portfolio"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="/cv"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              CV
            </a>
            <a
              href="/blog"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-text-muted hover:text-accent-primary"
              >
                ≡
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
