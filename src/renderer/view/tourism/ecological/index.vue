<template>
	<div :id="$route.name" class="ecological_page">
		<div class="container full">
			<div class="header">
				<div class="time">
					<span>{{ year }}年{{ month }}月{{ day }}日</span>
					<span>星期{{ weekText[week] }}</span>
					<span>现在时间:{{ time }}</span>
				</div>
			</div>
			<div class="main">
				<div class="box-main">
					<div class="air box">
						<span class="loading" v-if="Object.keys(weather.air).length < 1">正在加载中...</span>
						<v-chart :options="weather.air" :autoresize="true" v-else />
					</div>
					<div class="box tem">
						<span class="loading" v-if="Object.keys(weather.tem).length < 1">正在加载中...</span>
						<v-chart :options="weather.tem" :autoresize="true" v-else />
					</div>
					<div class="box humidity">
						<span class="loading" v-if="Object.keys(weather.humidity).length < 1">正在加载中...</span>
						<v-chart :options="weather.humidity" :autoresize="true" v-else />
					</div>
				</div>
				<div class="box-main">
					<div class="box">
						<span class="loading" v-if="Object.keys(weather.weather).length < 1">正在加载中...</span>
						<v-chart :options="weather.weather" :autoresize="true" v-else />
					</div>
					<div class="box">
						<span class="loading" v-if="Object.keys(weather.hours).length < 1">正在加载中...</span>
						<v-chart :options="weather.hours" :autoresize="true" v-else />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios';
import analyze from './analyze';
export default {
	data() {
		return {
			year: '0',
			month: '0',
			day: '0',
			week: '0',
			time: '0',
			weekText: ['天', '一', '二', '三', '四', '五', '六'],
			weather: {
				air: {},
				tem: {},
				humidity: {},
				weather: {},
				hours: {}
			}
		};
	},
	created() {
		this.getDateTime();
		this.getWeather();
	},
	methods: {
		getDateTime() {
			let that = this;
			let date = new Date();
			this.year = date.getFullYear();
			this.month = date.getMonth() + 1;
			this.day = date.getDate();
			this.week = date.getDay();
			let h = date.getHours(),
				m = date.getMinutes(),
				s = date.getSeconds();
			this.time = (h < 10 ? '0' + h : h) + '时' + (m < 10 ? '0' + m : m) + '分' + (s < 10 ? '0' + s : s) + '秒';
			setTimeout(() => {
				that.getDateTime();
			}, 1000);
		},
		getWeather() {
			let that = this;
			let params = {
				appid: '74669544',
				appsecret: 'L4uImetj',
				cityid: '101272106',
				lng: '105.826194',
				lat: '32.432276'
			};
			let cacheWeather = this.$store.getters.weather;
			if (cacheWeather.today != undefined && cacheWeather.future != undefined) {
				this.renderWeather(cacheWeather.today, cacheWeather.future);
			} else {
				this.$store.dispatch('getWeather', params).then(result => {
					this.renderWeather(result.today, result.future);
				});
			}
			setInterval(function() {
				that.$store.dispatch('getWeather', params).then(result => {
					that.renderWeather(result.today, result.future);
				});
			}, 1000 * 60 * 30);
		},
		renderWeather(today, future) {
			analyze.weather
				.air({
					today: today,
					future: future
				})
				.then(data => {
					this.weather.air = data;
				});
			analyze.weather
				.tem({
					today: today,
					future: future
				})
				.then(data => {
					this.weather.tem = data;
				});
			analyze.weather
				.humidity({
					today: today,
					future: future
				})
				.then(data => {
					this.weather.humidity = data;
				});
			analyze.weather
				.weather({
					today: today,
					future: future
				})
				.then(data => {
					this.weather.weather = data;
				});
			analyze.weather
				.hours({
					today: today,
					future: future
				})
				.then(data => {
					this.weather.hours = data;
				});
		}
	}
};
</script>

<style lang="less">
.ecological_page {
	width: 100%;
	height: 100%;
	background-image: url('../../../assets/weather_bg.png');
	.container.full {
		width: 100%;
		height: 100%;
		.header {
			height: 79px;
			width: 100%;
			border-bottom: 1px solid rgb(66, 62, 87);
			.time {
				float: right;
				line-height: 80px;
				color: rgb(255, 255, 255);
				span {
					display: inline;
					margin-right: 10px;
				}
			}
		}
		.main {
			width: 100%;
			height: calc(100% - 100px);
			padding: 10px;
			box-sizing: border-box;
			.box-main {
				float: left;
				height: 100%;
				.box {
					position: relative;
					.loading {
						position: absolute;
						left: 50%;
						top: 50%;
						color: white;
						font-size: 18px;
						transform: translate(-50%, -50%);
						letter-spacing: 2px;
					}
				}
				&:first-child {
					width: 25%;
					.box {
						width: calc(100% - 10px);
						height: calc(100% / 3 - 10px);
					}
				}
				&:last-child {
					width: 75%;
					.box {
						&:first-child {
							height: calc(100% / 3 * 2 - 10px);
						}
						&:last-child {
							height: calc(100% / 3 - 10px);
						}
					}
				}
				.box {
					background-image: url('../../../assets/weather_box_bg.png');
					background-size: 100% 100%;
					background-repeat: no-repeat;
					margin: 10px;
					&.air,
					&.tem,
					&.humidity {
						position: relative;
					}
				}
			}
			.echarts,
			.echarts > div:first-child,
			.echarts > div > canvas {
				width: 100% !important;
				height: 100% !important;
			}
		}
	}
}
</style>
