Vue.directive('my-directive', {
    acceptStatement: true,
    update: function(fn) {
        // 传入的是一个函数
        // 电泳它所属实例作用域内计算 a++ 语句
        console.log(fn.toString());
        fn();
    }
})

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        a: 5
    }
});
