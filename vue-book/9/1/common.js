var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
    },
    methods: {
        greet: function(msg, event) {
            // methods的this始终指向创建的vue实例
            // 和事件绑定的方法支持参数event，原生DOM事件的传入
            // 方法在普通元素上只能监听原生的dom事件，在自定义足尖上可以监听子组件触发的自定义事件

            event.preventDefault();

            console.log(msg);
            console.log(event);
            console.log(this.msg);

            setTimeout(function() {
                console.log(this);
            }, 1);

            console.log(event.target.tagName);
        }
    }
});
