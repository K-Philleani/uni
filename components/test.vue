<template>
	<view>
		<view>这是一个组件</view>
		<view>{{msg}}</view>
		<button @click="toData">子传父</button>
	</view>
</template>

<script>
	export default {
		props: {
			msg: {
				type: String,
				default: () => ""
			}
		},
		mounted() {
			console.log(this.msg)
		},
		data() {
			return {
				num: 300
			};
		},
		methods: {
			toData() {
				this.$emit("toData", this.num)
			}
		}
	}
</script>

<style>

</style>
