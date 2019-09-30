<template>
	<div class="media-images">
		<div class="container" ref="container">
			<waterfall :line-gap="waterfall.gap" :watch="waterfall.items" :align="waterfall.align">
				<waterfall-slot v-for="(item, index) in waterfall.items" :width="item.width" :height="item.height" :order="index" :key="item.id">
					<div class="item"><img :src="item.src" /></div>
				</waterfall-slot>
			</waterfall>
		</div>
	</div>
</template>

<script>
/*eslint-disable*/
import Waterfall from 'vue-waterfall/lib/waterfall';
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot';
export default {
	components: {
		Waterfall,
		WaterfallSlot
	},
	data() {
		return {
			waterfall: {
				gap: 0,
				align: 'center',
				items: []
			},
			items: [
				{
					image: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694825342162c9a578d6d6c0b01665016d6c72ed4806ee.jpg'
				},
				{
					image: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694813404032c9a578d6d6c0b01310016d6c60b5f305ba.jpg'
				},
				{
					image: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694909758252c9a578d6d6c0b01900016d6cf3bc5113b8.jpg'
				},
				{
					image: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694908486222c9a578d6d6c0b01429016d6cf1cb6e138e.jpg'
				},
				{
					image: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694841961062c9a578d6d6c0b01998016d6c8c490a0996.png'
				},
				{
					image: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694840564032c9a578d6d6c0b01121016d6c8a2753097e.png'
				},
				{
					image: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-26/15694837839032c9a578d6d6c0b01698016d6c85fedf0939.jpg'
				}
			]
		};
	},
	mounted() {
		let that = this;
		let items = [];
		this.$nextTick(function() {
			let maxWidth = that.$refs.container.offsetWidth;
			let gap = maxWidth / 3 - 5;
			this.waterfall.gap = gap;
		});
		for (let i = 0; i < that.items.length; i++) {
			let imageSrc = that.items[i]['image'];
			that.getImgInfo(imageSrc, function(width, height) {
				items.push({
					width: width,
					height: height,
					src: imageSrc
				});
			});
		}
		that.waterfall.items = items;
	},
	methods: {
		getImgInfo(url, callback) {
			var img = new Image();
			img.src = url;
			img.onload = function() {
				callback(img.width, img.height);
			};
		}
	}
};
</script>

<style lang="less">
.media-images {
	.container {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.item {
		position: absolute;
		top: 5px;
		left: 5px;
		right: 5px;
		bottom: 5px;
		font-size: 1.2em;
		color: rgb(0, 158, 107);

		img {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
