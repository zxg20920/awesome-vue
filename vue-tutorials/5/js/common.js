var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world',
        show: false,
        dialogClass: 'dialog-info'
    },
    methods: {
        // 这些方法放在父元素上
        openDialog: function(dialogClass) {
            this.show = true;
            this.dialogClass = dialogClass
        },
        closeDialog: function() {
            this.show = false;
        }
    },
    components: {
        'my-component': {
            template: '#myComponent',
            data: function() {
                return {
                    msg: 'This is a component'
                }
            },
            methods: {
                showMsg: function() {
                    console.log(this.msg);
                }
            }
        },
        'modal-dialog': {
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
