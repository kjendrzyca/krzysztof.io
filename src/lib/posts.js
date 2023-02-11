import grayMatter from 'gray-matter'
import { parseISO, format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'

const blogDirectory = join(process.cwd(), 'content', 'blog')
const notesDirectory = join(process.cwd(), 'content', 'notes')

export function getAllSlugs() {
  const blogSlugs = fs.readdirSync(blogDirectory)
  const notesSlugs = fs.readdirSync(notesDirectory)

  return [...blogSlugs, ...notesSlugs]
}

export function getPost(slug) {
  let blogDirectoryPath = join(blogDirectory, slug)
  let notesDirectoryPath = join(notesDirectory, slug)

  const blogFullPath = join(blogDirectoryPath, `index.md`)
  const noteFullPath = join(notesDirectoryPath, `index.md`)

  let fullPath = ''
  let contentPath = ''

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
