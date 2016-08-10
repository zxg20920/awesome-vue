//     <!-- 字面量路径 -->
// <a v-link="'home'">Home</a>

// <!-- 效果同上 -->
// <a v-link="{ path: 'home' }">Home</a>

// <!-- 具名路径 -->
// <a v-link="{ name: 'detail', params: {id: '01'} }">Home</a>

// $route.path 
// 字符串，等于当前路由对象的路径，会被解析为绝对路径，如 "/home/news" 。
// $route.params 
// 对象，包含路由中的动态片段和全匹配片段的键值对
// $route.query 
// 对象，包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes ，会得到 $route.query.favorite == 'yes' 。
// $route.router 
// 路由规则所属的路由器（以及其所属的组件）。
// $route.matched 
// 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
// $route.name 
// 当前路径的名字，如果没有使用具名路径，则名字为空。
var well = new Vue({
    el: '.well',
    data: {
        msg: '',
        color: '#ff0000'
    },
    methods: {
        setColor: function() {
            this.color = '#' + parseInt(Math.random() * 256).toString(16) + parseInt(Math.random() * 256).toString(16) + parseInt(Math.random() * 256).toString(16);
        },
        setColoredMessage: function(msg) {
            this.msg += '<p style="color: ' + this.color + '">' + msg + '</p>'
        },
        setTitle: function(title) {
            this.msg = '<h2 style="color: #333">' + title + '</h2>';
        }
    }
});

var Home = Vue.extend({
    template: '#home',
    data: function() {
        return {
            msg: 'Hello, vue router!',
            path: ''
        }
    },
    // route: {
    //     // 用户点击v-link的元素时，是路由的切换。
    //     // 每个组件都有一个route选项，route选项有一系列钩子函数，在切换路由时会执行这些钩子函数。
    //     // 其中一个钩子函数是data钩子函数，它用于加载和设置组件的数据。
    //     data: function(transition) {
    //         transition.next({
    //             currentPath: transition.to.path
    //         });
    //     }
    // }
    route: RouteHelper('Home')
});

var News = Vue.extend({
    template: '#news',
    route: RouteHelper('News')
});

var NewsDetail = Vue.extend({
    template: '#newsDetail',
    route: RouteHelper('NewsDetail')

})

var Message = Vue.extend({
    template: '#message',
    route: RouteHelper('Message')
})

var About = Vue.extend({
    template: '#about',
    route: RouteHelper('About')

});



function RouteHelper(name) {
    var route = {
        canReuse: function(transition) {
            well.setColoredMessage('执行组件' + name + '的钩子函数:canReuse')
            return true
        },
        canActivate: function(transition) {
            well.setColoredMessage('执行组件' + name + '的钩子函数:canActivate')
            transition.next()
        },
        activate: function(transition) {
            well.setColoredMessage('执行组件' + name + '的钩子函数:activate')
            transition.next()
        },
        canDeactivate: function(transition) {
            well.setColoredMessage('执行组件' + name + '的钩子函数:canDeactivate')
            transition.next()
        },
        deactivate: function(transition) {
            well.setColoredMessage('执行组件' + name + '的钩子函数:deactivate')
            transition.next()
        },
        data: function(transition) {
            well.setColoredMessage('执行组件' + name + '的钩子函数:data')
            transition.next()
        }
    }
    return route;
}


// Must start vue-router with a component, not a Vue instance.
var App = Vue.extend({});
var router = new VueRouter();
router.map({
    '/home': {
        component: Home,
        subRoutes: {
            '/news': {
                name: 'news',
                component: News,
                subRoutes: {
                    'detail/:id': {
                        name: 'detail',
                        component: NewsDetail
                    }
                }
            },
            '/message': {
                component: Message
            }
        }
    },
    '/about': {
        component: About
    }
});
router.redirect({
    '/': '/home'
});


router.beforeEach(function(transition) {
    well.setColor();
    well.setTitle('跳转路径<span class="text-danger">[from = ' + transition.from.path + '], [to = ' + transition.to.path + ']</span>');
    well.setColoredMessage('执行router的全局函数:beforeEach')
    transition.next()
});

router.afterEach(function(transition) {
    well.setColoredMessage('执行router的全局函数:afterEach')
})

router.start(App, '#app');
