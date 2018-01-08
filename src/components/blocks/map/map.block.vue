<template lang="pug">

//- map configuration
gmap-map(
	:center="{lat:41.15524, lng:-8.61281}",
	:zoom="13",
	:gestureHandling="auto",
	map-type-id="roadmap",
	@click="addMarkerMobile($event)"
	@rightclick="addMarker($event)"
	style="width:100%; height: 100%")

	gmap-marker(
		:key="marker.title",
		v-for="(marker, id) in markers",
		:position="marker.coords",
		@click="toggleInfoWindow(id)",
		:content="marker.content")

		gmap-info-window(:position="marker.coords", :opened="openedInfoWindowId === id")
			div(v-once, v-html="marker.content")

</template>

<script src="./map.block.js"></script>