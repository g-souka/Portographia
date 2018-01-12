export default {
	name: "map-block",
	props: [
		"markers"
	],
	data() {
		return {
			openedInfoWindowId: null,
			initCoordinates: {lat: 41.15524, lng: -8.61281},
			zoomLevel: 13
		}
	},
	methods: {
		toggleInfoWindow(id) {
			this.openedInfoWindowId = id;
		},
		// Opens Google Form with coordinates of mouse/touch
		addMarker(event) {
			console.log(event);
			var latitude1 = event.latLng.lat()
			var longitude1 = event.latLng.lng()
			var coord = latitude1 + ',' + longitude1
			window.open("https://docs.google.com/forms/d/e/1FAIpQLSedk06eHFq-2HKslB034QB7dReEm6CKX6awbi0C5qM8x8k3JA/viewform?usp=pp_url&entry.425003608="+coord+"&entry.592264726&entry.1061622347&entry.189027455&entry.1488159968&entry.1596944760")
		},
		// Listens for long press on map (mobile/desktop)
		addMarkerMobile(event) { 
			var mousedUp = false;
			mousedUp = false;

			setTimeout(function() {
				if (mousedUp === false) {
					var latitude1 = event.latLng.lat();
					var longitude1 = event.latLng.lng();
					var coord = latitude1 + ',' + longitude1;
					window.open("https://docs.google.com/forms/d/e/1FAIpQLSedk06eHFq-2HKslB034QB7dReEm6CKX6awbi0C5qM8x8k3JA/viewform?usp=pp_url&entry.425003608="+coord+"&entry.592264726&entry.1061622347&entry.189027455&entry.1488159968&entry.1596944760");
				}
			}, 1000)
		},
		addMarkerMobile(event){ 
			mousedUp = true;
		}
	}
}
