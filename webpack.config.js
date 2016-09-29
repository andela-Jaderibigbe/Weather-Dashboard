const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');


const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app   : path.join(__dirname, 'app'),
  build : path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app
  },
  output : {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      progress: true,

      stats: 'errors-only',

      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT || '3000'  
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true
      })
    ],
    module: {
      loaders: [
        {test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: PATHS.app},
        {test: /\.css$/, loaders: ['style', 'css'], include: PATHS.app},
        {test: /\.scss$/, loaders: ['style', 'css', 'sass']}
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
