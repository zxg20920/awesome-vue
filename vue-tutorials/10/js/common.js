var app = new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        columns: [{
            name: 'name',
            isKey: true
        }, {
            name: 'age'
        }, {
            name: 'sex',
            dataSource: ['Male', 'Female']
        }],
        people: [{
            name: 'Jack',
            age: 30,
            sex: 'Male'
        }, {
            name: 'Bill',
            age: 26,
            sex: 'Male'
        }]
    },
    components: {
        'grid': {
            template: '#grid-template',
            data: function() {
                return {
                    title: 'Title',
                    mode: 0,
                    keyColumns: '',
                    item: {}
                }
            },
            props: ['dataList', 'columns', 'searchKey'],
            ready: function() {
                var that = this;
                this.columns.forEach(function(col) {
                    if (col['isKey']) {
                        that.keyColumns = col['name'];
                    }
                });
                console.log(this.keyColumns);
            },
            methods: {
                deleteItem: function(entry) {
                    var data = this.dataList;
                    data.forEach(function(item, i) {
                        if (item === entry) {
                            data.splice(i, 1);
                            return;
                        }
                    })
                },
                openNewItemDialog: function(title) {
                    this.title = title;
                    this.mode = 1;
                    this.item = {};
                    this.$broadcast('showDialog', true);
                },
                itemExists: function() {
                    var keyColumns = this.keyColumns,
                        that = this;

                    for (var i = 0; i < this.dataList.length; i++) {
                        if (this.item[keyColumns] === this.dataList[i][keyColumns]) {
                            return true;
                        }
                    }
                    return false;
                },
                createItem: function() {
                    var keyColumns = this.keyColumns;
                    if (!this.itemExists()) {
                        this.dataList.push(this.item);
                        this.$broadcast('showDialog', false);
                        this.item = {};
                    } else {
                        alert(keyColumns + ' "' + this.item[keyColumns] + '" is already exists');
                    }
                },
                openEditItemDialog: function(key) {
                    console.log(key);
                    var currentItem = this.findItemByKey(key);

                    this.title = 'Edit Item - ' + key;
                    this.mode = 2;
                    this.item = this.initItemForUpdate(currentItem);
                    this.$broadcast('showDialog', true);
                },
                findItemByKey: function(key) {
                    var keyColumns = this.keyColumns;
                    for (var i = 0; i < this.dataList.length; i++) {
                        if (this.dataList[i][keyColumns] === key) {
                            return this.dataList[i];
                        }
                    }
                },
                initItemForUpdate: function(p, c) {
                    var c = c || {};
                    for (var i in p) {
                        if (p.hasOwnProperty(i)) {
                            if (typeof p[i] === 'object') {
                                c[i] = Array.isArray(p[i]) ? [] : {};
                                this.initItemForUpdate(p[i], c[i]);
                            } else {
                                c[i] = p[i];
                            }
                        }
                    }
                    return c;
                },
                updateItem: function() {
                    var keyColumns = this.keyColumns;
                    for (var i = 0; i < this.dataList.length; i++) {
                        if (this.dataList[i][keyColumns] === this.item[keyColumns]) {
                            for (var j in this.item) {
                                this.dataList[i][j] = this.item[j];
                            }
                            break;
                        }
                    }
                    this.$broadcast('showDialog', false);
                    this.item = {};
                }
            },
            components: {
                'dialog': {
                    template: '#dialog-template',
                    data: function() {
                        return {
                            show: false
                        }
                    },
                    props: ['mode', 'title', 'fields', 'item'],
                    methods: {
                        close: function() {
                            this.show = false;
                        },
                        save: function() {
                            if (this.mode === 1) {
                                // 触发父元素的创建事件
                                this.$dispatch('create-item');
                            } else if (this.mode === 2) {
                                // 触发父元素的更改事件
                                this.$dispatch('update-item');
                            }
                        }
                    },
                    events: {
                        // 广播 修改对话框的显示隐藏
                        showDialog: function(show) {
                            this.show = show;
                        }
                    }
                }
            }
        }
    },
});
