var WebpackBrowserPlugin = require('webpack-browser-plugin'),
    webpack = require('webpack');

module.exports = {
    plugins: [
        // 自动启动浏览器
        // new WebpackBrowserPlugin(),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            "typeof window": JSON.stringify('object')
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}
