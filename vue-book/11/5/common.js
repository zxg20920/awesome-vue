var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        info: {
            name: '顺风车、专车'
        }
    },
    components: {
        'child': {
            props: ['msg'],
            template: '<div>{{msg.name}}'
        }
    }
});
