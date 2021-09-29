/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { MailerLiteScriptSrc, MailerLiteSuccessFunctionScript } from '../components/mailerlite'

import logoSrc from '../../content/assets/bear.png'

const SEO = ({ description, lang, meta, title, slug, ogType = 'website' }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              social
            }
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata.siteUrl
  const bannerAbsoluteUrl = `${siteUrl}${logoSrc}`
  const postUrl = slug ? `${site.siteMetadata.siteUrl}${slug}` : site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          property: `og:image`,
          content: bannerAbsoluteUrl,
        },
        {
          property: `og:url`,
          content: postUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@${site.siteMetadata.social.social}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "google-site-verification",
          content: "hNVIfO59yoXw8FWgyNDGChui0n_ate1qgW15fBDJkLY",
        }
      ].concat(meta)}
    >
      <script>
        {MailerLiteSuccessFunctionScript}
      </script>
      <script src={MailerLiteScriptSrc} type="text/javascript" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `pl`,
  meta: [],
  description: ``,
  slug: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
}

export default SEO
