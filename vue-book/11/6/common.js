Vue.component('child', {
    template: '#child-template',
    data: function() {
        return {
            msg: 'hello'
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world'
    }
});
