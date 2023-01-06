// 用户信息
import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("user", () => {
	const state = ref({
		name: "wx",
		age: 24
	});

	const addAge = () => {
		state.value.age++;
	};

	return { state, addAge };
}, { persist: { enabled: true } });

export default useUserStore;
