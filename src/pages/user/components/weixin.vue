<template>
<!--	{{userinfo.}}-->
	<u-button type="primary" text="微信登录" @click="weixinLogin" />
</template>

<script setup lang="ts">
import useUserStore from "@/store/user";
import type { Userinfo } from "@/types/store/user";
import { getTokenApi, getUserinfoApi } from "@/apis/user";

const { state, setToken, setUserinfo } = useUserStore();


const weixinLogin = async () => {
	const { code } = await uni.login();
	const { access_token } = await getTokenApi(code);
	setToken(access_token);
	const userinfo: Userinfo = await getUserinfoApi();
	setUserinfo(userinfo);
};
</script>
