import React from "react"
import { Link } from "gatsby"
import CookieConsent from 'react-cookie-consent'
import Subscribe from '../components/subscribe'
import { GitHub, Instagram, Twitter } from "./Social"
import ThemeToggler from "./ThemeToggler"

const Layout = ({ location, title, children, isLandingPage }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {isLandingPage ? null : <Link className="header-link-home" to="/">
          {title}
        </Link>}
        <ThemeToggler />
      </header>
      <main>{children}</main>
      {isLandingPage ? null : <footer>
        <Subscribe />
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>
          <div className="footer-social-links">
            <Twitter />
            <Instagram />
            <GitHub />
          </div>
          <div className="footer-links">
            <Link to="/narzedzia/">Narzędzia</Link>
            <Link to="/polityka-prywatnosci/">Polityka prywatności</Link>
          </div>
        </div>
      </footer>}
      <CookieConsent
        location="bottom"
        buttonText="Rozumiem"
        style={{ fontSize: '12px', textAlign: 'center' }}
      >
        Ta strona używa ciastek 🍪. <Link to="/polityka-prywatnosci/">Tutaj</Link> możesz poczytać dlaczego.
      </CookieConsent>
    </div>
  )
}

export default Layout
