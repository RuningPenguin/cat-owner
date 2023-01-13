import useApi from "@/tools/request";
import { Userinfo } from "@/types/store/user";

const api = useApi();

export const getTokenApi = (code?: string): Promise<{ access_token: string }> => {
	return api.post("user/login", { code });
};

export const getUserinfoApi = (): Promise<Userinfo> => {
	return api.get("user/userinfo");
};

