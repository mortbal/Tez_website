import { MDXRemote } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Import our custom MDX components
import { useMDXComponents } from '../../../components/mdx-components'

async function getTestBlogContent() {
  try {
    // Read the MDX file
    const filePath = path.join(
      process.cwd(),
      'content',
      'blog',
      'test-blog.mdx'
    )
    const fileContent = await fs.readFile(filePath, 'utf8')

    // Parse frontmatter and content
    const { data: frontmatter, content } = matter(fileContent)

    return {
      frontmatter,
      content,
    }
  } catch (error) {
    console.error('Error reading test-blog.mdx:', error)
    return {
      frontmatter: { title: 'Error Loading Content' },
      content: 'Could not load the blog content.',
    }
  }
}

export default async function TestBlogPage() {
  const { frontmatter, content } = await getTestBlogContent()

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with frontmatter data */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
          <div className="text-gray-400 space-x-4">
            <span>By {frontmatter.author}</span>
            <span>•</span>
            <span>{frontmatter.date}</span>
          </div>
          {frontmatter.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <article className="prose prose-invert prose-blue max-w-none">
          <MDXRemote source={content} components={useMDXComponents({})} />
        </article>
      </main>
    </div>
  )
}
