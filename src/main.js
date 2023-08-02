// Direct access to createVue function
import { createApp, VueElement } from "vue";
import App from "./App.vue";
// The advantage of using BS in the build tools is optimized CSS code
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $bus from "./utils/Events";
import router from "./routes";
import $pages from "./data";

// Create an App
const app = createApp(App);
// use() allows to use plugins (e.g a router object is a plugin)
app.use(router);

// It allows us to add properties to any component in our application
// $bus here is again can be called whatever we want
// So now every component can use $bus property wherever it requires to
app.config.globalProperties.$bus = $bus;
app.config.globalProperties.$pages = $pages;

// Mount the App
app.mount("#app");
