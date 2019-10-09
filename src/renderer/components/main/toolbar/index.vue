<template>
	<ul class="setting-toolbar">
		<li v-on:click="setting">设置</li>
		<li v-on:click="close">关闭</li>
	</ul>
</template>

<script>
/*eslint-disable*/
import './index.less';
const electron = require('electron');
export default {
	data() {
		return {};
	},
	mounted() {
		let that = this;
		electron.ipcRenderer.on('listen', function(event, keyValue) {
			if (keyValue == 'F10') {
				let element = document.getElementsByClassName('setting-toolbar');
				let transform = element[0].style.transform;
				if (transform == '' || transform == 'rotateX(90deg)') {
					element[0].style.transform = 'rotateX(0deg)';
				} else {
					element[0].style.transform = 'rotateX(90deg)';
				}
			} else if (keyValue == 'F9') {
				that.setting();
			} else if (keyValue == 'ESC') {
				that.close();
			}
		});
	},
	methods: {
		setting: function() {
			this.$Win.openWin({
				width: 680,
				height: 520,
				resizable: false,
				windowConfig: {
					router: '/modal/setting',
					name: 'setting',
					data: { title: '设置' }
				}
			});
		},
		close: () => {
			electron.remote.dialog.showMessageBox(
				{
					type: 'question',
					title: '提示',
					message: '确认要退出触摸屏系统吗？',
					buttons: ['ok', 'cancel']
				},
				index => {
					if (index == 0) {
						electron.remote.getCurrentWindow().close();
					}
				}
			);
		}
	}
};
</script>
