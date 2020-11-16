<template>
	<view>
		<button class="btn" type="primary" @click="getData">请求数据</button>
	</view>
	
</template>

<script>
	import requestApi from '../../request/request.js'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getData() {
				requestApi({
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
