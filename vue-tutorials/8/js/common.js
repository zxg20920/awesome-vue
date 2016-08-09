var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world',
        msg: ''
    },
    methods: {
        notify: function() {
            if (this.msg.trim()) {
                this.$broadcast('parent-msg', this.msg);
                this.msg = '';
            }
        }
    },
    components: {
        'child-component': {
            template: '#child-component',
            data: function() {
                return {
                    messages: []
                }
            },
            events: {
                'parent-msg': function(msg) {
                    this.messages.push(msg);
                }
            }
        }
    }
});
