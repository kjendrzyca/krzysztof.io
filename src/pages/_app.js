import { MailerLiteScriptSrc, MailerLiteSuccessFunctionScript } from "@/components/mailerlite"
import { useHasMounted } from "@/lib/hasMounted"

import "@/styles/fonts.css"
import "@/styles/normalize.css"
import "@/styles/style.css"
import Script from "next/script"

// Highlighting for code blocks
// import "prismjs/themes/prism.css"

export default function App({ Component, pageProps }) {
  const isMounted = useHasMounted()

  // Prevent dark mode flash
  // https://brianlovin.com/writing/adding-dark-mode-with-next-js#client-server-mismatches
  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }}><Component {...pageProps} /></div>
  }

  return (
    <>
      <Component {...pageProps} />

      <Script id="mailerlite-success-function-script">
        {MailerLiteSuccessFunctionScript}
      </Script>
      <Script src={MailerLiteScriptSrc} />

      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CE7EK4VTQM" />
      <Script id="google-tag">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CE7EK4VTQM');`}
      </Script>
    </>
  )
}
