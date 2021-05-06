import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vSelect from "vue-select";

import "./assets/styles/index.css";
import "./assets/tailwind.css";
import "vue-select/dist/vue-select.css";

createApp(App)
  .use(store)
  .use(router)
  .component("v-select", vSelect)
  .mount("#app");
