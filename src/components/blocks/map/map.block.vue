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
			h1(v-once, v-html="marker.name")
			p(v-once, v-html="marker.memory")

//- pre {{markers}}

</template>

<script src="./map.block.js"></script>