import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  router: {
    middleware: ['redirects'],
    trailingSlash: true,
  },
  head: {
    titleTemplate: '%s - Shacman',
    title: 'Shacman',
    htmlAttrs: {
      lang: 'ru-RU'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "/js/Ymetrika.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/ymapPlugin.js', mode: 'client' }, 
    { src: '~/plugins/localStorage.js', mode: 'client' },
    { src: '~/plugins/v-mask.js', mode: 'client' },
    { src:  '~/plugins/filters.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/redirect-module'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  axios: {
    baseURL: "https://api.shacman-rf.ru/api",
  },
  
  redirect: [
    {
        from: '^.*(?<!\/)$',
        to: (from, req) => req.url + '/'
    }
  ],

  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {customProperties: true},
      themes: {
        light: {
          primary: '#0068AA',
          secondary: '#66ACE7',
          third: '#FEC210',
          thirdBlack: '#E4AE0E',
          anchor: "#FFFFFF",
          accent: '#8c9eff',
          error: '#EE1B2D',
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
