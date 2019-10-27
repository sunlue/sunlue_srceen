<template>
	<div :id="$route.name" class="tour_guide_page scroll y">
		<banner :items="banner"></banner>
		<div class="container full">
			<div class="container">
				<div class="title">
					<p class="zh">
						<span class="first">智慧</span>
						<span class="second">导游</span>
					</p>
					<p class="en"><span class="name">wise guide</span></p>
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
					src: 'http://39.98.56.58:8080/demo/template/images/perceptionBannerBg.jpg',
					alt: ''
				},
				title: ['智游', '景区'],
				title_en: 'Wisdom tour scenic spot',
				describe:
					'大文豪苏东坡的故乡，山川秀美、风光旖旎，位于大峨眉旅游圈内，是最佳生态康养旅游目的地中国七大美食之城之一，' +
					'全市森林覆盖率达49.49%，拥有“三苏故居”三苏祠、“最美桌山”瓦屋山、“川西第一海”黑龙滩、“天然氧吧”七里坪、' +
					'“东坡初恋地”中岩寺、“禅度佛国”老峨山、“中国竹编展示中心”国际竹艺城、“中国泡菜研发中心”中国泡菜城、烟雨柳' +
					'江等著名景区点120余处.'
			},
			items: [
				{
					name: '热合曼·尼格买提',
					photo: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3668515757,3073835190&fm=179&app=42&f=JPEG?w=121&h=140',
					intro: '尼格买提·热合曼，维吾尔族，毕业于中国传媒大学，1983年4月17日出生于新疆维吾尔自治区乌鲁木齐市。中国中' + '央电视台综艺频道节目主持人。'
				},
				{
					name: '马云',
					photo: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=0003b03088b1cb133e693b15e56f3173/0bd162d9f2d3572c257447038f13632763d0c35f.jpg',
					intro:
						'马云，男，汉族，中共党员 [1]  ，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市谷来镇， 阿里巴巴' +
						'集团主要创始人，现担任日本软银董事、大自然保护协会中国理事会主席兼全球董事会成员、华谊兄弟董事、生命' +
						'科学突破奖基金会董事、联合国数字合作高级别小组联合主席'
				},
				{
					name: '王健林',
					photo: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b6559c7f831001e94e3c130980351cd1/cefc1e178a82b9015f0916a57d8da9773812ef84.jpg',
					intro: '王健林，男。1954年10月24日生于四川省广元市苍溪县，1989年起担任大连万达集团股份有限公司董事长。'
				},
				{
					name: '雷军',
					photo: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=fc41e5c2a04bd11304cdb0346294c332/30adcbef76094b36987b1a5caecc7cd98c109d91.jpg',
					intro:
						'雷军作为中国互联网代表人物及全球年度电子商务创新领袖人物，曾获中国经济年度人物及十大财智' +
						'领袖人物、中国互联网年度人物等多项国内外荣誉，并当选《福布斯》（亚洲版）2014年度商' +
						'业人物。同时兼任金山、YY、猎豹移动等三家上市公司董事长。雷军曾任两届海淀区政协委员，2012' +
						'年当选北京市人大代表，2013年2月当选全国人民代表大会代表。2017年12月，荣获2017“质量之光”年' +
						'度质量人物奖'
				},
				{
					name: '史蒂夫·乔布斯',
					photo: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=f6be7801b3315c60579863bdecd8a076/b8014a90f603738dbf37d836bc1bb051f819eca1.jpg',
					intro:
						'雷军作为中国互联网代表人物及全球年度电子商务创新领袖人物，曾获中国经济年度人物及十大财智' +
						'领袖人物、中国互联网年度人物等多项国内外荣誉，并当选《福布斯》（亚洲版）2014年度商' +
						'业人物。同时兼任金山、YY、猎豹移动等三家上市公司董事长。雷军曾任两届海淀区政协委员，2012' +
						'年当选北京市人大代表，2013年2月当选全国人民代表大会代表。2017年12月，荣获2017“质量之光”年' +
						'度质量人物奖'
				}
			],
		};
	}
};
</script>

<style lang="less">
.tour_guide_page {
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
		margin: -5px;
		li.itembox {
			display: inline-block;
			margin: 5px;
			width: calc(100% / 3 - 10px);
			.thumb {
				width: 100%;
				height: calc(410px / 2 * 3);
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
