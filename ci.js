const ci = require("miniprogram-ci");
const { appid } = require("./src/config/weixin.config");
const { version } = require("./package.json");

const desc = process.env.CHANGE_TITLE && process.env.BRANCH_NAME && process.env.CHANGE_ID ?
	`${process.env.CHANGE_TITLE}\n${process.env.BRANCH_NAME} ${process.env.CHANGE_ID}`
	: `编译`;


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
