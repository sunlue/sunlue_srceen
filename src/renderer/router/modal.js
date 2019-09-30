/*eslint-disable*/
export default {
	name: 'container',
	path: '/container',
	component: require('@/components/modal-view').default,
	children: [{
		path: '/setting',
		name: 'setting',
		component: require('@/view/modal/setting/index').default
	}]
}
