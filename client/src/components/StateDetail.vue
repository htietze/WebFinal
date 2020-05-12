<template>
    <div class="state-detail p-2">

        <h2>The State of {{state.name}}</h2>

        <p v-if="state.visited">You have visited this state</p>
        <p v-else>You have not visited this state</p>

        <div id="map-container">
            <l-map
                ref="map"
                style="height: 100%; width: 100%"
                v-bind:zoom="zoom"
                v-bind:center="center">
                <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
        </div>

    </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
    name: 'StateDetail',
    components: {
        LMap, LTileLayer
    },
    data() {
        return {
            state: {
                name: ''
            },
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 2,
            center: [44, -103], // geo center for the map
            bounds: null
        }
    },
    mounted() {
        this.state.name = this.$route.params.state
        // this.$refs.map.mapObject.dragging.disable()
        this.fetchStateData()
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOne( this.state.name ).then( data => {
                this.state = data
                this.zoom = data.zoom
                this.center = [data.lat, data.lon]
                console.log(this.center)
                // flies to center of the states coords.
                this.$refs.map.mapObject.flyTo(this.center, this.zoom)
            }).catch( err => console.error(err))
        }
    }
}
</script>

<style scoped>
    #map-container {
        height: 30em;
    }
</style>