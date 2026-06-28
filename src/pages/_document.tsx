import Document, { Html, Head, Main, NextScript, type DocumentContext } from 'next/document'
import { getContentLanguage, type ContentLanguage } from '@/lib/content-language'
import { getPost } from '@/lib/posts'

type CustomDocumentProps = {
  language: ContentLanguage
}

const getPageLanguage = (slug: unknown): ContentLanguage => {
  if (typeof slug !== 'string') {
    return getContentLanguage(undefined)
  }

  try {
    const { frontmatter } = getPost(slug)

    return getContentLanguage(frontmatter.language)
  } catch {
    return getContentLanguage(undefined)
  }
}

export default class CustomDocument extends Document<CustomDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      language: getPageLanguage(ctx.query.slug),
    }
  }

  render() {
    return (
      <Html lang={this.props.language}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
