import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

var app = createApp(App);

app.use(router);

// Global  compmonent register
// app.component("ContactDetails", ContactDetails);

app.mount("#app");
