import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

// Custom components for MDX content
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom heading components with anchor links
    h1: ({ children, ...props }) => (
      <h1
        className="text-4xl font-bold mb-6 text-white border-b border-gray-700 pb-2"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-8 text-white" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-2xl font-medium mb-3 mt-6 text-gray-200" {...props}>
        {children}
      </h3>
    ),

    // Custom paragraph styling
    p: ({ children, ...props }) => (
      <p className="mb-4 text-gray-300 leading-relaxed" {...props}>
        {children}
      </p>
    ),

    // Custom link styling
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith('http')
      const Component = isExternal ? 'a' : Link

      return (
        <Component
          href={href || '#'}
          className="text-blue-400 hover:text-blue-300 underline transition-colors"
          {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
          {...props}
        >
          {children}
        </Component>
      )
    },

    // Code blocks with enhanced styling
    pre: ({ children, ...props }) => (
      <pre
        className="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto mb-6 text-sm"
        {...props}
      >
        {children}
      </pre>
    ),

    // Inline code styling
    code: ({ children, ...props }) => (
      <code
        className="bg-gray-800 text-pink-400 px-2 py-1 rounded text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    ),

    // List styling
    ul: ({ children, ...props }) => (
      <ul className="mb-4 pl-6 space-y-2 text-gray-300" {...props}>
        {children}
      </ul>
    ),

    ol: ({ children, ...props }) => (
      <ol className="mb-4 pl-6 space-y-2 text-gray-300 list-decimal" {...props}>
        {children}
      </ol>
    ),

    li: ({ children, ...props }) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),

    // Blockquote styling
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-blue-500 pl-4 py-2 mb-6 bg-gray-800/50 rounded-r-lg text-gray-300 italic"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Table styling (for documentation)
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border border-gray-700 rounded-lg"
          {...props}
        >
          {children}
        </table>
      </div>
    ),

    th: ({ children, ...props }) => (
      <th
        className="border-b border-gray-700 bg-gray-800 px-4 py-2 text-left text-white font-semibold"
        {...props}
      >
        {children}
      </th>
    ),

    td: ({ children, ...props }) => (
      <td
        className="border-b border-gray-700 px-4 py-2 text-gray-300"
        {...props}
      >
        {children}
      </td>
    ),

    // Allow custom components to be passed in
    ...components,
  }
}
