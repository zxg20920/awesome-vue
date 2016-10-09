// 全局注册组件

// 第一个是注册组件的名称，我们在HTML可以这样写<didi-component></didi-component>
// 第二个参数是组件的构造函数，可以是function，也可以是object

// function： DIDIComponent 可以是用Vue.extend()创建的一个组件构造器 

// var DIDIComponent = Vue.extend({
//     template: '<div>function</div>'
// });

// Vue.component('didi-component', DIDIComponent);

// object：作为 component传入选项对象，vue.js背后自动调用Vue.extend

Vue.component('didi-component', {
    template: '<div>A custom component!</div>'
});

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world'
    }
});
