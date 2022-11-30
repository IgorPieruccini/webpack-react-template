const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    optimization: {  
      minimize: true,
      splitChunks: {
        chunks: 'all',
     },
    },
    module: {
      rules: [
        {
          test: /\.(css)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'style.[contenthash].css' }),
    ]
} 