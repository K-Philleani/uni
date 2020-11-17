<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<Test :msg="msg" @toData="toData"></Test>
		<ComA />
		<ComB />
		<uni-calendar
		 :insert="true"
		 :lunar="true" 
		 :start-date="'2019-3-2'"
		 :end-date="'2019-5-20'"
		 @change="change"
		/>
	</view>
</template>

<script>
	import Test from "../../components/test.vue"
	import ComA from "@/components/comA.vue"
	import ComB from "@/components/comB.vue"
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			Test,
			ComA,
			ComB,
			uniCalendar
		},
		data() {
			return {
				title: 'Hello',
				msg: "这是传给子组件的数据"
			}
		},
		onLoad() {

		},
		methods: {
			toData(num) {
				console.log(num+ "Test")
			},
			change(e) {
				console.log(e);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
