<template>
	<div :id="$route.name" class="activity-page scroll y">
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
			banner_items: {
				background: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694886275912c9a578d6d6c0b01335016d6ccfe7870fba.jpg',
				title: ['特色', '活动'],
				title_en: 'Special events',
				describe: '大文豪苏东坡的故乡，山川秀美、风光旖旎，位于大峨眉旅游圈内，是最佳生态康养旅游目的地'
			},
			box_items: [
				{
					name: '中国竹文化节',
					img: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694904407782c9a578d6d6c0b01196016d6ceb924a1292.jpg',
					intro:
						'眉山是东坡故里，享有“千载诗书城”的美誉，竹文化底蕴深厚，与东坡文化交相辉映、融合发展。眉山' +
						'市青神县是文化部命名的“中国竹编艺术之乡”，被中国竹产业协会、国家林业局国际竹藤中心授予“中国' +
						'特色竹乡”荣誉称号，“青神竹编”被列入国家级非物质文化遗产保护名录。在眉山市青神县举办“第九届' +
						'中国竹文化节”有着得天独厚的优势和特殊的文化意义。'
				},
				{
					name: '东坡泡菜文化节',
					img: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694902598412c9a578d6d6c0b01616016d6ce8cf811254.png',
					intro:
						'慕新海说，“东坡泡菜”拥有独一无二的地理优势、文化优势和生产工艺，凭借其低盐脆香的' +
						'独特风味和绿色健康的营养价值，深受广大消费者的喜爱。今天的东坡泡菜，已走上了“两会”餐' +
						'桌，走进了《舌尖上的中国》，产品销往欧美、日本、韩国等100多个国家和地区。今天的眉山' +
						'泡菜产业，已建成国家级农业产业化龙头企业3个，拥有中国驰名商标5个，创造了“六个全国第一”，' +
						'产值突破150亿元。今天的眉山中国泡菜城，已成为中国泡菜的主产区和核心区，在申报创建首批国' +
						'家现代农业产业园中喜获全国第一名'
				},
				{
					name: '眉山樱花节',
					img: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694897057782c9a578d6d6c0b01570016d6ce05b32117d.jpg',
					intro: '眉山市持续推动绿色发展，生态旅游已成为眉山的又一新名片，占地820余亩的眉山樱花' + 
					'博览园种植了中国红、阳光、关山、松月等樱花'
				}
			]
		};
	},
	mounted() {}
};
</script>

<style lang="less">
.activity-page {
	.container {
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
</style>
