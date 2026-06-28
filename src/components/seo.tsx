import React from 'react'
import Head from 'next/head'
import { config } from '@/config'
import {
  contentLocaleByLanguage,
  defaultContentLanguage,
  getTranslationEntries,
  type ContentLanguage,
  type TranslationMap,
} from '@/lib/content-language'

type SEOProps = {
  description?: string
  title: string
  slug?: string | null
  ogType?: string
  ogImagePath?: string | undefined
  language?: ContentLanguage
  translations?: TranslationMap | undefined
}

const SEO = ({
  description = '',
  title,
  slug = null,
  ogType = 'website',
  ogImagePath,
  language = defaultContentLanguage,
  translations,
}: SEOProps) => {
  const metaDescription = description || config.siteMetadata.description
  const siteTitle = config.siteMetadata.title
  const siteUrl = config.siteMetadata.siteUrl

  const ogImageAbsoluteUrl = ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/bear.png`
  const postUrl = slug ? `${config.siteMetadata.siteUrl}/${slug}/` : null
  const translationEntries = getTranslationEntries(translations).filter(
    ([translationLanguage]) => translationLanguage !== language,
  )
  const alternateSlugs = new Map<ContentLanguage, string>()

  if (slug && translationEntries.length) {
    alternateSlugs.set(language, slug)
  }

  for (const [translationLanguage, translationSlug] of translationEntries) {
    alternateSlugs.set(translationLanguage, translationSlug)
  }

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
        property="og:locale"
        content={contentLocaleByLanguage[language]}
      />
      <meta
        property="og:image"
        content={ogImageAbsoluteUrl}
      />
      {postUrl ? (
        <meta
          property="og:url"
          content={postUrl}
        />
      ) : null}
      {postUrl ? (
        <link
          rel="canonical"
          href={postUrl}
        />
      ) : null}
      {Array.from(alternateSlugs.entries()).map(([alternateLanguage, alternateSlug]) => (
        <link
          key={alternateLanguage}
          rel="alternate"
          hrefLang={alternateLanguage}
          href={`${siteUrl}/${alternateSlug}/`}
        />
      ))}

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
