import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShareButtons from "../components/shareButtons"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const { contentPath } = pageContext
  const post = data.markdownRemark
  const { slug } = post.fields
  const siteUrl = data.site.siteMetadata.siteUrl
  const siteTitle = data.site.siteMetadata?.title || siteUrl
  const social = data.site.siteMetadata.social.social

  const { banner } = post.frontmatter
  const bannerPath = banner && banner.childImageSharp.fixed.src


  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        slug={slug}
        ogType="article"
        ogImagePath={bannerPath}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <footer>
          <p>
            ---
            <br />
            Ostatnia aktualizacja: {post.frontmatter.date}
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://github.com/kjendrzyca/krzysztof.io/blob/master/content/${contentPath}${slug}`}
            >
              Edytuj ten wpis na GitHubie
            </a>
          </p>
        </footer>
      </article>
      {post.frontmatter.shareButtons === false ? null : (<ShareButtons
         url={`${siteUrl}${slug}`}
         title={post.frontmatter.title}
         socialHandle={social}
      />)}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          social
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        shareButtons
        banner {
          childImageSharp {
            fixed(width: 1200) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
