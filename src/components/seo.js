import React from "react"
import PropTypes from "prop-types"

import Head from "next/head"
import { config } from "@/config"

const SEO = ({ description = '', title, slug = null, ogType = 'website', ogImagePath }) => {
  const metaDescription = description || config.siteMetadata.description
  const siteTitle = config.siteMetadata.title
  const siteUrl = config.siteMetadata.siteUrl

  const ogImageAbsoluteUrl = ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/bear.png`
  const postUrl = slug ? `${config.siteMetadata.siteUrl}/${slug}/` : siteUrl

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImageAbsoluteUrl} />
      <meta property="og:url" content={postUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={`@${config.siteMetadata.social.social}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />

      <meta property="google-site-verification" content="hNVIfO59yoXw8FWgyNDGChui0n_ate1qgW15fBDJkLY" />

      {/* <meta property="og:site_name" content={siteTitle} /> */}

      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon-32x32.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#ff2966" />
    </Head>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
}

export default SEO
