// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: {
    strict: true,
    // typeCheck: true,
  },

  css: ["~/assets/scss/main.scss"],

  modules: ["@nuxt/fonts"],

  components: {
    dirs: ["~/components", { path: "~/components", pathPrefix: false }],
  },

  fonts: {
    families: [
      {
        name: "Golos Text",
        provider: "google",
        weights: [400, 500, 600, 700],
      },
    ],
  },
});
