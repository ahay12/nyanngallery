import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { withMT } from "@material-tailwind/html/utils/withMT";

const app = createApp(App);

app.use(router);
app.use(withMT);
app.mount("#app");
