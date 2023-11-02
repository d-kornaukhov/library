const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // use: [
        //   {
        //     loader: 'style-loader',
        //   },
        //   {
        //     loader: 'css-loader',
        //   },
        //   {
        //     loader: require.resolve('sass-loader'),
        //     options: {
        //       implementation: require('sass'),
        //     },
        //   },
        // ]
      },
    ],
  },


};