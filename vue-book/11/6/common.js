Vue.component('child', {
    template: '#child-template',
    data: function() {
        return {
            msg: 'hello'
        }
    },
    methods: {
        notify: function() {
            console.log('notify');
            if (this.msg.trim()) {
                this.$dispatch('child-msg', this.msg);
                // 往上传递
                this.msg = '';
            }
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        messages: [],
    },
    // 这样不能很好的看到 child-msg 事件来自哪里
    // 可以改成 on 监听 methods
    events: {
        'child-msg': function(msg) {
            console.log(1);
            this.messages.push(msg);
        }
    },
    methods: {
        handleIt: function(msg) {
            console.log(2);
            console.log(this.$refs.child)
            this.messages.push(msg);
        }
    }
});
