<template>
	<div :id="$route.name" class="traffic_page scroll y">
		<banner :items="banner"></banner>
		<div class="container full">
			<div class="container">
				<div class="title">
					<p class="zh">
						<span class="first">我行</span>
						<span class="second">我速</span>
					</p>
					<p class="en"><span class="name">Convenient transportation</span></p>
				</div>
				<div class="content">
					<p style="text-indent: 2em;">
						旅游交通：眉山旅游交通方便快捷，四通八达。与成都交通实现无缝对接，与成都双流国际机场和在建的天府国际机场仅半小时车程，三横七纵高速路网、三横六纵铁路网穿境而过。成绵乐城际高铁眉山东站、眉山汽车客运站、眉山公交车站、眉山出租车站“四站合一”的眉山交通中心，能让游客方便快捷地乘车，到达眉山周边省市、各区县。同时，眉山城区到各区县主要景区点仅半小时左右车程，各景区可进入性强。
					</p>
					<p style="text-align: center">
						<img src="http://39.98.56.58:8080/demo/upload/2019-09-26/15694928147942c9a578d6d6c0b01827016d6d0fcbca15d6.jpg" alt="6.jpg" width="1600" />
					</p>
					<p style="text-align: center">
						<img src="http://39.98.56.58:8080/demo/upload/2019-09-26/15694928148412c9a578d6d6c0b01423016d6d0fcbf915d7.jpg" alt="7.jpg" width="1600" />
					</p>
					<p style="text-align: center">
						<img src="http://39.98.56.58:8080/demo/upload/2019-09-26/15694928148722c9a578d6d6c0b0165016d6d0fcc1815d8.jpg" alt="9.jpg" width="1600" />
					</p>
				</div>
			</div>
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
			banner: {
				background: {
					src: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694892652472c9a578d6d6c0b01306016d6cd9a25f10d8.jpg',
					alt: ''
				},
				title: ['畅行', '景区'],
				describe: '位于大峨眉旅游圈内，全市森林覆盖率达49.49%，最佳生态康养旅游目的地'
			},
		};
	}
};
</script>

<style lang="less">
.traffic_page {
	.title {
		padding: 40px 0px;
		.zh {
			text-align: center;
			.first {
				font-size: 35px;
				font-weight: bold;
				color: #b30000;
				line-height: 1em;
			}
			.second {
				font-size: 35px;
				font-weight: bold;
				color: #000;
				position: relative;
				line-height: 1em;
				&:after {
					position: absolute;
					content: '';
					width: 57px;
					height: 26px;
					background-image: url('http://39.98.56.58:8080/demo/template/images/cloud2.png');
					top: 0;
					right: -67px;
				}
			}
		}
		.en {
			position: relative;
			text-align: center;
			margin: 0;
			.name {
				text-transform: uppercase;
				font-size: 16px;
				color: #b2b2b2;
				background: #fff;
				position: relative;
				z-index: 2;
				padding: 0 26px;
			}
			&:after {
				position: absolute;
				content: '';
				width: 100%;
				height: 1px;
				background: #cccccc;
				left: 0;
				top: 50%;
			}
		}
	}
	.content{
		min-height: 500px;
		font-size: 16px;
		color: #666;
		line-height: 26px;
		img{
			max-width: 100%;
			margin: 0 auto;
		}
	}
}
</style>
