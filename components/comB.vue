<template>
	<view>
		<view>这是组件B:</view>
		<view>num: {{num}}</view>
	</view>
</template>

<script>
	export default {
		created() {
			uni.$on("update", (data) => {
				this.num += data.n
			})
		},
		data() {
			return {
				num: 0
			};
		},
		methods: {
		}
	}
</script>

<style>

</style>
