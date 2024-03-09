import 'server-only'
import type { Locale } from '@/configs/i18n.config'
import { dictionaries } from '.'

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
