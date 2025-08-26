import grayMatter from 'gray-matter'
import fs from 'fs'
import { join } from 'path'

const blogDirectory = join(process.cwd(), 'content', 'blog')
const notesDirectory = join(process.cwd(), 'content', 'notes')

export function getAllSlugs(): string[] {
  const blogSlugs = fs.readdirSync(blogDirectory).filter((slug) => !slug.startsWith('.'))
  const notesSlugs = fs.readdirSync(notesDirectory).filter((slug) => !slug.startsWith('.'))

  return [...blogSlugs, ...notesSlugs]
}

interface PostData {
  slug: string
  frontmatter: Record<string, unknown>
  content: string
  contentPath: 'blog' | 'notes'
}

export function getPost(slug: string): PostData {
  const blogDirectoryPath = join(blogDirectory, slug)
  const notesDirectoryPath = join(notesDirectory, slug)

  const blogFullPath = join(blogDirectoryPath, 'index.md')
  const noteFullPath = join(notesDirectoryPath, 'index.md')

  let fullPath = ''
  let contentPath: 'blog' | 'notes' = 'blog'

  if (fs.existsSync(blogFullPath)) {
    fullPath = blogFullPath
    contentPath = 'blog'
  } else {
    fullPath = noteFullPath
    contentPath = 'notes'
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = grayMatter(fileContents)

  return {
    slug,
    frontmatter: data,
    content,
    contentPath,
  }
}
