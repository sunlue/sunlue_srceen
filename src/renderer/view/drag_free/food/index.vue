<template>
	<div :id="$route.name" class="food_page scroll y">
		<banner :items="banner"></banner>
		<div class="container full">
			<div class="container">
				<div class="title">
					<p class="zh">
						<span class="first">特色</span>
						<span class="second">美食</span>
					</p>
					<p class="en"><span class="name">Gourmet world</span></p>
				</div>
				<ul class="content">
					<template v-for="(item, index) in items">
						<li class="itembox" :key="index">
							<div class="thumb">
								<img :src="item.photo" />
								<div class="name">
									{{ item.name }}
								</div>
							</div>
							<div class="intro">{{ item.intro }}</div>
						</li>
					</template>
				</ul>
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
					src: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694891389812c9a578d6d6c0b01898016d6cd7b52510ba.jpg',
					alt: ''
				},
				title: ['畅行', '景区'],
				describe:'在骨灰级吃货眼里的眉山美食 不仅仅是一道道诱人的美味，而是一个系统化的美食地图'
			},
			items: [
				{
					name: '东坡肘子',
					photo: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694907593872c9a578d6d6c0b01683016d6cf06edb1370.jpg',
					intro: '东坡肘子、东坡烤鸭、东坡宴、东坡泡菜、东坡鱼、东坡肉、龙眼酥、广济水蜜桃、青菜圆子、原汤牛肉、肥肠鱼、九大碗、东坡春见。'
				},
				{
					name: '东坡烤鸭',
					photo: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694917489032c9a578d6d6c0b01280016d6cff882714e5.jpg',
					intro: '东坡肘子、东坡烤鸭、东坡宴、东坡泡菜、东坡鱼、东坡肉、龙眼酥、广济水蜜桃、青菜圆子、原汤牛肉、肥肠鱼、九大碗、东坡春见。'
				},
				{
					name: '东坡宴',
					photo: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694922059662c9a578d6d6c0b01836016d6d06818e155b.jpg',
					intro: '东坡肘子、东坡烤鸭、东坡宴、东坡泡菜、东坡鱼、东坡肉、龙眼酥、广济水蜜桃、青菜圆子、原汤牛肉、肥肠鱼、九大碗、东坡春见。'
				},
				{
					name: '东坡泡菜',
					photo: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694930099342c9a578d6d6c0b01331016d6d12c60e1622.jpg',
					intro: '东坡肘子、东坡烤鸭、东坡宴、东坡泡菜、东坡鱼、东坡肉、龙眼酥、广济水蜜桃、青菜圆子、原汤牛肉、肥肠鱼、九大碗、东坡春见。'
				},
				{
					name: '东坡鱼',
					photo: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694938425592c9a578d6d6c0b01428016d6d1f7a7f174f.jpg',
					intro: '东坡肘子、东坡烤鸭、东坡宴、东坡泡菜、东坡鱼、东坡肉、龙眼酥、广济水蜜桃、青菜圆子、原汤牛肉、肥肠鱼、九大碗、东坡春见。'
				}
			],
		};
	}
};
</script>

<style lang="less">
.food_page {
	.title {
		padding: 60px 0px;
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
	ul.content {
		margin: -10px;
		li.itembox {
			display: inline-block;
			margin: 10px;
			width: calc(100% / 3 - 20px);
			.thumb {
				width: 100%;
				height: calc(410px / 3 * 2);
				overflow: hidden;
				position: relative;
				img {
					width: 100%;
					height: 100%;
					transition: all 0.5s;
				}
				.name {
					position: absolute;
					bottom: 0px;
					display: block;
					width: 100%;
					background-color: rgba(0, 0, 0, 0.5);
					text-align: center;
					padding: 8px 0px;
					font-size: 26px;
					font-family: '楷体';
					color: white;
				}
			}
			&:hover {
				.thumb {
					img {
						transform: scale(1.1);
					}
				}
			}
			.intro {
				line-height: 32px;
				font-size: 18px;
				color: #666;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				transition: 0.3s;
				margin-bottom: 20px;
			}
		}
	}
}
</style>
