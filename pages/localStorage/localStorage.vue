<template>
	<view>数据缓存
		<button @click="setData" class="btn" type="primary">异步存入</button>
		<button @click="getData" class="btn" type="primary">异步获取</button>
		<button @click="removeData" class="btn" type="primary">异步移除</button>
		<br>
		<hr>
		<br>
		<button @click="setDataSync" class="btn" type="primary">同步存入</button>
		<button @click="getDataSync" class="btn" type="primary" >同步获取</button>
		<button @click="removeDataSync" class="btn" type="primary" >同步移除</button>
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
					data: "jjjj",
					success() {
						console.log("设置成功")
					}
				})
			},
			getData() {
				uni.getStorage({
					key: "test",
					success(res){
						console.log(res)
					}
				})
			},
			removeData() {
				uni.removeStorage({
					key: "test",
					success() {
						console.log("移除成功")
					}
				})
			},
			setDataSync() {
				uni.setStorageSync("id", 20)
			},
			getDataSync() {
				let id = uni.getStorageSync("id")
				console.log(id)
			},
			removeDataSync() {
				uni.removeStorageSync("id")
			}
		}
	}
</script>

<style>
	.btn {
		width: 200px;
		height: 80px;
		margin-top: 20px;
		font-size: 14px;
		line-height: 80px;
	}
</style>
