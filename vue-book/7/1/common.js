var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        isRipe: true,
        isNotRipe: false,
        ddfe: {
            'didi-orange': true,
            'didi-green': false
        },
        didiAge: 4,
        didiMember: 6000,
        didiHandsome: 'didi-handsome',
        didiBeautiful: 'didi-beautiful',
        didiOrange: 'didi-orange'
    },
    computed: {
        ddfe2: function() {
            return {
                'didi-orange': this.didiAge > 3 ? true : false,
                'didi-large': this.didiMember > 1000 ? true : false
            }
        }
    }
});
