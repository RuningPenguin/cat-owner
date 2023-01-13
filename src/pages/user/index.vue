<template>
	<base-navbar />

	<div class="content">
		<div class="project_logo"></div>
    <h1>个人中心</h1>

    <weixin />


	</div>

</template>

<script lang="ts" setup>
import Weixin from "@/pages/user/components/weixin.vue";
</script>

<style lang="scss">
.content {
	padding: 0 24rpx;

	.project_logo {
		margin: 40rpx auto;
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		background: #999999;
	}
}

</style>
