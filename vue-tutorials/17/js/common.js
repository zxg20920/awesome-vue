var Home = Vue.extend({
    template: '#home',
    data: function() {
        return {
            msg: 'Hello, vue router!'
        }
    }
});

var About = Vue.extend({
    template: '#about'
})

// Must start vue-router with a component, not a Vue instance.
var App = Vue.extend({});
var router = new VueRouter();
router.map({
    '/home': {
        component: Home
    },
    '/about': {
        component: About
    }
});
router.redirect({
    '/': '/home'
});

router.start(App, '#app');
