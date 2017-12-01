module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'build.js',
    path: __dirname + '/dist',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '*',
      '.js',
      '.vue'
    ]
  }
}
