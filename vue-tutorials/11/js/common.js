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
        gridColumns: ['customerId', 'companyName', 'contactName', 'phone'],
        gridData: [],
        apiUrl: 'http://211.149.193.19:8080/api/customers'
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

            ajaxHelper.get(vm.apiUrl, null, callback);
        }
    },
    components: {
        'grid': {
            template: '#grid-template',
            props: ['dataList', 'columns']
        },
        'dialog': {
            template: '#dialog-template',
            props: ['show'],
            methods: {
                close: function() {
                    this.show = false;
                }
            }
        }
    }
});
