import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Highlight } from '@/components/Highlight'
import { processHighlights } from '@/lib/processHighlights'
import type { ReactNode } from 'react'

interface MarkdownWithHighlightsProps {
  children: string
  className?: string
  components?: Partial<Components>
  highlightSmallerpadding?: boolean
}

export const MarkdownWithHighlights = ({
  children,
  className,
  components = {},
  highlightSmallerpadding = true,
}: MarkdownWithHighlightsProps) => {
  const processedText = processHighlights(children)

  const defaultComponents: Partial<Components> = {
    mark: ({ children }: { children: ReactNode }) => (
      <Highlight smallerpadding={highlightSmallerpadding}>{children}</Highlight>
    ),
    ...components, // Allow overriding default components
  }

  return (
    <ReactMarkdown
      className={className}
      components={defaultComponents}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {processedText}
    </ReactMarkdown>
  )
}
