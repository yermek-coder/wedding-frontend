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
  components: {
    global: true,
    dirs: ['~/components']
  },
  css: ['~/assets/style/global.scss'],
  // vite: {
  //   server: {
  //     proxy: {
  //         "/api": {
  //             target: "http://localhost:4000",
  //             // target: "https://wedding-backend-wq95.onrender.com",
  //             changeOrigin: true,
  //             secure: false,
  //             ws: true,
  //             rewrite: path => path.replace(/^\/api/, "")
  //         }
  //     }
  // },
  // }
})

