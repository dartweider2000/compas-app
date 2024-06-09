// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/scss/styles.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
  ],
  app: {
    baseURL: "/compas-app/",
    buildAssetsDir: "assets",
  },
  googleFonts: {
    families: {
      "PT Sans": [400, 700],
    },
  },
});
