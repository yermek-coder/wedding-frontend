// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        // {rel: "stylesheet",href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"}
      ],
      script: [
      ]
    }
  },
  css: ['~/assets/style/global.scss'],
})

