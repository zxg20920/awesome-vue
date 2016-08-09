var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world'
    },

    components: {
        'parent-component': {
            template: '#parent-component',
            data: function() {
                return {
                    msg: 'parent component message'
                }
            },
            methods: {
                showChildComponentData: function() {
                    // for (var i = 0; i < this.$children.length; i++) {
                    //     console.log(this.$children[i].msg);
                    // }
                    console.log(this.$refs.cc1.msg);
                    console.log(this.$refs.cc2.msg);
                }
            },
            components: {
                'child-component1': {
                    template: '#child-component1',
                    data: function() {
                        return {
                            msg: 'child component 1'
                        }
                    },
                    methods: {
                        showParentComponentData: function() {
                            console.log(this.$parent.msg);
                        }
                    }
                },
                'child-component2': {
                    template: '#child-component2',
                    data: function() {
                        return {
                            msg: 'child component 2'
                        }
                    }
                }
            }
        }
    }
});
