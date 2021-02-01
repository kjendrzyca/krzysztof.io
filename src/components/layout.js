import React from "react"
import { Link } from "gatsby"
import CookieConsent from 'react-cookie-consent'

const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      </header>
      <main>{children}</main>
      <footer
        style={{
          fontSize: '0.8rem',
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: 'space-between',
        }}
      >
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
        <div>
          <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
        </div>
      </footer>
      <CookieConsent
        location="bottom"
        buttonText="Rozumiem"
        style={{ fontSize: '12px', textAlign: 'center' }}
      >
        Ta strona używa ciastek 🍪. <Link to="/polityka-prywatnosci">Tutaj</Link> możesz poczytać dlaczego.
      </CookieConsent>
    </div>
  )
}

export default Layout
