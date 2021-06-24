const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const { resolve } = require('path')
const path = require('path')

module.exports = {
    publicPath: './',
    //打包位置
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir),也可以是一个绝对路径
    indexPath: 'index.html',
    //是否使用模拟接口数据（开发环境使用，生产不使用）
    // Mock: !IS_PROD,
    //关闭Eslink校验
    lintOnSave: false,
    //服务器配置
    devServer: {
        host: 'localhost', // ip
        port: 8888, // 端口号
        https: false,
        open: false,
        overlay: {
            //关闭Eslink校验
            warnings: false,
            errors: true,
        },
        proxy: {
            '/api': {
                target: 'https://restapi.amap.com',
                pathRewrite: {
                    '^/api': '/api',
                },
                changeOrigin: true,
            },
        },
    },
    css: {
        extract: IS_PROD, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: !IS_PROD, // 开启 CSS source maps?
        loaderOptions: {
            postcss: {
                plugins: [
                    // 根标签字号大小根据设计稿宽度/flexible.js里的份数得到，这里假定设计稿宽度为3840 3840/10 = 384px
                    require('postcss-px2rem')({ remUnit: 384 }), // 换算的基数
                    // 兼容浏览器，添加前缀
                    require('autoprefixer')({
                        overrideBrowserslist: [
                            'Android 4.1',
                            'iOS 7.1',
                            'Chrome > 31',
                            'ff > 31',
                            'ie >= 8',
                            //'last 2 versions', // 所有主流浏览器最近2个版本
                        ],
                        grid: true,
                    }),
                ],
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
    },
    productionSourceMap: false, // 生产环境关闭sourcemap
    //热更新
    chainWebpack: (config) => {
        // 修复HMR
        config.resolve.symlinks(true)
    },
}