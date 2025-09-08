import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // No pageExtensions modification - keeps portfolio pages as pure React
  // MDX will be processed separately for content files only

  // Configure external image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    // Enable optimized bundling
    optimizePackageImports: ['react', 'react-dom'],
  },

  // Webpack configuration for MDX content processing
  webpack: config => {
    // Configure MDX loader for .mdx files in /content directory only
    config.module.rules.push({
      test: /\.mdx$/,
      include: /content/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [
              // GitHub Flavored Markdown support
              require('remark-gfm'),
            ],
            rehypePlugins: [
              // Syntax highlighting for code blocks
              require('rehype-highlight'),
              // Auto-link headings for navigation
              [
                require('rehype-autolink-headings'),
                {
                  behavior: 'wrap',
                  properties: {
                    className: ['anchor-link'],
                  },
                },
              ],
            ],
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
