import React, { ReactNode } from 'react'

import Link from 'next/link'

import Bear from './bear'
import { SubscribeKIO } from './SubscribeKIO'
import { GitHub, Instagram, Twitter } from './Social'
import ThemeToggler from './ThemeToggler'
import { config } from '@/config'
import type { ContentLanguage } from '@/lib/content-language'

type LayoutProps = {
  children: ReactNode
  isLandingPage?: boolean
  contentWidth?: 'prose' | 'media'
  hideSubscribe?: boolean
  language?: ContentLanguage
}

const footerLinkLabels: Record<ContentLanguage, { privacy: string; terms: string }> = {
  pl: {
    privacy: 'Polityka prywatności',
    terms: 'Regulamin',
  },
  en: {
    privacy: 'Privacy Policy',
    terms: 'Terms',
  },
}

export const Layout = ({
  children,
  isLandingPage,
  contentWidth = 'prose',
  hideSubscribe = false,
  language = 'pl',
}: LayoutProps) => {
  const globalWrapperClassNames = [
    'global-wrapper',
    contentWidth === 'media' ? 'global-wrapper--media' : null,
  ]
    .filter((cn) => cn)
    .join(' ')
  const footerLabels = footerLinkLabels[language]

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
        {isLandingPage || hideSubscribe ? null : <SubscribeKIO language={language} />}
        <div className="footer-bottom">
          <div className="footer-social-links">
            <Twitter language={language} />
            <Instagram language={language} />
            <GitHub language={language} />
          </div>
          <div className="footer-links">
            <Link href="/polityka-prywatnosci/">{footerLabels.privacy}</Link>
            <Link href="/regulamin/">{footerLabels.terms}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
