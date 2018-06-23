const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader传参的集中方式
        /**
         *  use: ['style-loader', 'css-loader?minimize'],
         *  use: ['style-loader', 'css-loader?{"minimize": true}'],
         *  use: ['style-loader', 'css-loader?minimize=true'],
         *  use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                },
              },
            ],
        */
        // 提取css文件
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
  ],
};