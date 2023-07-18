// Direct access to createVue function
import { createApp, VueElement } from "vue";
import App from "./App.vue";
// The advantage of using BS in the build tools is optimized CSS code
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// $bus - it can be any name, but 'bus' means we are importing somethign that globally set events emiting from everywhere to anywhere
import $bus from "./utils/Events";
// Create an App
const app = createApp(App);
// It allows us to add properties to any component in our application
// $bus here is again can be called whatever we want
// So now every component can use $bus property wherever it requires to
app.config.globalProperties.$bus = $bus;

// Mount the App
app.mount("#app");
