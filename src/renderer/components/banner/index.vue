<template>
	<div class="component-banner">
		<div class="swiper-banner" v-if="items.length > 0">
			<swiper class="swiper" :options="swipers.option" ref="introSwiper">
				<template v-for="(item, index) in items">
					<swiper-slide class="slide-list" :key="index">
						<div class="item"><img :src="item.img" /></div>
					</swiper-slide>
				</template>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="single-banner" v-else>
			<template v-if="typeof items.background == 'string'">
				<img :src="items.background" />
			</template>
			<template v-else>
				<img :src="items.background.src" :alt="items.background.alt" />
			</template>
			<div class="box">
				<div class="title" v-if="items.title_en">
					<div class="big">{{ items.title[0] }}</div>
					<div class="small">
						<span>{{ items.title[1] }}</span>
						<span>{{ items.title_en }}</span>
					</div>
				</div>
				<div class="title" v-else>
					<div class="first">{{ items.title[0] }}</div>
					<div class="second">{{ items.title[1] }}</div>
				</div>
				<div class="describe">{{ items.describe }}</div>
			</div>
		</div>
	</div>
</template>

<script>
/*eslint-disable*/
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
	components: {
		swiper,
		swiperSlide
	},
	props: {
		items: ''
	},
	mounted() {},
	data() {
		return {
			banner: 'singles',
			swipers: {
				option: {
					height: 500,
					autoplay: {
						delay: 3000,
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
					keyboard: true
				}
			}
		};
	}
};
</script>

<style lang="less">
.component-banner {
	width: 100%;
	height: 500px;

	.swiper-banner {
		height: 500px;
		width: 100%;
		.swiper-container {
			height: 100%;
		}
		.item {
			height: 100%;
			width: 100%;
			img {
				height: 100%;
				width: 100%;
			}
		}
		.swiper-pagination-bullet-active {
			background-color: #b30000;
		}
	}

	.single-banner {
		height: 500px;
		width: 100%;
		position: relative;
		overflow: hidden;
		img {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			min-height: 100%;
		}
		.box {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			.title {
				display: flex;
				.big {
					font-size: 60px;
					color: #b30000;
					font-weight: 600;
					line-height: 60px;
				}
				.small {
					padding-left: 10px;
					span {
						display: block;
						&:first-child {
							font-size: 35px;
							color: #000;
							font-weight: 600;
							margin: 0;
							line-height: 1.2em;
						}
						&:last-child {
							font-size: 20px;
							color: #fff;
							text-transform: uppercase;
							margin: 0;
							line-height: 1em;
						}
					}
				}
				.first{
					font-size: 60px;
					color: #FFFFFF;
					font-weight: 600;
					line-height: 60px;
				}
				.second{
					font-size: 60px;
					color: #b20000;
					font-weight: 600;
					line-height: 60px;
				}
			}
			.describe {
				font-size: 16px;
				color: #fff;
				line-height: 28px;
				margin-top: 10px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 5;
				overflow: hidden;
			}
		}
	}
}
</style>
