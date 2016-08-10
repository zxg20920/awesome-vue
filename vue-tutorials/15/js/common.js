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
            var vm = this;
            vm.msg = '';

            $.ajax({
                url: vm.registerUrl,
                type: 'POST',
                dataType: 'json',
                data: vm.registerModel,
                success: function() {
                    vm.msg = '注册成功！'
                },
                error: vm.requestError,
                complete: function(response) {
                    vm.msg = response.responseText;
                }
            })

        },
        requestError: function(xhr, errorType, error) {
            this.msg = xhr.responseText;
        }
    }
});
