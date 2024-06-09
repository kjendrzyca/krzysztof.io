import React from "react"

import Link from 'next/link'

import { SubscribeKIO } from './mailerLiteKIO'
import { GitHub, Instagram, Twitter } from './Social'
import ThemeToggler from './ThemeToggler'
import { config } from "@/config"

export const Layout = ({ children, isLandingPage }) => {
  return (
    <div className="global-wrapper">
      {isLandingPage ? null : <header className="global-header">
        <Link className="header-link-home" href="/">
          {config.siteMetadata.title}
        </Link>
        <ThemeToggler />
      </header>}
      <main>{children}</main>
      <footer>
        {isLandingPage ? null : <SubscribeKIO />}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://nextjs.org">NextJS</a>
          </div>
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
