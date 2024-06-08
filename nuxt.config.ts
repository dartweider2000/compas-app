// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/scss/styles.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "PT Sans": [400, 700],
    },
  },
});
