import NextImage from 'next/image'
import { getAllSlugs, getPost } from "@/lib/posts"
import {Layout} from "@/components/layout"
import ShareButtons from '@/components/shareButtons'
import { config } from '@/config'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import React from 'react'
import SEO from '@/components/seo'

const MarkdownImage = ({ src, alt }) => {
  return (
    <span className="image-wrapper">
        <NextImage
          src={src}
          alt={alt}
          // placeholder="blur"
          fill
          style={{ objectFit: "contain" }}
        />
    </span>
  )
}

const AnchorSvg = () => (
  <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
)

const LinkedHeader = ({ id, text, comp: Comp}) => {
  return (
    <Comp id={id} className="linked-header">
      {text}
      <a href={`#${id}`} aria-label={text} className="header-anchor after">
        <AnchorSvg />
      </a>
    </Comp>
  )
}

const Post = ({ content, frontmatter, slug, contentPath}) => {
  // console.log({content, frontmatter, slug, contentPath})
  const {title, banner, date, shareButtons, description} = frontmatter
  const pageTitle = title || siteUrl

  const siteUrl = config.siteMetadata.siteUrl
  const social = config.siteMetadata.social.social

  const bannerPath = banner && `/images/${contentPath}/${slug}/${banner.replace('./', '')}`

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
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
          <h1 itemProp="headline">{pageTitle}</h1>
        </header>
        <section
          itemProp="articleBody"
        >
          <ReactMarkdown
            components={{
              img: function ({ node, ...props }) {
                const fileName = node.properties.src.replace('./', '');
                const newSrc = `/images/${contentPath}/${slug}/${fileName}`

                return <MarkdownImage {...props} src={newSrc} />
              },
              h2: ({ level, children, ...props }) => <LinkedHeader id={props.id} text={children[0]} comp={(propsy) => <h2 {...propsy} />} />,
              h3: ({ level, children, ...props }) => <LinkedHeader id={props.id} text={children[0]} comp={(propsy) => <h3 {...propsy} />} />,
              h4: ({ level, children, ...props }) => <LinkedHeader id={props.id} text={children[0]} comp={(propsy) => <h4 {...propsy} />} />,
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSlug,
            ]}
          >
            {content}
          </ReactMarkdown>
        </section>
        <footer>
          <p>
            ---
            <br />
            Ostatnia aktualizacja: {date}
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
      </article>
      {shareButtons === false ? null : (<ShareButtons
         url={`${siteUrl}/${slug}`}
         title={pageTitle}
         socialHandle={social}
      />)}
    </Layout>
  )
}

export default Post

export async function getStaticProps({ params }) {
  return {
    props: getPost(params.slug),
  };
}

export async function getStaticPaths() {
  const slugs = getAllSlugs();

  // create paths with `slug` param
  const paths = slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  })

  return {
    paths: paths,
    fallback: false,
  };
}
