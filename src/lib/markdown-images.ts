import type { ContentImageMetadata, ContentPath } from '@/lib/content-images'

export type MarkdownImageSize = 'normal' | 'narrow' | 'wide'

export type ParsedMarkdownImageSrc = {
  fileName: string
  size: MarkdownImageSize
}

const isMarkdownImageSize = (value: string | null): value is MarkdownImageSize => {
  return value === 'normal' || value === 'narrow' || value === 'wide'
}

export const parseMarkdownImageSrc = (rawSrc: string): ParsedMarkdownImageSrc => {
  const [rawPath = '', rawQuery = ''] = rawSrc.split('?')
  const fileName = rawPath.replace(/^\/\.\//, '').replace(/^\.?\//, '')
  const size = new URLSearchParams(rawQuery).get('size')

  return {
    fileName,
    size: isMarkdownImageSize(size) ? size : 'normal',
  }
}

export const getFallbackContentImageMetadata = ({
  contentPath,
  slug,
  fileName,
}: {
  contentPath: ContentPath
  slug: string
  fileName: string
}): ContentImageMetadata => {
  return {
    src: `/images/${contentPath}/${slug}/${fileName}`,
    width: 1200,
    height: 675,
    blurDataURL: '',
  }
}
