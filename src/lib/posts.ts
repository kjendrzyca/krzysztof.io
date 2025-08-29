import grayMatter from 'gray-matter'
import fs from 'fs'
import { join } from 'path'

const blogDirectory = join(process.cwd(), 'content', 'blog')
const notesDirectory = join(process.cwd(), 'content', 'notes')
const pagesDirectory = join(process.cwd(), 'content', 'pages')

export function getAllSlugs(): string[] {
  const blogSlugs = fs.readdirSync(blogDirectory).filter((slug) => !slug.startsWith('.'))
  const notesSlugs = fs.readdirSync(notesDirectory).filter((slug) => !slug.startsWith('.'))
  const pagesSlugs = fs.readdirSync(pagesDirectory).filter((slug) => !slug.startsWith('.'))

  return [...blogSlugs, ...notesSlugs, ...pagesSlugs]
}

interface PostData {
  slug: string
  frontmatter: Record<string, unknown>
  content: string
  contentPath: 'blog' | 'notes' | 'pages'
}

export function getPost(slug: string): PostData {
  const blogDirectoryPath = join(blogDirectory, slug)
  const notesDirectoryPath = join(notesDirectory, slug)
  const pagesDirectoryPath = join(pagesDirectory, slug)

  const blogFullPath = join(blogDirectoryPath, 'index.md')
  const noteFullPath = join(notesDirectoryPath, 'index.md')
  const pagesFullPath = join(pagesDirectoryPath, 'index.md')

  let fullPath = ''
  let contentPath: 'blog' | 'notes' | 'pages' = 'blog'

  if (fs.existsSync(blogFullPath)) {
    fullPath = blogFullPath
    contentPath = 'blog'
  } else if (fs.existsSync(noteFullPath)) {
    fullPath = noteFullPath
    contentPath = 'notes'
  } else {
    fullPath = pagesFullPath
    contentPath = 'pages'
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
