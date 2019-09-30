/*eslint-disable*/
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import Win from 'electron-vue-windows'
// 初始化插件，要传入实例化的路由
Win.init(router, {
	freeWindowNum: 2, // 初始空闲窗口数量（选填：默认为1）
	port: 9080 // 端口号（选填：默认9080）
})
Vue.prototype.$Win = Win

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	components: {
		App
	},
	router,
	store,
	template: '<App/>'
}).$mount('#app')
