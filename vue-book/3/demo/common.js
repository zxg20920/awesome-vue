var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        items: [{
            content: '1 item',
            show: true
        }, {
            content: '2 item',
            show: false
        }]
    },
    methods: {
        toggle: function(item) {
            item.show = !item.show;
        }
    }
});
