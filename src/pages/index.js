import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexLink({ title, slug }) {
  return (
    <li>
      <Link to={slug} itemProp="url">
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
        <SEO title="All posts" />
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
      <SEO title="All posts" />
      <p>
        Heja! 👋
      </p>
      <p>
        Nazywam się Krzysztof Jendrzyca. Zawodowo jestem programistą, a po godzinach prowadzę stronę <a href="https://skutecznyprogramista.pl">skutecznyprogramista.pl</a>, gdzie staram się przekazać początkującym programistom wszystko, co może im pomóc wejść na wyższy poziom i uniknąć poważniejszych błędów, które ja popełniłem.
      </p>

      <p>
        Staram się zrozumieć jak prowadzić własną działalność w internecie tak, żeby zredukować ilość bullshitu do zera oraz zmaksymalizować dostarczaną wartość.
      </p>

      <p>
        Ta strona powstała dlatego, że potrzebowałem miejsca do myślenia, <a href="https://www.swyx.io/learn-in-public/">uczenia się na głos</a> i skracania pętli feedbackowej. Znajdziesz tutaj moje obserwacje i notatki.
      </p>

      <blockquote>
        <p>
          An idea kept private is as good as one you never had. And a fact no one can reproduce is no fact at all. Making something public always means to write it down so it can be read. There is no such thing as a history of unwritten ideas.{' '}
          <a href="https://www.goodreads.com/book/show/34507927-how-to-take-smart-notes">~Sönke Ahrens</a>
        </p>
      </blockquote>

      <p>
        Jeśli coś, co tu przeczytasz, w jakiś sposób z Tobą zarezonuje, to podziel się tym z innymi i daj mi znać. Feedback, zwłaszcza ten konstruktywny, jest zawsze mile widziany.
      </p>
      <p>
        Obecnie najlepiej złapać mnie na <a href="https://instagram.com/kjendrzyca/">Instagramie</a> lub <a href="https://twitter.com/kjendrzyca/">Twitterze</a>.
      </p>

      <h3>Notatki z książek i artykułów</h3>
      <ul>
        <IndexLink
          title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
          slug="elon-musk-ashlee-vance"
        />
        <IndexLink
          title="The Cook and the Chef: Musk’s Secret Sauce"
          slug="the-cook-and-the-chef"
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
