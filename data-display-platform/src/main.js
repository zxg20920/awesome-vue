import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = require('./components/home');

const routes = [{
	path: '/',
	redirect: '/home'
}, {
	path: '/home',
	component: Home
}];

const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	},
	router
})