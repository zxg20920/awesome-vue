var bus = Vue.extend({
    template: '#bus',
    activate: function(done) {
        console.log('activate');
        done();
    }
});

var fast = Vue.extend({
    template: '#fast'
});

var business = Vue.extend({
    template: '#business'
});



var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        currentView: 'fast'
    },
    components: {
        fast: fast,
        bus: bus,
        business: business
    }
});
