import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import App from "./App.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
import VCalendar from "v-calendar";

const app = createApp(App);
app.use(VCalendar, {});

app.component("DatePicker", DatePicker);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.mount("#app");
