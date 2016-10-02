Vue.config.delimiters = ["<%", "%>"];
Vue.config.unsafeDelimiters = ["<$", "$>"];

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        show: true,
        url: 'www.baidu.com',
        urlWord: 'baidu',
        htmlWord: '<h1>haha</h1>'
    },
    methods: {
        'clickUrl': function() {
            console.log(this.url)
        }
    }
});
