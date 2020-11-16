<template>
	<view>
		<!-- #ifdef H5 -->
			<view>这是H5</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
			<view>这是微信小程序</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
