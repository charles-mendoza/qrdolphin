const path = require('path');
const webpack = require('webpack');
const {
  override,
  disableEsLint,
  babelInclude,
  addWebpackPlugin
} = require('customize-cra');

module.exports = override(
  // disable eslint in webpack
  disableEsLint(),

  babelInclude([
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
  ]),

  addWebpackPlugin(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      // Add support for the __DEV__ global variable
      __DEV__: process.env.NODE_ENV !== 'production',
    })
  )
);
