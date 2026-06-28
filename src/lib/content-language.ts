export const contentLanguages = ['pl', 'en'] as const

export type ContentLanguage = (typeof contentLanguages)[number]
export type TranslationMap = Partial<Record<ContentLanguage, string>>

export const defaultContentLanguage: ContentLanguage = 'pl'

export const contentLocaleByLanguage: Record<ContentLanguage, string> = {
  pl: 'pl_PL',
  en: 'en_US',
}

export const isContentLanguage = (value: unknown): value is ContentLanguage => {
  return contentLanguages.some((language) => language === value)
}

export const getContentLanguage = (value: unknown): ContentLanguage => {
  return isContentLanguage(value) ? value : defaultContentLanguage
}

export const getTranslationEntries = (
  translations: TranslationMap | undefined,
): Array<[ContentLanguage, string]> => {
  if (!translations) {
    return []
  }

  return Object.entries(translations).flatMap(([language, slug]) => {
    if (!isContentLanguage(language) || typeof slug !== 'string' || !slug.trim()) {
      return []
    }

    return [[language, slug]]
  })
}
