// Direct access to createVue function
import { createApp, VueElement } from "vue";
import App from "./App.vue";
// The advantage of using BS in the build tools is optimized CSS code
import "../node_modules/bootstrap/dist/css/bootstrap.css";

createApp(App).mount("#app");
