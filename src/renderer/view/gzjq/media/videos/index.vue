<template>
	<div class="media-video">
		<div class="container">
			<ul>
				<template v-for="(item, index) in items">
					<li :key="index" v-on:click="startPlay(item)">
						<div class="thumb"><img :src="item.thumb" :alt="item.name" /></div>
						<div class="box">
							{{ item.name }}
							<span>58</span>
						</div>
					</li>
				</template>
			</ul>
		</div>
		<template v-if="video.show">
			<div class="modal" v-on:click="stopPlay">
				<div class="body"><video :src="video.src" controls="controls" autoplay="autoplay"></video></div>
			</div>
		</template>
	</div>
</template>

<script>
/*eslint-disable*/
export default {
	data() {
		return {
			items: [
				{
					name: '眉山旅游宣传',
					play: 58,
					src: 'http://39.98.56.58:8080/SunlueCMS/demo/video/2019-09-27/15695480429662c9a578d6d6c0b01538016d705a82d61fee.mp4',
					thumb: 'http://39.98.56.58:8080/SunlueCMS/demo/upload/2019-09-27/15695510215752c9a578d6d6c0b01379016d7087f6072251.png'
				}
			],
			video: {
				src: '',
				play: false,
				show: false
			}
		};
	},
	methods: {
		startPlay: function(item) {
			this.video.src = item.src;
			this.video.play = true;
			this.video.show = true;
		},
		stopPlay: function() {
			this.video.src = '';
			this.video.play = false;
			this.video.show = false;
		}
	}
};
</script>

<style lang="less">
.media-video {
	ul {
		width: 100%;
		margin: -5px;
		li {
			display: inline-block;
			width: calc(100% / 3 - 10px);
			margin: 5px;
			cursor: pointer;
			&.active,
			&:hover {
				.thumb {
					&:after {
						opacity: 1;
					}
					img {
						transform: scale(1.1);
					}
				}
				.box {
					color: #b30000;
				}
			}
			.thumb {
				width: 100%;
				height: 100%;
				overflow: hidden;
				position: relative;
				img {
					width: 100%;
					height: 274px;
					transition: all 1s;
				}
				&:after {
					position: absolute;
					content: '';
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0.5) url('http://39.98.56.58:8080/SunlueCMS/demo/template/images/videoBtn1.png') center no-repeat;
					top: 0;
					left: 0;
					cursor: pointer;
					opacity: 0;
					transition: 1s;
				}
			}
			.box {
				position: relative;
				line-height: 54px;
				font-size: 20px;
				color: #000;
				font-weight: bold;
				transition: 0.3s;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				padding-right: 60px;
				span {
					color: #808080;
					font-size: 12px;
					position: absolute;
					padding-left: 25px;
					right: 0px;
					top: 0px;
					&:before {
						content: '';
						display: inline-block;
						background-image: url('http://39.98.56.58:8080/SunlueCMS/demo/template/images/videoBtn2.png');
						background-repeat: no-repeat;
						width: 20px;
						height: 20px;
						position: absolute;
						left: 0px;
						top: calc(50% - 10px);
					}
				}
			}
		}
	}
	.modal {
		width: 100%;
		height: 100%;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
		top: 0px;
		left: 0px;
		z-index: 1000;
		.body {
			width: 1200px;
			height: 800px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			background: transparent;
			video {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
