import fs from 'fs/promises'
import path from 'path'

export type ContentPath = 'blog' | 'notes' | 'pages'

export type ContentImageMetadata = {
  src: string
  width: number
  height: number
  blurDataURL: string
}

export type ContentImageMetadataByFileName = Record<string, ContentImageMetadata>

const allowedImageFileExtensions = new Set(['.png', '.jpg', '.jpeg', '.gif'])

const isAllowedImageFile = (fileName: string) => {
  return allowedImageFileExtensions.has(path.extname(fileName).toLowerCase())
}

const isErrorWithCode = (error: unknown): error is { code: string } => {
  return typeof error === 'object' && error !== null && 'code' in error
}

type GetContentImageMetadataByFileNameInput = {
  contentPath: ContentPath
  slug: string
}

export const getContentImageMetadataByFileName = async ({
  contentPath,
  slug,
}: GetContentImageMetadataByFileNameInput): Promise<ContentImageMetadataByFileName> => {
  const contentDirectory = path.join(process.cwd(), 'content', contentPath, slug)

  let fileNames: string[]

  try {
    fileNames = await fs.readdir(contentDirectory)
  } catch (error) {
    if (isErrorWithCode(error) && error.code === 'ENOENT') {
      return {}
    }

    throw error
  }

  const imageFileNames = fileNames.filter(isAllowedImageFile)

  if (imageFileNames.length === 0) {
    return {}
  }

  const { getPlaiceholder } = await import('plaiceholder')

  const metadataEntries = await Promise.all(
    imageFileNames.map(async (fileName) => {
      const filePath = path.join(contentDirectory, fileName)
      const buffer = await fs.readFile(filePath)
      const { metadata, base64 } = await getPlaiceholder(buffer, { size: 10 })

      return [
        fileName,
        {
          src: `/images/${contentPath}/${slug}/${fileName}`,
          width: metadata.width,
          height: metadata.height,
          blurDataURL: base64,
        },
      ] as const
    }),
  )

  return Object.fromEntries(metadataEntries)
}
