// 相同的钩子函数，一些会被合并到一个数组，混合钩子先调用
// 一些比如methods,components,directives会并到同一个对象内，键值冲突的话，组件的选项优先

var myMixin = {
    created: function() {
        this.hello()
    },
    methods: {
        hello: function() {
            console.log('hello from mixin');
        },
        conflicting: function() {
            console.log('from mixin');
        }
    }
}

var component = Vue.extend({
    mixins: [myMixin],
    template: '<h1>Hello ~</h1>',
    created: function() {
        console.log('hello from component');

        this.conflicting();
    },
    methods: {
        conflicting: function() {
            console.log('from self');
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
    },
    components: {
        'my-component': component
    },
});
