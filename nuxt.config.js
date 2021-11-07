import data from "./data.json";

export default {
  target: "static",
  router: {
    // base: "/instalater-in-praha/",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.$t("title"),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: this.$t("description"),
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$t("keywords"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("description"),
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("title"),
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#ffffff",
        },
        ...i18nHead.meta,
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        ...i18nHead.link,
      ],
    };
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/fonts/fonts.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n", "@nuxt/http"],

  http: {
    // proxyHeaders: false
  },

  i18n: {
    baseUrl: data.base_url,
    locales: [
      { code: "cs", iso: "cs-CZ", file: "cs.js", dir: "ltr", name: "Česky" },
      { code: "en", iso: "en-US", file: "en.js", dir: "ltr", name: "English" },
      { code: "ru", iso: "ru-RU", file: "ru.js", dir: "ltr", name: "Русский" },
    ],
    defaultLocale: "cs",
    strategy: "prefix_except_default",
    langDir: "locales/",
    vueI18n: {
      fallbackLocale: "cs",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
