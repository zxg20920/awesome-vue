Vue.http.options.emulateJSON = true;
Vue.http.options.root = 'http://211.149.193.19:8100';

var app = new Vue({
    el: '#app',
    data: {
        loginUrl: 'token',
        logoutUrl: 'api/Account/Logout',
        apiUrl: 'api/Values',
        loginModel: {
            userame: '',
            password: '',
            grant_type: 'password'
        },
        msg: '',
        userName: '',
        result: ''
    },
    ready: function() {
        this.userName = sessionStorage.getItem('userName');
    },
    methods: {
        login: function() {
            this.$http.post(this.loginUrl, this.loginModel)
                .then((response) => {
                    var body = response.json();
                    this.msg = '登陆成功!';
                    this.userName = body.userName;
                    sessionStorage.setItem('accessToken', body.access_token);
                    sessionStorage.setItem('userName', body.userName);
                })
                .catch(this.requestError)
        },
        logout: function() {
            this.$http.post(this.logoutUrl)
                .then((response) => {
                    this.msg = '注销成功';
                    this.userName = '';
                    this.loginModel.userame = '';
                    this.loginModel.password = '';

                    sessionStorage.removeItem('userName');
                    sessionStorage.removeItem('accessToken');
                })
                .catch(this.requestError);
        },
        requestError: function(response) {
            this.msg = response.json();
        },
        callApi: function() {
            var headers = {};
            headers.Authorization = 'Bearer ' + sessionStorage.getItem('accessToken');

            this.$http.get(this.apiUrl, {
                    headers: headers
                })
                .then((response) => {
                    this.result = response.json();
                })
                .catch(this.requestError);
        }
    }
})
