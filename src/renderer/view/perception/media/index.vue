<template>
	<div :id="$route.name" class="media-page scroll y">
		<banner :items="banner_items"></banner>
		<ul class="nav">
			<li :class="pageRouter == 'images' ? 'active' : ''" v-on:click="pageRouter = 'images'">照片</li>
			<li :class="pageRouter == 'videos' ? 'active' : ''" v-on:click="pageRouter = 'videos'">影像</li>
			<li :class="pageRouter == 'audios' ? 'active' : ''" v-on:click="pageRouter = 'audios'">天籁</li>
			<li :class="pageRouter == 'panoramic' ? 'active' : ''" v-on:click="pageRouter = 'panoramic'">全景</li>
		</ul>
		<div class="container full">
			<images v-if="pageRouter == 'images'"></images>
			<videos v-if="pageRouter == 'videos'"></videos>
			<auidos v-if="pageRouter == 'audios'"></auidos>
			<panoramic v-if="pageRouter == 'panoramic'"></panoramic>
		</div>
		<bottom></bottom>
	</div>
</template>

<script>
/*eslint-disable*/
import banner from '@/components/banner';
import bottom from '@/components/footer';
import images from './images';
import videos from './videos';
import auidos from './auidos';
import panoramic from './panoramic';
export default {
	components: {
		banner,
		bottom,
		images,
		videos,
		auidos,
		panoramic
	},
	data() {
		return {
			banner_items: {
				background: 'http://39.98.56.58:8080/demo/upload/2019-09-26/15694873365592c9a578d6d6c0b0157016d6cbc346f0e37.jpg',
				title: ['行摄', '掠影'],
				title_en: 'PERCEPTION MEISHAN',
				describe: '大文豪苏东坡的故乡，山川秀美、风光旖旎，位于大峨眉旅游圈内，是最佳生态康养旅游目的地'
			},
			pageRouter: 'images'
		};
	}
};
</script>

<style lang="less">
.media-page {
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
}
</style>
