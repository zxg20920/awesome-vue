Vue.filter('reverse', function(value) {
    return value.split('').reverse().join('');
});

Vue.filter('wrap', function(value, begin, end) {
    return begin + ' ' + value + ' ' + end;
});

Vue.filter('filterExample', {
    // model -> view
    // read函数可选
    read: function(val) {
        return 'read ' + val;
    },
    // view -> model
    // write 函数将在数据写入model之前调用
    // 两个参数分别是表达式的新值和旧值
    write: function(newVal, oldVal) {
        return oldVal + ' write';
    }
});

Vue.filter('concat', function(value, input) {
    // `input` === `this.userInput`
    return value + ' ' + input;
})

// 上面的过滤器都是model数据输出到view之前进行数据转换

// 支持来自视图(input)的值写回模型前进行转换，=> 双向过滤器

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        userInput: ''
    }
});
