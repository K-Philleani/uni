<template>
	<view>
		<view v-for="(item, index) in list" class="box-item">{{item}}</view>
		<!-- <button @click="pullFresh">下拉刷新</button> -->
	</view>
</template>

<script>
	export default {
		onPullDownRefresh() {
			this.list = ["后端", "JAVA"]
			console.log("下拉刷新")
			uni.stopPullDownRefresh()
		},
		onReachBottom() {
			console.log("页面触底了")
			this.list = this.list.concat("哈哈哈", "enene ")
		},
		data() {
			return {
				list: ["前端", "Golang", "Python", "JavaScript", "前端", "Golang", "Python", "JavaScript"]
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
	.box-item {
		width: 100px;
		height: 100px;
	}
</style>
