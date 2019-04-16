const fs = require('fs')
const path = require('path')

let rOpt = null

function deleteFile(file) {
  fs.unlinkSync(path.resolve(process.cwd(), rOpt.projectName, file))
}

module.exports = (api, options, rootOptions) => {
  rOpt = rootOptions

  if (rootOptions.router) {
    require('./router')(api, rootOptions)
  }

  if (rootOptions.vuex) {
    require('./vuex')(api, rootOptions)
  }

  api.render('./template', {
    doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript')
  })


  api.onCreateComplete(() => {
    // 删除多余文件
    deleteFile('src/assets/logo.png')
    deleteFile('src/components/HelloWorld.vue')
    deleteFile('src/views/About.vue')
    rootOptions.router && deleteFile('src/router.js')
    rootOptions.vuex && deleteFile('src/store.js')
  })
}