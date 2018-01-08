// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue"
import router from "./router"
import * as VueGoogleMaps from "vue2-google-maps"
// import lodash from "lodash"
// import Modernizr from "modernizr"
import objectFitImages from "object-fit-images"

import HeaderBlock from "./components/blocks/header/header.block.vue"
import ButtonBlock from "./components/blocks/button/button.block.vue"
import MapBlock from "./components/blocks/map/map.block.vue"
import Vector from "./components/blocks/vector/vector.block.vue"
// import VueMarkdown from "vue-markdown"

/**
 * Vue configuration.
 */
Vue.config.productionTip = false;

Vue.component("header-block", HeaderBlock);
Vue.component("button-block", ButtonBlock);
Vue.component("map-block", MapBlock);
Vue.component("vector", Vector);
// Vue.component("markdown", VueMarkdown);

Vue.use(VueGoogleMaps, {
	load: {key: "AIzaSyAIASA8zFhAnKzKNAPohhZd4NZzsG9wLUI"}
})
// Vue.prototype.$lodash = lodash;
// Vue.prototype.$moderznir = Modernizr;

/**
 * Vue Initialization.
 */
/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App }
});

// Global event bus.
Vue.prototype.$eventHub = new Vue();
