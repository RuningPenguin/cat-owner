const argv = process.argv;
const ci = require("miniprogram-ci");
const { weixin: { desc, dev_version }, version } = require("./package.json");
const appid = "wxe01f582812d9d742";
const info = { desc, robot: 30, version: dev_version };
let type = "upload";

argv.forEach(str => {
	if (str.includes("type")) {
		type = str.split("=")[1];
	}
	if (str.includes("desc")) {
		info.desc = str.split("=")[1];
	}
	if (str.includes("mode")) {
		const robotMap = {
			dev: () => 1,
			uat: () => 2,
			prod: () => {
				info.version = version;
				return 3;
			}
		};
		info.robot = robotMap[str.split("=")[1]]();
	}
});

const project = new ci.Project({
	appid,
	type: "miniProgram",
	projectPath: "./dist/build/mp-weixin",
	privateKeyPath: "./ci-upload.key",
	ignores: ["node_modules/**/*", "src/**/*"]
});

async function upload() {
	await ci.upload({
		...info,
		project,
		onProgressUpdate: console.log,
		pagePath: "pages/index/index",
		setting: {
			es7: true,
			minify: true,
			autoPrefixWXSS: true
		}
	});
}

async function preview() {
	await ci.preview({
		...info,
		project,
		onProgressUpdate: console.log,
		pagePath: "pages/index/index", // 预览页面
		// searchQuery: 'a=1&b=2',  // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`
		setting: {
			es7: true,
			minify: true,
			autoPrefixWXSS: true
		}
	});
}

;(async function() {
	switch (type) {
		case "preview":
			await preview();
			break;
		case "upload":
			await upload();
			break;
		default:
			console.log("using robot: preview|upload");
			break;
	}
})();
