<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<Test :msg="msg" @toData="toData"></Test>
	</view>
</template>

<script>
	import Test from "../../components/test.vue"
	export default {
		components: {
			Test
		},
		data() {
			return {
				title: 'Hello',
				msg: "这是传给子组件的数据"
			}
		},
		onLoad() {

		},
		methods: {
			toData(num) {
				console.log(num+ "Test")
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
