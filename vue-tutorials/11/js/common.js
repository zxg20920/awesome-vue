function AjaxHelper() {
    this.ajax = function(url, type, dataType, data, callback) {
        $.ajax({
            url: url,
            type: type,
            dataType: dataType,
            data: data,
            success: callback,
            error: function(xhr, errorType, error) {
                console.log('Ajax request error, errorType: ' + errorType + ' , eror : ' + error);
            }
        })
    }
}

AjaxHelper.prototype.get = function(url, data, callback) {
    this.ajax(url, 'GET', 'json', data, callback);
}
AjaxHelper.prototype.post = function(url, data, callback) {
    this.ajax(url, 'POST', 'json', data, callback);
}
AjaxHelper.prototype.put = function(url, data, callback) {
    this.ajax(url, 'PUT', 'json', data, callback);
}
AjaxHelper.prototype.delete = function(url, data, callback) {
    this.ajax(url, 'DELETE', 'json', data, callback);
}
AjaxHelper.prototype.jsonp = function(url, data, callback) {
    this.ajax(url, 'GET', 'jsonp', data, callback);
}

AjaxHelper.prototype.constructor = AjaxHelper;

var ajaxHelper = new AjaxHelper();

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
        apiUrl: 'http://211.149.193.19:8080/api/customers',
        item: {},
        show: false
    },
    ready: function() {
        this.getCustomers();
    },
    methods: {
        getCustomers: function() {
            var vm = this,
                callback = function(data) {
                    vm.$set('gridData', data);
                }

            ajaxHelper.jsonp(vm.apiUrl, null, callback);
        },
        close: function() {
            console.log(1);
            this.show = false;
        },
        saveCustomer: function() {
            this.item.customerId ? this.updateCustomer() : this.createCustomer();
            this.show = false;
        },
        updateCustomer: function() {
            var vm = this,
                callback = function(data) {
                    vm.getCustomers();
                }

            ajaxHelper.put(vm.apiUrl + '/' + vm.item.customerId, vm.item, callback);
        },
        createCustomer: function() {
            var vm = this,
                success = function(data) {
                    vm.$set('item', {});
                    vm.getCustomers();
                }
            ajaxHelper.post(vm.apiUrl, vm.item, success);
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
                callback = function(data) {
                    vm.getCustomers();
                }

            ajaxHelper.delete(vm.apiUrl + '/' + customer.customerId, null, callback);
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
        }
    }
});

app.$watch('show', function(newVal, oldVal) {
    if (!newVal) {
        this.item = {};
    }
})
