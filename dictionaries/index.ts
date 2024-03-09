export const dictionaries = {
  en: () =>
    import('@/dictionaries/languages/en.json').then((module) => module.default),
  pt: () =>
    import('@/dictionaries/languages/pt.json').then((module) => module.default),
  es: () =>
    import('@/dictionaries/languages/es.json').then((module) => module.default),
}
