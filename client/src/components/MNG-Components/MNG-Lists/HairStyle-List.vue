<template>
  <div>
    <h1 class="mx-auto mt-5 jumbotron" style="width: 450px">hair style list page content</h1>
    <div id="map"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  data () {
    return {
    }
  },
  mounted() {
    // CONFIGURATION FOR THE MAPBOX
    mapboxgl.accessToken = 'pk.eyJ1IjoibW9oYW1lZDAwMSIsImEiOiJjamt1MGk5MHUwMXgwM3BxazN3cXU5M2RtIn0.JfdQvIy0cRbQOanBaL2nww';
    new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [26.8206, 30.8025],
        zoom: 7
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 500px;
  height: 350px;
}
</style>
