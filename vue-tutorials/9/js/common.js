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
                    title: '',
                    keyColumn: ''
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
                            } else if (this.mode === 2) {
                                this.$dispatch('update-item');
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
            ready: function() {
                for (var i = 0; i < this.columns.length; i++) {
                    if (this.columns[i].isKey) {
                        this.keyColumn = this.columns[i]['name'];
                        break;
                    }
                }
                console.log(this.keyColumn);
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
                },
                initItemForUpdate: function(p) {
                    var c = c || {};
                    console.log(p);
                    // 弹出修改数据的对话框时，使用对象的深拷贝
                    for (var i in p) {
                        if (p.hasOwnProperty(i)) {
                            if (typeof p[i] === 'object') {
                                c[i] = Array.isArray(p[i]) ? [] : {}
                                deepCopy(p[i], c[i]);
                            } else {
                                c[i] = p[i];
                            }
                        }
                    }
                    console.log(c);
                    return c;
                },
                findItemByKey: function(key) {
                    var keyColumn = this.keyColumn;
                    for (var i = 0; i < this.dataList.length; i++) {
                        if (this.dataList[i][keyColumn] === key) {
                            console.log(this.dataList[i]);
                            return this.dataList[i];
                        }
                    }
                },
                updateItem: function() {
                    var keyColumn = this.keyColumn;
                    for (var i = 0; i < this.dataList.length; i++) {
                        if (this.dataList[i][keyColumn] === this.item[keyColumn]) {
                            for (var j in this.item) {
                                this.dataList[i][j] = this.item[j];
                            }
                            break;
                        }
                    }
                    this.$broadcast('showDialog', false);
                    this.item = {};
                },
                openEditItemDialog: function(key) {
                    var currentItem = this.findItemByKey(key);
                    this.title = 'Edit Item - ' + key;
                    this.mode = 2;
                    this.item = this.initItemForUpdate(currentItem);
                    this.$broadcast('showDialog', true);
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
