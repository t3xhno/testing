import "./style/style.css";
import App from "./App.vue";
import { createApp } from "vue";
export const app = createApp(App);

import router from "./router";
app.use(router);


app.mount("#app");
