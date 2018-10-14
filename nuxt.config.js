const pkg = require('./package')


module.exports = {
  mode: 'universaln',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Poppins" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/sass/main.scss', lang: 'sass' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/scroller-plugin',
    { src: '~/plugins/polyfills.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-sass-resources-loader', [
        '~assets/sass/helpers/_1-helpers.scss'
      ]
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ]
  },
  router: {
    middleware: 'pages'
  }
}
