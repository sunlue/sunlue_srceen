<template>
	<div class="main">
		<menu-bar></menu-bar>
		<tool-bar></tool-bar>
		<router-view></router-view>
	</div>
</template>
<script>
import menuBar from './menubar/index'
import toolBar from './toolbar/index'
export default {
  name: 'mains',
  components: {
    menuBar,
    toolBar
  }
}
</script>

<style lang="less">
	.main{
		width: 100vw;
		height: 100vh;
	}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
	width: 2px; /*滚动条宽度*/
	/*height: 2px;  !*滚动条高度*!*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
	/*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
	/*border-radius: 10px;  !*滚动条的背景区域的圆角*!*/
	/*background-color: red;!*滚动条的背景颜色*!*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
	border-radius: 99px; /*滚动条的圆角*/
	/*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);*/
	/*background-color: green;  !*滚动条的背景颜色*!*/
}
</style>
