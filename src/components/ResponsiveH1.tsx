import React from 'react'

type ResponsiveH1Props = {
  children: React.ReactNode
  style?: React.CSSProperties
}

export const ResponsiveH1 = ({ children, style = {} }: ResponsiveH1Props) => {
  return (
    <h1
      style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        marginTop: 'var(--spacing-6)',
        lineHeight: 'clamp(2.2rem, 5vw, 3.2rem)',
        ...style,
      }}
    >
      {children}
    </h1>
  )
}
