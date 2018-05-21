// next.config.js

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/armature' : '',
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/styles/typography': { page: '/styles/typography' },
      '/styles/colors': { page: '/styles/typography' },
      '/ui/buttons': { page: '/ui/buttons'},
      '/ui/cards': { page: '/ui/cards'},
      '/ui/lightbox': { page: '/ui/lightbox'},
      '/ui/popovers': { page: '/ui/popovers'},
      '/ui/inputs/autocomplete': { page: '/ui/inputs/autocomplete'},
      '/ui/inputs/datetime': { page: '/ui/inputs/datetime'}
    }
  }
}