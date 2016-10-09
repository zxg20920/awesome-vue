var Child = Vue.extend({
    // props: ['didiProps'],
    props: {
        'didiProps': {
            coerce: function(val) {
                return val.toUpperCase();
            },
            type: String,
            required: true,
            default: 'hello'
        }
    },
    template: '<div>{{didiProps}}</div>',
});

var Parent = Vue.extend({
    template: '<p>I am parent<br/><child :didi-props="hello"></child></p>',
    data: function() {
        return {
            'hello': 'hello!'
        }
    },
    components: {
        'child': Child
    }
});

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world'
    },
    components: {
        'didi-props': Parent
    }
});
