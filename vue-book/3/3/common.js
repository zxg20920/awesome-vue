var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        primitiveValue: {
            firstName: 'didi',
            lastName: 'fe',
            age: 4
        },
        objectValue: {
            one: {
                msg: 'hello'
            },
            two: {
                msg: 'didi fe'
            }
        },
    }
});
