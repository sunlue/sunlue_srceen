<template>
	<div class="setting">
		<ul class="left">
			<template v-for="(tab, index) in tabItem">
				<li :key="index" :class="active == tab.hash ? 'active' : ''" v-on:click="tabChange(index, tab.hash)">{{ tab.name }}</li>
			</template>
		</ul>
		<div class="right">
			<template v-if="active == 'general'">
				<div class="general">
					<div class="item">
						<input type="checkbox" v-on:change="start" v-model="autoStart" />
						<span>开机自启动</span>
					</div>
				</div>
			</template>
			<template v-if="active == 'license'">
				<div class="license">
					<p style="text-indent: 2em;">
					    如果您安装、复制或以其它方式使用了本软件产品，则视为您已同意下列条款，并已和四川上略互动网络技术有限公司（以下简称“上略互动公司”）签定了本《软件许可协议》（以下简称“协议”）。如您不同意本协议中的条，请不要安装软件。
					</p>
					<p style="text-indent: 2em;">
					    如果您通过合法渠道从上略互动公司取得本软件的任何拷贝，则您拥有如下权利： 
					</p>
					<p style="text-indent: 2em;">
					    1、使用权 
					</p>
					<p style="text-indent: 2em;">
					    您有权在计算机上安装本软件，并在业务范围内使用本软件，再现本软件具有的全部功能。
					</p>
					<p style="text-indent: 2em;">
					    2、备份 
					</p>
					<p style="text-indent: 2em;">
					    出于存档的目的，您有权复制一份本软件作为备份件保存，但复制备份件不得违反第三条第1款和第2款的有关规定。
					</p>
					<p style="text-indent: 2em;">
					    3、技术支持 
					</p>
					<p style="text-indent: 2em;">
					    您有权获得上略互动公司的全面的技术支持。对于本软件在安装使用过程中产生的任何疑问、问题，您均有权向上略互动公司提出并要求上略互动公司给予解答或解决。
					</p>
					<p style="text-indent: 2em;">
					    4、版本升级 
					</p>
					<p style="text-indent: 2em;">
					    根据实际需要或技术升级，您有权获得本软件的各个升级版本的使用权。但如果上略互动公司另有要求，您须支付适当的版本升级费用。 
					</p>
					<p style="text-indent: 2em;">
					    5、一般限制 
					</p>
					<p style="text-indent: 2em;">
					    您对本软件的使用权仅限于再现本软件本身具有的功能，您无权擅自修改本软件，也无权对本软件进行反向工程、反编译或反汇编，也无权在本软件的基础上进行二次开发，衍生新的软件。如果出于适用性或其它原因需要修改本软件，应书面向上略互动公司提出，由上略互动公司进行修改。 
					</p>
					<p style="text-indent: 2em;">
					    6、使用
					</p>
					<p style="text-indent: 2em;">
					    对本软件的使用权范围仅限于您单位本身。未经上略互动公司书面允许，您无权以转让、许可、出租、租赁、出借、赠与或其它任何方式向任何第三方提供本软件或其复制件或其中任何部分，无论这种提供是否出于商业目的。 
					</p>
					<p style="text-indent: 2em;">
					    7、其他 
					</p>
					<p style="text-indent: 2em;">
					    您有义务采取有效措施，约束您的职员或员工遵守协议有关约定。
					</p>
					<p style="text-indent: 2em;">
					    8、声明 
					</p>
					<p style="text-indent: 2em;">
					    对于本软件，上略互动公司保证不含有任何恶意破坏您的计算机资源（包括文档、程序和其他数据）的功能设置。对于您在使用此软件过程中而产生的利润损失、可用性消失、商业中断，或任何形式的间接、特别、意外或必然的破坏，或任何其他方的索赔，上略互动公司及其代理、销售人概不负责，即使上略互动公司已事先被告知此类事有可能发生。 
					</p>
					<p style="text-indent: 2em;">
					    9、知识产权和保密
					</p>
					<p style="text-indent: 2em;">
					    本软件的版权和可能涉及的上略互动公司的商标权、专利权、专有技术和其他权利，其所有权归上略互动公司。您对其中出现的权利标识应妥善保留，不能擅自进行删剪或修改。您拥有授权范围内的使用权，但没有转让或许可他人使用的权利。对于涉及上略互动公司技术秘密的内容，您还负有保密的义务
					</p>
					<p style="text-indent: 2em;">
					    10、其它 
					</p>
					<p style="text-indent: 2em;">
					    本软件许可协议的未尽事宜，由双方其它协议或另行协商约定。
					</p>
					<p style="text-indent: 2em;">
					    本软件许可协议适用中华人民共和国有关法律。以上资料只用于建立我们的客户服务系统，以使我们能够更好的为您提供技术支持和售后服务
					</p>
					<p style="text-indent: 2em;">
					    &nbsp;
					</p>
					<p style="text-indent: 2em;">
					    &nbsp;
					</p>
					<p style="text-indent: 0em; text-align: center;">
					    版权所有Copyright&nbsp; 2009-2019 by sunlue.com All rights reserved
					</p>
					<p style="text-indent: 0em; text-align: center;">
					    SunlueSRCEEN&nbsp; 商标和著作权所有者为四川上略互动网络技术有限公司。
					</p>
				</div>
			</template>
			<template v-if="active == 'env'">
				<div class="env">
					<template v-for="(text, key) in version">
						<p :key="key">
							<span>{{ key }}</span>
							V{{ text }}
						</p>
					</template>
				</div>
			</template>
			<template v-if="active == 'about'">
				<div class="about">
					<div class="item">
						<label>版本信息</label>
						<div class="label-text">
							<span>V0.0.1</span>
							<button v-on:click="update">检查更新</button>
						</div>
					</div>
					<div class="item">
						<label>系统帮助</label>
						<div class="label-text"><button>查看帮助</button></div>
					</div>
					<div class="copyright">
						<p>Copyright &copy; 2009-{{ new Date().getFullYear() }} sunlue.All Rights Reserved.上略互动 版权所有</p>
						<a href="javascript:;">服务协议</a>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
/*eslint-disable*/
const electron = require('electron');
export default {
	data() {
		return {
			autoStart: true,
			version: process.versions,
			tabItem: [
				{
					hash: 'general',
					name: '通用设置'
				},
				{
					hash: 'license',
					name: '授权许可'
				},
				{
					hash: 'env',
					name: '环境检查'
				},
				{
					hash: 'about',
					name: '关于系统'
				}
			],
			active: 'general'
		};
	},
	mounted() {
		let that = this;
		electron.ipcRenderer.on('getAutoStartValue', function(event, state) {
			that.$nextTick(function() {
				that.autoStart = state;
			});
		});
		electron.ipcRenderer.send('checkAutoStart');
	},
	methods: {
		tabChange: function(index, hash) {
			this.active = hash;
		},
		start: function() {
			if (this.autoStart) {
				electron.ipcRenderer.send('enableAutoStart');
			} else {
				electron.ipcRenderer.send('disableAutoStart');
			}
		},
		update: function() {
			console.log('update');
		}
	}
};
</script>

<style lang="less">
.setting {
	background: white;
	display: flex;
	width: 100%;
	height: 100%;
	overflow: hidden;
	ul.left {
		width: 100px;
		height: 100%;
		padding: 0px;
		margin: 0px;
		background: #f0f0f0;
		flex: 0 0 100px;
		li {
			list-style: none;
			height: 40px;
			width: 100%;
			line-height: 40px;
			text-align: center;
			font-size: 14px;
			cursor: pointer;
			&.active {
				background: white;
			}
		}
	}
	.right {
		flex: auto;
		height: 100%;
		overflow-y: auto;
		box-sizing: border-box;
		.general {
			padding: 10px;
			box-sizing: border-box;
		}
		.license{
			padding: 10px;
			p{
				font-size: 14px;
				line-height: 24px;
				color: #333333;
				padding: 0px;
				margin: 0px;
			}
		}
		.env {
			padding: 0px 16px;
			box-sizing: border-box;
			font-size: 16px;
			span {
				width: 80px;
				display: inline-block;
				text-align: right;
				padding-right: 16px;
			}
		}
		.about {
			position: relative;
			height: 100%;
			.item {
				padding: 40px 0px 0px 40px;
				box-sizing: border-box;
				display: flex;
				label {
					width: 100px;
					display: block;
					height: 28px;
					line-height: 28px;
					font-size: 14px;
				}
				.label-text {
					span {
						font-size: 14px;
						display: block;
						height: 28px;
						line-height: 28px;
						margin-bottom: 6px;
					}
					button {
						border: none;
						background: #e4392a;
						color: white;
						padding: 7px 15px;
						display: block;
						font-size: 12px;
						cursor: pointer;
					}
				}
			}
			.copyright {
				position: absolute;
				bottom: 0px;
				left: 0px;
				padding: 10px;
				box-sizing: border-box;
				width: 100%;
				text-align: center;
				font-size: 14px;
				p {
					width: 100%;
					color: #cccccc;
					text-align: center;
					margin: 0 0 8px 0;
				}
				a {
					text-decoration: none;
				}
			}
		}
	}
}
</style>
