module.exports = {
  client: {
    service: {
      name: 'my-app',
      url: 'http://localhost:4000/graphql'
    },

    // 通过扩展名选择要处理的文件
    includes: [
      'src/**/*.vue',
      'src/**/*.js'
    ]
  }
}