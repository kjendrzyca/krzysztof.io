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

        <p className="links-intro">Pierwszy raz tutaj? Zacznij od ebooka.</p>

        <div className="links-container">
          <LinkButton
            href="https://krzysztof.io/spwz-ebook/"
            title='⏱️ Ebook (free): "Jak dowozić zadania w czasie krótszym o połowę"'
          />

          <LinkButton
            href="https://skutecznapracawzespole.pl"
            title="🧑‍💻 Skuteczna praca w zespole: program szkoleniowy (+ darmowe materiały na maila)"
          />

          <div className="links-divider" />

          <LinkButton
            href="https://krzysztof.io"
            title="📝 Blog: notatki i rozkminy"
          />

          <LinkButton
            href="https://nothinkdo.app"
            title="💻 NoThinkDo: moja aplikacja do zadań"
          />

          <LinkButton
            href="https://www.youtube.com/watch?v=URNzJb4rG0k"
            title='🎤 Podcast: "Marka osobista to efekt uboczny"'
          />
        </div>
      </div>
    </Layout>
  )
}

LinksPage.theme = 'dark'

export default LinksPage
