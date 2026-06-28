import grayMatter from 'gray-matter'
import fs from 'fs'
import { join } from 'path'

const blogDirectory = join(process.cwd(), 'content', 'blog')
const notesDirectory = join(process.cwd(), 'content', 'notes')
const pagesDirectory = join(process.cwd(), 'content', 'pages')

const getPublishedSlugs = (directory: string): string[] => {
  return fs.readdirSync(directory).flatMap((slug) => {
    if (slug.startsWith('.')) {
      return []
    }

    const fullPath = join(directory, slug, 'index.md')

    if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
      return []
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = grayMatter(fileContents)

    return data.published === false ? [] : [slug]
  })
}

export function getAllSlugs(): string[] {
  const blogSlugs = getPublishedSlugs(blogDirectory)
  const notesSlugs = getPublishedSlugs(notesDirectory)
  const pagesSlugs = getPublishedSlugs(pagesDirectory)

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
