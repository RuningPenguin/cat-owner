<template>
	<u-navbar
		v-bind="defaultProps"
	>
		<template v-if="$slots.left" slot="left">
			<slot name="left" />
		</template>
		<template v-if="$slots.center" slot="center">
			<slot name="center" />
		</template>
		<template v-if="$slots.right" slot="right">
			<slot name="right" />
		</template>
	</u-navbar>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { pages, tabBar } from "@/pages.json";

const routes = getCurrentPages(); // 获取当前打开过的页面路由数组
const curRoute = routes[routes.length - 1].route; // 获取当前页面路由，也就是最后一个打开的页面路由

const getTitle: string = () => {
	const currentRouterExample = pages.find(v => v.path === curRoute); // 当前路由实例
	return currentRouterExample?.title || '';
};

const isShowLeftIcon: boolean = () => {
	const { list } = tabBar;
	const listExample = list.find(v => v.pagePath === curRoute);
	return !listExample;
};

const props = defineProps({});
const defaultProps = reactive({
	placeholder: true,
	autoBack: isShowLeftIcon(),
	leftIcon: isShowLeftIcon() ? "arrow-left" : "",
	title: getTitle(),
	leftIconSize: "40rpx",
	leftIconColor: "#707070",
	titleStyle: {}
});
</script>
