// 用户信息
import { defineStore } from "pinia";
import { reactive } from "vue";
import useStorage from "@/tools/storage";
import type { Userinfo, UserState, UserStore } from "@/types/store/user";

const storage = useStorage();


const useUserStore = defineStore("user", (): UserStore => {
	const state = reactive<UserState>({
		userinfo: storage.get("userinfo") || {},
		token: storage.get("token") || ""
	});

	const setUserinfo = (obj: Userinfo) => {
		storage.set("userinfo", obj);
		state.userinfo = obj;
	};

	const setToken = (str: string) => {
		storage.set("token", str);
		state.token = str;
	};

	return { state, setUserinfo, setToken };
}, { persist: { enabled: true } });

export default useUserStore;
