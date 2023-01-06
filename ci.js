const argv = process.argv;
const ci = require("miniprogram-ci");
const { version } = require("./package.json");
const info = {
	appid: "wxe01f582812d9d742",
	desc: "编译",
	robot: "default"
};

argv.forEach(str => {
	if (str.includes("desc")) {
		info.desc = str.split("=")[1];
	}
	if (str.includes("robot")) {
		info.robot = str.split("=")[1];
	}
});


const project = new ci.Project({
	appid: info.appid,
	type: "miniProgram",
	projectPath: "./dist/build/mp-weixin",
	privateKeyPath: "./ci-upload.key",
	ignores: ["node_modules/**/*", "src/**/*"]
});

async function upload() {
	await ci.upload({
		...info,
		project,
		version,
		onProgressUpdate: console.log,
		setting: {
			es7: true,
			minify: true,
			autoPrefixWXSS: true
		}
	});
}

upload();
