import { ThemeProvider } from 'next-themes'
import Script from "next/script"
import { Inter } from 'next/font/google'

import { MailerLiteScriptSrc, MailerLiteSuccessFunctionScriptKIO } from "@/components/mailerLiteKIO"
import { MailerLiteSuccessFunctionScriptSPWZ } from "@/components/mailerLiteSPWZ"
import { MailerLiteSuccessFunctionScriptSPWZSzkolenie } from "@/components/mailerLiteSPWZSzkolenie"

import "@/styles/normalize.css"
import "@/styles/style.css"
import '@/components/spwzEbook.css'
import '@/components/bookCover.css'

const inter = Inter({ subsets: ['latin'] })

// Highlighting for code blocks
// import "prismjs/themes/prism.css"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute='class' value={{ dark: 'dark-mode', light: 'light-mode' }} forcedTheme={Component.theme || null}>
      <style jsx global>{`
        :root {
          --fontFamily-sans: ${inter.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />

      <Script id="mailerlite-success-function-script">
        {MailerLiteSuccessFunctionScriptKIO}
      </Script>
      <Script id="mailerlite-success-function-script-spwz">
        {MailerLiteSuccessFunctionScriptSPWZ}
      </Script>
      <Script id="mailerlite-success-function-script-spwz-szkolenie">
        {MailerLiteSuccessFunctionScriptSPWZSzkolenie}
      </Script>
      <Script src={MailerLiteScriptSrc} />

      <Script async src="https://analytics.krzysztof.io/script.js" data-website-id="2f1f0f53-a9f2-4b14-96eb-40b0aae3a8ff" />
    </ThemeProvider>
  )
}
