import { forwardRef } from "react"

export const CenteredH2 = forwardRef(({children}, ref) => {
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
