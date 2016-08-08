var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world',
        name: 'cody',
        age: 25
    },
    components: {
        'my-component': {
            template: '#myComponent',
            props: ['myName', 'myAge']
        }
    }
});

// prop默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态

// 可以使用.sync显式地指定双向绑定，这使得子组件的数据修改会回传给父组件。

// 可以使用.once显式地指定单次绑定，单次绑定在建立之后不会同步之后的变化，这意味着即使父组件修改了数据，也不会传导给子组件。
