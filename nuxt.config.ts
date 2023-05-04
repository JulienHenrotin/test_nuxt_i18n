import i18n from './config/i18n.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: {
  //   enabled: true
  // },
   modules: [
    '@nuxt/devtools',
    ['@nuxtjs/i18n', i18n]
  ],
})
