<template>
	<div :id="$route.name" class="jingdian-page scroll y">
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
				background: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694873365592c9a578d6d6c0b0157016d6cbc346f0e37.jpg',
				title: ['悦览', '盛景'],
				title_en: 'Scenic spots',
				describe: '大文豪苏东坡的故乡，山川秀美、风光旖旎，位于大峨眉旅游圈内，是最佳生态康养旅游目的地'
			},
			box_items: [
				{
					name: '中岩景区',
					img: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694859224502c9a578d6d6c0b01371016d6ca6a0920c06.png',
					intro:
						'​国家AA级旅游景区，位于四川省眉山市青神县，北距成都125公里，被誉为“西川林泉最佳处”和“川南第一山”，' +
						'这里是北宋大文豪苏东坡年少求学之地，也是苏东坡与发妻王弗初恋的地方，“唤鱼联姻”成就一段佳话。有唤鱼池、' +
						'千佛长廊、卧佛石窟、玉泉流杯、灵岩石笋、清溪涧道等十二大景观。'
				},
				{
					name: '柳江古镇',
					img: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694855838092c9a578d6d6c0b01112016d6ca175c10b79.png',
					intro:
						'国家AAAA级旅游景区，四川省文化旅游特色小镇，入选“四川100个最美观景拍摄点”，' +
						'位于四川省眉山市洪雅县，距成都150公里、瓦屋山50公里、峨眉山36公里，始建于南宋' +
						'绍兴十年，距今已有800多年历史，享有“云南丽江，四川柳江”之称。古镇历史悠久、景色' +
						'优美、民风淳朴，有吊脚楼、曾家园、水码头、老街、古栈道、圣母山碑林、睡观音、108' +
						'棵千年古树、侯家山寨、光明寺等特色景观。'
				}
			]
		};
	},
	mounted() {}
};
</script>

<style lang="less">
.jingdian-page {
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
