import { ThemeProvider } from 'next-themes'
import Script from "next/script"

import { MailerLiteScriptSrc, MailerLiteSuccessFunctionScriptKIO } from "@/components/mailerLiteKIO"
import { MailerLiteSuccessFunctionScriptSPWZ } from "@/components/mailerLiteSPWZ"

import "@/styles/fonts.css"
import "@/styles/normalize.css"
import "@/styles/style.css"

// Highlighting for code blocks
// import "prismjs/themes/prism.css"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute='class' value={{ dark: 'dark-mode', light: 'light-mode' }}>
      <Component {...pageProps} />

      <Script id="mailerlite-success-function-script">
        {MailerLiteSuccessFunctionScriptKIO}
      </Script>
      <Script id="mailerlite-success-function-script-spwz">
        {MailerLiteSuccessFunctionScriptSPWZ}
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
      <Script async src="https://kio-analytics.netlify.app/script.js" data-website-id="2f1f0f53-a9f2-4b14-96eb-40b0aae3a8ff" />
    </ThemeProvider>
  )
}
