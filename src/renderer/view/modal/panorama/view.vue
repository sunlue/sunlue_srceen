<template>
	<div class="modal-panorama"><iframe :src="iframe" frameborder="0"></iframe></div>
</template>

<script>
/*eslint-disable*/
export default {
	data() {
		return {
			iframe: ''
		};
	},
	created() {
		let data = this.$Win.getParameter();
		if (data.iframe) {
			this.iframe = data.iframe;
		}
	}
};
</script>

<style lang="less">
.modal-panorama {
	width: 100%;
	height: 100%;
	iframe {
		width: 100%;
		height: 100%;
		border: 0px;
	}
}
</style>
