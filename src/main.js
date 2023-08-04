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
// app.config.globalProperties.$pages = $pages;

// The best way to pass a data from a parent to a child is via props but Pages are not a child, it is simply a view, a page to navigate to so we use a page object instead

// the below code "provides" access to pages (in any child components) from an app, a parent component so it is a global property as well in this sense. We have to inject it in each component that needs access to $pages (e.g PageViewer.vue)
// key/value pair
app.provide("$pages", $pages);

// Mount the App
app.mount("#app");
