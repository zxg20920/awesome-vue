var items = [{
    number: 1,
    text: 'one'
}, {
    number: 2,
    text: 'two'
}];

// inline template比template高

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        items: items,
        a: 'i am in parent'
    },
    components: {
        'my-item': {
            props: ['item'],
            data: function() {
                return {
                    a: 'i am in child'
                }
            },
            template: '<p>item 模板： {{a}},{{item.text}};<slot></slot></p>'
        }
    }
});
