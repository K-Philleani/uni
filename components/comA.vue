<template>
	<view>
		<view>这是组件A:</view>
		<button @click="addNum">修改组件B的num</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			addNum() {
				console.log("emit")
				uni.$emit("update", {n: 10})
			}
		}
	}
</script>

<style>

</style>
