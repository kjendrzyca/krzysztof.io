import { ReactNode } from 'react'

type HighlightProps = {
  children: ReactNode
  smallerpadding?: boolean
}

export const Highlight = ({ children, smallerpadding }: HighlightProps) => (
  <span className={`custom-highlight ${smallerpadding ? 'smallerpadding' : ''}`}>{children}</span>
)
