import ReactCookieConsent from 'react-cookie-consent'
import Link from 'next/link'

export const CookieConsent = () => (
  <ReactCookieConsent
    location="bottom"
    buttonText="Rozumiem"
    style={{ fontSize: '12px', textAlign: 'center' }}
    debug={true}
  >
    Ta strona używa ciastek 🍪. <Link href="/polityka-prywatnosci/">Tutaj</Link> możesz poczytać
    dlaczego.
  </ReactCookieConsent>
)
