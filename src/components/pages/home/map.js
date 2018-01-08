export default {
	name: "HomePage",
    
    //https://developers.google.com/maps/documentation/javascript/interaction -> gestureHandling for smartphone usage
    initMap() {
        // Map options
        var options = {
            zoom:13,
            center:{lat: 41.1570823, lng: -8.6282744},
            gestureHandling: 'auto'
        }
    
        // New map
        var map = new google.maps.Map(document.getElementById('map'), options)
        
        // Listen for rightclick on map (pc)
        google.maps.event.addListener(map, 'rightclick', function(event){
            // Add marker to coordenates of mouse/touch
            addMarker({coords:event.latLng})
        })
  
        //Code from https://developers.google.com/maps/documentation/javascript for reference
  
        /*
        // Add marker
        var marker = new google.maps.Marker({
        position:{lat:42.4668,lng:-70.9495},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        })
        var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Lynn MA</h1>'
        })
        marker.addListener('click', function(){
        infoWindow.open(map, marker)
        })
        */

        // Array of markers -> Open excel to add all markers to array?
        var markers = [
        {
        coords:{lat:41.147162,lng:-8.615614},
        //iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content:'<h1><b>Fountain of the Lions</b></h1><img src="maxresdefault.jpg" style="width: 75%; height: 50%" alt="Lion"><br>Where I have seen numerous people swimming because of a bet.'
        },

        {
        coords:{lat:41.145716,lng:-8.610528},
        content:'<h1>São Bento</h1>'
        },

        {
        coords:{lat:41.1456881,lng:-8.614601}
        }

        ]

        // Loop through markers
        for(var i = 0;i < markers.length;i++){
            // Add marker
            addMarker(markers[i])
        }

        // Add Marker Function
        function addMarker(props){
            var marker = new google.maps.Marker({
                position:props.coords,
                map:map,
                //icon:props.iconImage
            })
        
            //Gets coodenates of markers that where inserted
            var latitude = marker.position.lat()
            var longitude = marker.position.lng()
            console.log( latitude + ', ' + longitude )
            
            // Check for customicon
            if(props.iconImage){
                // Set icon image
                marker.setIcon(props.iconImage)
            }
            
            // Check content
            if(props.content){
                var infoWindow = new google.maps.InfoWindow({
                    content:props.content
                })
                
                marker.addListener('click', function(){
                    infoWindow.open(map, marker)
                })
            }
            /*
            google.maps.event.addListener(marker, "click", function (event) {
                var latitude = event.latLng.lat()
                var longitude = event.latLng.lng()
                console.log( latitude + ', ' + longitude )
            })
            */
        }

        // Listen for long click on map (smartphone/pc)
        var mousedUp = false
        google.maps.event.addListener(map, 'mousedown', function(event){
            mousedUp = false
            setTimeout(function(){
                if(mousedUp === false){
                    console.log(event)
                    addMarker({coords:event.latLng});
                }
            }, 500)
        })

        google.maps.event.addListener(map, 'mouseup', function(event){
            mousedUp = true
        })

        // Avoid adding marker when draging
        google.maps.event.addListener(map, 'dragstart', function(event){
            mousedUp = true
        })
        
    },

    //script(async='', defer='', src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAIASA8zFhAnKzKNAPohhZd4NZzsG9wLUI&callback=initMap')
    script(async='', defer='', src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAIASA8zFhAnKzKNAPohhZd4NZzsG9wLUI&callback=initMap')

}
