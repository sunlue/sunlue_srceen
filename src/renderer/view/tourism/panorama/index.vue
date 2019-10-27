<template>
	<div :id="$route.name" class="panorama_page scroll y">
		<div class="banner">
			<iframe src="http://720.cdn.geeker.com.cn/upload/file/2018/10/99/vtour/tour.html" frameborder="0"></iframe>
		</div>
		<div class="container full">
			<div class="container">
				<div class="title">
					<p class="zh">
						<span class="first">精彩</span>
						<span class="second">全景</span>
					</p>
					<p class="en"><span class="name">wise guide</span></p>
				</div>
				<ul class="content">
					<template v-for="(item, index) in items">
						<li class="itembox" :key="index" v-on:click="openWin(item)">
							<div class="thumb">
								<img :src="item.thumb" />
								<div class="name">{{ item.name }}</div>
							</div>
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
import bottom from '@/components/footer';
export default {
	components: {
		bottom
	},
	data() {
		return {
			items: [
				{
					name: '飞沙堰、宝瓶口',
					thumb: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1538293437141/飞沙堰、宝瓶口.jpg',
					iframe: 'http://720.cdn.geeker.com.cn/upload/file/2018/10/99/vtour2/index.html?startscene=4'
				},
				{
					name: '鱼嘴',
					thumb: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1538293190917/鱼嘴.jpg',
					iframe: 'http://720.cdn.geeker.com.cn/upload/file/2018/10/99/vtour2/index.html?startscene=2'
				},
				{
					name: '二王庙',
					thumb: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1539655392311/233.jpg?x-oss-process=image/crop,x_0,y_38,w_400,h_225',
					iframe: 'http://720.cdn.geeker.com.cn/upload/file/2018/10/99/vtour2/index.html?startscene=3'
				},
				{
					name: '虹口漂流',
					thumb: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1538294431080/虹口漂流.jpg',
					iframe: 'http://720.cdn.geeker.com.cn/upload/file/2018/10/99/vtour2/index.html?startscene=15'
				},
				{
					name: '熊猫谷',
					thumb: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1538294390513/熊猫谷.jpg',
					iframe: 'http://720.cdn.geeker.com.cn/upload/file/2018/10/99/vtour2/index.html?startscene=14'
				},
				{
					name: '古城区',
					thumb: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1538294364609/古城区.jpg',
					iframe: 'http://720.cdn.geeker.com.cn/upload/file/2018/10/99/vtour2/index.html?startscene=6'
				}
			]
		};
	},
	methods: {
		openWin: function(item) {
			this.$Win.openWin({
				width: 1280,
				height: 720,
				resizable: false,
				windowConfig: {
					router: '/modal/panorama',
					name: 'panorama_view',
					data: {
						title: item.name,
						iframe: item.iframe
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
.panorama_page {
	background: #f5f5f5;
	.banner {
		width: 100vw;
		height: 680px;
		position: relative;
		iframe {
			width: 100%;
			height: 100%;
			border: none;
		}
		&:after {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			left: 0px;
			top: 0px;
			position: absolute;
		}
	}
	.container.full {
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
					background: #f5f5f5;
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
			margin: -5px;
			li.itembox {
				display: inline-block;
				margin: 5px;
				width: calc(100% / 3 - 10px);
				padding: 15px;
				box-sizing: border-box;
				background: white;
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
}
</style>
