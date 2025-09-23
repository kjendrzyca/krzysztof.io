import React from 'react'
import { Layout } from '@/components/layout'
import SEO from '@/components/seo'

type LinkButtonProps = {
  href: string
  title: string
  description?: string
}

const LinkButton = ({ href, title, description }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      <div className="link-button-content">
        <div className="link-button-title">{title}</div>
        {description && <div className="link-button-description">{description}</div>}
      </div>
    </a>
  )
}

const LinksPage = () => {
  return (
    <Layout isLandingPage>
      <SEO
        title="Linki"
        description="Zbiór linków, którymi dzielę się w Internecie."
        slug="linki"
      />

      <div className="links-page">
        <h1>@kjendrzyca</h1>

        <div className="links-container">
          <LinkButton
            href="https://skutecznapracawzespole.pl"
            title="🧑‍💻 Kompletny przewodnik po soft skillach w IT - skutecznapracawzespole.pl"
          />

          <LinkButton
            href="https://krzysztof.io/spwz-ebook/"
            title='⏱️ Ebook - "Jak dowozić zadania w czasie krótszym o połowę"'
          />

          <LinkButton
            href="https://krzysztof.io"
            title="📝 Blog i notatki"
          />

          <LinkButton
            href="https://nothinkdo.app"
            title="💻 Moja aplikacja do zadań - NoThinkDo"
          />

          <LinkButton
            href="https://www.youtube.com/watch?v=URNzJb4rG0k"
            title='🎤 Odcinek podcastu - "Marka osobista to efekt uboczny"'
          />
        </div>
      </div>
    </Layout>
  )
}

LinksPage.theme = 'dark'

export default LinksPage
