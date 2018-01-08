export default {
	name: "map-block",
	data() {
		return {
			openedInfoWindowId: null,
			markers: [
				{
					title: "fountain",
					coords: {lat:41.147162,lng:-8.615614},
					//iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
					content:'<h1><b>Fountain of the Lions</b></h1><img src="maxresdefault.jpg" style="width: 75%; height: 50%" alt="Lion"><br>Where I have seen numerous people swimming because of a bet.'
				},
				{
					title: "abc",
					coords: {lat:41.145716,lng:-8.610528},
					content:'<h1>São Bento</h1>'
				},
				{
					title: "xyz",
					coords: {lat:41.1456881,lng:-8.614601}
				}
			]
		}
	},
	created() {
		console.log("map-block created!");
	},
	methods: {
		toggleInfoWindow(id) {
			this.openedInfoWindowId = id;
		},
		addMarker(event) {
			console.log(event);
			this.markers.push({
				title: event.ea.x + event.ea.y,
				coords: event.latLng
			})
			console.log(JSON.stringify(this.markers));
		}
	}
}
