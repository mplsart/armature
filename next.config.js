// next.config.js

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/armature' : '',
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/typography': { page: '/typography' },
      '/ui/buttons': { page: '/ui/buttons'},
      '/ui/lightbox': { page: '/ui/lightbox'},
      '/ui/popovers': { page: '/ui/popovers'},
      '/ui/inputs/autocomplete': { page: '/ui/inputs/autocomplete'},
      '/ui/inputs/datetime': { page: '/ui/inputs/datetime'}
    }
  }
}