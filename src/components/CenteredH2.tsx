import { forwardRef, ReactNode } from 'react'

type CenteredH2Props = {
  children: ReactNode
}

export const CenteredH2 = forwardRef<HTMLHeadingElement, CenteredH2Props>(({ children }, ref) => {
  return (
    <h2
      style={{
        textAlign: 'center',
      }}
      ref={ref}
    >
      {children}
    </h2>
  )
})

CenteredH2.displayName = 'CenteredH2'
