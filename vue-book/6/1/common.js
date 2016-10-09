var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        amount: 12345,
        fields: ['text', 'age'],
        name: '',
        items: [{
                text: 1,
                age: 3
            }, {
                text: 2,
                age: 2
            }, {
                text: 3,
                age: 4
            }, {
                text: 4,
                age: 3
            }, {
                text: 5,
                age: 7
            }, {
                text: 6,
                age: 9
            }

        ]
    }
});
