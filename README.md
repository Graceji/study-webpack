# 深入浅出Webpack #
` 只记录自己平时没有注意的点 `
## 第一章 入门 ##
1. 入口文件配置
    
    entry:' ' => 文件的路径是相对于项目根目录
2. 使用Loader

    每个Loader都可以通过URL querystring 的方式传入参数，例如 ?key=value&foo=bar，或者一个 JSON 对象，例如 ?{"key":"value","foo":"bar"}。
    也可以通过options配置。
    例如：
      - css-loader?minimize
      - css-loader?minimize=true
      - css-loader?{"minimize": true}
      - {
          loader: 'css-loader',
          options: {
            minimize: true,
          }
        }
  3. 使用插件
  -  [contenthash:8]: 根据文件内容算出的8位Hash值。
  - 从webpack4开始，extract-text-webpack-plugin 被 mini-css-extract-plugin 取代。
  4. 使用DevServer
  - webpack-dev-server会将webpack构建出的文件保存在内存中，在要访问输出的文件时，必须通过HTTP服务访问
  - webpack-dev-server不会理会webpack.config.js配置中的output.path属性

  