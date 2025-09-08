import { GithubIcon } from '../icons/GithubIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import { EmailIcon } from '../icons/EmailIcon'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border-primary mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-text-muted text-sm">
            © {currentYear} GameDev Portfolio. Built with Next.js & TypeScript.
          </div>

          {/* Quick Navigation */}
          <nav className="flex space-x-6">
            <a
              href="/"
              className="text-text-muted hover:text-theme-primary transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="/portfolio"
              className="text-text-muted hover:text-theme-primary transition-colors text-sm"
            >
              Portfolio
            </a>
            <a
              href="/blog"
              className="text-text-muted hover:text-theme-primary transition-colors text-sm"
            >
              Blog
            </a>
            <a
              href="/cv"
              className="text-text-muted hover:text-theme-primary transition-colors text-sm"
            >
              CV
            </a>
            <a
              href="/contact"
              className="text-text-muted hover:text-theme-primary transition-colors text-sm"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-text-muted hover:text-theme-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-text-muted hover:text-theme-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a
              href="mailto:contact@gamedev.com"
              className="group text-text-muted hover:text-theme-primary transition-colors"
              aria-label="Email"
            >
              <EmailIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
