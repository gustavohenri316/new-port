'use client'
import type { Locale } from '@/configs/i18n.config'
import { dictionaries } from '.'

export const getDictionary = async (locale: Locale) => {
  if (!locale) return
  if (dictionaries[locale]) {
    const dictionary = await dictionaries[locale]()
    return dictionary
  } else {
    throw new Error(`Dictionary not available for locale: ${locale}`)
  }
}
