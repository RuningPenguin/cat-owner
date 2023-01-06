<template>
	<span>{{ state.age }}</span>
	<u-button type="primary" text="确定" @click="addAge"></u-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useUserStore from "@/store/user";
import useStorage from "@/tools/storage";


const { storage } = useStorage();

const { state, addAge } = useUserStore();


console.log(storage.info(), 9);
console.log(import.meta.env, 99);


</script>

<style lang="scss">
</style>
