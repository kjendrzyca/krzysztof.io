import { ReactNode } from 'react'

type HighlightProps = {
  children: ReactNode
  nopadding?: boolean
}

export const Highlight = ({ children, nopadding }: HighlightProps) => (
  <span className={`custom-highlight ${nopadding ? 'nopadding' : ''}`}>{children}</span>
)
