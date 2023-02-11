import { CookieConsent } from '@/components/CookieConsent'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head />
      <body>
        <Main />
        <NextScript />
        <CookieConsent />
      </body>
    </Html>
  )
}
