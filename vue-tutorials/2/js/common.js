// 全局 Vue.component('my-component',myComponent)


var Child = Vue.extend({
    template: '<p>This is a child component</p>'
});

var myComponent = Vue.extend({
    template: '<div>This is my first component!<child-component></child-component></div>',
    components: {
        'child-component': Child
    }
});

Vue.component('script-component', {
    template: '#scriptComponent'
});



var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world'
    },
    components: {
        'my-component': myComponent
    }
});
