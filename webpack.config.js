var webpack = require('webpack');

module.exports = {
  entry: './src/index2.js',

  output: {
    filename: './dist/dashboard.bundle.min.js',
    publicPath: ''
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify("prod")
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery"
    })
  ],
  externals: {
    jquery: "jQuery",
    bootstrap: "bootstrap"
  },
};
