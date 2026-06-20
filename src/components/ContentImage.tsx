import NextImage from 'next/image'
import type { ContentImageMetadata } from '@/lib/content-images'
import type { MarkdownImageSize } from '@/lib/markdown-images'

type ContentImageProps = ContentImageMetadata & {
  alt: string
  size: MarkdownImageSize
  priority?: boolean
}

const getContentImageSizes = (size: MarkdownImageSize) => {
  switch (size) {
    case 'narrow':
      return '(max-width: 38rem) calc(100vw - 2.5rem), 28.4rem'
    case 'wide':
      return '(max-width: 38rem) calc(100vw - 2.5rem), 42.6rem'
    case 'normal':
    default:
      return '(max-width: 38rem) calc(100vw - 2.5rem), 35.5rem'
  }
}

export const ContentImage = ({
  src,
  alt,
  width,
  height,
  blurDataURL,
  size,
  priority = false,
}: ContentImageProps) => {
  const placeholderProps = blurDataURL
    ? {
        placeholder: 'blur' as const,
        blurDataURL,
      }
    : {}

  return (
    <figure className={`content-image content-image--${size}`}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={50}
        sizes={getContentImageSizes(size)}
        className="content-image__img"
        {...placeholderProps}
      />
    </figure>
  )
}
