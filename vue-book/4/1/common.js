var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        didi: 'didi',
        family: 'family'
    },
    computed: {
        // didiFamily: function() {
        //     return this.didi + this.family
        // }
        didiFamily: {
            get: function() {
                return this.didi + ' ' + this.family
            },
            set: function(newVal) {
                var names = newVal.split(' ');
                this.didi = names[0];
                this.family = '';
                for (var i = 1; i < names.length; i++) {
                    this.family += names[i] + ' ';
                }
            }
        },
        example: {
            // 只依赖 this.msg 
            // 加了 cache
            // 每次访问的时候都会重新调用下计算属性
            cache: false,
            get: function() {
                console.log(this.msg)
                return Date.now() + this.msg;
            }
        }
    }
});
