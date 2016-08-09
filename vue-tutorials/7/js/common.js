var app = new Vue({
    el: '#app',
    data: {
        messages: []
    },
    events: {
        'child-msg': function(msg) {
            this.messages.push(msg);
        }
    },
    components: {
        'child-component': {
            template: '#child-component',
            data: function() {
                return {
                    msg: ''
                }
            },
            methods: {
                notify: function() {
                    if (this.msg.trim()) {
                        this.$dispatch('child-msg', this.msg);
                        this.msg = '';
                    }
                }
            }
        }
    }
});
