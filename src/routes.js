// Define routes
// Import functions, the second function handles history
import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./components/PageViewer";
import CreatePage from "./components/CreatePage";

// Create our router
// Since we are using router , we can't really use props , all the date would be coming via URL, not from a parent component
// Home route is our PageViewer component
// ":/index?" is a unique router param (optinal) for home/index page url
// set watcher for PageViewer route via props - the second way of ssetting up a watcher
const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		// tell a route to use props
		{ path: "/:index?", component: PageViewer, props: true },
		{ path: "/create", component: CreatePage },
	],
});
// to enable importing from main.js
export default router;