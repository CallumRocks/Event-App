var webpack = require('webpack');
var $ = require("jquery");
module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  // devServer: {
  //   headers: { 
  //    " Access-Control-Allow-Headers": "Content-Type, Accept, X-Requested-With, Session",
  //     "Access-Control-Allow-Headers": "X-Custom-Header",
  //     // "Access-Control-Allow-Origin": "http://localhost:8080",
  //     // "Access-Control-Allow-Headers": "Content-Type, Accept",
  //     "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  //     "Access-Control-Allow-Credentials": "true",
  //     "Content-Type": "text/plain"
  //   }
  // }, 
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};