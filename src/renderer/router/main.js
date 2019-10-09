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
		path: '/perception',
		name: 'perception',
		component: require('@/components/parent-view/index').default,
		children: [{
			path: 'jingdian',
			name: 'jingdian',
			component: require('@/view/perception/jingdian/index').default
		}, {
			path: 'media',
			name: 'media',
			component: require('@/view/perception/media/index').default
		}, {
			path: 'activity',
			name: 'activity',
			component: require('@/view/perception/activity/index').default
		}]
	}, {
		path: '/drag_free',
		name: 'drag_free',
		component: require('@/components/parent-view/index').default,
		children: [{
				path: 'food',
				name: 'food',
				component: require('@/view/drag_free/food/index').default
			}, {
				path: 'hotel',
				name: 'hotel',
				component: require('@/view/drag_free/hotel/index').default
			},
			{
				path: 'traffic',
				name: 'traffic',
				component: require('@/view/drag_free/traffic/index').default
			}
		]
	}, {
		path: '/tourism',
		name: 'tourism',
		component: require('@/components/parent-view/index').default,
		children: [{
				path: 'dydl',
				name: 'dydl',
				component: require('@/view/tourism/dydl/index').default
			}, {
				path: 'tour_guide',
				name: 'tour_guide',
				component: require('@/view/tourism/tour_guide/index').default
			},
			{
				path: 'ecological',
				name: 'ecological',
				component: require('@/view/tourism/ecological/index').default
			},
			{
				path: 'panorama',
				name: 'panorama',
				component: require('@/view/tourism/panorama/index').default
			}
		]
	}, {
		path: '/shopping',
		name: 'shopping',
		component: require('@/view/shopping/index').default,
	}, {
		path: '/recreation',
		name: 'recreation',
		component: require('@/view/recreation/index').default,
	}]
}
