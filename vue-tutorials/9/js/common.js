var app = new Vue({
    el: '#app',
    components: {
        'simple-grid': {
            template: '#grid-template',
            props: ['dataList', 'columns', 'searchKey'],
            data: function() {
                return {
                    mode: 0,
                    item: {},
                    title: ''
                }
            },
            components: {
                'modal-dialog': {
                    template: '#dialog-template',
                    data: function() {
                        return {
                            show: false
                        }
                    },
                    // * mode = 1是新增数据模式，mode = 2是修改数据模式
                    // * title表示对话框的标题内容
                    // * fields表示对话框要显示的数据字段数组
                    // * item是由simple-dialog传下来，用于绑定表单字段的
                    props: ['mode', 'title', 'fields', 'item'],
                    methods: {
                        close: function() {
                            this.show = false;
                        },
                        save: function() {
                            if (this.mode === 1) {
                                this.$dispatch('create-item');
                            }
                        }
                    },
                    events: {
                        'showDialog': function(show) {
                            this.show = show;
                        }
                    }
                }
            },
            methods: {
                deleteItem: function(index) {
                    this.dataList.splice(index, 1);
                },
                openNewItemDialog: function(title) {
                    this.title = title;
                    this.mode = 1;
                    this.item = {};
                    this.$broadcast('showDialog', true);
                },
                createItem: function() {
                    this.dataList.push(this.item);
                    this.$broadcast('showDialog', false);
                    this.item = {};
                }
            }
        }
    },
    data: {
        message: 'Hello world',
        searchQuery: '',
        people: [{
            name: 'Jack',
            age: 30,
            sex: 'Male'
        }, {
            name: 'Bill',
            age: 26,
            sex: 'Male'
        }, {
            name: 'Tracy',
            age: 22,
            sex: 'Female'
        }, {
            name: 'Chris',
            age: 36,
            sex: 'Male'
        }],
        columns: [{
            name: 'name',
            isKey: true
        }, {
            name: 'age'
        }, {
            name: 'sex',
            dataSource: ['Male', 'Female']
        }],
    }
});
