/*eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import main from './main.js'
import modal from './modal.js'

export default new Router({
	// mode: 'history',
	routes: [{
		path: '*',
		redirect: '/index'
	}, main, modal]
})
