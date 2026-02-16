// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: {
    strict: true,
    // typeCheck: true,
  },

  css: [join(__dirname, "assets/scss/main.scss")],

  modules: ["@nuxt/fonts"],

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
