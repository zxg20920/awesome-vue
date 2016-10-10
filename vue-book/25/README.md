    $ webpack <entry><output>

entry 入口文件路径

output 打包后的文件路径

    -p  打包后文件进行压缩

    --watch 观察文件变化重新打包

    --config 指定webpack打包配置文件

    --progress 终端显示打包过程

---

写 webpack.config.js文件

决定配置文件

    webpack --config webpack.config.build.js

---

webpack配置选项

extends

target

cache

loader

devServer

    配置webpack-dev-server的行为，以下行为指定服务器的根路径。

    {
        devServer:{
            contentBase:'./build'
        }
    }

plugins

context

    配置基础路径（必须是绝对路径） 默认是 process.cwd()，即运行的webpack命令的目录

entry

    配置要打包的入口文件，值可以是字符串，数组，对象。该项指定的路径会相对context选项指定的路径进行查找

        entry:'./entry'

        entry:['./entry','./entry2'] 按序打包，只导出最后一个文件

        entry是对象的时候，键名为块名，可以随意指定，键值可以为字符串或数组类型。该块可以在output选项中使用

        {
            entry:{
                page1:'./page1',
                page2:['./entry1','./entry2']
            },
            output:{
                filename:'[name].bundle.js'
            }
        }

        会生成 page1.bundle.js page2.bundle.js

output

    配置输出信息：

        output.filename

    配置打包后的文件名，注意值不少绝对路径，我们应该通过output.path来指定输出路径，filename会相对于output.path来输出。

        {
            entry:'./src/app.js',
            output:{
                filename:'bundle.js',
                path:__dirname+'/build'
            }
        }

        写入的路径为 ./build/bundle.js

    如果项目有多个入口，对于每个入口打包后的文件名我们要保证其唯一性。webpack提供了一下的模式来动态生成输出文件名：

        [name] 入口文件块名

        [hash] 每个入口打包后的hash值

        [chunkhash] 使用代码分割时，一部加载的文件的hash值

        {
            entry:{
                app:'./src/app.js',
                search:'./src/search.js'
            },
            output:{
                filename:'[name].js'
                // filename:'[hash].js'
                // filename:'[chunkhash].js',
                path:__dirname+'/build'
            }
        }

module

    进行模块加载相关配置

    module.loaders 加载器数组，当依赖文件匹配指定的test模块时，webpack会自动调用数组中的相应加载器去处理该文件，然后返回js格式的文件

    加载器是一个对象，该对象拥有下面属性：

        test 正则表达式，webpack用他来匹配相应的文件，通常来匹配文件后缀

        exclude 不应该被loader处理的文件

        include 一个路径数组，这些路径会被loader处理

        loader test匹配到的文件对应的加载器，值是一个加载器名字字符串，多个加载器之间用!分割

        module:{
            loaders:[
                {
                    // 匹配jsx后缀文件
                    test:/\.jsx$/,
                    // include目录会被loader解析
                    include:[
                        path.resolve(__dirname,'app/src'),
                        path.resolve(__dirname,'app/test')
                    ],
                    // 也可以用 babel webpack 自动添加 -loader
                    loader:'babel-loader'
                }
            ]
        } 

resolve

    配置依赖文件的匹配。如依赖文件别名的配置、模块的查找目录、默认查找的文件后缀名等等

    resolve.alias 

    配置依赖文件的别名，值是一个对象，对象的键是别名，值是实际路径

    resolve.root

    用来指定模块的查找根路径，必须是绝对路径，值可以是路径字符串或者路径数组。如果是路径数组，webpack会一次在这些路径中查找，如果找到就终止；否则会继续在下一个路径中查找

    var path = require('path');

    resolve:{
        root:[
            path.resolve('./app/modules'),
            path.resolve('./vendor/modules')
        ]
    }
    
    resolve.modulesDirectories

    指定模块目录，值是一个路径数组，默认是['web_modules','node_modules']

resolveLoader

---

webpack-dev-server是基于express的node.js服务器。文件发生改变的时候，自动触发打包过程，然后通过socket.io通知浏览器刷新页面。

所有webpack接受的参数，webpack-dev-server都可以接受

我们还可以提供额外的参数：

--content-base 指定请求的根路径

--host 指定服务器监听地址可以是ip地址或者域名。值为0.0.0.0时，可以监听一台机器的所有IP地址，如127.0.0.1或机器在局域网中的ip地址

--port 指定服务器监听的端口号

--compress 启用gzip压缩

--inline 自动将socket.io代码注入到打包后的文件。启用该选项，当文件内容改变时可以自动刷新浏览器

我们也可以在webpack.config.js 中的devServer选项进行配置，如

    module.exports = {
        devServer:{
            inline:true
        }
    }

---

常用的插件：

DefinePlugin

替换指定变量

ProvidePlugin

自动加载当前模块依赖的其他模块模块，并以指定别名注入到当前模块。加入当前模块依赖jquery模块，我们同时想在模块中直接用 $ 引入jquery对象，当时不想手动 require jquery模块
