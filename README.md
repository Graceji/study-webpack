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