<template>
	<base-navbar />
	<span>11{{ userinfo }}</span>

</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const {state} = useUserStore();
// const { userinfo } = storeToRefs(state);


</script>

<style lang="scss">
</style>
