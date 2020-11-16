<template>
	<view>
		<button class="btn" type="primary" @click="uploadImg">上传图片</button>
		<view v-for="(item, index) in list" :key="index">
			<image :src="item" mode="" @click="previewImages(item)"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			uploadImg() {
				const that = this
				uni.chooseImage({
					count: 5,
					success(res) {
						console.log(res)
						that.list = res.tempFilePaths
					}
				})
			},
			previewImages(item) {
				uni.previewImage({
					current: item,
					urls: this.list,
					loop: true,
					indicator: "number",
					success() {
						console.log("预览成功")
					}
				})
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
