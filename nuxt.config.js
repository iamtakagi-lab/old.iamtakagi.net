
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s / Takagi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://takagi.netlify.me'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@iam_takagi'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@iam_takagi'
      },
      {
        hid: 'note:card',
        property: 'note:card',
        content: 'summary_large_image'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'takagi webpage'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'takagi webpage'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.imgur.com/2H3huOt.jpg'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet' },
    ]
  },

  manifest: {
    "name":				"Takagi",
    "short_name":		"Takagi",
    "description":		"Takagi webpage",
    "start_url":		"/",
    "display":			"standalone",
    "orientation":		"any",
    "background_color":	"#fff",
    "theme_color":		"#fff",
    "orientation":		"any",
    "icons": [
      {
        "src": "/android-chrome-36x36.png",
        "sizes": "36x36",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-48x48.png",
        "sizes": "48x48",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '@/assets/scss/markdown.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/day',
    '@/plugins/vue-scrollactive',
    '@/plugins/menu.client'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    ['@nuxtjs/google-analytics', {
      id: 'UA-171562434-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/axios',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-7932483299460648',
      pageLevelAds: true,
      analyticsUacct: 'UA-171562434-1',
      analyticsDomainName: 'takagi.netlify.app'
    }]
  ],

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    analyze: true
  },

  loading: { color: '#1DA1F2' },

  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/'] // give the first url to start crawling
  },

  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  colorMode: {
    preference: 'dark'
  },

  axios: {
    proxy: true
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */

  proxy: {
    '/.netlify/': { target: 'http://localhost' }
  }
}
