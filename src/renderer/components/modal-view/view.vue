<template>
	<div class="modal">
		<div class="header">
			<ul class="toobar">
				<li class="title">{{ title }}</li>
				<li class="close" v-on:click="close" title="关闭">×</li>
			</ul>
		</div>
		<div class="body">
			<router-view ref="modal-body" />
		</div>
	</div>
</template>
<script>
/*eslint-disable*/
const electron = require('electron');
export default {
	name: 'ParentView',
	data() {
		return {
			title: '信息'
		};
	},
	created() {
		let data = this.$Win.getParameter();
		if (data.title) {
			this.title = data.title;
		}
	},
	methods: {
		close: function() {
			electron.remote.getCurrentWindow().close();
			// this.$Win.closeWin();
		}
	}
};
</script>
<style lang="less">
.modal {
	background: white;
	width: 100%;
	height: 100%;
	.header {
		.toobar {
			background: #e4392a;
			padding: 0px;
			margin: 0px;
			display: flex;
			justify-content: space-between;
			flex: 1;
			height: 40px;
			li {
				list-style: none;
				height: 40px;
				line-height: 40px;
				color: white;
				&.title {
					font-size: 14px;
					letter-spacing: 2px;
					padding: 0px 10px;
					width: calc(100% - 50px);
					white-space: normal;
					text-overflow: ellipsis;
					overflow: hidden;
					-webkit-app-region: drag;
				}
				&.close {
					width: 40px;
					font-size: 26px;
					text-align: center;
					cursor: pointer;
				}
			}
		}
	}
	.body{
		height: calc(100% - 40px);
		width: 100%;
	}
}
</style>
