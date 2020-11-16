<template>
	<view>数据缓存
		<button @click="setData" class="btn" type="primary">存入</button>
		<button @click="getData" class="btn" type="primary">获取</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			setData() {
				uni.setStorage({
					key: "test",
					data: "hhhhh"
				})
			},
			getData() {
				uni.getStorage({
					key: "test",
					success: (res) => {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style>
	.btn {
		width: 200rpx;
		height: 80rpx;
		margin-top: 20px;
		font-size: 14rpx;
		line-height: 80rpx;
	}
</style>
