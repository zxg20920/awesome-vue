import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

const Foo = {
    template: '<div>foo</div>'
}

const Bar = {
    template: '<div>bar</div>'
}

// 一个『路径参数』使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当前用户的 ID：
const User = {
    template: '<div>User: {{$route.params.id}}  <router-view></router-view></div>',
    watch: {
        '$route' (to, from) {
            console.log(to, from);
        }
    }
}

const UserHome = {
    template: '<div>{{$route.params.id}} Home</div>'
}

const DefaultPost = {
    template: '<div>See User: {{$route.params.id}} post</div>'
}

const Post = {
    template: '<div>User:{{$route.params.id}} Post:{{$route.params.post}}</div>'
}

const Home = {
    template: '<div>This is Homepage'
}

const A = {
    template: '<div>This is A'
}

const B = {
    template: '<div>This is B'
}


const routes = [{
    path: '/',
    components: {
        default: Home,
        a: A,
        b: B
    }
}, {
    path: '/foo',
    component: Foo
}, {
    path: '/bar',
    component: Bar
}, {
    name: 'user',
    path: '/user/:id',
    component: User,
    children: [{
        path: '',
        component: UserHome
    }, {
        path: 'post',
        component: DefaultPost
    }, {
        path: 'post/:post',
        component: Post
    }]
}];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
