Vue.directive('demo', {
    bind: function() {
        console.log('demo bound!');
    },
    update: function(value) {
        this.el.innerHTML =
            'name - ' + this.name + '<br/>' +
            'expression - ' + this.expression + '<br/>' +
            'argument - ' + this.arg + '<br/>' +
            'modifiers - ' + JSON.stringify(this.modifiers) + '<br/>' +
            'value - ' + value + '<br/>' +
            'vm-msg - ' + this.vm.msg
    }
});

Vue.directive('demo2', function(value) {
    console.log(value.color);
    console.log(value.text);
});

// 可以接受一个params数组，指定一个特性列表，Vue编译器将自动提取绑定元素的这些特性

// 可以指定一个回调，在值变化的时候调用

Vue.elementDirective('my-directive', {
    params: ['a'],
    // 变化的时候没有反应？
    // 好像也没这个接口了
    paramsWatchers: {
        a: function(val, oldVal) {
            console.log('a changed');
        }
    },
    bind: function() {
        console.info(this.params.a);
        console.info(this.el.className);
        console.info(this.el.getAttribute('name'));
    }
});

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        testParams: '1'
    }
});
