var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world',
        registerUrl: 'http://211.149.193.19:8100/api/Account/Register',
        registerModel: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        msg: ''
    },
    methods: {
        register: function() {
            this.msg = '';

            this.$http.post(this.registerUrl, this.registerModel)
                .then((response) => {
                    this.msg = '注册成功';
                })
                .catch((response) => {
                    this.msg = response.json();
                });
        }
    }
});
