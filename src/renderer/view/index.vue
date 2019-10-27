<template>
	<div class="index">
		<swiper class="swiper" :options="swipers.option" ref="mySwiper">
			<swiper-slide class="slide-list" v-for="(item, index) in swipers.item" :key="index">
				<template v-if="item.type == 'animated'">
					<div class="animated-img">
						<div class="img-box"><img :src="item.img" alt="" /></div>
					</div>
					<template v-for="(img, j) in item.imgText">
						<img class="home-banner1-text" :src="img.img" alt="" :key="j" />
					</template>
				</template>
				<template v-else>
					<div class="img-box"><img :src="item.img" alt="" /></div>
					<div :class="'home-banner' + (index + 1) + '-text-box'">
						<template v-for="(img, j) in item.imgText">
							<img :class="'banner-text' + (j + 1)" :src="img.img" alt="" :key="j" />
						</template>
					</div>
				</template>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="footer-bottom">
			<span>Copyright © 眉山旅游网触摸屏系统 All Rights Reserved sunlue.com.</span>
			<span>咨询投诉电话：028-12345678</span>
		</div>
	</div>
</template>

<script>
/*eslint-disable*/
import 'swiper/dist/css/swiper.css';
import '@/styles/animate.min.css';
import '@/styles/default/index/swiper.less';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
	components: {
		swiper,
		swiperSlide
	},
	mounted() {},
	data() {
		return {
			swipers: {
				option: {
					autoplay: {
						delay: 30000,
						disableOnInteraction: false
					},
					speed: 800,
					loop: true,
					effect: 'fade',
					allowTouchMove: false,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					keyboard: true,
					on: {
						slideChange: function() {
							let realIndex = this.realIndex;
							this.params.autoplay.delay = realIndex ? 5000 : 30000;
						}
					}
				},
				item: [
					{
						type: 'animated',
						img: 'http://39.98.56.58:8080/demo/template/img/homeBanner1.jpg',
						imgText: [
							{
								img: 'http://39.98.56.58:8080/demo/template/img/homeBanner1Text.png'
							}
						]
					},
					{
						type: 'box',
						img: 'http://39.98.56.58:8080/demo/template/img/homeBanner2.jpg',
						imgText: [
							{
								img: 'http://39.98.56.58:8080/demo/template/img/homeBanner2Text2.png'
							},
							{
								img: 'http://39.98.56.58:8080/demo/template/img/homeBanner2Text1.png'
							}
						]
					},
					{
						type: 'box',
						img: 'http://39.98.56.58:8080/demo/template/img/homeBanner3.jpg',
						imgText: [
							{
								img: 'http://39.98.56.58:8080/demo/template/img/homeBanner3Text1.png'
							},
							{
								img: 'http://39.98.56.58:8080/demo/template/img/homeBanner3Text2.png'
							}
						]
					},
					{
						type: 'box',
						img: 'http://39.98.56.58:8080/demo/template/img/homeBanner4.jpg',
						imgText: [
							{
								img: 'http://39.98.56.58:8080/demo/template/img/homeBanner4Text1.png'
							},
							{
								img: 'http://39.98.56.58:8080/demo/template/img/homeBanner4Text2.png'
							},
							{
								img: 'http://39.98.56.58:8080/demo/template/img/homeBanner4Text3.png'
							}
						]
					},
					{
						type: 'box',
						img: 'http://39.98.56.58:8080/demo/template/img/homeBanner5.jpg',
						imgText: [
							{
								img: 'http://39.98.56.58:8080/demo/template/img/homeBanner5Text1.png'
							},
							{
								img: 'http://39.98.56.58:8080/demo/template/img/homeBanner5Text2.png'
							}
						]
					}
				]
			}
		};
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper;
		}
	},
};
</script>

<style lang="less">
.index {
	position: relative;
	width: 100%;
	height: 100%;
	.logo {
		position: absolute;
		z-index: 999;
		left: 20px;
		top: 30px;
		img {
			height: 60px;
		}
	}
	.footer-bottom {
		position: absolute;
		width: 100%;
		font-size: 12px;
		color: #fff;
		bottom: 0;
		z-index: 2;
		text-align: center;
		line-height: 58px;
	}
}
</style>
