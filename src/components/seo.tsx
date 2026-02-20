import React from 'react'
import Head from 'next/head'
import { config } from '@/config'

type SEOProps = {
  description?: string
  title: string
  slug?: string | null
  ogType?: string
  ogImagePath?: string | undefined
}

const SEO = ({
  description = '',
  title,
  slug = null,
  ogType = 'website',
  ogImagePath,
}: SEOProps) => {
  const metaDescription = description || config.siteMetadata.description
  const siteTitle = config.siteMetadata.title
  const siteUrl = config.siteMetadata.siteUrl

  const ogImageAbsoluteUrl = ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/bear.png`
  const postUrl = slug ? `${config.siteMetadata.siteUrl}/${slug}/` : siteUrl

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta
        name="description"
        content={metaDescription}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={metaDescription}
      />
      <meta
        property="og:type"
        content={ogType}
      />
      <meta
        property="og:image"
        content={ogImageAbsoluteUrl}
      />
      <meta
        property="og:url"
        content={postUrl}
      />

      <meta
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:creator"
        content={`@${config.siteMetadata.socialHandle}`}
      />
      <meta
        property="twitter:title"
        content={title}
      />
      <meta
        property="twitter:description"
        content={metaDescription}
      />

      <meta
        property="google-site-verification"
        content="hNVIfO59yoXw8FWgyNDGChui0n_ate1qgW15fBDJkLY"
      />

      {/* <meta property="og:site_name" content={siteTitle} /> */}

      <link
        rel="manifest"
        href="/manifest.json"
      />
      <link
        rel="icon"
        href="/favicon-32x32.png"
        type="image/png"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
      />
      <meta
        name="theme-color"
        content="#ff2966"
      />
    </Head>
  )
}

export default SEO
