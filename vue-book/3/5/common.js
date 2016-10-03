Vue.directive('my-directive', {
    // 对象内部也要变化，要指定deep
    deep: true,
    update: function(obj) {
        console.log(obj.b.c);
    }
});

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        a: {
            b: {
                c: 2
            }
        },

    },
    methods: {
        change: function() {
            this.a.b.c = 4;
        }
    }
});
