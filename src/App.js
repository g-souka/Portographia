import Vue from "vue";

export default {
	name: "app",
	watch: {
		"$route": function() {this.menuIsOpen ? this.toggleMenu() : null}
	},
	methods: {
		toggleMenu(action) {
			this.menuIsOpen = !this.menuIsOpen;
			document.querySelector(".header__menu").classList.toggle("header__menu--open");
		}
	}
}