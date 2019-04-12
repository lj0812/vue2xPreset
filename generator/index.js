module.exports = (api, options, rootOptions) => {
  api.render('./template', {
    doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript')
  })

  if (rootOptions.router) {
    require('./router')(api, rootOptions)
  }

  if (rootOptions.vuex) {
    require('./vuex')(api, rootOptions)
  }
}