export default {
	name: "button-block",
	data() {
		return {
		}
	},
	props: {
		title: String,
		icon: String,
		styles: Array
	},
	computed: {
	},
	methods: {
		createStyles: function(type, styles)
		{
			console.log(styles);

			let modifiers = new Array();

			styles.forEach((element) => {
				modifiers.push(`${type}--${element}`);
			});

			return modifiers;
		} 	
	},
	created() {
		console.log("button-block created!");
	}
}