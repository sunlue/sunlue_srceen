<template>
	<div :id="$route.name" class="shopping-page scroll y">
		<template v-if="intro_bar">
			<div class="introBar" v-on:click="intro_bar = false"><img src="../../assets/icon/ico_down.png" /></div>
		</template>
		<div class="introContent" v-else>
			<div class="close" v-on:click="intro_bar = true"></div>
			<div class="container scroll y">
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim01.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim02.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim03.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim04.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim05.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim06.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim07.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim08.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim09.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim10.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim11.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim12.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim13.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim14.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim15.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim16.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim17.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim18.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim19.jpg" />
				<img src="http://www.djy517.com/sc_djy/images/gwLine/cim20.jpg" />
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
				title: ['景区', '乐购'],
				title_en: 'Enjoy shopping in the scenic area',
				describe:
					'这里不仅有雪山集市为您提供当地特色的老腊肉和腊排，景区还以欧式帐篷的形式，' +
					'为您呈现各色美食，不管你是喜爱热辣美食，还是日韩料理，亦或是钟情于川味美食，这里都能一' +
					'一满足您；冬日的西岭是寒冷而美丽的，一杯热气腾腾的咖啡为您抵挡凛冽的空气.'
			},
			box_items: [
				{
					name: '雪山老腊肉',
					img: 'http://www.xiling.cn/ueditor/jsp/upload/image/20171215/1513323711231092008.jpg',
					intro:
						'​雪山老腊肉，经煮熟切成片后，其透明发亮，色泽鲜艳，黄里透红，吃起来味道醇香，' +
						'肥不腻口，瘦不塞牙，不仅风味独特，营养丰富，而且具有开胃、去寒、消食等功能，' +
						'素有“一家煮肉百家香”的赞语。'
				},
				{
					name: '白果炖鸡',
					img: 'http://pic.lvmama.com/uploads/pc/place2/2015-09-23/d3e858ef-2d55-4d79-a848-d3edf1a2317c_480_320.jpg',
					intro:
						'白果炖鸡是著名的“青城四绝”之一。汤色白润，鸡肉鲜美，白果幽香软糯，传说是道家' +
						'创制的养生秘笈，具有非常强的滋补效果。尤其是对老年人，对延缓衰老，增加蛋白有' +
						'很好的作用。在青城后山的农家乐，以及都江堰郊区都可以品尝到。因银杏有小毒，所' +
						'以不宜大量、长期食用，忌与鳗鱼同食。'
				},
				{
					name: '虹鳟鱼',
					img: 'http://pic.lvmama.com/uploads/pc/place2/2018-09-13/0c160296-98a5-463b-afe2-888c33830357_480_320.jpg',
					intro:
						'虹鳟鱼肉质中富含丰厚的植物蛋白质和多种维生素，临时食用可无效避免心血管疾病，' +
						'具有降血压、降血糖、降血脂、明目、健脑、养颜、强肾、增强养分均衡、促进患者伤' +
						'口愈合和康复等明显成效，故被誉为“水中人参”。现已研制开收回了鱼头、鱼皮、鱼片、' +
						'珍珠鱼卵、鱼饺、鱼丸等美味可口的虹鳟鱼系列产品。'
				}
			]
		};
	},
	mounted() {}
};
</script>

<style lang="less">
.shopping-page {
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
