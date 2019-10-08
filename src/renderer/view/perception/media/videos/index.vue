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
			<div class="modal">
				<div class="body">
					<video-player ref="videoPlayer" :options="video.option" :playsinline="true"></video-player>
					<div class="close" v-on:click="stopPlay"></div>
				</div>
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
				show: false,
				option:{
					playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: true, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [
						{
							type: 'video/mp4', //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
							src: '' //url地址
						}
					],
					poster: '', //你的封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
				}
			}
		};
	},
	methods: {
		startPlay: function(item) {
			this.video.show = true;
			this.$nextTick(function() {
				this.$refs.videoPlayer.player.src(item.src);
				this.$refs.videoPlayer.player.poster(item.thumb);
				this.$refs.videoPlayer.player.play();
			});
		},
		stopPlay: function() {
			this.$refs.videoPlayer.player.pause();
			this.video.show = false;
		}
	}
};
</script>

<style lang="less">
.media-video {
	.container {
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
						background-image:url('./../../../..//assets/icon/videoBtnBig.png');
						background-color: rgba(0, 0, 0, 0.5);
						background-position: center;
						background-repeat: no-repeat;
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
							background-image: url('./../../../../assets/icon/videoBtnSmall.png');
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
			max-width: 1200px;
			max-height: 800px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			background: transparent;
			.video-player {
				.video-js {
					.vjs-big-play-button {
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
					}
					.vjs-control-bar {
						font-size: 16px;
					}
				}
			}
			.close {
				position: absolute;
				width: 50px;
				height: 50px;
				background: rgba(0, 0, 0, 0.5);
				top: 0px;
				right: -50px;
				&:after {
					content: '×';
					display: block;
					position: absolute;
					left: 50%;
					top: 40%;
					transform: translate(-50%, -50%);
					font-size: 66px;
					font-weight: lighter;
					color: rgba(255, 255, 255, 1);
					cursor: pointer;
				}
			}
		}
	}
}
</style>
