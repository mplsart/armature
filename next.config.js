// next.config.js
module.exports = {
  assetPrefix: '/armature',
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/typography': { page: '/typography' },
      //'/ui/': { page: '/ui' },
      '/ui/buttons': { page: '/ui/buttons'},
      '/ui/lightbox': { page: '/ui/lightbox'},
      '/ui/popovers': { page: '/ui/popovers'},
    }
  }
}