import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import type { ReactNode } from 'react'
import { ContentImage } from '@/components/ContentImage'
import type { ContentImageMetadata } from '@/lib/content-images'
import { parseMarkdownImageSrc } from '@/lib/markdown-images'

type MarkdownAstNode = {
  type?: unknown
  tagName?: unknown
  value?: unknown
  children?: unknown
}

type PostMarkdownProps = {
  content: string
  getContentImageMetadata: (fileName: string) => ContentImageMetadata
}

const isMarkdownAstNode = (node: unknown): node is MarkdownAstNode => {
  return typeof node === 'object' && node !== null
}

const getMarkdownAstChildren = (node: unknown): unknown[] => {
  if (!isMarkdownAstNode(node) || !Array.isArray(node.children)) {
    return []
  }

  return node.children
}

const isWhitespaceTextNode = (node: unknown) => {
  return (
    isMarkdownAstNode(node) &&
    node.type === 'text' &&
    typeof node.value === 'string' &&
    node.value.trim() === ''
  )
}

const isImageElementNode = (node: unknown) => {
  return isMarkdownAstNode(node) && node.type === 'element' && node.tagName === 'img'
}

const isImageOnlyParagraph = (node: unknown) => {
  const children = getMarkdownAstChildren(node).filter((child) => !isWhitespaceTextNode(child))

  return children.length === 1 && isImageElementNode(children[0])
}

const AnchorSvg = () => (
  <svg
    aria-hidden="true"
    height="20"
    version="1.1"
    viewBox="0 0 16 16"
    width="20"
  >
    <path
      fillRule="evenodd"
      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
    ></path>
  </svg>
)

type LinkedHeaderProps = {
  as: 'h2' | 'h3' | 'h4'
  children: ReactNode
  id?: string
}

const LinkedHeader = ({ as: Heading, children, id = '' }: LinkedHeaderProps) => {
  return (
    <Heading
      id={id}
      className="linked-header"
    >
      {children}
      <a
        href={`#${id}`}
        aria-label={typeof children === 'string' ? children : 'Link to section'}
        className="header-anchor after"
      >
        <AnchorSvg />
      </a>
    </Heading>
  )
}

export const PostMarkdown = ({ content, getContentImageMetadata }: PostMarkdownProps) => {
  const components: Partial<Components> = {
    p: ({ node, children }: { node?: unknown; children?: ReactNode }) => {
      if (isImageOnlyParagraph(node)) {
        return <>{children}</>
      }

      return <p>{children}</p>
    },
    em: ({ children }: { children?: ReactNode }) => <em className="brush-highlight">{children}</em>,
    img: ({ src = '', alt = '' }) => {
      const imageSrc = typeof src === 'string' ? src : ''
      const imageAlt = typeof alt === 'string' ? alt : ''
      const { fileName, size } = parseMarkdownImageSrc(imageSrc)

      if (!fileName) {
        return null
      }

      return (
        <ContentImage
          {...getContentImageMetadata(fileName)}
          alt={imageAlt}
          size={size}
        />
      )
    },
    h2: ({ children, id }: { children?: ReactNode; id?: string }) => (
      <LinkedHeader
        as="h2"
        id={id ?? ''}
      >
        {children}
      </LinkedHeader>
    ),
    h3: ({ children, id }: { children?: ReactNode; id?: string }) => (
      <LinkedHeader
        as="h3"
        id={id ?? ''}
      >
        {children}
      </LinkedHeader>
    ),
    h4: ({ children, id }: { children?: ReactNode; id?: string }) => (
      <LinkedHeader
        as="h4"
        id={id ?? ''}
      >
        {children}
      </LinkedHeader>
    ),
  }

  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
    >
      {content}
    </ReactMarkdown>
  )
}
