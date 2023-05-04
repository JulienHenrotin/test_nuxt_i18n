import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import type { NuxtConfig } from 'nuxt/schema'

/**
 * The array of locales used
 * The first one is the fallback and the default one
*/
export const locales = [
  { code: 'fr', iso: 'fr-FR', file: 'fr-FR.json' },
  { code: 'en', iso: 'en-US', file: 'en-US.json' },
] as LocaleObject[]

export default {
  locales,
  defaultLocale: locales.at(0)?.code,
  langDir: 'locales/',
  lazy: true,
  strategy: 'prefix_and_default',
  detectBrowserLanguage: {
    fallbackLocale: locales.at(0)?.code,
  },
  vueI18n: 'configs/vue-i18n.config.ts',
  debug: true,
} as NuxtConfig['i18n']
