export default defineNuxtConfig({
  target: 'static',

  // Server-side rendering (for static export)
  ssr: true,

  app: {
    head: {
      title: 'My Static Site',
      meta: [{ name: 'description', content: 'This is my Nuxt static site.' }],
    },
  },

  compatibilityDate: '2025-08-06',
});