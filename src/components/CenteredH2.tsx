import { forwardRef, ReactNode } from 'react'

type CenteredH2Props = {
  children: ReactNode
  id?: string
}

export const CenteredH2 = forwardRef<HTMLHeadingElement, CenteredH2Props>(
  ({ children, id }, ref) => {
    return (
      <h2
        style={{
          textAlign: 'center',
        }}
        ref={ref}
        id={id}
      >
        {children}
      </h2>
    )
  },
)

CenteredH2.displayName = 'CenteredH2'
