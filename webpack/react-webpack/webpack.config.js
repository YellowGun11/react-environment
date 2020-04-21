const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//自动创建html文件
// const CleanWebpackPlugin = require('clean-webpack-plugin');//清除多余文件

module.exports = {
    devtool: 'cheap-module-eval-source-map',// 用于开发调试，方便清楚是那个文件出错 (共有7种)
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js', // 输出的文件名
        path: path.resolve(__dirname, 'build') // 
    },
    module: {
        rules: [{
            //转换css文件
            test: /\.css$/,
            use: "style-loader!css-loader"
        }, {
            //转换scss文件
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
            // 加载时顺序从右向左 
        },{
            //转换less文件
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
            // 加载时顺序从右向左 
        },{
            // 转换文件png|svg|jpg|gif
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            //这个是为了转换js
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    // 开启一个虚拟服务器
    devServer: {
        contentBase: './build',
        port:8081,
        inline:true,
        hot: true
    },
    plugins: [
        //每次编译都会把dist下的文件清除，我们可以在合适的时候打开这行代码，例如我们打包的时候，开发过程中这段代码关闭比较好
        // new CleanWebpackPlugin(['build']),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            //使用一个模板
            template: 'src/index.html'
        })
    ]
};