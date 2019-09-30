/*eslint-disable*/
export default {
	name: 'main',
	path: '/main',
	component: require('@/components/main/index').default,
	children: [{
		path: '/index',
		name: 'index',
		component: require('@/view/index').default
	}, {
		path: '/intro',
		name: 'intro',
		component: require('@/view/intro/index').default
	}, {
		path: '/gzjq',
		name: 'gzjq',
		component: require('@/components/parent-view/index').default,
		children: [{
			path: 'jingdian',
			name: 'jingdian',
			component: require('@/view/gzjq/jingdian/index').default
		}, {
			path: 'media',
			name: 'media',
			component: require('@/view/gzjq/media/index').default
		}]
	}]
}
