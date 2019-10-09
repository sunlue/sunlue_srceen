/*eslint-disable*/
export default {
	name: 'modal',
	path: '/modal',
	component: require('@/components/modal-view').default,
	children: [{
			path: 'setting',
			name: 'setting',
			component: require('@/view/modal/setting/index').default
		},
		{
			path: 'panorama',
			name: 'panorama_view',
			component: require('@/view/modal/panorama/view').default
		}
	]
}
