import { createSSRApp } from "vue";
import App from "@/App.vue";
import plugin from "./lib/plugin";


export function createApp() {
	const app = createSSRApp(App);
	app.use(plugin);

	return { app };
}
