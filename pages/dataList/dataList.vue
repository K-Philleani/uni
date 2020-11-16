<template>
	<view>
		<button class="btn" type="primary" @click="getData">请求数据</button>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getData() {
				this.$request({
					url: "/api/getAll"
				}).then(res => {
					console.log(res)
				})
			},
			
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
