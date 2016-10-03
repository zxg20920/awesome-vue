Vue.directive('example', {
    // 不设置的话：
    // vue.js:1023 [Vue warn]: Directive.set() can only be used inside twoWaydirectives.
    twoWay: true,
    bind: function() {
        this.handler = function() {
            // 把数组写回vm
            // 如果指令这样绑定 v-example="a.b.c"
            // 这里将会给'vm.a.b.c'赋值
            this.set(this.el.value);

            // 写回给父作用域
        }.bind(this);

        this.el.addEventListener('input', this.handler);
    },
    unbind: function() {
        this.el.removeEventListener('input', this.handler);
    }
})

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        a: {
            b: {
                c: 2
            }
        }
    }
});
