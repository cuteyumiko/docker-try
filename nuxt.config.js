module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'http://static.99114.com/static/portal/cssv3/tbcommon_v3.0.css' },
      { rel: 'stylesheet', href: 'http://static.99114.com/static/menu/css/top_v3.0.css' },
      { rel: 'stylesheet', href: 'http://static.99114.com/static/portal/cssv3/index_v3.0.css' }
    ],
    script: [
      { src: 'http://cdn.bootcss.com/jquery/1.8.0/jquery-1.8.0.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  // css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    // analyze: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },
  plugins: [
      { src: '~plugins/main', ssr: true },
      { src: '~plugins/config', ssr: false },
  ],
  
}
