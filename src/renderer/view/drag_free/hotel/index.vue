<template>
	<div :id="$route.name" class="hotel_page scroll y">
		<banner :items="banner"></banner>
		<ul class="nav">
			<li :class="pageRouter == 'star' ? 'active' : ''" v-on:click="pageRouter = 'star'">星级酒店</li>
			<li :class="pageRouter == 'rural' ? 'active' : ''" v-on:click="pageRouter = 'rural'">乡村酒店</li>
			<li :class="pageRouter == 'homestay' ? 'active' : ''" v-on:click="pageRouter = 'homestay'">特色民宿</li>
			<li :class="pageRouter == 'theme' ? 'active' : ''" v-on:click="pageRouter = 'theme'">主题酒店</li>
		</ul>
		<div class="container full">
			<ul class="content">
				<template v-for="(item, index) in items">
					<li :key="index">
						<div class="item container">
							<template v-if="index % 2 != 0">
								<img :src="item.img" :alt="item.name" />
							</template>
							<div class="box">
								<strong class="name">{{ item.name }}</strong>
								<p class="intro">{{ item.intro }}</p>
								<p class="telphone">{{ item.phone }}</p>
								<p class="address">{{ item.address }}</p>
							</div>
							<template v-if="index % 2 == 0">
								<img :src="item.img" :alt="item.name" />
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
			banner: {
				background: {
					src: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694892652472c9a578d6d6c0b01306016d6cd9a25f10d8.jpg',
					alt: ''
				},
				title: ['畅行', '景区'],
				describe: '位于大峨眉旅游圈内，全市森林覆盖率达49.49%，最佳生态康养旅游目的地'
			},
			pageRouter: 'star',
			items: [
				{
					name: '眉山兰溪·金熙温泉酒店',
					img: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694859224502c9a578d6d6c0b01371016d6ca6a0920c06.png',
					intro: '​眉山兰溪·金熙温泉酒店(TulipInnLanXiHotSpring)，是由四川云溪置业有限公司倾力打造的国际性轻奢酒店，',
					phone: '028-38713333',
					address: '眉山东坡区岷东新区富牛大道南段5号江山美墅内'
				},
				{
					name: '眉山岷江东湖饭店',
					img: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694855838092c9a578d6d6c0b01112016d6ca175c10b79.png',
					intro: '​眉山岷江东湖饭店位于眉山市区，南枕岷江，北临东坡湖，占地175000平方米，建筑面积46000平方米，距成都、乐山、峨眉均30分钟车程，交通十分便捷。',
					phone: '028-38713333',
					address: '眉山 东坡区 环岛路1号（东坡城市湿地公园旁边）'
				}
			]
		};
	}
};
</script>

<style lang="less">
.hotel_page {
	.nav {
		width: 100%;
		background: #e5e5e5;
		height: 50px;
		text-align: center;
		margin-bottom: 50px;
		font-size: 0;
		li {
			min-width: 180px;
			display: inline-block;
			height: 100%;
			transition: 0.3s;
			padding: 0 30px;
			line-height: 50px;
			font-size: 20px;
			color: #4c4c4c;
			font-weight: bold;
			box-sizing: border-box;
			border-right: 1px solid #ccc;
			cursor: pointer;
			&:last-child {
				border: none;
			}
			&.active,
			&:hover {
				background: #b30000;
				color: white;
			}
		}
		& + .container.full {
			min-height: 500px;
		}
	}
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
				& > *:nth-child(even) {
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
						-webkit-line-clamp: 6;
						overflow: hidden;
					}
					.telphone,
					.address {
						font-size: 16px;
						color: #808080;
						margin: 0;
						position: relative;
						text-indent: 28px;
						line-height: 32px;
						height: 32px;
						&:before {
							position: absolute;
							content: '';
							width: 21px;
							height: 23px;
							top: calc(50% - 11.5px);
							left: 0;
						}
						&.telphone:before {
							background: url('../../../assets/icon/telBtn.png') center no-repeat;
						}
						&.address:before {
							background: url('../../../assets/icon/addressBtn.png') center no-repeat;
						}
					}
				}
			}
		}
	}
}
</style>
