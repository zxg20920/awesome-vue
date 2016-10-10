.vue 文件修改以后，默认支持对应的页面自动刷新，默认内置的loader配置如下：

    var defaultLoaders = {
        html:'vue-html-loader',
        css:'vue-style-loader!css-loader',
        js:'babel-loader?presets[]es2015&plugins[]=transform-runtime&comments=false'
    }

js默认使用babel-loader编译，加了一些参数

html默认用vue-html-loader

css默认用vue-style-loader和css-loader

---

自定义autoprefixer

<!-- webpack.config.js -->

    module.exports = {
        ...
        vue:{
            autoprefixer:false
        }
    }

自定义postcss

    module.exports = {
        vue:{
            postcss:{

            }
        }
    }

css预编译语言

    <style lang="sass">

    </style>

自定义loaders

    module.exports = {
        module:{
            loaders:[{
                test:/\.vue$/,
                loader:vue
            }]
        },
        vue:{
            loaders:{}
        }
    }
