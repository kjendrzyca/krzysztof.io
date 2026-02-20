import React, { ReactNode } from 'react'

import Link from 'next/link'

import Bear from './bear'
import { SubscribeKIO } from './SubscribeKIO'
import { GitHub, Instagram, Twitter } from './Social'
import ThemeToggler from './ThemeToggler'
import { config } from '@/config'

type LayoutProps = {
  children: ReactNode
  isLandingPage?: boolean
}

export const Layout = ({ children, isLandingPage }: LayoutProps) => {
  const globalWrapperClassNames = ['global-wrapper'].filter((cn) => cn).join(' ')

  return (
    <div className={globalWrapperClassNames}>
      {isLandingPage ? null : (
        <header className="global-header">
          <Link
            className="header-link-home"
            href="/"
          >
            {config.siteMetadata.title}
          </Link>
          <ThemeToggler />
        </header>
      )}
      <main>{children}</main>
      <footer>
        <Bear />
        {isLandingPage ? null : <SubscribeKIO />}
        <div className="footer-bottom">
          <div className="footer-social-links">
            <Twitter />
            <Instagram />
            <GitHub />
          </div>
          <div className="footer-links">
            <Link href="/polityka-prywatnosci/">Polityka prywatności</Link>
            <Link href="/regulamin/">Regulamin</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
