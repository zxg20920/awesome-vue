module.exports = {
    entry: {
        app: './app.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }]
    }
}
