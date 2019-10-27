<template>
	<div :id="$route.name" class="intro-page scroll y">
		<banner :items="items"></banner>
		<div class="container full">
			<div class="container content" v-html="content"></div>
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
			items: {
				background: {
					src: 'http://39.98.56.58:8080/demo/template/images/perceptionBannerBg.jpg',
					alt: ''
				},
				title: ['景区', '概况'],
				title_en: 'SCENIC SPOT INTRODUCTION',
				describe:
					'大文豪苏东坡的故乡，山川秀美、风光旖旎，位于大峨眉旅游圈内，是最佳生态康养旅游目的地中国七大美食之城之一，' +
					'全市森林覆盖率达49.49%，拥有“三苏故居”三苏祠、“最美桌山”瓦屋山、“川西第一海”黑龙滩、“天然氧吧”七里坪、' +
					'“东坡初恋地”中岩寺、“禅度佛国”老峨山、“中国竹编展示中心”国际竹艺城、“中国泡菜研发中心”中国泡菜城、烟雨柳江等著名景区点120余处.'
			},
			content:
				'<p style="text-indent:2em;">' +
				'<span>' +
				'月亮湖景区位于雅安市名山区解放乡银木村，距离区政府约20公里。月亮湖原名观音寺水库，水域面积200亩，' +
				'按照“五美乡村”标准，集知青文化、民宿、垂钓、婚庆为一体的浪漫茶乡。月亮湖节点总投资2050万元，新建婚庆广场、' +
				'林下花海、爱情殿堂、月牙台、环湖路、知青广场、垂钓平台、湿地公园以及夕阳和日出观景平台等10个节点，同时以' +
				'知青文化为背景通过高端民俗带动乡村振兴，打造知青大院3个，茶家乐、茗宿10余家。' +
				'</span>' +
				'</p>' +
				'<p style="text-align:center;">' +
				'<img src="http://cmp.yaylh.sunlue.com/UploadFile/image/20190909/20190909154352015201.jpg" alt="" />' +
				'</p>'
		};
	}
};
</script>

<style lang="less">
.intro-page {
	.container.full{
		padding-left: 60px;
		box-sizing: border-box;
		.content {
			margin: 40px auto 0px !important;
			font-size: 16px;
			color: #333333;
			min-height: 500px;
			p {
				font-size: 20px;
				line-height: 150%;
				margin-bottom: 16px;
				font-family: '华文楷体';
			}
			img {
				max-width: 100%;
			}
		}
	}
}
</style>
