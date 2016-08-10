Vue.http.options.emulateJSON = true;
Vue.http.options.root = 'http://211.149.193.19:8100';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world',
        gridColumns: [{
            name: 'customerId',
            isKey: true
        }, {
            name: 'companyName'
        }, {
            name: 'contactName'
        }, {
            name: 'phone'
        }],
        gridData: [],
        item: {},
        show: false,
        showLogin: false,
        showRegister: false,
        title: '',
        apiUrl: 'api/customers',
        registerUrl: 'api/Account/Register',
        loginUrl: 'token',
        logoutUrl: 'api/Account/Logout',
        registerModel: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        loginModel: {
            username: '',
            password: '',
            grant_type: 'password'
        },
        registerModel: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        userName: '',
        msg: ''
    },
    ready: function() {
        this.getCustomers();
        this.userName = sessionStorage.getItem('userName');
    },
    methods: {
        getCustomers: function() {
            var resource = this.$resource(this.apiUrl),
                vm = this;

            resource.get()
                .then((response) => {
                    vm.$set('gridData', response.data);
                })
                .catch(function(response) {
                    console.log(response);
                });
        },
        close: function() {
            this.show = false;
        },
        closeLogin: function() {
            this.showLogin = false;
        },
        closeRegister: function() {
            this.showRegister = false;
        },
        saveCustomer: function() {
            this.item.customerId ? this.updateCustomer() : this.createCustomer();
            this.show = false;
        },
        updateCustomer: function() {
            var vm = this,
                resource = this.$resource(this.apiUrl);

            resource.update({
                    id: vm.item.customerId
                }, vm.item)
                .then((response) => {
                    vm.getCustomers();
                })

        },
        createCustomer: function() {
            var vm = this,
                resource = this.$resource(this.apiUrl);

            resource.save(vm.apiUrl, vm.item)
                .then((response) => {
                    vm.$set('item', {});
                    vm.getCustomers();
                });
            this.show = false;
        },
        loadCustomer: function(customerId) {
            var vm = this;
            vm.gridData.forEach(function(item) {
                if (item.customerId === customerId) {
                    vm.$set('item', item);
                    return;
                }
            });
            vm.$set('show', true);
        },
        deleteCustomer: function(customer) {
            var vm = this,
                resource = this.$resource(this.apiUrl);
            resource.remove({
                    id: customer.customerId
                })
                .then((response) => {
                    vm.getCustomers();
                })
        },
        popupRegister: function() {
            this.showRegister = true;
        },
        popupLogin: function() {
            this.showLogin = true;
        },
        register: function() {
            this.$http.post(this.registerUrl, this.registerModel)
                .then((response) => {
                    this.showRegister = false
                    this.msg = 'Register Successfully!'
                }).catch(this.requestError)
        },
        login: function() {
            this.$http.post(this.loginUrl, this.loginModel, {
                    emulateJSON: true
                })
                .then((response) => {
                    var body = response.json()
                    this.userName = body.userName
                    this.showLogin = false
                    this.msg = 'Login Successfully!'

                    sessionStorage.setItem('accessToken', body.access_token)
                    sessionStorage.setItem('userName', body.userName)

                }).catch(this.requestError)
        },
        logout: function() {

            this.$http.post(this.logoutUrl)
                .then((response) => {
                    this.msg = 'Logout Successfully!'
                    this.result = ''
                    this.userName = ''
                    this.loginModel.username = ''
                    this.loginModel.password = ''

                    sessionStorage.removeItem('userName')
                    sessionStorage.removeItem('accessToken')

                }).catch(this.requestError)
        },
        requestError: function(response) {
            this.msg = response.json();
        }
    },
    components: {
        'grid': {
            template: '#grid-template',
            props: ['dataList', 'columns'],
            methods: {
                loadEntry: function(key) {
                    this.$dispatch('load-entry', key);
                },
                deleteEntry: function(entry) {
                    this.$dispatch('delete-entry', entry);
                }
            }
        },
        'dialog': {
            template: '#dialog-template',
            props: ['show'],
            methods: {

            }
        },
        'loading': {
            template: '#loading-template'
        }
    }
});

app.$watch('show', function(newVal, oldVal) {
    if (!newVal) {
        this.item = {};
    }
});

var help = new Vue({
    el: '#help',
    data: {
        showLoading: false,
        showDialog: false,
        errorCode: ''
    },
    methods: {
        close: function() {
            this.showDialog = false;
        }
    },
    components: {
        'loading': {
            template: '#loading-template'
        },
        'dialog': {
            template: '#dialog-template',
            props: ['show'],
        }
    }
});

// Vue.http.interceptors.push(function(request, next) {
//     help.showLoading = true;
//     next(function(response) {
//         if (!response.ok) {
//             help.errorCode = response.status;
//             help.showDialog = true;
//         }
//         help.showLoading = false;
//         return response;
//     });
// });

Vue.http.interceptors.push((request, next) => {
    if (request.url !== 'token') {
        request.headers.Authorization = 'Bearer ' + sessionStorage.getItem('accessToken');
    }
    help.showLoading = true
    next((response) => {
        if (!response.ok) {
            help.errorCode = response.status
            help.showDialog = true
        }
        help.showLoading = false
        return response;
    });
});
