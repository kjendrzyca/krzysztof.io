import { GetStaticProps, GetStaticPaths } from 'next'
import { Layout } from '@/components/layout'
import { ContentImage } from '@/components/ContentImage'
import { MetaPixel } from '@/components/MetaPixel'
import { PostMarkdown } from '@/components/PostMarkdown'
import SEO from '@/components/seo'
import { config } from '@/config'
import {
  getContentLanguage,
  getTranslationEntries,
  type ContentLanguage,
  type TranslationMap,
} from '@/lib/content-language'
import { getAllSlugs, getPost } from '@/lib/posts'
import {
  getContentImageMetadataByFileName,
  type ContentImageMetadata,
  type ContentImageMetadataByFileName,
  type ContentPath,
} from '@/lib/content-images'
import { getFallbackContentImageMetadata, parseMarkdownImageSrc } from '@/lib/markdown-images'

type FrontmatterData = {
  title: string
  createdAt: string
  updatedAt: string
  description: string
  isLanding?: boolean
  banner?: string
  bannerAlt?: string
  language?: ContentLanguage
  translations?: TranslationMap
}

type PostProps = {
  content: string
  frontmatter: FrontmatterData
  slug: string
  contentPath: ContentPath
  bannerPath: string | null
  bannerImageProps: ContentImageMetadata | null
  contentImageMetadataByFileName: ContentImageMetadataByFileName
}

type ArticleFooterProps = {
  contentPath: ContentPath
  createdAt: string
  slug: string
  updatedAt: string
}

type LanguageLinksProps = {
  currentLanguage: ContentLanguage
  translations?: TranslationMap | undefined
}

const getAdjustedTitle = (title: string, contentPath: ContentPath) => {
  if (contentPath === 'notes') {
    return `${title}: podsumowanie, notatki i przemyślenia`
  }

  return title
}

const translationLabels: Record<ContentLanguage, Record<ContentLanguage, string>> = {
  pl: {
    pl: 'Wersja polska',
    en: 'Wersja angielska',
  },
  en: {
    pl: 'Polish version',
    en: 'English version',
  },
}

const translationNavLabels: Record<ContentLanguage, string> = {
  pl: 'Wersje językowe',
  en: 'Translations',
}

const LanguageLinks = ({ currentLanguage, translations }: LanguageLinksProps) => {
  const translationEntries = getTranslationEntries(translations).filter(
    ([language]) => language !== currentLanguage,
  )

  if (!translationEntries.length) {
    return null
  }

  return (
    <nav
      className="content-language-links"
      aria-label={translationNavLabels[currentLanguage]}
    >
      {translationEntries.map(([language, translatedSlug]) => (
        <a
          key={language}
          href={`/${translatedSlug}/`}
        >
          {translationLabels[currentLanguage][language]}
        </a>
      ))}
    </nav>
  )
}

const ArticleFooter = ({ contentPath, createdAt, slug, updatedAt }: ArticleFooterProps) => {
  return (
    <footer>
      <p style={{ marginBottom: 0 }}>
        ---
        <br />
        Opublikowano: <span className="date">{createdAt}</span>
        <br />
        Ostatnia aktualizacja: <span className="date">{updatedAt}</span>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/kjendrzyca/krzysztof.io/blob/main/content/${contentPath}/${slug}`}
        >
          Edytuj ten wpis na GitHubie
        </a>
      </p>
    </footer>
  )
}

const Post = ({
  content,
  frontmatter,
  slug,
  contentPath,
  bannerPath,
  bannerImageProps,
  contentImageMetadataByFileName,
}: PostProps) => {
  const {
    title,
    createdAt,
    updatedAt,
    description,
    isLanding,
    bannerAlt,
    language: rawLanguage,
    translations,
  } = frontmatter
  const siteUrl = config.siteMetadata.siteUrl
  const pageTitle = title || siteUrl
  const adjustedTitle = getAdjustedTitle(title, contentPath)
  const language = getContentLanguage(rawLanguage)

  const getContentImageMetadata = (fileName: string) => {
    return (
      contentImageMetadataByFileName[fileName] ??
      getFallbackContentImageMetadata({ contentPath, slug, fileName })
    )
  }

  return (
    <Layout
      isLandingPage={isLanding || false}
      contentWidth="media"
    >
      <SEO
        title={adjustedTitle}
        description={description}
        slug={slug}
        ogType={contentPath === 'pages' ? 'website' : 'article'}
        ogImagePath={bannerPath ?? undefined}
        language={language}
        translations={translations}
      />
      <MetaPixel slug={slug} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{pageTitle}</h1>
          <LanguageLinks
            currentLanguage={language}
            translations={translations}
          />
        </header>
        <section
          className="post-content"
          itemProp="articleBody"
        >
          {!bannerImageProps ? null : (
            <ContentImage
              {...bannerImageProps}
              alt={bannerAlt || 'Banner image'}
              size="wide"
              variant="banner"
              priority
            />
          )}

          <PostMarkdown
            content={content}
            getContentImageMetadata={getContentImageMetadata}
          />
        </section>
        {contentPath !== 'pages' && (
          <ArticleFooter
            contentPath={contentPath}
            createdAt={createdAt}
            slug={slug}
            updatedAt={updatedAt}
          />
        )}
      </article>
    </Layout>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }

  const post = getPost(slug)

  if (post.frontmatter.published === false) {
    return {
      notFound: true,
    }
  }

  const { contentPath } = post
  const { banner } = post.frontmatter as {
    banner?: string
  }

  const contentImageMetadataByFileName = await getContentImageMetadataByFileName({
    contentPath,
    slug,
  })
  const bannerFileName = banner ? parseMarkdownImageSrc(banner).fileName : null
  const bannerPath = bannerFileName ? `/images/${contentPath}/${slug}/${bannerFileName}` : null
  const bannerImageProps = bannerFileName
    ? (contentImageMetadataByFileName[bannerFileName] ??
      getFallbackContentImageMetadata({ contentPath, slug, fileName: bannerFileName }))
    : null

  return {
    props: {
      ...post,
      bannerPath,
      bannerImageProps,
      contentImageMetadataByFileName,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs()

  // create paths with `slug` param
  const paths = slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}
