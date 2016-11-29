import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = require('./components/home');
const Cloud = require('./components/cloud');
const Building = require('./components/building');
const Difficult = require('./components/difficult');

const routes = [{
	path: '/',
	redirect: '/cloud'
}, {
	path: '/cloud',
	component: Cloud
}, {
	path: '/building',
	component: Building
}, {
	path: '/difficult',
	component: Difficult
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