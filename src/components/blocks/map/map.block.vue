<template lang="pug">

gmap-map(
	:center="initCoordinates",
	:zoom="13",
	:gestureHandling="'auto'",
	map-type-id="roadmap",
	@click="addMarkerMobile($event)"
	@rightclick="addMarker($event)"
	style="width:100%; height: 100%")

	gmap-marker(
		:key="marker.title",
		v-for="(marker, id) in markers",
		:position="marker.coordinates",
		@click="toggleInfoWindow(id)",
		:content="marker.memory")

		gmap-info-window(:position="marker.coordinates", :opened="openedInfoWindowId === id")
			.info-window
				h1.marker-title(v-once, v-html="marker.title")
				p.marker-date(v-once, v-html="marker.date")
				p.marker-image(v-once, v-html="marker.image")
				p.marker-memory(v-once, v-html="marker.memory")
				.contact
					p.marker-name(v-once, v-html="marker.name")
					p.marker-email(v-once, v-html="marker.email")
				
//- pre {{markers}}

</template>

<script src="./map.block.js"></script>
<style src="./map.block.sass" lang="sass"></style>