var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        showTotal: true,
        basePrice: 100
    },
    computed: {
        totalPrice: function() {
            return this.basePrice + 1
        }
    },
    methods: {
        toggleShow: function() {
            this.showTotal = !this.showTotal;
        }
    }
});
