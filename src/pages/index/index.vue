<template>
	<span>{{ state.age }}</span>
	<u-button type="primary" text="确定" @click="test"></u-button>
</template>

<script setup lang="ts">
import useUserStore from "@/store/user";
import useApi from "@/tools/request";

const { state, addAge } = useUserStore();
const api = useApi();


</script>

<style lang="scss">
</style>
