import { defineConfig } from "vite";
// @ts-ignore
import path from "path";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: true
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	},
  envDir: "./.env", //这里使用相对路径，绝对路径其实也可以
	plugins: [uni()]
});
