<template>
	<div class="menu-toolbar">
		<div class="logo">
			<router-link class="group" :to="{ name: 'index' }">
				<img src="./../../../assets/logo_img.png" />
				<img src="./../../../assets/logo_text.png" />
			</router-link>
		</div>
		<div :class="['menu', menu.open ? 'open' : 'close']" tag="menu">
			<template v-if="menu.type != 'nav'">
				<div class="icon" v-if="!menu.open" v-on:click="menu.open = true">
					<img src="./../../../assets/icon/ico_down.png" />
				</div>
				<div class="item" v-else-if="menu.open">
					<div class="close" v-on:click="menu.open = false"></div>
					<div class="nav">
						<ul>
							<template v-for="(item, index) in menu.items">
								<li :key="index" :style="'background-image: url(' + item.background + ');'"><router-link :to="{ name: item.router }" :title="item.name"></router-link></li>
							</template>
						</ul>
					</div>
				</div>
			</template>
			<template v-else>
				<div class="items">
					<ul class="nav" ref="navMenu">
						<template v-for="(item, index) in menu.navBar">
							<li class="navBar" :data-key="index" :key="index" v-on:click="clickMenu(item, index, $event)">
								<a href="javascript:;" :class="['menu-a', $route.name == item.href ? 'active' : '']">
									<span class="menu-name">{{ item.name }}</span>
								</a>
								<div class="menu-child" v-if="item.children">
									<ul>
										<template v-for="(child, j) in item.children">
											<li :key="j" v-if="child.img">
												<router-link :to="{ name: child.href }">
													<img :src="child.img" />
													<span>{{ child.name }}</span>
												</router-link>
											</li>
										</template>
									</ul>
								</div>
							</li>
						</template>
					</ul>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
/*eslint-disable*/
import './index.less';
export default {
	data() {
		return {
			menu: {
				type: 'nav',
				open: false,
				navBar: [
					{
						name: '景区概况',
						href: 'intro'
					},
					{
						name: '感知景区', // 景区文化、活动
						children: [
							{
								name: '阅览盛景',
								href: 'jingdian',
								img: require('../../../assets/menu/阅览盛景.jpg')
							},
							{
								name: '行摄掠影',
								href: 'media',
								img: require('../../../assets/menu/行摄掠影.jpg')
							},
							{
								name: '特色活动',
								href: 'activity',
								img: require('../../../assets/menu/特色活动.jpg')
							}
						]
					},
					{
						name: '畅行景区', // 吃、住、行
						children:[
							{
								name: '特色美食',
								href: 'food',
								img: require('../../../assets/menu/特色美食.jpg')
							},
							{
								name: '温馨旅居',
								href: 'hotel',
								img: require('../../../assets/menu/温馨旅居.jpg')
							},
							{
								name: '我行我速',
								href: 'traffic',
								img: require('../../../assets/menu/我行我速.jpg')
							},
						]
					},
					{
						name: '智游景区', // 游
						children:[
							{
								name: '电子导览',//导游导览
								href: 'dydl',
								img: require('../../../assets/menu/电子导览.jpg')
							},
							{
								name: '智慧导游',//景区导游
								href: 'tour_guide',
								img: require('../../../assets/menu/智慧导游.jpg')
							},
							{
								name: '生态景区',//景区环境监测
								href: 'ecological',
								img: require('../../../assets/menu/生态景区.jpg')
							},
							{
								name: '景区全景',//景区全景
								href: 'panorama',
								img: require('../../../assets/menu/景区全景.jpg')
							}
						]
					},
					{
						name: '景区乐购', // 购
						href: 'shopping'
					},
					{
						name: '精彩娱乐', // 娱
						href: 'recreation'
					}
				],
				items: [
					{
						name: '概况',
						background: 'http://cmp.yaylh.sunlue.com/images/menu1.png',
						router: 'intro'
					},
					{
						name: '文化',
						background: 'http://cmp.yaylh.sunlue.com/images/menu2.png',
						router: ''
					},
					{
						name: '美景',
						background: 'http://cmp.yaylh.sunlue.com/images/menu3.png',
						router: ''
					},
					{
						name: '食宿',
						background: 'http://cmp.yaylh.sunlue.com/images/menu4.png',
						router: ''
					},
					{
						name: '购物',
						background: 'http://cmp.yaylh.sunlue.com/images/menu5.png',
						router: ''
					},
					{
						name: '体验',
						background: 'http://cmp.yaylh.sunlue.com/images/menu6.png',
						router: ''
					}
				]
			}
		};
	},
	mounted() {
		let _this = this;
		document.addEventListener('click', function(e) {
			let flag = true;
			for (let i = 0; i < e.path.length; i++) {
				if (e.path[i].getAttribute('id') === 'app' || i === e.path.length) {
					break;
				}
				let tag = e.path[i].getAttribute('tag');
				if (tag === 'menu') {
					flag = true;
					break;
				} else {
					flag = false;
				}
			}
			if (!flag) {
				_this.clearActiveMenu();
			}
		});
	},
	methods: {
		clickMenu(menu, index, e) {
			this.clearActiveMenu(() => {
				if (menu.children || menu.href === '') {
					let childUlElecmect = e.currentTarget.getElementsByClassName('menu-child');
					if (childUlElecmect.length > 0) {
						childUlElecmect[0].style.transform = 'rotateX(0deg)';
						let childAElecmect = e.currentTarget.getElementsByTagName('a');
						childAElecmect[0].style.background = 'white';
						childAElecmect[0].style.color = '#b20000';
					}
				} else {
					this.$router.replace({
						name: menu.href
					});
				}
			});
		},
		clearActiveMenu(callback) {
			let element = this.$refs.navMenu.getElementsByClassName('navBar');
			for (let i = 0; i < element.length; i++) {
				let menuChildElecmect = element[i].getElementsByClassName('menu-child');
				if (menuChildElecmect.length > 0) {
					menuChildElecmect[0].style.transform = 'rotateX(90deg)';
					let tempChildAElecmect = element[i].getElementsByTagName('a');
					tempChildAElecmect[0].style.color = 'white';
					tempChildAElecmect[0].style.background = 'none';
				}
			}
			if (typeof callback === 'function') {
				callback();
			}
		}
	}
};
</script>
