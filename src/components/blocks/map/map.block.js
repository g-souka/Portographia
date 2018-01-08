export default {
	name: "map-block",
	data() {
		return {
			openedInfoWindowId: null,
			//Layers Fusion Table over map to mark points
			layer: new google.maps.FusionTablesLayer({
				map: map,
				heatmap: { enabled: false },
				query: {
				  select: "col1",
				  from: "1nI0u4VCH5nlrUvDOvbxreveSXSEkrr7q-54abNJv",
				  where: ""
				},
				options: {
				  styleId: 2,
				  templateId: 2
				}
			  })
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
        	// Opens googleform with coordenates of mouse/touch
        	var latitude1 = event.latLng.lat()
        	var longitude1 = event.latLng.lng()
        	var coord = latitude1 + ',' + longitude1
        	window.open("https://docs.google.com/forms/d/e/1FAIpQLSedk06eHFq-2HKslB034QB7dReEm6CKX6awbi0C5qM8x8k3JA/viewform?usp=pp_url&entry.425003608="+coord+"&entry.592264726&entry.1061622347&entry.189027455&entry.1488159968&entry.1596944760")
		},
		addMarkerMobile(event) { 
		// Listen for long click on map (smartphone/pc)  	
			var mousedUp = false;
			mousedUp = false;

		 	setTimeout(function(){
				if(mousedUp === false){
					var latitude1 = event.latLng.lat();
					var longitude1 = event.latLng.lng();
					var coord = latitude1 + ',' + longitude1;
					window.open("https://docs.google.com/forms/d/e/1FAIpQLSedk06eHFq-2HKslB034QB7dReEm6CKX6awbi0C5qM8x8k3JA/viewform?usp=pp_url&entry.425003608="+coord+"&entry.592264726&entry.1061622347&entry.189027455&entry.1488159968&entry.1596944760");      
				}
			}, 500)
   
			google.maps.event.addListener(map, 'mouseup', function(event){ 
				mousedUp = true;
			})
   
			// Avoid adding marker when draging 
			google.maps.event.addListener(map, 'dragstart', function(event){ 
				mousedUp = true;
			})
		}
	}
}
