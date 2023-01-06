import useStorage from "@/tools/storage";

const { storage } = useStorage();

// 拦截器
uni.addInterceptor("request", {
	invoke(args) {
		let { url, header, closeLoading } = args;
		// request 触发前拼接 url
		// args.url = baseUrl + url


		// 添加请求头
		args.header = {
			...header,
			token: storage.get("token"),
			"content-type": "application/json;charset=UTF-8",
			requestFrom: "e-alliance-union",
			allianceVersion: "1.1.3"
		};
		// 加载效果
		// !closeLoading && showLoading();
		// CloseLoading = closeLoading
	},
	complete() {
		// uni.hideLoading();
	}
});
