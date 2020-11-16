<template>
	<view>
		<view v-for="(item, index) in list">{{item}}</view>
		<button @click="pullFresh">下拉刷新</button>
	</view>
</template>

<script>
	export default {
		onPullDownRefresh() {
			this.list = ["后端", "JAVA"]
			console.log("下拉刷新")
			uni.stopPullDownRefresh()
		},
		data() {
			return {
				list: ["前端", "Golang", "Python", "JavaScript"]
			}
		},
		methods: {
			pullFresh() {
				uni.startPullDownRefresh()
			}
		}
	}
</script>

<style>
</style>
