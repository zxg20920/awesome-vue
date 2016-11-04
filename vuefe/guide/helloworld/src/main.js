import Vue from 'vue'
import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

var app = new Vue({
    el: '#app',
    render: function(h) {
        return h(App);
    }
})
