import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexLink({ title, slug, hot }) {
  return (
    <li>
      <Link to={slug} itemProp="url">
        {hot ? <span role="img" aria-label="Nowy wpis">🔥 </span> : null}
        <span itemProp="headline">{title}</span>
      </Link>
    </li>
  )
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Strona główna" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
        <Bio />
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Strona główna" />

      <p>
        Heja! 👋
      </p>
      <p>
        Nazywam się Krzysztof Jendrzyca. Zawodowo jestem programistą i prowadzę stronę <a href="https://skutecznyprogramista.pl">skutecznyprogramista.pl</a>.
      </p>

      <p>
        Ta <a href="https://joelhooks.com/digital-garden">strona</a> to moje miejsce do myślenia, <a href="https://www.swyx.io/learn-in-public/">uczenia się na głos</a> i skracania pętli feedbackowej.{' '}
        Jest to baza wypadowa wszystkich moich projektów.
      </p>

      <p>
        Pierwszym z nich jest <Link to="po-co">znalezienie interesujących rzeczy, nad którymi będę chciał pracować</Link>.
      </p>

      <p>
        Znajdziesz też tutaj moje obserwacje i notatki na tematy, które obecnie mnie interesują,{' '}
        m.in. tworzenie treści i notatek, tworzenie produktów, produktywność, praca w IT, technologie webowe (React, Node).
      </p>

      <blockquote>
        <p>
          An idea kept private is as good as one you never had. And a fact no one can reproduce is no fact at all. Making something public always means to write it down so it can be read.{' '}
          <a href="https://www.goodreads.com/book/show/34507927-how-to-take-smart-notes">~Sönke Ahrens</a>
        </p>
      </blockquote>

      <p>
        Jeśli coś, co tu przeczytasz, w jakiś sposób z Tobą zarezonuje, to podziel się tym z innymi i daj mi znać. Chętnie przyjmę konstruktywny feedback.
      </p>
      <p>
        Żeby pogadać złap mnie na <a href="https://instagram.com/kjendrzyca/">Instagramie</a> lub <a href="https://twitter.com/kjendrzyca/">Twitterze</a>.
      </p>

      <h3>Wybrane wpisy</h3>
      <ul>
        <IndexLink
          title="Prywatny blog"
          slug="prywatny-blog"
          hot
        />
        <IndexLink
          title="Cyfrowe odgracanie i walka z uzależnieniem od aplikacji"
          slug="digital-declutter"
          hot
        />
        <IndexLink
          title="Upgrade z juniora na doradcę technicznego"
          slug="upgrade"
        />
        <IndexLink
          title={`Praca na "pół gwizdka"`}
          slug="pol-gwizdka"
        />
        <IndexLink
          title="Po co to wszystko?"
          slug="po-co"
        />
        <IndexLink
          title="Zamień to w coś swojego"
          slug="cos-swojego"
        />
        <IndexLink
          title="Skup się na procesie, a nie na wynikach"
          slug="proces"
        />
        <IndexLink
          title="Dokumentuj zamiast tworzyć"
          slug="dokumentuj-zamiast-tworzyc"
        />
        <IndexLink
          title="Second Brain"
          slug="second-brain"
        />
        <IndexLink
          title="Rób swoje"
          slug="rob-swoje"
        />
      </ul>

      <h3>Notatki z książek, artykułów i podcastów</h3>
      <ul>
        <IndexLink
          title="Managing Oneself"
          slug="managing-oneself"
          hot
        />
        <IndexLink
          title="Digital Minimalism"
          slug="digital-minimalism"
          hot
        />
        <IndexLink
          title="Company of One"
          slug="company-of-one"
        />
        <IndexLink
          title="Live: Płatne newslettery w Polsce"
          slug="platne-newslettery-w-polsce"
        />
        <IndexLink
          title="The Building a Second Brain Podcast"
          slug="basb-podcast"
        />
        <IndexLink
          title="How to Win Friends and Influence People"
          slug="how-to-win-friends-and-influence-people"
        />
      </ul>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
        }
      }
    }
  }
`
