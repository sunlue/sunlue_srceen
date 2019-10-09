/*eslint-disable*/
import axios from 'axios'
let url = 'https://www.tianqiapi.com/api/';
export default {
	state: {
		weather: {},
	},
	mutations: {
		SET_WEATHER: (state, data) => {
			state.weather = data
		},
	},
	getters: {
		weather: state => {
			return state.weather;
		},
	},
	actions: {
		getWeather({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				axios.all([
					axios.get(url + '?version=v6', {
						params: params
					}),
					axios.get(url + '?version=v9', {
						params: params
					})
				]).then(
					axios.spread((acct, perms) => {
						commit('SET_WEATHER', {
							today: acct.data,
							future: perms.data
						})
						resolve({
							today:acct.data, 
							future:perms.data
						});
					})
				).catch(error => {
					reject(error)
				})
			})
		}
	}
}
