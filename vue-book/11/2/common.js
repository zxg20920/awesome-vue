// var Child = Vue.extend({
//     template: '<div>i am child</div>',
//     replace: true
// });

// var Parent = Vue.extend({
//     template: '<p>I am parent<child></child></p>',
//     components: {
//         'child': Child
//     }
// });

// =>

// var Parent = Vue.extend({
//     template: '<p>I am parent<child></child></p>',
//     components: {
//         'child': {
//             template: '<div>i am child</div>',
//             replace: true
//         }
//     }
// });


// var app = new Vue({
//     el: '#app',
//     data: {
//         msg: 'hello world'
//     },
//     components: {
//         'didi-component': Parent
//     }
// });

// =>

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world'
    },
    components: {
        'didi-component': {
            template: '<p>I am parent<child></child></p>',
            components: {
                'child': {
                    template: '<div>i am child</div>',
                    replace: true
                }
            }
        }
    }
});


// =>
// 更简单的写法

// Vue.components('didi-component', {
//     template: '<div>A custom component</div>'
// });

// var Parent = Vue.extend({
//     components: {
//         'didi-component': {
//             template: '<div>A custom component</div>'
//         }
//     }
// });
