<template>
	<view>
		<view>路由跳转</view>
		<view>组件式</view>
		<navigator url="/pages/detail/detail?id=10">
			<button>跳转到详情页</button>
		</navigator>
		<navigator url="/pages/message/message" open-type="switchTab">
			<button>跳转到信息页</button>
		</navigator>
		<navigator url="/pages/detail/detail" open-type="redirect">
			<button>跳转到详情页rediect</button>
		</navigator>
		<view>函数式</view>
		<button @click="toDeatil">跳转到详情页</button>
		<button @click="toMessage">跳转到信息页</button>
		<button @click="toDetailRediect">跳转到详情页rediect</button>
	</view>
</template>

<script>
	export default {
		onUnload() {
			console.log("卸载了")
		},
		data() {
			return {
				
			}
		},
		methods: {
			toDeatil() {
				uni.navigateTo({
					url: "/pages/detail/detail"
				})
			},
			toMessage() {
				uni.switchTab({
					url: "/pages/message/message"
				})
			},
			toDetailRediect() {
				uni.redirectTo({
					url: "/pages/detail/detail"
				})
			}
		}
	}
</script>

<style>

</style>
