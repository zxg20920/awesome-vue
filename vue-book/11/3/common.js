Vue.component('child', {
    props: ['msg', 'myMessage'],
    template: '<span>{{msg}},{{myMessage}}</span>'
});

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world'
    }
});
