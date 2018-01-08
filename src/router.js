import Vue from "vue";
import Router from "vue-router";

import HomePage from "@/components/pages/home/home.page.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "HomePage",
			component: HomePage
		}
	]
})
