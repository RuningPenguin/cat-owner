import { name, version } from "../../package.json";
import { BASE_URL } from "@/config/globa.config";
import type { config } from "@/types/tools/request";
import useUserStore from "@/store/user";


const { state } = useUserStore();

// 请求拦截
uni.addInterceptor("request", {
	invoke(args) {
		let { url, header, closeLoading } = args;
		// request 触发前拼接 url
		args.url = BASE_URL + url;

		// 设置超时时间
		args.timeout = 50000;

		// 添加请求头
		args.header = {
			...header,
			version,
			requestFrom: name,
			Authorization: `Bearer ${state.token}`,
			"content-type": "application/json;charset=UTF-8"
		};

		// 加载效果
		// !closeLoading && showLoading();
		// CloseLoading = closeLoading
	},
	complete() {
		// uni.hideLoading();
	}
});

// 响应拦截
function responseInterception(response: any, resolve: Function, reject: Function) {
	const { statusCode, data: { data, code, message } } = response;
	if (statusCode >= 200 && statusCode < 300 && code === 200) {
		return resolve(data);
	}

	return reject(message);

}

class API {
	requestTask: UniNamespace.RequestTask | null;

	constructor() {
		this.requestTask = null;
	}

	private _request<T>(url: string, data?: object, config: config = { method: "GET" }): Promise<T> {
		const { method, header = {} } = config;
		return new Promise((resolve, reject) => {
			this.requestTask = uni.request({
				url, data, method, header,
				success: (res) => responseInterception(res, resolve, reject),
				fail: (err) => reject(err),
				complete: () => {
					console.log(111);
				}
			});
		});

	}

	// app h5 weixin
	get<T>(url: string, data?: object, config?: config): Promise<T> {
		return this._request(url, data, { ...config, method: "GET" });
	}

	post<T>(url: string, data?: object, config?: config): Promise<T> {
		return this._request(url, data, { ...config, method: "POST" });
	}

	// 以下在其他小程序有兼容问题
	put<T>(url: string, data?: object, config?: config): Promise<T> {
		return this._request(url, data, { ...config, method: "PUT" });
	}

	del<T>(url: string, data?: object, config?: config): Promise<T> {
		return this._request(url, data, { ...config, method: "DELETE" });
	}

}


export default function useApi() {
	return new API();
}

