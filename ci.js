const ci = require("miniprogram-ci");

const { version } = require("./package.json");
const appid = "wxe01f582812d9d742";

const desc = '编译1'


const project = new ci.Project({
	appid,
	type: "miniProgram",
	projectPath: "./dist/build/mp-weixin",
	privateKeyPath: "./ci-upload.key",
	ignores: ["node_modules/**/*", "src/**/*"]
});

async function upload({ robot }) {
	await ci.upload({
		project,
		version,
		desc,
		robot,
		onProgressUpdate: console.log,
		setting: {
			es7: true,
			minify: true,
			autoPrefixWXSS: true
		}
	});
}

upload({ robot: 1 });
