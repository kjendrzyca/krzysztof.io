export const Highlight = ({children, nopadding}) => (
  <span className={`custom-highlight ${nopadding ? 'nopadding' : ''}`}>{children}</span>
)
