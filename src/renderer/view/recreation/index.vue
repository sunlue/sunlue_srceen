<template>
	<div :id="$route.name" class="recreation-page scroll y">
		<template v-if="intro_bar">
			<div class="introBar" v-on:click="intro_bar = false"><img src="../../assets/icon/ico_down.png" /></div>
		</template>
		<div class="introContent" v-else>
			<div class="close" v-on:click="intro_bar = true"></div>
			<div class="container scroll y">
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim01.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim02.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim03.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim04.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim06.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim07.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim08.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim09.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim10.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim11.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim12.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim13.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim14.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim15.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim16.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim17.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim18.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim19.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim20.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim21.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim22.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim23.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim24.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim25.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/ylLine/cim26.jpg" />
			</div>
		</div>
		<banner :items="banner_items"></banner>
		<div class="container full">
			<ul class="content">
				<template v-for="(box, index) in box_items">
					<li :key="index">
						<div class="item container">
							<template v-if="index % 2 != 0">
								<img :src="box.img" :alt="box.name" />
								<div class="box">
									<strong class="name">{{ box.name }}</strong>
									<p class="intro">{{ box.intro }}</p>
								</div>
							</template>
							<template v-else>
								<div class="box">
									<strong class="name">{{ box.name }}</strong>
									<p class="intro">{{ box.intro }}</p>
								</div>
								<img :src="box.img" :alt="box.name" />
							</template>
						</div>
					</li>
				</template>
			</ul>
		</div>
		<bottom></bottom>
	</div>
</template>

<script>
/*eslint-disable*/
import banner from '@/components/banner';
import bottom from '@/components/footer';
export default {
	components: {
		banner,
		bottom
	},
	data() {
		return {
			intro_bar: true,
			banner_items: {
				background: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694873365592c9a578d6d6c0b0157016d6cbc346f0e37.jpg',
				title: ['精彩', '娱乐'],
				title_en: 'Enjoy shopping in the scenic area',
				describe:
					'工欲善其事，必先利其器。西岭雪山不仅有得天独厚的自然资源，层出不穷的运动项目也成为了发展旅游的一大特色。' +
					'夏秋季，景区培植了50万平方米高山草坪，并有丰富的草地时尚休闲运动。' +
					'冬季，景区有近20个雪地游乐项目，是国内唯一的大型雪上游乐场，是全球最温暖的滑雪场，同时也是中国南方唯一可申办冬季奥运会的场地。'
			},
			box_items: [
				{
					name: '夏秋季项目—山地自行车',
					img: 'http://www.xiling.cn/upload/voice/201712/15121929680907.png',
					intro:
						'山​地自行车的英文名叫“mountain bike”，缩写为MTB。起源于美国，是美国青年' +
						'为了寻求刺激，在摩托车比赛的越野地上驾驶自行车进行花样比赛而派生发展起来的' +
						'车型。 在摩托车比赛的越野场地上驾驶自行车进行花样比赛而派生发展起来的车型。' +
						'但在西岭雪山骑山地自行车却有另一番风味，不必追求速度的刺激，您可以三五成群，' +
						'也可以和爱人一块悠闲的在西岭雪山的原始森林里穿梭。风景好，可以停下来慢慢欣赏，' +
						'也可以把车停在一旁两个人促膝长谈，那感觉也是相当的惬意。'
				},
				{
					name: '夏秋季项目—滑草',
					img: 'http://www.xiling.cn/ueditor/jsp/upload/image/20171202/1512192586265089146.png',
					intro: '滑草最早兴于北欧，国内现有广东、深圳在开设。西岭雪山滑草场是国内第三家开设此项运' + 
								'动的，是一项价格便宜又能充分体现时尚的夏季休闲运动。'
				},
				{
					name: '夏秋季项目—ATV越野车',
					img: 'http://www.xiling.cn/ueditor/jsp/upload/image/20171202/1512192804596038807.png',
					intro:
						'是集休闲、体育运动、旅游于一体的综合型特种车辆。车身强悍，外部造型粗犷，' +
						'非常适合喜爱户外运动的朋友。约上三两好友，各乘一辆，驾驭它在景区为您特造' +
						'的山地中行使，风驰电制、气势磅礴，既能享受山地颠簸起伏给您带来的极限快感，' +
						'又能饱尝沿途醉人的风光美景。'
				}
			]
		};
	},
	mounted() {}
};
</script>

<style lang="less">
.recreation-page {
	position: relative;
	.introBar {
		position: fixed;
		right: 0px;
		top: 0px;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		width: 40px;
		z-index: 999;
		img {
			transform: rotate(90deg) translateY(-50%);
			position: absolute;
			top: 50%;
			left: -5px;
			height: 20px;
			display: block;
			animation: scrollmove ease-out 2s infinite;
		}
	}
	.introContent {
		position: fixed;
		right: 0px;
		top: 0px;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		width: 0px;
		z-index: 999;
		animation-name: introContent;
		animation-duration: 600ms;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
		.close {
			cursor: pointer;
			width: 40px;
			height: 40px;
			position: absolute;
			right: 0px;
			top: 0px;
			background: rgba(0, 0, 0, 0.6);
			&:before,
			&:after {
				position: absolute;
				display: block;
				content: '';
				height: 1px;
				width: 40px;
				background: white;
				top: 20px;
				animation-duration: 300ms;
				animation-delay: 300ms;
				animation-timing-function: linear;
				animation-fill-mode: forwards;
			}
			&:before {
				animation-name: menucloseleft;
			}
			&:after {
				animation-name: menucloseright;
			}
		}
		.container {
			padding: 10px 0px;
			img {
				width: 100%;
				margin: 0;
				padding: 0;
				display: block;
			}
		}
	}
	& > .container {
		padding-right: 40px;
		.content {
			width: 100%;
			margin: 0px;
			padding: 0px;
			li {
				height: 330px;
				margin-top: 48px;
				&:nth-child(even) {
					background: #e5e5e5;
				}
				.item {
					height: 100%;
					display: flex;
					*:nth-child(even) {
						margin-left: 20px;
					}
					img {
						height: 100%;
						width: 480px;
					}
					.box {
						padding: 20px 0px;
						box-sizing: border-box;
						&:nth-child(odd) {
							flex: 1;
						}
						&:nth-child(even) {
							flex: 1;
						}
						.name {
							font-size: 30px;
							color: #000;
							font-weight: bold;
							margin-top: 30px;
							transition: 0.3s;
						}
						.intro {
							font-size: 18px;
							color: #666;
							transition: 0.3s;
							margin: 16px 0px 16px 0px;
							line-height: 1.5;
							font-weight: 400;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 9;
							overflow: hidden;
						}
					}
				}
			}
		}
	}
}
@keyframes introContent {
	from {
		width: 0%;
	}
	to {
		width: 100%;
	}
}
@-webkit-keyframes introContent {
	from {
		width: 0%;
	}
	to {
		width: 100%;
	}
}
</style>
